'use client'
import { RollingText } from '@/components/ui/rolling-text';

import { motion } from 'framer-motion'
import {
  LineChart,
  Lightbulb,
  Scale,
  FileSearch,
  TrendingUp,
  Compass,
  ArrowRight,
  Leaf,
  CheckCircle2,
  Shield,
  Target,
  Briefcase,
  ScrollText,
} from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function ClientAdvisoryPage() {
  const t = useTranslations('ClientAdvisory')

  const advisoryServices = [
    {
      icon: Compass,
      title: t('adv_services.0.title'),
      description: t('adv_services.0.description'),
    },
    {
      icon: Scale,
      title: t('adv_services.1.title'),
      description: t('adv_services.1.description'),
    },
    {
      icon: FileSearch,
      title: t('adv_services.2.title'),
      description: t('adv_services.2.description'),
    },
    {
      icon: TrendingUp,
      title: t('adv_services.3.title'),
      description: t('adv_services.3.description'),
    },
    {
      icon: Shield,
      title: t('adv_services.4.title'),
      description: t('adv_services.4.description'),
    },
    {
      icon: Lightbulb,
      title: t('adv_services.5.title'),
      description: t('adv_services.5.description'),
    },
  ]

  const approachPillars = [
    {
      icon: Target,
      title: t('pillars.0.title'),
      description: t('pillars.0.description'),
      accent: 'from-accent-gold/20 to-accent-gold/5',
    },
    {
      icon: Lightbulb,
      title: t('pillars.1.title'),
      description: t('pillars.1.description'),
      accent: 'from-accent-gold/15 to-accent-gold/5',
    },
    {
      icon: Leaf,
      title: t('pillars.2.title'),
      description: t('pillars.2.description'),
      accent: 'from-accent-gold/10 to-accent-gold/5',
    },
  ]

  const clientsServed = [
    {
      category: t('clients.0.category'),
      names: t('clients.0.names'),
      icon: Briefcase,
    },
    {
      category: t('clients.1.category'),
      names: t('clients.1.names'),
      icon: TrendingUp,
    },
    {
      category: t('clients.2.category'),
      names: t('clients.2.names'),
      icon: Shield,
    },
    {
      category: t('clients.3.category'),
      names: t('clients.3.names'),
      icon: FileSearch,
    },
    {
      category: t('clients.4.category'),
      names: t('clients.4.names'),
      icon: ScrollText,
    },
  ]

  return (
    <>
      <main className="bg-white min-h-screen">
        {/* ─── Hero ─── */}
        <section className="relative w-full pt-16 lg:pt-28 pb-12 lg:pb-16 overflow-hidden">
          {/* Luxury background accents */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-gold/[0.04] rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 w-[600px] h-[400px] bg-warm-earth/40 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-6"
              >
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-2 text-accent-gold font-bold text-sm tracking-[0.2em] uppercase hover:opacity-80 transition"
                >
                  <Leaf size={18} />
                  {t('our_work')}
                </Link>
                <h1 className="text-3xl sm:text-4xl lg:text-7xl font-serif text-deep-forest font-bold leading-tight tracking-tight pb-2">
                  {t('hero_title1')}
                  <span className="block text-accent-gold">{t('hero_title2')}</span>
                </h1>
                <p className="text-accent-gold font-medium text-lg tracking-wide">
                  {t('hero_subtitle')}
                </p>
              </motion.div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 lg:pt-16 relative"
              >
                <div className="hidden lg:block absolute left-0 top-16 bottom-0 w-px bg-accent-gold/20" />
                <div className="lg:pl-10 space-y-5">
                  <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed font-light">
                    {t('hero_desc1')}
                  </p>
                  <p className="text-base text-charcoal/60 leading-relaxed font-light">
                    {t('hero_desc2')}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="overflow-hidden relative group inline-flex items-center gap-2 px-8 py-4 bg-accent-gold text-deep-forest rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
<RollingText className="gap-2">
                      {t('req_advisory')}
                      <ArrowRight size={16} />
                    </RollingText>
</Link>
                    <Link
                      href="/our-work"
                      className="overflow-hidden relative group inline-flex items-center gap-2 px-8 py-4 border border-charcoal/20 text-charcoal rounded-full font-semibold text-sm hover:bg-charcoal/5 transition-colors"
                    >
<RollingText className="gap-2">
                      {t('our_work')}
                    </RollingText>
</Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Advisory Services Grid ─── */}
        <section className="w-full pb-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl mb-16"
            >
              <div className="inline-flex items-center gap-2 text-accent-gold font-bold text-sm tracking-[0.2em] uppercase mb-4">
                <Briefcase size={16} />
                {t('adv_services_tag')}
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight pb-2" dangerouslySetInnerHTML={{ __html: t('adv_services_title') }} />
            </motion.div>

            {/* 2-column staggered layout for premium feel */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {advisoryServices.map((service, idx) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`rounded-[32px] border border-mist hover:border-accent-gold/20 hover:bg-white hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200 p-6 sm:p-8 lg:p-10 group relative overflow-hidden ${
                      idx % 2 === 0 ? 'bg-mist' : 'bg-warm-earth/30'
                    }`}
                  >
                    {/* Subtle gold corner accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/[0.04] rounded-bl-[80px] pointer-events-none group-hover:bg-accent-gold/[0.08] transition duration-300" />

                    <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-accent-gold/10 flex items-center justify-center text-accent-gold shrink-0 group-hover:bg-accent-gold group-hover:text-white transition duration-200">
                        <Icon size={26} />
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-serif font-bold text-deep-forest">
                          {service.title}
                        </h3>
                        <p className="text-charcoal/70 font-light leading-relaxed text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── Our Approach — 3 Pillars ─── */}
        <section className="w-full pb-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 text-accent-gold font-bold text-sm tracking-[0.2em] uppercase mb-4">
                <Compass size={16} />
                {t('oa_tag')}
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight pb-2">
                {t('oa_title')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {approachPillars.map((pillar, idx) => {
                const Icon = pillar.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="relative group"
                  >
                    {/* Vertical gold line on top */}
                    <div className="w-12 h-1 bg-accent-gold rounded-full mb-8 group-hover:w-20 transition-all duration-300" />

                    {/* Step number */}
                    <div className="text-6xl font-data text-accent-gold/15 leading-none mb-4">
                      0{idx + 1}
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold mb-5">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-deep-forest mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-charcoal/70 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        <section className="w-full">
          <div className="w-full bg-deep-forest rounded-t-[40px] lg:rounded-t-[80px] overflow-hidden relative">
            {/* Radial gradient overlay — gold tint for advisory */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,164,74,0.08),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,164,74,0.04),transparent_50%)] pointer-events-none" />

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilterAdvCTA">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.65"
                    numOctaves="3"
                    stitchTiles="stitch"
                  />
                </filter>
                <rect
                  width="100%"
                  height="100%"
                  filter="url(#noiseFilterAdvCTA)"
                />
              </svg>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-20 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center gap-2 text-accent-gold font-bold text-sm tracking-[0.2em] uppercase mb-6">
                  <LineChart size={16} />
                  {t('cta_tag')}
                </div>
                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white tracking-tight pb-2 mb-6" dangerouslySetInnerHTML={{ __html: t('cta_title') }} />
                <p className="text-lg text-white/60 font-light leading-relaxed mb-10">
                  {t('cta_desc')}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="overflow-hidden relative group inline-flex items-center gap-2 px-8 py-4 bg-accent-gold text-deep-forest rounded-full font-semibold hover:scale-[1.02] hover:shadow-xl hover:shadow-accent-gold/20 transition-all"
                  >
<RollingText className="gap-2">
                    {t('cta_btn1')}
                    <ArrowRight size={18} />
                  </RollingText>
</Link>
                  <Link
                    href="/our-work"
                    className="overflow-hidden relative group inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold hover:bg-white/5 transition-all"
                  >
<RollingText className="gap-2">
                    {t('cta_btn2')}
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
