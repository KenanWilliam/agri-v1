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
import dynamic from 'next/dynamic'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

// Dynamically import PdfPreview with SSR disabled to render real PDF covers
const PdfPreview = dynamic(() => import('@/components/pdf-preview'), {
  ssr: false,
  loading: () => (
    <div className="relative w-full overflow-hidden bg-mist flex flex-col items-center justify-center gap-3 animate-pulse aspect-[1/1.2]">
      <FileText size={32} className="text-primary-green/30" />
      <div className="h-2 w-2/3 rounded-full bg-primary-green/10" />
      <div className="h-2 w-1/2 rounded-full bg-primary-green/10" />
    </div>
  ),
})

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
      citation: t('cs_study1_citation'),
      file: '/resources/Scoping-Study-Pasture-and-Fodder-Planting-Materials-in-Kenya.pdf',
    },
    {
      title: t('cs_study2_title'),
      citation: t('cs_study2_citation'),
      file: '/resources/Scoping-Study-Planting-Materials-for-Value-Chain-Crops-in-Kenya-banana-avocado-mango-pineapples-passion-fruit-sweet-potatoes-African-leafy-vegetables.pdf',
    },
    {
      title: t('cs_study3_title'),
      citation: t('cs_study3_citation'),
      file: '/resources/Scoping-Study-Horticulture-Seedling-Nurseries-as-a-Viable-Business-Model-in-Kenya.pdf',
      clientLink: 'https://www.agrilinks.org/post/private-horticulture-seedling-nurseries-kenya',
    },
    {
      title: t('cs_study4_title'),
      citation: t('cs_study4_citation'),
      file: '/resources/Scoping-Study-Agro-Dealer-Association-Development-in-Twelve-Counties-in-Kenya.pdf',
    },
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
        <section className="w-full py-20 lg:py-28 bg-[#F0F4EC] border-y border-[#E0E7DC]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-10"
            >
              {/* ── Title & Explainer Text ── */}
              <div className="max-w-4xl space-y-5">
                <h2
                  className="font-serif font-bold text-deep-forest tracking-tight pb-2"
                  style={{ fontSize: 'clamp(2rem, 1.4rem + 2.2vw, 3.5rem)' }}
                >
                  {t('cs_title')}
                </h2>

                <div className="space-y-4 text-charcoal/85 font-normal leading-relaxed text-base sm:text-lg lg:text-[17px]">
                  <p>{t('cs_desc1')}</p>
                  <p>{t('cs_desc2')}</p>
                </div>
              </div>

              {/* ── 4 Published Studies with Actual Doc Previews ── */}
              <div className="pt-2">
                <div className="flex items-center gap-2.5 mb-6">
                  <BookOpen size={20} className="text-primary-green" />
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-deep-forest">
                    {t('cs_studies_title')}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
                  {kcdmsStudies.map((study, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-black/[0.06] hover:border-primary-green/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* Document Preview Thumbnail */}
                      <div className="relative w-full aspect-[1/1.2] overflow-hidden bg-mist/60 border-b border-black/[0.05]">
                        <PdfPreview pdfUrl={study.file} />
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-primary-green bg-primary-green/10 px-2.5 py-0.5 rounded-full">
                            {t('cs_tag')}
                          </span>
                          <span className="text-[10px] uppercase font-mono tracking-wider text-charcoal/50 bg-mist px-2 py-0.5 rounded">
                            PDF
                          </span>
                        </div>

                        <p className="text-[11px] font-bold text-deep-forest/70 uppercase tracking-wide mb-1.5">
                          {t('cs_client_tag')}
                        </p>

                        <h4 className="text-base font-serif font-bold text-deep-forest mb-2 leading-snug group-hover:text-primary-green transition-colors line-clamp-3">
                          {study.title}
                        </h4>

                        <p className="text-xs text-charcoal/70 font-light leading-relaxed mb-4 flex-grow line-clamp-4">
                          {study.citation}
                        </p>

                        <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between mt-auto">
                          <a
                            href={study.file}
                            download
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-deep-forest hover:text-primary-green transition-colors"
                          >
                            <Download size={13} className="text-primary-green" />
                            <span>{t('cs_download_pdf')}</span>
                          </a>

                          {study.clientLink && (
                            <a
                              href={study.clientLink}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary-green hover:underline"
                            >
                              <span>Agrilinks</span>
                              <ArrowRight size={11} />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── Bottom Link to Resource Library ── */}
              <div className="pt-4 flex items-center justify-start">
                <Link
                  href="/resources?tab=scoping-studies"
                  className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 bg-deep-forest text-white rounded-full font-semibold text-sm hover:bg-deep-forest/90 transition-all shadow-md"
                >
                  <RollingText className="gap-2">
                    {t('cs_view_all_studies')}
                    <ArrowRight size={15} className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-out shrink-0" />
                  </RollingText>
                </Link>
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
