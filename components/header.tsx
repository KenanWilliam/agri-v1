'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Our Impact', href: '/our-impact' },
  { label: 'Resources', href: '/resources' },
]
import LiquidGlass from './liquid-glass'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const [clickedPath, setClickedPath] = useState<string | null>(null)
  const pathname = usePathname()

  const [dimensions, setDimensions] = useState({ width: 0, left: 0, height: 0, top: 0 })
  const buttonRefs = useRef<Map<string, HTMLAnchorElement>>(new Map())
  const containerRef = useRef<HTMLElement>(null)

  // Clear the optimistic click state once Next.js has successfully navigated to the new path
  useEffect(() => {
    setClickedPath(null)
  }, [pathname])

  const handleMouseLeave = () => {
    setHoveredPath(null)
  }

  const activePath = clickedPath || pathname

  // Update dimensions whenever active path changes or on mount
  useEffect(() => {
    const updateDimensions = () => {
      const activeItem = navItems.find((item) => activePath === item.href || (activePath.startsWith(item.href) && item.href !== '/'))
      if (!activeItem) return

      const selectedButton = buttonRefs.current.get(activeItem.href)
      const container = containerRef.current

      if (selectedButton && container) {
        setDimensions({
          width: selectedButton.offsetWidth,
          height: selectedButton.offsetHeight,
          left: selectedButton.offsetLeft,
          top: selectedButton.offsetTop,
        })
      }
    }

    // Initial update
    requestAnimationFrame(() => {
      updateDimensions()
    })

    // Update on resize
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [activePath])

  return (
    <LiquidGlass 
      className="sticky top-0 z-50 flex justify-center items-center h-[72px] lg:h-[88px] w-full"
      blurAmount={0.25} 
      elasticity={0}
      displacementScale={100}
      saturation={120}
      cornerRadius={0}
      padding="0"
      overLight={false}
    >
      <header className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => { setClickedPath('/'); }} aria-label="Agri Experience" className="flex items-center group">
            <Image
              src="/Newsletters.svg"
              alt="Agri Experience Logo"
              width={500}
              height={240}
              priority
              style={{ width: 'auto' }}
              className="h-[56px] lg:h-[72px] w-auto block transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation - AngelList Style Pill */}
          <nav 
            className="hidden lg:flex items-center bg-black/5 rounded-full px-1.5 py-1.5 border border-black/5 relative"
            onMouseLeave={handleMouseLeave}
            ref={containerRef as any}
          >
            {/* Active Pill Highlight */}
            {activePath && dimensions.width > 0 && (
              <motion.div
                layoutId="active-nav-pill"
                animate={{
                  width: dimensions.width,
                  height: dimensions.height,
                  x: dimensions.left,
                  y: dimensions.top,
                  scaleX: [1, 1.15, 1],
                  opacity: 1,
                }}
                className="absolute top-0 left-0 z-0 rounded-full"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  scaleX: { duration: 0.4, ease: "easeInOut" }
                }}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                }}
              />
            )}

            {navItems.map((item) => {
              const isActive = activePath === item.href || (activePath.startsWith(item.href) && item.href !== '/')
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => { setClickedPath(item.href); }}
                  onMouseEnter={() => setHoveredPath(item.href)}
                  ref={(el) => {
                    if (el) buttonRefs.current.set(item.href, el);
                    else buttonRefs.current.delete(item.href);
                  }}
                  className={`relative px-4 py-2 text-[14px] font-medium rounded-full transition-colors duration-150 ${
                    isActive
                      ? 'text-deep-forest z-20'
                      : 'text-charcoal/80 hover:text-deep-forest z-10'
                  }`}
                >
                  {/* Hover pill — always rendered, toggled via opacity to avoid remount flash */}
                  <motion.div
                    className="absolute inset-0 bg-black/5 rounded-full -z-20 pointer-events-none"
                    animate={{ opacity: hoveredPath === item.href && !isActive ? 1 : 0 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    initial={false}
                  />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              onClick={() => { setClickedPath('/contact'); }}
              className="hidden md:inline-flex px-5 py-2.5 bg-deep-forest text-white rounded-full text-[14px] font-medium hover:bg-deep-forest/90 transition-colors duration-200 ease-in-out"
            >
              Contact Us
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-deep-forest hover:bg-black/5 rounded-full transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 bg-white rounded p-6 lg:hidden shadow-xl border border-black/5"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/')
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => { setIsOpen(false); }}
                    className={`px-6 py-4 text-lg font-medium rounded-full transition-colors duration-200 ${
                      isActive 
                        ? 'text-deep-forest bg-black/5' 
                        : 'text-charcoal hover:bg-black/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <hr className="my-2 border-black/10" />
              <Link
                href="/contact"
                onClick={() => { setIsOpen(false); }}
                className="w-full py-4 bg-deep-forest text-white rounded-full font-medium text-center shadow-md"
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </LiquidGlass>
  )
}
