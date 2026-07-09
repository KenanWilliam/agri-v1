'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Linkedin } from 'lucide-react'

const linkStyle: React.CSSProperties = { color: '#777', fontSize: '13px', textDecoration: 'none', fontWeight: 300 }
const linkHoverClass = 'footer-nav-link'

export default function Footer() {
  const [year, setYear] = useState(2026)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubmitted(true); setEmail('') }
  }

  return (
    <div className="relative w-full">
      <style>{`
        .footer-nav-link { color: #777; font-size: 13px; text-decoration: none; font-weight: 300; transition: color 0.15s ease; }
        .footer-nav-link:hover { color: #ffffff; }
      `}</style>

      {/* ─── Desktop ─── */}
      <div className="hidden md:block">

        {/* Hero image above footer */}
        <div className="relative w-full overflow-hidden" style={{ height: '70vh' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/pexels-flambo-388007-1112080.jpg"
            alt="Agricultural landscape"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px', background: 'linear-gradient(to top, #0d0d0d, transparent)' }} />
        </div>

        {/* Footer body */}
        <footer style={{ background: '#0d0d0d', color: '#e8e8e8', position: 'relative' }}>

          {/* Main content grid — matches reference: left | col1 | col2 | col3 | right */}
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '56px 64px 0 64px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr 1fr 1fr 260px', gap: '0 48px' }}>

              {/* ── LEFT: Newsletter ── */}
              <div>
                <p style={{ color: '#ffffff', fontWeight: 700, fontSize: '15px', marginBottom: '10px', fontFamily: 'inherit' }}>
                  The Field Brief
                </p>
                <p style={{ color: '#888', fontSize: '13px', lineHeight: '1.6', marginBottom: '20px', fontWeight: 300 }}>
                  Sign up for our newsletter to get actionable insights on African seed systems and value chains, right to your inbox.
                </p>

                {/* Email row */}
                {submitted ? (
                  <p style={{ color: '#3ab44a', fontSize: '13px', marginBottom: '12px' }}>You&apos;re subscribed — thank you.</p>
                ) : (
                  <form onSubmit={handleSubmit} style={{ marginBottom: '12px' }} suppressHydrationWarning>
                    <div suppressHydrationWarning style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      border: '1px solid #333', borderRadius: '8px',
                      padding: '10px 14px', background: 'transparent',
                    }}>
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        suppressHydrationWarning
                        style={{
                          background: 'transparent', border: 'none', outline: 'none',
                          color: '#e8e8e8', fontSize: '13px', flex: 1,
                          fontFamily: 'inherit',
                        }}
                      />
                      <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: '#888' }}>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </form>
                )}


                {/* Social */}
                <div style={{ marginTop: '24px', display: 'flex' }}>
                  <Link href="https://www.linkedin.com/company/agri-experience-ltd/" target="_blank" rel="noopener noreferrer"
                    style={{
                      width: '48px', height: '48px', borderRadius: '12px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: '#1a1a1a', textDecoration: 'none',
                      transition: 'background 0.2s',
                    }}
                    className="hover:bg-[#252525]"
                  >
                    {/* Filled "in" lettermark only */}
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="white">
                      <path d="M4.94 2.07A2.07 2.07 0 112.87 4.14 2.07 2.07 0 014.94 2.07zM2.07 6.75h3.56v11.45H2.07V6.75zm5.3 0h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04s-2.14 1.45-2.14 2.94v5.67H7.37V6.75z"/>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* ── COL 1: Our Work ── */}
              <div>
                <p style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px', marginBottom: '16px' }}>Our Work</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                  {['Seed Systems', 'Value Chains', 'Digital Tools', 'Field Projects', 'Case Studies'].map(item => (
                    <li key={item}>
                      <Link href="/our-work" className={linkHoverClass}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── COL 2: Company ── */}
              <div>
                <p style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px', marginBottom: '16px' }}>Company</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                  {[
                    { label: 'About Us', href: '/about' },
                    { label: 'Our Impact', href: '/our-impact' },
                    { label: 'Our Results', href: '/our-results' },
                    { label: 'Our Team', href: '/our-team' },
                    { label: 'Careers', href: '/contact' },
                    { label: 'Contact', href: '/contact' },
                  ].map(link => (
                    <li key={link.label}>
                      <Link href={link.href} className={linkHoverClass}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── COL 3: Resources ── */}
              <div>
                <p style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px', marginBottom: '16px' }}>Resources</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                  {[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Library', href: '/resources' },
                    { label: 'Newsletter', href: '/newsletter' },
                    { label: 'Privacy Policy', href: '/privacy' },
                    { label: 'Terms of Service', href: '/terms' },
                  ].map(link => (
                    <li key={link.label}>
                      <Link href={link.href} className={linkHoverClass}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── RIGHT: Contact + Social ── */}
              <div>
                <p style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px', marginBottom: '16px' }}>Work With Us</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '24px' }}>
                  <li>
                    <Link href="/contact" className={linkHoverClass}>Request a Proposal</Link>
                  </li>
                  <li>
                    <Link href="/our-work" className={linkHoverClass}>View Our Projects</Link>
                  </li>
                </ul>

                <p style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px', marginBottom: '16px' }}>Get in Touch</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '24px' }}>
                  <li>
                    <a href="mailto:info@agri-experience.com" className={linkHoverClass}>info@agri-experience.com</a>
                  </li>
                  <li>
                    <a href="tel:+254202626888" className={linkHoverClass}>+254 (20) 2626888</a>
                  </li>
                  <li>
                    <a href="https://maps.google.com/?q=Watermark+Business+Park+Spring+Court,+Karen,+Nairobi,+Kenya" target="_blank" rel="noopener noreferrer" className={linkHoverClass}>
                      Watermark Business Park, Karen<br/>P.O. Box 1720 - 00606, Nairobi
                    </a>
                  </li>
                </ul>

              </div>

            </div>
          </div>

          {/* Logo pinned to bottom-left — compact */}
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px 64px 32px 64px' }}>
            <div style={{ borderTop: '1px solid #1f1f1f', paddingTop: '32px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <Link href="/" aria-label="Agri Experience" style={{ display: 'inline-flex' }}>
                <div 
                  className="h-[72px] w-[150px] bg-[#888] transition-colors hover:bg-white"
                  style={{
                    WebkitMaskImage: 'url(/Newsletters.svg)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'left center',
                    maskImage: 'url(/Newsletters.svg)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'left center',
                  }}
                />
              </Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <p style={{ color: '#888', fontSize: '12px', letterSpacing: '0.05em', textTransform: 'uppercase', margin: 0 }}>
                  © {year} Agri Experience Ltd.
                </p>
                <a href="https://www.linkedin.com/in/kenanwilliam/" target="_blank" rel="noopener noreferrer"
                  style={{ color: '#777', fontSize: '11px', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'color 0.15s' }}
                  className="hover:text-[#aaa]">
                  Designed & Developed by Kenan William
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* ─── Mobile ─── */}
      <footer className="md:hidden" style={{ background: '#0d0d0d', color: '#e8e8e8', padding: '48px 20px 32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

          {/* Newsletter */}
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '15px', marginBottom: '8px' }}>The Field Brief</p>
            <p style={{ color: '#888', fontSize: '13px', lineHeight: '1.6', marginBottom: '16px' }}>
              Actionable insights on African seed systems, right to your inbox.
            </p>
            {submitted ? (
              <p style={{ color: '#3ab44a', fontSize: '13px' }}>You&apos;re subscribed — thank you.</p>
            ) : (
              <form onSubmit={handleSubmit} suppressHydrationWarning>
                <div suppressHydrationWarning style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  border: '1px solid #333', borderRadius: '8px', padding: '10px 14px',
                }}>
                  <input
                    type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email" required
                    style={{ background: 'transparent', border: 'none', outline: 'none', color: '#e8e8e8', fontSize: '13px', flex: 1, fontFamily: 'inherit' }}
                  />
                  <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888', display: 'flex' }}>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </form>
            )}
            
            {/* Social */}
            <div style={{ marginTop: '24px', display: 'flex' }}>
              <Link href="https://www.linkedin.com/company/agri-experience-ltd/" target="_blank" rel="noopener noreferrer"
                style={{ width: '38px', height: '38px', border: '1px solid #2a2a2a', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#888', background: '#161616', textDecoration: 'none', transition: 'border-color 0.15s, color 0.15s' }}
                className="hover:border-[#3ab44a]/50 hover:text-[#3ab44a]">
                <Linkedin size={15} />
              </Link>
            </div>
          </div>

          {/* Nav */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {[
              { title: 'Company', links: [{ label: 'About Us', href: '/about' }, { label: 'Our Impact', href: '/our-impact' }, { label: 'Our Results', href: '/our-results' }, { label: 'Careers', href: '/contact' }, { label: 'Contact', href: '/contact' }] },
              { title: 'Resources', links: [{ label: 'Insights', href: '/insights' }, { label: 'Library', href: '/resources' }, { label: 'Newsletter', href: '/newsletter' }, { label: 'Privacy', href: '/privacy' }] },
            ].map(col => (
              <div key={col.title}>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: '13px', marginBottom: '12px' }}>{col.title}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {col.links.map(l => (
                    <li key={l.label}>
                      <Link href={l.href} className={linkHoverClass}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>



          {/* Logo + copyright */}
          <div style={{ borderTop: '1px solid #1f1f1f', paddingTop: '24px' }}>
            <Link href="/" aria-label="Agri Experience" style={{ display: 'inline-flex', marginBottom: '12px' }}>
              <div 
                className="h-[56px] w-[116px] bg-[#888] transition-colors hover:bg-white"
                style={{
                  WebkitMaskImage: 'url(/Newsletters.svg)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'left center',
                  maskImage: 'url(/Newsletters.svg)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'left center',
                }}
              />
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p style={{ color: '#888', fontSize: '11px', letterSpacing: '0.05em', textTransform: 'uppercase', margin: 0 }}>
                © {year} Agri Experience Ltd.
              </p>
              <a href="https://www.linkedin.com/in/kenanwilliam/" target="_blank" rel="noopener noreferrer"
                style={{ color: '#777', fontSize: '10px', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'color 0.15s' }}
                className="hover:text-[#aaa]">
                Designed & Developed by Kenan William
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}