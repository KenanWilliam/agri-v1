'use client'
import { RollingText } from '@/components/ui/rolling-text';

import { motion } from 'framer-motion'
import { ClipboardCheck, Search, FileText, TrendingUp, Users, MapPin, Microscope, ArrowRight, Leaf, BarChart3, CheckCircle2 } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function TechnicalStudiesPage() {
  const t = useTranslations('TechnicalStudies')

  const caseStudyDetails = [
    { label: t('caseStudyDetails.0.label'), value: t('caseStudyDetails.0.value') },
    { label: t('caseStudyDetails.1.label'), value: t('caseStudyDetails.1.value') },
    { label: t('caseStudyDetails.2.label'), value: t('caseStudyDetails.2.value') },
    { label: t('caseStudyDetails.3.label'), value: t('caseStudyDetails.3.value') },
  ]

  const studyTypes = [
    {
      title: t('studyTypes.0.title'),
      description: t('studyTypes.0.description'),
      icon: TrendingUp,
      accent: 'from-primary-blue/10 to-primary-blue/5',
    },
    {
      title: t('studyTypes.1.title'),
      description: t('studyTypes.1.description'),
      icon: Search,
      accent: 'from-primary-blue/10 to-primary-blue/5',
    },
    {
      title: t('studyTypes.2.title'),
      description: t('studyTypes.2.description'),
      icon: BarChart3,
      accent: 'from-primary-blue/10 to-primary-blue/5',
    },
    {
      title: t('studyTypes.3.title'),
      description: t('studyTypes.3.description'),
      icon: ClipboardCheck,
      accent: 'from-primary-blue/10 to-primary-blue/5',
    },
    {
      title: t('studyTypes.4.title'),
      description: t('studyTypes.4.description'),
      icon: FileText,
      accent: 'from-primary-blue/10 to-primary-blue/5',
    },
    {
      title: t('studyTypes.5.title'),
      description: t('studyTypes.5.description'),
      icon: Microscope,
      accent: 'from-primary-blue/10 to-primary-blue/5',
    },
  ]

const methodology = [
    {
      step: 1,
      title: t('methodology.0.title'),
      description: t('methodology.0.description'),
      icon: Search,
    },
    {
      step: 2,
      title: t('methodology.1.title'),
      description: t('methodology.1.description'),
      icon: MapPin,
    },
    {
      step: 3,
      title: t('methodology.2.title'),
      description: t('methodology.2.description'),
      icon: BarChart3,
    },
    {
      step: 4,
      title: t('methodology.3.title'),
      description: t('methodology.3.description'),
      icon: FileText,
    },
  ]



  return (
    <>
      <main className="bg-white min-min-h-[100dvh]">
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
                className="flex-1 space-y-6"
              >
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-2 text-primary-blue font-bold text-sm tracking-[0.2em] uppercase hover:opacity-80 transition"
                >
                  <Leaf size={18} />
                  {t('our_work')}
                </Link>
                <h1 className="text-3xl sm:text-4xl lg:text-7xl font-serif text-deep-forest font-bold leading-tight tracking-tight pb-2" dangerouslySetInnerHTML={{ __html: t('hero_title') }} />
                <p className="text-primary-blue font-medium text-lg tracking-wide">
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
                <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed font-light lg:pl-10">
                  {t('hero_desc1')} {t('hero_desc2')}
                </p>
                <div className="lg:pl-10 mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="overflow-hidden relative group inline-flex items-center gap-2 px-8 py-4 bg-primary-blue text-white rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
<RollingText className="gap-2">
                    {t('req_study')}
                    <ArrowRight size={16} />
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

        {/* ─── Case Study: KCDMS Agro-Dealer Mapping ─── */}
        <section className="w-full py-28">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              {/* Left column: Label + text (3 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-3 space-y-8"
              >
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-primary-blue tracking-[0.2em] uppercase bg-primary-blue/10 px-4 py-2 rounded-full mb-6">
                    <MapPin size={14} />
                    {t('cs_tag')}
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight pb-2 mt-4">
                    {t('cs_title')}
                  </h2>
                </div>

                <p className="text-charcoal/80 font-light leading-relaxed text-lg">
                  {t('cs_desc1')}
                </p>

                <p className="text-charcoal/80 font-light leading-relaxed text-lg">
                  {t('cs_desc2')}
                </p>

                {/* Key highlights list */}
                <div className="space-y-4 pt-4">
                  {[
                    t('cs_bullets.0'),
                    t('cs_bullets.1'),
                    t('cs_bullets.2'),
                    t('cs_bullets.3'),
                    t('cs_bullets.4'),
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={18} className="text-primary-blue flex-shrink-0 mt-1" />
                      <span className="text-charcoal/80 font-light leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right column: Stats card (2 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="lg:col-span-2"
              >
                <div className="rounded-[32px] bg-gradient-to-br from-deep-forest via-deep-forest to-deep-forest/95 p-8 lg:p-10 text-white relative overflow-hidden sticky top-32">
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(36,132,198,0.15),transparent_60%)] pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(58,180,74,0.08),transparent_50%)] pointer-events-none" />

                  <div className="relative z-10">
                    <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-primary-blue mb-8">
                      Project Details
                    </h4>

                    <div className="space-y-6">
                      {caseStudyDetails.map((detail, idx) => (
                        <div key={idx} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                          <div className="text-xs text-white/50 tracking-wide uppercase mb-1">
                            {detail.label}
                          </div>
                          <div className="text-lg font-serif font-bold text-white tracking-tight pb-2">
                            {detail.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Decorative element */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <Users size={20} className="text-primary-blue/70" />
                        <span className="text-white/60 text-sm font-light">
                          {t('funded_by')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: t('clients.0.label'), desc: t('clients.0.desc'), icon: Users },
                { label: t('clients.1.label'), desc: t('clients.1.desc'), icon: FileText },
                { label: t('clients.2.label'), desc: t('clients.2.desc'), icon: TrendingUp },
                { label: t('clients.3.label'), desc: t('clients.3.desc'), icon: Microscope },
              ].map((client, idx) => {
                const Icon = client.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-[24px] p-6 lg:p-8 border border-transparent hover:border-primary-blue/15 hover:shadow-lg transition-[background-color,border-color,box-shadow] duration-200 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue mx-auto mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-base font-serif font-bold text-deep-forest tracking-tight pb-2 mb-2">
                      {client.label}
                    </h3>
                    <p className="text-charcoal/70 font-light leading-relaxed text-xs">
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
                <p className="text-white/70 font-light leading-relaxed text-lg mb-10">
                  {t('cta_desc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="overflow-hidden relative group inline-flex items-center gap-2 bg-primary-blue hover:bg-primary-blue/90 text-white font-bold px-8 py-4 rounded-full transition duration-200"
                  >
<RollingText className="gap-2">
                    {t('cta_btn1')}
                    <ArrowRight size={18} />
                  </RollingText>
</Link>
                  <Link
                    href="/our-work"
                    className="overflow-hidden relative group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full border border-white/20 transition duration-200"
                  >
<RollingText className="gap-2">
                    {t('cta_btn2')}
                    <ArrowRight size={18} />
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
