'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { publicDownloads } from '@/lib/public-downloads'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ResourcesPage() {
  const downloads = publicDownloads

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="relative w-full pt-32 lg:pt-48 pb-16 overflow-hidden border-b border-mist">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--mist)_0%,transparent_50%)] opacity-50"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-7xl font-serif font-bold text-deep-forest tracking-tight"
            >
              Resources
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg lg:text-xl text-charcoal/80 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Access public-domain reports and case studies from Agri Experience assignments.
            </motion.p>
          </div>
        </section>

        {/* Downloads */}
        <section className="w-full py-16 lg:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest mb-6">
                Downloads
              </h2>
              <p className="text-lg text-charcoal/80 font-light max-w-3xl mx-auto leading-relaxed">
                These resources are available to the public. Additional client work is not published per the terms of engagement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {downloads.map((download, idx) => (
                <motion.div
                  key={`${download.title}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="p-8 lg:p-10 rounded-[32px] bg-mist border border-mist hover:border-primary-green/20 hover:bg-white hover:shadow-xl transition-colors transition-shadow duration-300 ease-in-out"
                >
                  <h3 className="text-xl font-serif font-bold text-deep-forest mb-4">{download.title}</h3>
                  <p className="text-sm font-bold text-primary-green tracking-wide mb-2 uppercase">{download.client}</p>
                  <p className="text-sm text-charcoal/70 font-light leading-relaxed mb-6">{download.citation}</p>
                  <div className="flex flex-wrap gap-4 pt-6 border-t border-primary-green/10 text-sm font-bold">
                    <a
                      href={download.link}
                      className="text-deep-forest hover:text-primary-green transition-colors inline-flex items-center gap-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download PDF <ArrowRight size={14} />
                    </a>
                    {download.clientLink && (
                      <a
                        href={download.clientLink}
                        className="text-deep-forest hover:text-primary-green transition-colors inline-flex items-center gap-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Client Link <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-24 lg:py-32 bg-mist border-t border-mist">
          <div className="max-w-2xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest">
              Looking for more?
            </h2>
            <p className="text-xl text-charcoal/80 font-light leading-relaxed">
              Contact our team to discuss additional reports, services, or collaboration opportunities.
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-deep-forest text-white rounded-full font-bold transition-colors transition-shadow duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:shadow-deep-forest/20"
              >
                Contact Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
