'use client'

import { motion } from 'framer-motion'
import { MonitorSmartphone, Smartphone, Database, Wifi, BarChart3, Shield, ArrowRight, Leaf, Globe, CheckCircle2, ExternalLink } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { RollingText } from '@/components/ui/rolling-text'
import Image from 'next/image'

export default function DigitalPlatformsPage() {
  const t = useTranslations('DigitalPlatforms')

  const mbeguChoice = {
    title: t('platforms.3.title'),
    subtitle: t('sp_subtitle'),
    description: t('platforms.3.description'),
    spotlightDesc: t('sp_desc'),
    spotlightDesc2: t('sp_desc2'),
    image: '/Mbegu Choice.png',
    tag: t('platforms.3.tag'),
    link: "https://mbeguchoice.com",
    stats: [
      { value: t('stats.0.value'), label: t('stats.0.label') },
      { value: t('stats.1.value'), label: t('stats.1.label') },
      { value: t('stats.2.value'), label: t('stats.2.label') },
      { value: t('stats.3.value'), label: t('stats.3.label') },
    ]
  }

  const otherPlatforms = [
    {
      title: t('platforms.0.title'),
      description: t('platforms.0.description'),
      image: '/platforms/africa-crop-variety-catalogue.png',
      imageType: 'screenshot' as const,
      tag: t('platforms.0.tag'),
      link: "https://varietycatalogues.com/about/"
    },
    {
      title: t('platforms.1.title'),
      description: t('platforms.1.description'),
      image: '/platforms/kenya-plant-variety-list.png',
      imageType: 'screenshot' as const,
      tag: t('platforms.1.tag'),
      link: "https://catalogueapi.varietycatalogues.com/"
    },
    {
      title: t('platforms.2.title'),
      description: t('platforms.2.description'),
      image: '/platforms/tanzania-agri-inputs-platform.png',
      imageType: 'screenshot' as const,
      tag: t('platforms.2.tag'),
      link: "https://tanzaniaagri-inputsplatform.com/"
    },
    {
      title: t('platforms.6.title'),
      description: t('platforms.6.description'),
      image: '/M3.png',
      imageType: 'logo' as const,
      tag: t('platforms.6.tag'),
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
              className="mb-12"
            >
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight pb-2" dangerouslySetInnerHTML={{ __html: t('dp_title') }} />
            </motion.div>

            {/* Flagship Hero Card: MbeguChoice */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group rounded-[36px] bg-gradient-to-br from-[#0F2218] via-[#142D20] to-[#0A1A12] text-white p-8 sm:p-10 lg:p-14 border border-[#1A4D2E]/40 shadow-2xl relative overflow-hidden mb-10"
            >
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green/[0.12] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-emerald-500/[0.08] rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-14 items-start justify-between">
                {/* Left: Branding & Core Story */}
                <div className="flex-1 space-y-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="inline-flex items-center px-4 py-2 rounded-2xl bg-white shadow-sm">
                      <Image
                        src={mbeguChoice.image}
                        alt="MbeguChoice"
                        width={150}
                        height={48}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-primary-green/20 text-emerald-300 border border-primary-green/30">
                      Flagship Platform
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight pb-1">
                      {mbeguChoice.title}
                    </h3>
                    <p className="text-emerald-300/90 font-medium text-lg sm:text-xl">
                      {mbeguChoice.subtitle}
                    </p>
                  </div>

                  <p className="text-white/80 font-light leading-relaxed text-base sm:text-lg max-w-2xl">
                    {mbeguChoice.description}
                  </p>

                  <p className="text-white/70 font-light leading-relaxed text-sm sm:text-base max-w-2xl border-l-2 border-primary-green/40 pl-4">
                    {mbeguChoice.spotlightDesc}
                  </p>

                  <div className="pt-2">
                    <a
                      href={mbeguChoice.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 bg-primary-green text-white rounded-full font-semibold text-sm hover:bg-white hover:text-deep-forest transition-colors shadow-sm"
                    >
                      <RollingText className="gap-2">
                        <span>Visit MbeguChoice Platform</span>
                        <ExternalLink size={16} />
                      </RollingText>
                    </a>
                  </div>
                </div>

                {/* Right: Key Platform Metrics / Highlights */}
                <div className="w-full lg:w-[380px] xl:w-[420px] flex-shrink-0 bg-white/[0.04] backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/[0.08] space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    Platform Impact & Reach
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {mbeguChoice.stats.map((stat, i) => (
                      <div key={i} className="bg-white/[0.04] rounded-2xl p-4 border border-white/[0.06]">
                        <div className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/60 font-medium leading-snug">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-white/60 font-light leading-relaxed pt-2 border-t border-white/[0.08]">
                    {mbeguChoice.spotlightDesc2}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Other Platforms Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherPlatforms.map((platform, idx) => {
                const Icon = 'icon' in platform ? platform.icon : null
                const isScreenshot = platform.imageType === 'screenshot' && platform.image
                const isLogo = platform.imageType === 'logo' && platform.image

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group rounded-[32px] bg-mist border border-mist hover:border-primary-green/20 hover:bg-white hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200 p-6 sm:p-8 lg:p-10 flex flex-col"
                  >
                    {/* Visual Media Header */}
                    {isScreenshot ? (
                      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md border border-stone-200/80 bg-white mb-6 transition-all duration-300">
                        <Image
                          src={platform.image!}
                          alt={platform.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                          className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                    ) : isLogo ? (
                      <div className="h-12 lg:h-14 flex items-center mb-6">
                        <Image
                          src={platform.image!}
                          alt={platform.title}
                          width={180}
                          height={56}
                          style={{ width: 'auto', height: '100%' }}
                          className="h-full w-auto object-contain object-left"
                        />
                      </div>
                    ) : Icon ? (
                      <div className="w-16 h-16 rounded-2xl bg-primary-green/10 flex items-center justify-center text-primary-green mb-6">
                        <Icon size={30} />
                      </div>
                    ) : null}

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl font-serif font-bold text-deep-forest tracking-tight pb-2">
                          {platform.title}
                        </h3>
                        {platform.link && (
                          <a
                            href={platform.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-green hover:opacity-80 transition-opacity mt-1 flex-shrink-0"
                            aria-label={`Open ${platform.title}`}
                          >
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
