'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export interface ServicePillar {
  key: string
  title: string
  desc: string
  colSpanMd: string
  colSpanLg: string
  route: string
}

interface BentoCardProps {
  pillar: ServicePillar
}

function BentoCard({ pillar }: BentoCardProps) {
  return (
    <div
      className={`group relative rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden flex flex-col justify-between h-full p-5 sm:p-7 lg:p-7 xl:p-9 bg-white border border-stone-200/80 text-deep-forest shadow-sm hover:shadow-xl hover:border-primary-green/30 hover:-translate-y-1.5 transition-all duration-300 ${pillar.colSpanMd} ${pillar.colSpanLg}`}
    >
      {/* Content */}
      <div className="space-y-3">
        <h3
          className="font-serif tracking-tight font-bold leading-[1.25] text-deep-forest group-hover:text-primary-green transition-colors duration-200"
          style={{ fontSize: 'clamp(1.25rem, 1.15rem + 0.4vw, 1.5rem)' }}
        >
          {pillar.title}
        </h3>
        <p
          className="font-sans font-normal leading-relaxed text-charcoal/90 text-[14.5px] min-[1440px]:text-[15.5px]"
        >
          {pillar.desc}
        </p>
      </div>

      {/* Bottom Footer: Aligned in exact same row across all cards */}
      <div className="pt-5 lg:pt-6 mt-auto flex items-center justify-end border-t border-stone-100">
        <Link
          href={pillar.route}
          className="inline-flex items-center gap-2 text-sm lg:text-[14.5px] font-bold text-[#1A4D2E] group-hover:text-primary-green transition-colors duration-200"
        >
          <span>Explore Domain</span>
          <ArrowRight size={15} className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-out shrink-0" />
        </Link>
      </div>
    </div>
  )
}

export default function ServicesBentoGrid() {
  const t = useTranslations('About')

  const pillars: ServicePillar[] = [
    {
      key: '0',
      title: t('expertise_cards.0.title'),
      desc: t('expertise_cards.0.desc'),
      colSpanMd: 'md:col-span-2',
      colSpanLg: 'lg:col-span-7',
      route: '/our-work/project-implementation',
    },
    {
      key: '1',
      title: t('expertise_cards.1.title'),
      desc: t('expertise_cards.1.desc'),
      colSpanMd: 'md:col-span-1',
      colSpanLg: 'lg:col-span-5',
      route: '/our-work/client-advisory',
    },
    {
      key: '2',
      title: t('expertise_cards.2.title'),
      desc: t('expertise_cards.2.desc'),
      colSpanMd: 'md:col-span-1',
      colSpanLg: 'lg:col-span-4',
      route: '/our-work/capacity-building',
    },
    {
      key: '3',
      title: t('expertise_cards.3.title'),
      desc: t('expertise_cards.3.desc'),
      colSpanMd: 'md:col-span-1',
      colSpanLg: 'lg:col-span-4',
      route: '/our-work/technical-studies',
    },
    {
      key: '4',
      title: t('expertise_cards.4.title'),
      desc: t('expertise_cards.4.desc'),
      colSpanMd: 'md:col-span-1',
      colSpanLg: 'lg:col-span-4',
      route: '/our-work/digital-platforms',
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 2xl:py-24 bg-[#F8F6F0] relative border-t border-stone-200/60 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#3ab44a]/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#2484c6]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-6 md:gap-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F1A15] tracking-tight pb-1 leading-tight">
              {t('expertise_title')}
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-stone-700 font-normal leading-relaxed">
              {t('expertise_desc')}
            </p>
          </div>

          <Link
            href="/our-work"
            className="group shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0F1A15] hover:bg-[#1A4D2E] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            <span>{t('view_services')}</span>
            <ArrowRight size={16} className="transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300 ease-out shrink-0" />
          </Link>
        </div>

        {/* Bento Grid with stretch heights and perfectly aligned row baselines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {pillars.map((pillar) => (
            <BentoCard key={pillar.key} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  )
}
