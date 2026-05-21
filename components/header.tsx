'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Our Results', href: '/our-results' },
  { label: 'Our Impact', href: '/our-impact' },
  { label: 'Resources', href: '/resources' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-500">
      <header 
        className={`w-full max-w-6xl rounded-full transition-all duration-500 ${
          scrolled 
            ? 'backdrop-blur-[48px] bg-white/5 border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.1)] saturate-[1.8] py-2 px-6' 
            : 'bg-transparent py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Agri Experience" className="flex items-center group">
            <img
              src="/Newsletters.svg"
              alt="Agri Experience Logo"
              className="h-14 w-auto block transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/')
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-[13px] font-bold uppercase tracking-wider transition-all relative group ${isActive ? 'text-deep-forest' : 'text-charcoal/80 hover:text-deep-forest'}`}
                >
                  {item.label}
                  <span className={`absolute bottom-1 left-3 right-3 h-0.5 bg-deep-forest transition-transform origin-center ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              )
            })}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/newsletter"
              className="hidden md:inline-flex px-6 py-2.5 bg-deep-forest text-white rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-deep-forest/20 hover:-translate-y-0.5 transition-all"
            >
              Get Updates
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
            className="absolute top-20 left-4 right-4 backdrop-blur-[48px] bg-white/5 saturate-[1.8] rounded-3xl p-6 lg:hidden shadow-[0_16px_48px_rgba(0,0,0,0.1)] border border-white/10"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-6 py-4 text-lg font-bold rounded-2xl transition-all ${isActive ? 'text-white bg-deep-forest' : 'text-charcoal hover:bg-black/5'}`}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <hr className="my-2 border-black/10" />
              <Link
                href="/newsletter"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-deep-forest text-white rounded-2xl font-bold text-center shadow-lg"
              >
                Newsletter Signup
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
