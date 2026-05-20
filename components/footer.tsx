'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from 'lucide-react'

const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Work', href: '/our-work' },
      { label: 'Our Results', href: '/our-results' },
      { label: 'Our Impact', href: '/our-impact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', href: '/resources' },
      { label: 'Insights & Blog', href: '/insights' },
      { label: 'Publications', href: '/resources' },
      { label: 'Newsletters', href: '/newsletter' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Subscribe', href: '/newsletter' },
      { label: 'Support', href: '/contact' },
      { label: 'Partnerships', href: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="w-full bg-dark-green text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-green to-primary-blue rounded-lg flex items-center justify-center text-white text-lg">
                🌾
              </div>
              <span className="font-serif font-bold text-xl">Agri Experience</span>
            </div>
            <p className="text-cream text-sm leading-relaxed">
              Transforming seed systems and strengthening agricultural value chains across Africa.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 hover:bg-primary-green rounded-lg transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-primary-green rounded-lg transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-primary-green rounded-lg transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pb-12 border-b border-primary-green/20"
        >
          <div className="flex gap-3">
            <MapPin size={20} className="text-primary-green flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-1">Visit Us</p>
              <p className="text-cream text-sm">Multiple offices across East, West & Southern Africa</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Mail size={20} className="text-primary-green flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-1">Email</p>
              <p className="text-cream text-sm">info@agri-experience.com</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Phone size={20} className="text-primary-green flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-1">Call</p>
              <p className="text-cream text-sm">+254 (0) 700 000 000</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-cream text-sm">
          <p>&copy; 2024 Agri Experience. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
