'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function InsightsPage() {
  const insights = [
    {
      title: 'Bringing accurate and transparent information to seed sector stakeholders',
      summary:
        'Agri Experience partnered with KEPHIS, KALRO, and STAK to build a searchable seed sector information platform for decision-makers.',
      link: 'http://www.seedsectorplatformkenya.com/',
    },
    {
      title: 'Educating crop breeders about crop seed commercialisation',
      summary:
        'Seed Business Management training for WACCI PhD students strengthened the link between research and large-scale farmer impact.',
    },
    {
      title: 'Introducing new drought tolerant maize varieties into the market',
      summary:
        'Private sector surveys and rollout support enabled rapid, successful introductions of drought tolerant maize varieties.',
    },
  ]

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
              Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg lg:text-xl text-charcoal/80 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Selected examples of how our work delivers practical, scalable seed sector impact.
            </motion.p>
          </div>
        </section>

        {/* Insights */}
        <section className="w-full py-16 lg:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insights.map((item, idx) => (
                <motion.article
                  key={`${item.title}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="rounded-[32px] overflow-hidden bg-mist border border-mist hover:border-primary-green/20 hover:bg-white hover:shadow-xl transition-colors transition-shadow duration-300 ease-in-out"
                >
                  <div className="p-8 lg:p-10 space-y-6 flex flex-col h-full">
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-serif font-bold text-deep-forest leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-charcoal/80 font-light leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                    {item.link && (
                      <div className="pt-6 border-t border-primary-green/10">
                        <a
                          href={item.link}
                          className="inline-flex items-center gap-1 text-primary-green font-bold text-sm hover:text-deep-forest transition-colors"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit resource <ArrowRight size={14} />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-24 lg:py-32 bg-mist border-t border-mist">
          <div className="max-w-2xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest">
              Explore Our Results
            </h2>
            <p className="text-xl text-charcoal/80 font-light">
              Browse reports and case studies from public-domain assignments.
            </p>
            <div className="pt-6">
              <Link
                href="/our-results"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-deep-forest text-white rounded-full font-bold transition-colors transition-shadow duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:shadow-deep-forest/20"
              >
                View Results
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
