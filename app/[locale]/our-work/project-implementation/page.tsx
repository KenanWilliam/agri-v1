'use client'
import { RollingText } from '@/components/ui/rolling-text';

import { motion } from 'framer-motion'
import {
  Tractor,
  Target,
  Users,
  ClipboardList,
  MapPin,
  Sprout,
  ArrowRight,
  Leaf,
  CheckCircle2,
  Handshake,
  Calendar,
  Shield,
  FileText,
  Download,
  Sparkles,
  Layers,
  Building2,
  BookOpen,
} from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function ProjectImplementationPage() {
  const t = useTranslations('ProjectImplementation')

  const implementationAreas = [
    {
      icon: Sprout,
      title: t('areas.0.title'),
      points: [
        t('areas.0.points.0'),
        t('areas.0.points.1'),
        t('areas.0.points.2'),
      ],
    },
    {
      icon: MapPin,
      title: t('areas.1.title'),
      points: [
        t('areas.1.points.0'),
        t('areas.1.points.1'),
        t('areas.1.points.2'),
      ],
    },
    {
      icon: Handshake,
      title: t('areas.2.title'),
      points: [
        t('areas.2.points.0'),
        t('areas.2.points.1'),
        t('areas.2.points.2'),
      ],
    },
    {
      icon: Shield,
      title: t('areas.3.title'),
      points: [
        t('areas.3.points.0'),
        t('areas.3.points.1'),
        t('areas.3.points.2'),
      ],
    },
    {
      icon: ClipboardList,
      title: t('areas.4.title'),
      points: [
        t('areas.4.points.0'),
        t('areas.4.points.1'),
        t('areas.4.points.2'),
      ],
    },
    {
      icon: Target,
      title: t('areas.5.title'),
      points: [
        t('areas.5.points.0'),
        t('areas.5.points.1'),
        t('areas.5.points.2'),
      ],
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: t('processSteps.0.title'),
      description: t('processSteps.0.description'),
      icon: Target,
    },
    {
      step: '02',
      title: t('processSteps.1.title'),
      description: t('processSteps.1.description'),
      icon: Users,
    },
    {
      step: '03',
      title: t('processSteps.2.title'),
      description: t('processSteps.2.description'),
      icon: Tractor,
    },
    {
      step: '04',
      title: t('processSteps.3.title'),
      description: t('processSteps.3.description'),
      icon: ClipboardList,
    },
    {
      step: '05',
      title: t('processSteps.4.title'),
      description: t('processSteps.4.description'),
      icon: CheckCircle2,
    },
  ]

  const kcdmsStudies = [
    {
      title: t('cs_study1_title'),
      desc: t('cs_study1_desc'),
      tag: t('cs_study1_tag'),
      file: '/resources/Scoping-Study-Pasture-and-Fodder-Planting-Materials-in-Kenya.pdf',
      size: '1.8 MB',
      icon: Sprout,
    },
    {
      title: t('cs_study2_title'),
      desc: t('cs_study2_desc'),
      tag: t('cs_study2_tag'),
      file: '/resources/Scoping-Study-Planting-Materials-for-Value-Chain-Crops-in-Kenya-banana-avocado-mango-pineapples-passion-fruit-sweet-potatoes-African-leafy-vegetables.pdf',
      size: '1.7 MB',
      icon: Layers,
    },
    {
      title: t('cs_study3_title'),
      desc: t('cs_study3_desc'),
      tag: t('cs_study3_tag'),
      file: '/resources/Scoping-Study-Horticulture-Seedling-Nurseries-as-a-Viable-Business-Model-in-Kenya.pdf',
      size: '1.6 MB',
      icon: Building2,
    },
    {
      title: t('cs_study4_title'),
      desc: t('cs_study4_desc'),
      tag: t('cs_study4_tag'),
      file: '/resources/Scoping-Study-Agro-Dealer-Association-Development-in-Twelve-Counties-in-Kenya.pdf',
      size: '929 KB',
      icon: Users,
    },
  ]

  const kcdmsStats = [
    { value: t('cs_res1'), label: t('cs_res1_label') },
    { value: t('cs_res2'), label: t('cs_res2_label') },
    { value: t('cs_res3'), label: t('cs_res3_label') },
    { value: t('cs_res4'), label: t('cs_res4_label') },
  ]

  return (
    <>
      <main className="bg-white min-h-[100dvh]">
        {/* ─── Hero ─── */}
        <section className="relative w-full pt-16 lg:pt-28 pb-20 overflow-hidden">
          {/* Background accents */}
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-deep-forest/[0.04] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-green/[0.03] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
              {/* Left */}
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
                <p className="text-deep-forest font-semibold text-base sm:text-lg tracking-wide">
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
                <div className="hidden lg:block absolute left-0 top-16 bottom-0 w-px bg-deep-forest/10" />
                <div className="lg:pl-10 space-y-4">
                  <p className="text-base sm:text-lg lg:text-[14.5px] min-[1440px]:text-xl text-charcoal/85 leading-relaxed font-normal">
                    {t('hero_desc1')}
                  </p>
                  <p className="text-base sm:text-lg lg:text-[14.5px] min-[1440px]:text-xl text-charcoal/85 leading-relaxed font-normal">
                    {t('hero_desc2')}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="overflow-hidden relative group inline-flex items-center gap-2 px-8 py-4 bg-deep-forest text-white rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
<RollingText className="gap-2">
                      {t('req_partnership')}
                      <ArrowRight size={16} className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-out shrink-0" />
                    </RollingText>
</Link>
                    <Link
                      href="/our-work"
                      className="overflow-hidden relative group inline-flex items-center gap-2 px-8 py-4 border border-deep-forest/20 text-deep-forest rounded-full font-semibold text-sm hover:bg-deep-forest/5 transition-colors"
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


        {/* ─── Key Implementation Areas ─── */}
        <section className="w-full pb-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl mb-12 lg:mb-16"
            >
              <h2
                className="font-serif font-bold text-deep-forest tracking-tight pb-2"
                style={{ fontSize: 'clamp(1.75rem, 1.3rem + 2vw, 3rem)' }}
              >
                {t('ia_title')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {implementationAreas.map((area, idx) => {
                const Icon = area.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group rounded-[32px] bg-mist border border-mist hover:border-primary-green/20 hover:bg-white hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200 p-8 lg:p-10 flex flex-col relative overflow-hidden"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-primary-green/10 flex items-center justify-center text-primary-green mb-6 group-hover:bg-primary-green group-hover:text-white transition duration-200">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-serif font-bold text-deep-forest mb-4 tracking-tight pb-2">
                      {area.title}
                    </h3>

                    <ul className="space-y-3 flex-1">
                      {area.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-charcoal/80 font-light leading-relaxed text-[14.5px] min-[1440px]:text-base"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-primary-green mt-0.5 shrink-0"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>


        {/* ─── Flagship Showcase: USAID's KCDMS Studies ─── */}
        <section className="w-full pb-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[32px] sm:rounded-[44px] bg-gradient-to-b from-[#0c2616] via-deep-forest to-[#08180e] overflow-hidden relative border border-white/10 shadow-[0_25px_60px_-15px_rgba(10,40,20,0.55)]"
            >
              {/* Subtle noise texture */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <filter id="noiseFilterCase">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.65"
                      numOctaves="3"
                      stitchTiles="stitch"
                    />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#noiseFilterCase)" />
                </svg>
              </div>

              {/* Ambient radial glows */}
              <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-primary-green/15 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-400/10 rounded-full blur-[130px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

              <div className="relative z-10 p-6 sm:p-10 lg:p-14 xl:p-16 space-y-12">
                {/* ── Header ── */}
                <div className="space-y-5 max-w-4xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-green/20 text-emerald-300 border border-primary-green/30 backdrop-blur-md">
                      <Sparkles size={13} className="text-emerald-300 shrink-0" />
                      {t('cs_tag')}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs text-white/70 bg-white/[0.05] border border-white/[0.08]">
                      <Calendar size={13} className="text-white/40 shrink-0" />
                      {t('cs_period')}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                    {t('cs_title')}
                  </h2>

                  <p className="text-white/75 font-light leading-relaxed text-[15px] sm:text-base lg:text-lg">
                    {t('cs_desc')}
                  </p>
                </div>

                {/* ── Stats Ribbon ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
                  {kcdmsStats.map((st, i) => (
                    <div key={i} className="flex flex-col items-center sm:items-start p-3 sm:p-4 text-center sm:text-left border-r last:border-r-0 border-white/[0.06]">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight mb-1">
                        {st.value}
                      </span>
                      <span className="text-xs sm:text-sm text-white/60 font-light">
                        {st.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* ── 4 Published Studies Grid ── */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-white flex items-center gap-2">
                      <BookOpen size={20} className="text-primary-green" />
                      {t('cs_studies_title')}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {kcdmsStudies.map((study, idx) => {
                      const Icon = study.icon
                      return (
                        <div
                          key={idx}
                          className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] hover:border-primary-green/40 transition-all duration-300 shadow-sm"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-3 mb-4">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-green/15 text-emerald-300 border border-primary-green/25">
                                <Icon size={13} />
                                {study.tag}
                              </span>
                              <span className="text-xs font-mono text-white/40 tracking-wider">
                                {study.size}
                              </span>
                            </div>

                            <h4 className="text-lg sm:text-xl font-serif font-bold text-white mb-2.5 leading-snug group-hover:text-emerald-300 transition-colors">
                              {study.title}
                            </h4>

                            <p className="text-white/70 font-light text-sm leading-relaxed mb-6">
                              {study.desc}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                            <a
                              href={study.file}
                              download
                              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-green hover:text-emerald-300 transition-colors"
                            >
                              <Download size={15} />
                              {t('cs_download_pdf')}
                            </a>
                            <FileText size={16} className="text-white/30 group-hover:text-primary-green transition-colors" />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* ── Methodologies & Scope ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                  <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-6 sm:p-7 backdrop-blur-sm">
                    <div className="text-xs text-primary-green tracking-widest uppercase font-bold mb-4 flex items-center gap-2">
                      <Target size={14} />
                      {t('cs_meth_label')}
                    </div>
                    <ul className="space-y-3">
                      {[
                        t('cs_meth_points.0'),
                        t('cs_meth_points.1'),
                        t('cs_meth_points.2'),
                        t('cs_meth_points.3'),
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-white/80 font-light text-sm leading-relaxed">
                          <CheckCircle2 size={16} className="text-primary-green shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-6 sm:p-7 backdrop-blur-sm flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-primary-green tracking-widest uppercase font-bold mb-2">
                        {t('cs_client_label')}
                      </div>
                      <p className="text-white font-medium text-base mb-5">
                        {t('cs_client_val')}
                      </p>

                      <div className="text-xs text-primary-green tracking-widest uppercase font-bold mb-3">
                        {t('cs_scope_label')}
                      </div>
                      <ul className="space-y-2.5 mb-6">
                        {[
                          t('cs_scope_points.0'),
                          t('cs_scope_points.1'),
                          t('cs_scope_points.2'),
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/75 font-light text-xs sm:text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-green shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-4">
                      <Link
                        href="/resources?tab=scoping-studies"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                      >
                        {t('cs_view_all_studies')}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        <section className="w-full">
          <div className="w-full bg-deep-forest rounded-t-[40px] lg:rounded-t-[80px] overflow-hidden relative">
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(58,180,74,0.08),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(36,132,198,0.05),transparent_50%)] pointer-events-none" />

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilterCTA">
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
                  filter="url(#noiseFilterCTA)"
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
                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white tracking-tight pb-2 mb-6" dangerouslySetInnerHTML={{ __html: t('cta_title') }} />
                <p className="text-base sm:text-lg lg:text-[14.5px] min-[1440px]:text-lg text-white/60 font-light leading-relaxed mb-10 max-w-xl mx-auto">
                  {t('cta_desc')}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="overflow-hidden relative group inline-flex items-center gap-2 px-8 py-4 bg-primary-green text-white rounded-full font-semibold hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-green/20 transition-all"
                  >
<RollingText className="gap-2">
                    {t('cta_btn1')}
                    <ArrowRight size={18} className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-out shrink-0" />
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
