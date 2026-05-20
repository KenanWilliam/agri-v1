'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '/', mobile: true },
  { label: 'About', href: '/about', mobile: true },
  { label: 'Our Work', href: '/our-work', mobile: true },
  { label: 'Our Results', href: '/our-results', mobile: true },
  { label: 'Our Impact', href: '/our-impact', mobile: true },
  { label: 'Resources', href: '/resources', mobile: true },
  { label: 'Insights', href: '/insights', mobile: true },
  { label: 'Contact', href: '/contact', mobile: true },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-serif font-bold text-2xl group">
          <svg 
            viewBox="0 0 100 100" 
            className="w-10 h-10 fill-primary transition-transform duration-300 group-hover:rotate-3"
          >
            <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.1" />
            <path d="M50 20 L70 75 L30 75 Z" fill="currentColor" />
          </svg>
          <span className="text-dark-green hidden sm:inline font-semibold">Agri Experience</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-dark-green hover:text-primary transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Newsletter CTA - Desktop */}
          <Link
            href="/newsletter"
            className="hidden md:inline-flex px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm"
          >
            Newsletter
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200 text-dark-green"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-primary/10 bg-white"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-dark-green hover:bg-mint rounded-lg transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/newsletter"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center hover:bg-primary/90"
              >
                Newsletter
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}