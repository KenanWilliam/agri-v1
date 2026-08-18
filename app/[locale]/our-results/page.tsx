'use client'
import { RollingText } from '@/components/ui/rolling-text';

import { publicDownloads } from '@/lib/public-downloads'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/routing'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function OurResultsPage() {
  const t = useTranslations('OurResults')
  const downloads = publicDownloads

  const assignments = [
    {
      title: t('a1_title'),
      challenge: t('a1_challenge'),
      solution: t('a1_solution'),
      benefit: t('a1_benefit'),
      link: 'http://www.seedsectorplatformkenya.com/',
    },
    {
      title: t('a2_title'),
      challenge: t('a2_challenge'),
      solution: t('a2_solution'),
      benefit: t('a2_benefit'),
    },
    {
      title: t('a3_title'),
      challenge: t('a3_challenge'),
      solution: t('a3_solution'),
      benefit: t('a3_benefit'),
    },
  ]

  return (
    <>      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="relative w-full pt-16 lg:pt-28 pb-10 overflow-hidden border-b border-mist">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--mist)_0%,transparent_50%)] opacity-50"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-6 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-7xl font-serif font-bold text-deep-forest tracking-tight"
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

        {/* Downloads */}
        <section className="w-full py-16 lg:py-16 bg-white relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-bold text-deep-forest mb-6">
                {t('downloads_title')}
              </h2>
              <p className="text-lg text-charcoal/80 font-light max-w-3xl mx-auto leading-relaxed">
                {t('downloads_desc')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {downloads.map((download, idx) => (
                <motion.div
                  key={`${download.title}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="p-6 sm:p-8 lg:p-10 rounded-[32px] bg-mist border border-mist hover:border-primary-green/20 hover:bg-white hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200"
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
                      {t('download_pdf')} <ArrowRight size={14} />
                    </a>
                    {download.clientLink && (
                      <a
                        href={download.clientLink}
                        className="text-deep-forest hover:text-primary-green transition-colors inline-flex items-center gap-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t('client_link')} <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Examples of Assignments */}
        <section className="w-full py-16 lg:py-16 bg-mist border-t border-mist">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-bold text-deep-forest">
                {t('examples_title')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {assignments.map((assignment, idx) => (
                <motion.div
                  key={`${assignment.title}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 border border-mist shadow-sm hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200 space-y-6"
                >
                  <h3 className="text-xl font-serif font-bold text-deep-forest">{assignment.title}</h3>
                  <div className="space-y-4 text-sm text-charcoal/80 font-light leading-relaxed">
                    <p><span className="font-bold text-deep-forest">{t('challenge_label')}</span> {assignment.challenge}</p>
                    <p><span className="font-bold text-deep-forest">{t('solution_label')}</span> {assignment.solution}</p>
                    <p><span className="font-bold text-deep-forest">{t('benefit_label')}</span> {assignment.benefit}</p>
                  </div>
                  {assignment.link && (
                    <div className="pt-6 border-t border-mist">
                      <a
                        href={assignment.link}
                        className="text-primary-green font-bold text-sm hover:text-deep-forest transition-colors inline-flex items-center gap-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t('visit_resource')} <ArrowRight size={14} />
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-10 lg:py-20 bg-deep-forest text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--accent-gold)_0%,transparent_40%)] opacity-20"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-6 lg:space-y-10 relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-bold text-white">
              {t('cta_title')}
            </h2>
            <p className="text-lg lg:text-2xl text-white/80 font-light leading-relaxed">
              {t('cta_desc')}
            </p>
            <div className="flex flex-row flex-wrap gap-3 sm:gap-6 justify-center pt-2 sm:pt-6">
              <Link
                href="/contact"
                className="overflow-hidden relative group inline-flex items-center justify-center gap-1.5 sm:gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-primary-green text-white rounded-full font-bold text-sm sm:text-base transition duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-green/20"
              >
<RollingText className="gap-1.5 sm:gap-2">
                {t('get_in_touch')}
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </RollingText>
</Link>
            </div>
          </div>
        </section>
      </main>    </>
  )
}
