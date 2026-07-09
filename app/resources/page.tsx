'use client'

import { useState } from 'react'
import { publicDownloads } from '@/lib/public-downloads'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import PdfPreview with SSR disabled to fix "DOMMatrix is not defined" error
const PdfPreview = dynamic(() => import('@/components/pdf-preview'), { 
  ssr: false,
  loading: () => (
    <div className="relative w-full rounded-xl overflow-hidden border border-primary-green/10 bg-mist flex flex-col items-center justify-center gap-3 animate-pulse aspect-[4/3] lg:aspect-[1/1.2]">
      <FileText size={32} className="text-primary-green/30" />
      <div className="h-2 w-2/3 rounded-full bg-primary-green/10" />
      <div className="h-2 w-1/2 rounded-full bg-primary-green/10" />
    </div>
  )
})

const categories = ['All', 'Reports & Analysis', 'Case Studies', 'Scoping Studies', 'Toolkits & Guides']

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredDownloads = publicDownloads.filter(download => 
    activeCategory === 'All' ? true : download.category === activeCategory
  )

  return (
    <>
      <main className="bg-white min-h-screen">
        {/* Downloads */}
        <section className="w-full pt-24 lg:pt-28 pb-10 bg-white relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest mb-6">
                Downloads
              </h2>
              <p className="text-lg text-charcoal/80 font-light max-w-3xl mx-auto leading-relaxed mb-12">
                These resources are available to the public. Additional client work is not published per the terms of engagement.
              </p>

              {/* Filter Pills */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ease-in-out ${
                      activeCategory === category
                        ? 'bg-primary-green text-white shadow-md'
                        : 'bg-mist text-deep-forest hover:bg-primary-green/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDownloads.map((download, idx) => (
                <motion.div
                  key={download.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (idx % 10) * 0.05 }}
                  className="flex flex-col group border border-black/[0.04] rounded-2xl overflow-hidden hover:border-black/[0.08] transition-colors"
                >
                  {/* PDF first-page preview - sits flush against the border */}
                  <PdfPreview pdfUrl={download.link} />

                  <div className="p-4 lg:p-5 flex flex-col flex-grow">
                    <p className="text-sm font-bold text-primary-green tracking-wide mb-2 uppercase">{download.client}</p>
                    <p className="text-sm text-charcoal/70 font-light leading-relaxed mb-4 flex-grow">{download.citation}</p>
                    <div className="flex flex-wrap gap-4 pt-3 border-t border-black/5 text-sm font-bold mt-auto">
                      <a
                        href={download.link}
                        className="text-deep-forest hover:text-primary-green transition-colors inline-flex items-center gap-1"
                        download
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 lg:py-24 xl:py-32 bg-mist border-t border-mist">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest">
              Looking for more?
            </h2>
            <p className="text-xl text-charcoal/80 font-light leading-relaxed">
              Contact our team to discuss additional reports, services, or collaboration opportunities.
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-deep-forest text-white rounded-full font-bold transition duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-deep-forest/20"
              >
                Contact Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
