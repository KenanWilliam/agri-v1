'use client'
import { useState } from 'react'
import { RollingText } from '@/components/ui/rolling-text';

import { motion, AnimatePresence } from 'framer-motion'
import { Award, Heart, Handshake, Users, BookOpen, ShieldCheck, Target, Leaf, ArrowRight, TrendingUp, Shield, Zap, Globe, BarChart, MonitorSmartphone } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import OfficePlantsGallery from '@/components/motion/office-plants-gallery'
import { ScrollAccordion } from '@/components/motion/scroll-accordion'
import { useTranslations } from 'next-intl'

const expertiseItems = [
  { key: '0', icon: TrendingUp },
  { key: '1', icon: BarChart },
  { key: '2', icon: Shield },
  { key: '3', icon: Users },
  { key: '4', icon: BookOpen },
  { key: '5', icon: MonitorSmartphone },
  { key: '6', icon: Target },
]

function ExpertiseAccordion({ t }: { t: ReturnType<typeof useTranslations<'About'>> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="md:hidden flex flex-col divide-y divide-gray-100">
      {expertiseItems.map((item, idx) => {
        const Icon = item.icon
        const isOpen = openIndex === idx
        return (
          <div key={item.key}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center gap-4 py-5 text-left"
            >
              <span className="text-xs font-bold text-primary-green/60 tabular-nums w-5 shrink-0">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                <Icon className="text-primary-green" size={20} />
              </div>
              <span className="flex-1 font-serif text-deep-forest text-lg font-medium tracking-tight pb-2">
                {t(`expertise_cards.${item.key}.title`)}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" className="text-charcoal/60">
                  <line x1="6" y1="1" x2="6" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pl-[3.75rem] pr-4 pb-5 text-sm text-charcoal/70 leading-relaxed">
                    {t(`expertise_cards.${item.key}.desc`)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default function AboutPage() {
  const t = useTranslations('About')
  return (
    <>      <main className="bg-white min-h-screen">

        {/* Editorial Hero */}
        <section className="relative w-full pt-16 lg:pt-28 pb-10 overflow-hidden snap-start scroll-mt-20 bg-mist">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-7xl font-serif text-deep-forest font-bold tracking-tight pb-2">
                {t('title')}
              </h1>
              <p className="text-lg lg:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed font-light">
                {t('subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* <OfficePlantsGallery showMissionVision /> */}
        {/* Mission, Vision, Goal Section replaced with ScrollAccordion */}
        <ScrollAccordion
          title={t('title')}
          visionTitle={t('vision_title')}
          visionDesc={t.rich('vision_desc', { strong: (chunks) => <strong className="font-semibold text-deep-forest">{chunks}</strong> })}
          missionTitle={t('mission_title')}
          missionDesc={t('mission_desc')}
          goalTitle={t('goal_title')}
          goalDesc={t('goal_desc').replace(/<br\s*\/?>/g, '')}
        />

        {/* Bento Expertise Section */}
        <section className="w-full py-16 lg:py-16 bg-white relative border-t border-mist">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 md:gap-8">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-deep-forest">{t('expertise_title')}</h2>
                <p className="text-base md:text-xl text-charcoal/70 font-light">
                  {t('expertise_desc')}
                </p>
              </div>
              <Link href="/our-work" className="group flex items-center gap-2 text-deep-forest font-bold hover:gap-4 transition duration-200">
                {t('view_services')} <ArrowRight size={20} />
              </Link>
            </div>

            {/* Desktop: Bento Grid */}
            <div className="hidden md:grid grid-cols-12 gap-6">
              {[
                { key: '0', colSpan: 'md:col-span-7', icon: TrendingUp },
                { key: '1', colSpan: 'md:col-span-5', icon: BarChart },
                { key: '2', colSpan: 'md:col-span-4', icon: Shield },
                { key: '3', colSpan: 'md:col-span-4', icon: Users },
                { key: '4', colSpan: 'md:col-span-4', icon: BookOpen },
                { key: '5', colSpan: 'md:col-span-6', icon: MonitorSmartphone },
                { key: '6', colSpan: 'md:col-span-6', icon: Target },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.key}
                    className={`${item.colSpan} rounded-3xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex flex-col justify-between min-h-[300px] gap-6`}
                  >
                    <div className="space-y-6">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0">
                        <Icon className="text-primary-green" size={28} />
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-serif tracking-tight pb-2 text-[#1A4D2E] text-2xl lg:text-3xl">
                          {t(`expertise_cards.${item.key}.title`)}
                        </h3>
                        <p className="font-sans text-gray-600 lg:text-lg">
                          {t(`expertise_cards.${item.key}.desc`)}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="text-primary-green group-hover:translate-x-1 transition-transform mt-auto" size={24} />
                  </motion.div>
                )
              })}
            </div>

            {/* Mobile: Accordion */}
            <ExpertiseAccordion t={t} />
          </div>
        </section>


        {/* Core Values Grid */}
        <section className="w-full py-16 lg:py-16 bg-white relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-deep-forest">{t('values_title')}</h2>
                <p className="text-charcoal/50 font-bold uppercase tracking-widest text-xs">{t('values_subtitle')}</p>
              </div>
              
              <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden">
                <Image
                  src="/our-values.png"
                  alt="Our Core Values"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-10 lg:py-20 bg-mist">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-6 lg:space-y-10">
            <h2 className="text-deep-forest text-2xl sm:text-3xl lg:text-5xl font-serif">{t('cta_title')}</h2>
            <p className="text-lg lg:text-2xl text-charcoal/80 font-light leading-relaxed">
              {t('cta_desc')}
            </p>
            <div className="flex flex-row flex-wrap gap-3 sm:gap-6 justify-center pt-2 sm:pt-6">
              <Link href="/contact" className="overflow-hidden relative group inline-flex items-center justify-center gap-1.5 sm:gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-deep-forest text-white rounded-full font-bold text-sm sm:text-base transition duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-deep-forest/20">
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
