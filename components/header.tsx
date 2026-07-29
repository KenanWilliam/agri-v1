'use client'

import { useState, useEffect, useRef, useTransition } from 'react'
import { Link, usePathname, useRouter } from '@/i18n/routing'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'our_work', href: '/our-work' },
  { key: 'our_team', href: '/our-team' },
  { key: 'our_impact', href: '/our-impact' },
  { key: 'resources', href: '/resources' },
]
import LiquidGlass from './liquid-glass'
import {useTranslations} from 'next-intl'
import { RollingText } from '@/components/ui/rolling-text'

export default function Header() {
  const t = useTranslations('Header')
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const [clickedPath, setClickedPath] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const params = useParams()
  const currentLocale = (params?.locale as string) || 'en'

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
    <>
      <LiquidGlass 
        className="sticky top-0 z-50 flex justify-center items-center h-[var(--header-height)] w-full"
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
                  {t(item.key as any)}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <div className={`hidden md:flex items-center gap-1 bg-black/5 rounded-full p-1 border border-black/5 transition-opacity ${isPending ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
              {[
                { code: 'en', label: 'EN' },
                { code: 'fr', label: 'FR' }
              ].map(loc => {
                const isActive = loc.code === currentLocale;
                return (
                  <button
                    key={loc.code}
                    onClick={() => {
                      if (!isActive) {
                        startTransition(() => {
                          router.replace(pathname, { locale: loc.code as any });
                        });
                      }
                    }}
                    className={`text-xs font-bold px-2.5 py-1.5 rounded-full transition-all ${isActive ? 'bg-white text-deep-forest shadow-sm' : 'text-charcoal/60 hover:text-charcoal hover:bg-black/5'}`}
                  >
                    {loc.label}
                  </button>
                )
              })}
            </div>

            <Link
              href="/contact"
              onClick={() => { setClickedPath('/contact'); }}
              className="group relative overflow-hidden hidden md:inline-flex px-5 py-2.5 bg-deep-forest text-white rounded-full text-[14px] font-medium hover:bg-deep-forest/90 transition-colors duration-200 ease-in-out"
            >
              <RollingText>
                {t('contact')}
              </RollingText>
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

      </LiquidGlass>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-[80px] left-4 right-4 bg-white rounded-[2rem] p-6 lg:hidden shadow-2xl border border-black/5 z-[60]"
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
                    {t(item.key as any)}
                  </Link>
                )
              })}
              <hr className="my-2 border-black/10" />
              
              <div className={`flex justify-center gap-2 py-2 transition-opacity ${isPending ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                {[
                  { code: 'en', label: 'English' },
                  { code: 'fr', label: 'Français' }
                ].map(loc => {
                  const isActive = loc.code === currentLocale;
                  return (
                    <button
                      key={loc.code}
                      onClick={() => {
                        if (!isActive) {
                          startTransition(() => {
                            router.replace(pathname, { locale: loc.code as any });
                          });
                          setIsOpen(false);
                        }
                      }}
                      className={`text-sm font-bold px-4 py-2 rounded-full transition-all ${isActive ? 'bg-deep-forest text-white shadow-sm' : 'text-charcoal hover:bg-black/5'}`}
                    >
                      {loc.label}
                    </button>
                  )
                })}
              </div>

              <Link
                href="/contact"
                onClick={() => { setIsOpen(false); }}
                className="group relative overflow-hidden w-full py-4 bg-deep-forest text-white rounded-full font-medium text-center shadow-md flex items-center justify-center"
              >
                <RollingText>
                  {t('contact')}
                </RollingText>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
