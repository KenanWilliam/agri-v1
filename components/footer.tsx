'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Work', href: '/our-work' },
      { label: 'Results', href: '/our-results' },
      { label: 'Impact', href: '/our-impact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Insights', href: '/insights' },
      { label: 'Library', href: '/resources' },
      { label: 'Newsletter', href: '/newsletter' },
      { label: 'Case Studies', href: '/our-results' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-deep-forest text-primary-ivory pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-gold opacity-[0.03] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-8">
          <Link href="/" aria-label="Agri Experience" className="flex items-center">
            <Image
              src="/Newsletters.svg"
              alt="Agri Experience"
              width={500}
              height={240}
              className="h-12 w-auto block"
            />
          </Link>
            <p className="text-primary-ivory/60 leading-relaxed font-light text-lg">
              Transforming seed systems and agricultural value chains across Africa through expert consultancy and sustainable community development.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded bg-primary-ivory/5 border border-primary-ivory/10 flex items-center justify-center hover:bg-primary-green hover:text-white transition-colors duration-300 ease-in-out"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, i) => (
            <div key={i} className="md:col-span-2 space-y-6">
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      href={link.href}
                      className="text-primary-ivory/60 hover:text-primary-green transition-colors font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Our Presence</h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-green/40 transition-colors">
                  <MapPin className="text-primary-green" size={18} />
                </div>
                <div className="text-primary-ivory leading-relaxed font-medium">
                  Watermark Business Park - Spring Court Ground Floor,<br />
                  Karen, Nairobi, Kenya<br />
                  P.O. Box 1720 - 00606
                </div>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-green/40 transition-colors">
                  <Mail className="text-primary-green" size={18} />
                </div>
                <div className="text-primary-ivory font-medium">
                  info@agri-experience.com
                </div>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-green/40 transition-colors">
                  <Phone className="text-primary-green" size={18} />
                </div>
                <div className="text-primary-ivory font-medium">
                  +254 (20) 2626888<br />
                  +254 (719) 554 154
                </div>
              </div>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary-green text-white rounded text-sm font-bold hover:scale-105 transition-colors transition-shadow duration-300 ease-in-out group shadow-lg shadow-primary-green/20"
              >
                Work With Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-primary-ivory/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-primary-ivory/40 text-sm font-light">
            © {new Date().getFullYear()} Agri Experience. All rights reserved.
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-primary-ivory/40">
            <Link href="/privacy" className="hover:text-primary-green transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-green transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
