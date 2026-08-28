'use client'

import { motion } from 'framer-motion'
import { MonitorSmartphone, Smartphone, Database, Wifi, BarChart3, Shield, ArrowRight, Leaf, Globe, CheckCircle2, ExternalLink } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { RollingText } from '@/components/ui/rolling-text'
import Image from 'next/image'

export default function DigitalPlatformsPage() {
  const t = useTranslations('DigitalPlatforms')

  const platforms = [
    {
      title: t('platforms.0.title'),
      description: t('platforms.0.description'),
      icon: Globe,
      tag: t('platforms.0.tag'),
      link: "https://varietycatalogues.com/about/"
    },
    {
      title: t('platforms.1.title'),
      description: t('platforms.1.description'),
      icon: Database,
      tag: t('platforms.1.tag'),
      link: "https://catalogueapi.varietycatalogues.com/"
    },
    {
      title: t('platforms.2.title'),
      description: t('platforms.2.description'),
      icon: MonitorSmartphone,
      tag: t('platforms.2.tag'),
      link: "https://tanzaniaagri-inputsplatform.com/"
    },
    {
      title: t('platforms.3.title'),
      description: t('platforms.3.description'),
      image: '/Mbegu Choice.png',
      tag: t('platforms.3.tag'),
    },
    {
      title: t('platforms.4.title'),
      description: t('platforms.4.description'),
      icon: Database,
      tag: t('platforms.4.tag'),
    },
    {
      title: t('platforms.5.title'),
      description: t('platforms.5.description'),
      icon: Database,
      tag: t('platforms.5.tag'),
    },
    {
      title: t('platforms.6.title'),
      description: t('platforms.6.description'),
      image: '/M3.png',
      tag: t('platforms.6.tag'),
    }
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
      <main className="bg-white min-h-[100dvh]">
        {/* ─── Hero ─── */}
        <section className="relative w-full pt-16 lg:pt-28 pb-20 overflow-hidden">
          {/* Background blobs */}
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary-green/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-green/3 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

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
                  className="inline-flex items-center gap-2 text-primary-green font-bold text-sm tracking-[0.2em] uppercase hover:opacity-80 transition"
                >
                  <Leaf size={18} />
                  {t('our_work')}
                </Link>
                <h1 className="text-3xl sm:text-4xl lg:text-7xl font-serif text-deep-forest font-bold leading-tight tracking-tight pb-2">
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
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 bg-primary-green text-white rounded-full font-semibold text-sm hover:bg-deep-forest transition-colors"
                    >
                      <RollingText className="gap-2">
                        {t('req_platform')}
                        <ArrowRight size={16} />
                      </RollingText>
                    </Link>
                    <Link
                      href="/our-work"
                      className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 border border-charcoal/20 text-charcoal rounded-full font-semibold text-sm hover:bg-charcoal/5 transition-colors"
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

        {/* ─── Platform Capabilities — Bento Grid ─── */}
        <section className="w-full pb-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="inline-flex items-center gap-2 text-primary-green font-bold text-xs tracking-[0.2em] uppercase mb-4">
                <MonitorSmartphone size={14} />
                {t('dp_tag')}
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight pb-2" dangerouslySetInnerHTML={{ __html: t('dp_title') }} />
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
                    className={`rounded-[32px] bg-mist border border-mist hover:border-primary-green/20 hover:bg-white hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200 p-6 sm:p-8 lg:p-10 flex flex-col ${
                      idx === 0 ? 'md:col-span-2 md:flex-row md:items-center md:gap-12' : ''
                    }`}
                  >
                    {/* Icon */}
                    <div className={`space-y-4 ${idx === 0 ? 'md:flex-shrink-0' : ''}`}>
                      <div className={platform.image ? "h-12 lg:h-16 flex items-center" : "w-16 h-16 rounded-2xl bg-primary-green/10 flex items-center justify-center text-primary-green"}>
                        {platform.image ? (
                          <Image src={platform.image} alt={platform.title} width={160} height={64} style={{ width: 'auto', height: '100%' }} className="h-full w-auto object-contain object-left" />
                        ) : Icon ? (
                          <Icon size={30} />
                        ) : null}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`mt-6 ${idx === 0 ? 'md:mt-0 flex-1' : 'flex-1 flex flex-col'}`}>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl font-serif font-bold text-deep-forest tracking-tight pb-2">
                          {platform.title}
                        </h3>
                        {platform.link && (
                          <a href={platform.link} target="_blank" rel="noopener noreferrer" className="text-primary-green hover:opacity-80 transition-opacity mt-1">
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                      <p className="mt-3 text-charcoal/80 font-light leading-relaxed flex-1">
                        {platform.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── Platform Spotlight — MbeguChoice ─── */}
        <section className="w-full py-20 bg-mist">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-deep-forest rounded-[40px] p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
            >
              {/* Background accents */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-green/[0.08] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-blue/[0.08] rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

              {/* Left Column */}
              <div className="flex-1 relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-primary-green font-bold text-xs tracking-widest uppercase">
                  {t('sp_tag')}
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl lg:text-5xl font-serif font-bold text-white tracking-tight pb-2 leading-tight">
                    {t('sp_title')}
                  </h3>
                  <p className="text-white/60 font-light text-lg italic">
                    {t('sp_subtitle')}
                  </p>
                </div>
                <p className="text-white/80 font-light leading-relaxed">
                  {t('sp_desc')}
                </p>
              </div>

              {/* Right Column */}
              <div className="flex-1 relative z-10 space-y-6 border-t lg:border-t-0 lg:border-l border-white/[0.1] pt-6 lg:pt-0 lg:pl-12">
                <h4 className="text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight pb-1">
                  {t('sp_title2')}
                </h4>
                <p className="text-white/70 font-light leading-relaxed">
                  {t('sp_desc2')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>


        {/* ─── CTA ─── */}
        <section className="w-full">
          <div className="w-full bg-deep-forest py-16 lg:py-20 px-6 relative overflow-hidden">
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
                <h2 className="text-2xl sm:text-3xl lg:text-6xl font-serif font-bold text-white tracking-tight pb-2 max-w-3xl mx-auto leading-tight" dangerouslySetInnerHTML={{ __html: t('cta_title') }} />
                <p className="text-white/60 font-light text-lg max-w-xl mx-auto leading-relaxed">
                  {t('cta_desc')}
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 bg-white text-deep-forest rounded-full font-semibold text-sm hover:bg-primary-green hover:text-white transition-colors"
                  >
                    <RollingText className="gap-2">
                      {t('cta_btn1')}
                      <ArrowRight size={16} />
                    </RollingText>
                  </Link>
                  <Link
                    href="/our-work"
                    className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
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
