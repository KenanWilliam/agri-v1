'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/our-work' },
  { label: 'Impact', href: '/our-impact' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-500">
      <header 
        className={`w-full max-w-5xl rounded-full border transition-all duration-500 ${
          scrolled 
            ? 'glass-panel border-primary/10 py-2 px-6 shadow-2xl' 
            : 'bg-transparent border-transparent py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 bg-primary rounded-full flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
              <img src="/newsletters.svg" alt="" className="w-6 h-6 invert brightness-0" />
            </div>
            <span className="font-serif font-bold text-xl text-primary tracking-tight hidden sm:block">
              Agri Experience
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-all relative group"
              >
                {item.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/newsletter"
              className="hidden md:inline-flex px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all"
            >
              Get Updates
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-primary hover:bg-primary/5 rounded-full transition-colors"
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
            className="absolute top-20 left-4 right-4 glass-panel rounded-3xl p-6 lg:hidden shadow-2xl border-primary/10"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 text-lg font-serif font-semibold text-primary hover:bg-primary/5 rounded-2xl transition-all"
                >
                  {item.label}
                </Link>
              ))}
              <hr className="my-2 border-primary/10" />
              <Link
                href="/newsletter"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-center shadow-lg"
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