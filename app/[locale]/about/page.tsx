'use client'
import { RollingText } from '@/components/ui/rolling-text';

import { motion } from 'framer-motion'
import { Award, Heart, Handshake, Users, BookOpen, ShieldCheck, Target, Leaf, ArrowRight, TrendingUp, Shield, Zap, Globe, BarChart, MonitorSmartphone } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import OfficePlantsGallery from '@/components/motion/office-plants-gallery'
import { ScrollAccordion } from '@/components/motion/scroll-accordion'
import { useTranslations } from 'next-intl'

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
              <h1 className="text-5xl lg:text-7xl font-serif text-deep-forest font-bold tracking-tight">
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
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-deep-forest">{t('expertise_title')}</h2>
                <p className="text-xl text-charcoal/70 font-light">
                  {t('expertise_desc')}
                </p>
              </div>
              <Link href="/our-work" className="group flex items-center gap-2 text-deep-forest font-bold hover:gap-4 transition duration-200">
                {t('view_services')} <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
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
                        <h3 className="font-serif tracking-tight text-[#1A4D2E] text-2xl lg:text-3xl">
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
        <section className="w-full py-16 lg:py-20 bg-mist">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-10">
            <h2 className="text-deep-forest text-4xl lg:text-5xl font-serif">{t('cta_title')}</h2>
            <p className="text-xl lg:text-2xl text-charcoal/80 font-light leading-relaxed">
              {t('cta_desc')}
            </p>
            <div className="pt-6">
              <Link href="/contact" className="overflow-hidden relative group inline-flex items-center justify-center gap-2 px-8 py-4 bg-deep-forest text-white rounded-full font-bold transition duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-deep-forest/20">
<RollingText className="gap-2">
                {t('get_in_touch')}
                <ArrowRight size={20} />
              </RollingText>
</Link>
            </div>
          </div>
        </section>
      </main>    </>
  )
}
