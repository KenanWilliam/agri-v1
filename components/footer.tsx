'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import FooterParallax from './footer-parallax'

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
  const [year, setYear] = useState(2026)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <div className="relative w-full">
      {/* Desktop: Full parallax sandwich experience */}
      <div className="w-full hidden md:block">
        <FooterParallax>
          {/* Changed width to fit content and added top rounding to complete the custom shape */}
          <footer className="w-fit mx-auto bg-black/90 backdrop-blur-sm text-primary-ivory pt-24 pb-36 px-8 lg:px-16 rounded-t-3xl relative">
            <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-16">
              
              {/* Left Side: Brand, Tagline, Badges, Copyright */}
              <div className="w-full lg:w-[350px] flex flex-col space-y-8">
                <Link href="/" aria-label="Agri Experience Logo" className="flex items-center group">
                  <Image
                    src="/Newsletters.svg"
                    alt="Agri Experience Logo"
                    width={500}
                    height={240}
                    style={{ width: 'auto' }}
                    className="h-[56px] lg:h-[72px] w-auto block transition-transform group-hover:scale-105"
                  />
                </Link>
                <p className="text-primary-ivory/60 leading-relaxed font-light text-sm max-w-sm">
                  Transforming seed systems and agricultural value chains across Africa through expert consultancy and sustainable community development.
                </p>
                
                {/* Circular Social/Trust Badges */}
                <div className="flex gap-4 pt-4">
                  <Link 
                    href="https://www.linkedin.com/company/agri-experience-ltd/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-primary-ivory/20 flex items-center justify-center hover:bg-primary-ivory/10 hover:border-primary-ivory/40 transition duration-200 text-primary-ivory/60 hover:text-white"
                  >
                    <Linkedin size={16} />
                  </Link>
                  <div className="w-12 h-12 rounded-full border border-primary-ivory/20 flex items-center justify-center text-primary-ivory/60 hover:text-white transition duration-200 cursor-help" title="Data Privacy">
                    <span className="text-[10px] font-bold">DP</span>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-primary-ivory/20 flex items-center justify-center text-primary-ivory/60 hover:text-white transition duration-200 cursor-help" title="Certified Consultancy">
                    <span className="text-[10px] font-bold">CC</span>
                  </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 text-primary-ivory/40 text-[11px] font-medium space-y-2 uppercase tracking-wider">
                  <div>© {year} Agri Experience.</div>
                  <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
                    <a href="https://www.linkedin.com/in/kenanwilliam/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green">
                      Designed by Kenan William
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side: 3 Neat Columns */}
              <div className="flex flex-col sm:flex-row justify-between gap-12 sm:gap-16 lg:pt-4">
                
                {/* Column 1: Company */}
                <div className="space-y-6 min-w-[120px]">
                  <h4 className="text-primary-ivory/40 font-bold text-[11px] uppercase tracking-[0.15em]">Company</h4>
                  <ul className="space-y-4">
                    {footerLinks[0].links.map((link, j) => (
                      <li key={j}>
                        <Link href={link.href} className="text-primary-ivory/80 text-sm hover:text-white transition-colors font-medium">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href="/contact" className="text-primary-ivory/80 text-sm hover:text-white transition-colors font-medium">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 2: Resources */}
                <div className="space-y-6 min-w-[120px]">
                  <h4 className="text-primary-ivory/40 font-bold text-[11px] uppercase tracking-[0.15em]">Resources</h4>
                  <ul className="space-y-4">
                    {footerLinks[1].links.map((link, j) => (
                      <li key={j}>
                        <Link href={link.href} className="text-primary-ivory/80 text-sm hover:text-white transition-colors font-medium">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href="/privacy" className="text-primary-ivory/80 text-sm hover:text-white transition-colors font-medium">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="text-primary-ivory/80 text-sm hover:text-white transition-colors font-medium">
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3: Connect */}
                <div className="space-y-6 min-w-[120px]">
                  <h4 className="text-primary-ivory/40 font-bold text-[11px] uppercase tracking-[0.15em]">Connect</h4>
                  <ul className="space-y-4">
                    <li>
                      <Link href="https://www.linkedin.com/company/agri-experience-ltd/" target="_blank" className="text-primary-ivory/80 text-sm hover:text-white transition-colors font-medium">
                        LinkedIn
                      </Link>
                    </li>
                    <li>
                      <a href="mailto:info@agri-experience.com" className="text-primary-ivory/80 text-sm hover:text-white transition-colors font-medium">
                        info@agri-experience.com
                      </a>
                    </li>
                    <li>
                      <span className="text-primary-ivory/80 text-sm block">
                        +254 (20) 2626888
                      </span>
                    </li>
                    <li>
                      <Link href="/contact" className="text-primary-ivory/80 text-sm hover:text-white transition-colors font-medium">
                        Our Locations
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </footer>
        </FooterParallax>
      </div>

      {/* Mobile: Simple footer without parallax */}
      <footer className="md:hidden bg-black text-primary-ivory pt-16 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col space-y-8">
              <Link href="/" aria-label="Agri Experience Logo" className="flex items-center group">
                <Image
                  src="/Newsletters.svg"
                  alt="Agri Experience Logo"
                  width={500}
                  height={240}
                  style={{ width: 'auto' }}
                  className="h-[48px] w-auto block"
                />
              </Link>
              <p className="text-primary-ivory/60 leading-relaxed font-light text-sm max-w-sm">
                Transforming seed systems and agricultural value chains across Africa through expert consultancy and sustainable community development.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="https://www.linkedin.com/company/agri-experience-ltd/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-primary-ivory/20 flex items-center justify-center text-primary-ivory/60"
                >
                  <Linkedin size={16} />
                </Link>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-12 sm:gap-8">
              <div className="space-y-4">
                <h4 className="text-primary-ivory/40 font-bold text-[11px] uppercase tracking-[0.15em]">Company</h4>
                <ul className="space-y-3">
                  {footerLinks[0].links.map((link, j) => (
                    <li key={j}><Link href={link.href} className="text-primary-ivory/80 text-sm">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-primary-ivory/40 font-bold text-[11px] uppercase tracking-[0.15em]">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks[1].links.map((link, j) => (
                    <li key={j}><Link href={link.href} className="text-primary-ivory/80 text-sm">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-primary-ivory/40 text-[11px] font-medium space-y-2 uppercase tracking-wider border-t border-primary-ivory/10 pt-8">
              <div>© {year} Agri Experience.</div>
              <div className="opacity-60">
                <a href="https://www.linkedin.com/in/kenanwilliam/" target="_blank" rel="noopener noreferrer">Designed by Kenan William</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}