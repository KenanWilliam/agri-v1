'use client'

import { motion } from 'framer-motion'
import { MonitorSmartphone, Smartphone, Database, Wifi, BarChart3, Shield, ArrowRight, Leaf, Globe, CheckCircle2 } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function DigitalPlatformsPage() {
  const t = useTranslations('DigitalPlatforms')

  const platforms = [
    {
      title: t('platforms.0.title'),
      description: t('platforms.0.description'),
      icon: MonitorSmartphone,
      tag: t('platforms.0.tag'),
    },
    {
      title: t('platforms.1.title'),
      description: t('platforms.1.description'),
      icon: Smartphone,
      tag: t('platforms.1.tag'),
    },
    {
      title: t('platforms.2.title'),
      description: t('platforms.2.description'),
      icon: Database,
      tag: t('platforms.2.tag'),
    },
    {
      title: t('platforms.3.title'),
      description: t('platforms.3.description'),
      icon: BarChart3,
      tag: t('platforms.3.tag'),
    },
  ]

  const approach = [
    {
      step: '01',
      title: t('approach.0.title'),
      description: t('approach.0.description'),
      icon: Globe,
    },
    {
      step: '02',
      title: t('approach.1.title'),
      description: t('approach.1.description'),
      icon: Wifi,
    },
    {
      step: '03',
      title: t('approach.2.title'),
      description: t('approach.2.description'),
      icon: Shield,
    },
  ]

  const spotlightStats = [
    { value: t('stats.0.value'), label: t('stats.0.label') },
    { value: t('stats.1.value'), label: t('stats.1.label') },
    { value: t('stats.2.value'), label: t('stats.2.label') },
    { value: t('stats.3.value'), label: t('stats.3.label') },
  ]

  return (
    <>
      <main className="bg-white min-h-screen">
        {/* ─── Hero ─── */}
        <section className="relative w-full pt-24 lg:pt-28 pb-20 overflow-hidden">
          {/* Background blobs */}
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary-green/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-green/3 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
              {/* Left: Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-6"
              >
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-2 text-primary-green font-bold text-sm tracking-[0.2em] uppercase hover:opacity-80 transition"
                >
                  <Leaf size={18} />
                  {t('our_work')}
                </Link>
                <h1 className="text-5xl lg:text-7xl font-serif text-deep-forest font-bold leading-[1.1] tracking-tight">
                  {t('hero_title')}
                </h1>
                <p className="text-primary-green font-medium text-lg tracking-wide">
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
                <div className="hidden lg:block absolute left-0 top-16 bottom-0 w-px bg-primary-green/20" />
                <div className="lg:pl-10 space-y-6">
                  <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed font-light">
                    {t('hero_desc')}
                  </p>
                  <div className="flex items-center gap-3"><CheckCircle2 size={16} className="text-primary-green" /><span className="text-sm font-light text-white/80">{t('sp_feat1')}</span></div>
                  <div className="flex items-center gap-3"><CheckCircle2 size={16} className="text-primary-green" /><span className="text-sm font-light text-white/80">{t('sp_feat2')}</span></div>
                  <div className="flex items-center gap-3"><CheckCircle2 size={16} className="text-primary-green" /><span className="text-sm font-light text-white/80">{t('sp_feat3')}</span></div>
                  <div className="flex items-center gap-3"><CheckCircle2 size={16} className="text-primary-green" /><span className="text-sm font-light text-white/80">{t('sp_feat4')}</span></div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-primary-green text-white rounded-full font-semibold text-sm hover:bg-deep-forest transition-colors"
                    >
                      {t('req_platform')}
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="/our-work"
                      className="inline-flex items-center gap-2 px-8 py-4 border border-charcoal/20 text-charcoal rounded-full font-semibold text-sm hover:bg-charcoal/5 transition-colors"
                    >
                      {t('our_work')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Platform Capabilities — Bento Grid ─── */}
        <section className="w-full pb-28">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight">
                Our Platforms
              </h2>
              <p className="mt-4 text-charcoal/80 font-light leading-relaxed max-w-2xl text-lg">
                Purpose-built digital tools that address critical gaps in seed systems and agricultural value chains.
              </p>
            </motion.div>

            {/* Bento-style grid: first card spans 2 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platforms.map((platform, idx) => {
                const Icon = platform.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`rounded-[32px] bg-mist border border-mist hover:border-primary-green/20 hover:bg-white hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200 p-8 lg:p-10 flex flex-col ${
                      idx === 0 ? 'md:col-span-2 md:flex-row md:items-center md:gap-12' : ''
                    }`}
                  >
                    {/* Icon + Tag */}
                    <div className={`space-y-4 ${idx === 0 ? 'md:flex-shrink-0' : ''}`}>
                      <div className="w-16 h-16 rounded-2xl bg-primary-green/10 flex items-center justify-center text-primary-green">
                        <Icon size={30} />
                      </div>
                      <span className="inline-block text-xs font-bold text-primary-green tracking-[0.15em] uppercase bg-primary-green/10 px-3 py-1 rounded-full">
                        {platform.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={`mt-6 ${idx === 0 ? 'md:mt-0' : ''}`}>
                      <h3 className="text-2xl font-serif font-bold text-deep-forest tracking-tight">
                        {platform.title}
                      </h3>
                      <p className="mt-3 text-charcoal/80 font-light leading-relaxed">
                        {platform.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── Approach / Process — Numbered Steps ─── */}
        <section className="w-full py-28 bg-warm-earth/40">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 text-primary-green font-bold text-xs tracking-[0.2em] uppercase mb-6">
                <Shield size={14} />
                {t('oa_tag')}
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight mb-6">
                {t('oa_title')}
              </h2>
              <p className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto">
                {t('oa_desc')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
              {approach.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="relative flex flex-col items-center text-center px-8 lg:px-12"
                  >
                    {/* Connector line (desktop) */}
                    {idx < approach.length - 1 && (
                      <div className="hidden lg:block absolute top-12 right-0 w-full h-px bg-primary-green/20 translate-x-1/2 z-0" />
                    )}

                    {/* Step number circle */}
                    <div className="relative z-10 w-24 h-24 rounded-full bg-white border-2 border-primary-green/30 flex items-center justify-center mb-8 shadow-sm">
                      <span className="text-3xl font-data font-bold text-primary-green tracking-wide">
                        {item.step}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center text-primary-green mb-6">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-xl font-serif font-bold text-deep-forest tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/80 font-light leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── MbeguChoice Spotlight ─── */}
        <section className="w-full py-28">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Decorative visual card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="rounded-[32px] bg-gradient-to-br from-deep-forest to-deep-forest/90 p-10 lg:p-14 text-white relative overflow-hidden">
                  {/* Subtle radial overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(58,180,74,0.15),transparent_60%)] pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(36,132,198,0.1),transparent_50%)] pointer-events-none" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 text-primary-green font-bold text-xs tracking-[0.2em] uppercase mb-6">
                <Database size={14} />
                {t('dp_tag')}
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight" dangerouslySetInnerHTML={{ __html: t('dp_title') }} />
                    <p className="text-white/80 font-light leading-relaxed mb-10">
                      A groundbreaking platform developed in partnership with KALRO, KEPHIS, and Kenya Markets Trust — empowering farmers and agrodealers to make data-driven seed selection decisions for their specific ecological zones.
                    </p>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-6">
                      {spotlightStats.map((stat, i) => (
                        <div key={i} className="bg-white/5 rounded-2xl p-4 border border-white/10">
                          <div className="text-2xl font-data font-bold text-primary-green tracking-wide">
                            {stat.value}
                          </div>
                          <div className="text-xs text-white/60 mt-1 tracking-wide">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-8"
              >
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight">
                  {t('sp_title2')}
                </h2>
                <p className="text-charcoal/80 font-light leading-relaxed text-lg">
                  {t('sp_desc2')}
                </p>

                <div className="space-y-5">
                  {[
                    t('sp_points.0'),
                    t('sp_points.1'),
                    t('sp_points.2'),
                    t('sp_points.3'),
                    t('sp_points.4'),
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={20} className="text-primary-green flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80 font-light leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Why Digital Matters Strip ─── */}
        <section className="w-full py-20 bg-mist">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight">
                {t('why_title')}
              </h2>
              <p className="mt-4 text-charcoal/80 font-light leading-relaxed max-w-2xl mx-auto text-lg">
                {t('why_desc')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: t('why_cards.0.title'),
                  text: t('why_cards.0.text'),
                },
                {
                  icon: Shield,
                  title: t('why_cards.1.title'),
                  text: t('why_cards.1.text'),
                },
                {
                  icon: BarChart3,
                  title: t('why_cards.2.title'),
                  text: t('why_cards.2.text'),
                },
              ].map((card, idx) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="bg-white rounded-[32px] p-8 lg:p-10 border border-transparent hover:border-primary-green/20 hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary-green/10 flex items-center justify-center text-primary-green mb-6">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-deep-forest tracking-tight mb-3">
                      {card.title}
                    </h3>
                    <p className="text-charcoal/80 font-light leading-relaxed text-sm">
                      {card.text}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="w-full">
          <div className="w-full bg-deep-forest py-24 lg:py-32 px-6 relative overflow-hidden">
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(58,180,74,0.12),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(36,132,198,0.08),transparent_50%)] pointer-events-none" />

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilterDP">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilterDP)" />
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
                <div className="inline-flex items-center gap-2 text-primary-green font-bold text-xs tracking-[0.2em] uppercase">
                  <MonitorSmartphone size={14} />
                  {t('cta_tag')}
                </div>
                <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white tracking-tight max-w-3xl mx-auto leading-[1.1]" dangerouslySetInnerHTML={{ __html: t('cta_title') }} />
                <p className="text-white/60 font-light text-lg max-w-xl mx-auto leading-relaxed">
                  {t('cta_desc')}
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-deep-forest rounded-full font-semibold text-sm hover:bg-primary-green hover:text-white transition-colors"
                  >
                    {t('cta_btn1')}
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/our-work"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
                  >
                    {t('cta_btn2')}
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
