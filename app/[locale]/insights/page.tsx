'use client'
import { RollingText } from '@/components/ui/rolling-text';

import { motion } from 'framer-motion'
import { Link } from '@/i18n/routing'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function InsightsPage() {
  const t = useTranslations('Insights')
  const insights = [
    {
      title: t('i1_title'),
      summary: t('i1_summary'),
      link: 'http://www.seedsectorplatformkenya.com/',
    },
    {
      title: t('i2_title'),
      summary: t('i2_summary'),
    },
    {
      title: t('i3_title'),
      summary: t('i3_summary'),
    },
  ]

  return (
    <>      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="relative w-full pt-24 lg:pt-28 pb-10 overflow-hidden border-b border-mist">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--mist)_0%,transparent_50%)] opacity-50"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-6 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-7xl font-serif font-bold text-deep-forest tracking-tight"
            >
              {t('title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg lg:text-xl text-charcoal/80 max-w-2xl mx-auto font-light leading-relaxed"
            >
              {t('subtitle')}
            </motion.p>
          </div>
        </section>

        {/* Insights */}
        <section className="w-full py-16 lg:py-24 bg-white relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insights.map((item, idx) => (
                <motion.article
                  key={`${item.title}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="rounded-[32px] overflow-hidden bg-mist border border-mist hover:border-primary-green/20 hover:bg-white hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200"
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
                          {t('visit_resource')} <ArrowRight size={14} />
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
        <section className="w-full py-16 lg:py-24 xl:py-32 bg-mist border-t border-mist">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest">
              {t('cta_title')}
            </h2>
            <p className="text-xl text-charcoal/80 font-light">
              {t('cta_desc')}
            </p>
            <div className="pt-6">
              <Link
                href="/our-results"
                className="overflow-hidden relative group inline-flex items-center justify-center gap-2 px-8 py-4 bg-deep-forest text-white rounded-full font-bold transition duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-deep-forest/20"
              >
<RollingText className="gap-2">
                {t('view_results')}
                <ArrowRight size={20} />
              </RollingText>
</Link>
            </div>
          </div>
        </section>
      </main>    </>
  )
}
