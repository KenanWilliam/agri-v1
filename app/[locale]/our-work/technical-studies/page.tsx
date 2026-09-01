'use client'
import { RollingText } from '@/components/ui/rolling-text';

import { motion } from 'framer-motion'
import { FileText, TrendingUp, Users, MapPin, Microscope, ArrowRight, Leaf } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function TechnicalStudiesPage() {
  const t = useTranslations('TechnicalStudies')



  return (
    <>
      <main className="bg-white min-h-[100dvh]">
        {/* ─── Hero ─── */}
        <section className="relative w-full pt-16 lg:pt-28 pb-20 overflow-hidden">
          {/* Background blobs */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-blue/5 rounded-full blur-[120px] -translate-y-1/3 -translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-blue/3 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
              {/* Left: Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-4 lg:space-y-6"
              >
                <h1
                  className="font-serif text-deep-forest font-bold leading-tight tracking-tight pb-2"
                  style={{ fontSize: 'clamp(1.875rem, 1.4rem + 2.4vw, 4.5rem)' }}
                  dangerouslySetInnerHTML={{ __html: t('hero_title') }}
                />
                <p className="text-primary-blue font-semibold text-base sm:text-lg tracking-wide">
                  {t('hero_subtitle')}
                </p>
              </motion.div>

              {/* Right: Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 lg:pt-16 relative"
              >
                <div className="hidden lg:block absolute left-0 top-16 bottom-0 w-px bg-primary-blue/20" />
                <p className="text-base sm:text-lg lg:text-xl text-charcoal/85 leading-relaxed font-normal lg:pl-10">
                  {t('hero_desc1')} {t('hero_desc2')}
                </p>
                <div className="lg:pl-10 mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="overflow-hidden relative group inline-flex items-center gap-2 px-8 py-4 bg-primary-blue text-white rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
<RollingText className="gap-2">
                    {t('req_study')}
                    <ArrowRight size={16} className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-out shrink-0" />
                  </RollingText>
</Link>
                  <Link
                    href="/our-work"
                    className="overflow-hidden relative group inline-flex items-center gap-2 px-8 py-4 border border-primary-blue/20 text-primary-blue rounded-full font-semibold text-sm hover:bg-primary-blue/5 transition-colors"
                  >
<RollingText className="gap-2">
                    {t('our_work')}
                  </RollingText>
</Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Case Study: KCDMS Agrodealer Mapping ─── */}
        <section className="w-full py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl space-y-6 lg:space-y-8"
            >
              <div>
                <h2
                  className="font-serif font-bold text-deep-forest tracking-tight pb-2"
                  style={{ fontSize: 'clamp(1.75rem, 1.3rem + 2vw, 3rem)' }}
                >
                  {t('cs_title')}
                </h2>
              </div>

              <p className="text-charcoal/85 font-normal leading-relaxed text-base sm:text-lg lg:text-xl">
                {t('cs_desc1')}
              </p>

              <p className="text-charcoal/85 font-normal leading-relaxed text-base sm:text-lg lg:text-xl">
                {t('cs_desc2')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── Clients Trust Section ─── */}
        <section className="w-full py-20 bg-mist">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-forest tracking-tight pb-2">
                {t('clients_title')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: t('clients.0.title'), desc: t('clients.0.description'), icon: Users },
                { label: t('clients.1.title'), desc: t('clients.1.description'), icon: FileText },
                { label: t('clients.2.title'), desc: t('clients.2.description'), icon: TrendingUp },
                { label: t('clients.3.title'), desc: t('clients.3.description'), icon: Microscope },
              ].map((client, idx) => {
                const Icon = client.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-[24px] p-6 lg:p-8 border border-transparent hover:border-primary-blue/15 hover:shadow-lg transition-[background-color,border-color,box-shadow] duration-200 text-center flex flex-col items-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue mx-auto mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-base font-serif font-bold text-deep-forest tracking-tight pb-2 mb-2">
                      {client.label}
                    </h3>
                    <p className="text-charcoal/70 font-light leading-relaxed text-[14px] min-[1440px]:text-sm">
                      {client.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="w-full">
          <div className="w-full bg-deep-forest py-16 lg:py-20 px-6 relative overflow-hidden">
            {/* Radial gradient overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(36,132,198,0.12),transparent_55%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(58,180,74,0.06),transparent_50%)] pointer-events-none" />

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilterTS">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilterTS)" />
              </svg>
            </div>

            <div className="max-w-[1800px] mx-auto relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight pb-2 mb-6">
                  {t('cta_title')}
                </h2>
                <p className="text-white/70 font-light leading-relaxed text-base sm:text-lg mb-10 max-w-xl mx-auto">
                  {t('cta_desc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="overflow-hidden relative group inline-flex items-center gap-2 bg-primary-blue hover:bg-primary-blue/90 text-white font-bold px-8 py-4 rounded-full transition duration-200"
                  >
<RollingText className="gap-2">
                    {t('cta_btn1')}
                    <ArrowRight size={18} className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-out shrink-0" />
                  </RollingText>
</Link>
                  <Link
                    href="/our-work"
                    className="overflow-hidden relative group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full border border-white/20 transition duration-200"
                  >
<RollingText className="gap-2">
                    {t('cta_btn2')}
                    <ArrowRight size={18} className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-out shrink-0" />
                  </RollingText>
</Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
