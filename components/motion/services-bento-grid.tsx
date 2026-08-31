'use client'

import React from 'react'
import {
  Sprout,
  BarChart3,
  Scale,
  GraduationCap,
  Compass,
  MonitorSmartphone,
  TrendingUp,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export interface ServicePillar {
  key: string
  title: string
  desc: string
  impactTag: string
  icon: LucideIcon
  colSpanMd: string
  colSpanLg: string
  route: string
}

interface BentoCardProps {
  pillar: ServicePillar
  index: number
}

function BentoCard({ pillar, index }: BentoCardProps) {
  const Icon = pillar.icon

  return (
    <div
      className={`group relative rounded-[28px] sm:rounded-[32px] overflow-hidden flex flex-col justify-between h-full p-6 sm:p-8 lg:p-9 bg-white border border-stone-200/80 text-deep-forest shadow-sm hover:shadow-xl hover:border-primary-green/30 hover:-translate-y-1.5 transition-all duration-300 ${pillar.colSpanMd} ${pillar.colSpanLg}`}
    >
      {/* Top and Content */}
      <div className="space-y-6">
        {/* Top Header: Icon + Domain Category Pill */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-[#1A4D2E]/5 border border-[#1A4D2E]/10 flex items-center justify-center text-[#1A4D2E] group-hover:bg-[#1A4D2E] group-hover:text-white transition-colors duration-300">
            <Icon size={22} />
          </div>
          <span className="text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-stone-100/90 text-stone-600 border border-stone-200/60">
            {pillar.impactTag}
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h3 className="font-serif tracking-tight font-bold text-xl sm:text-2xl lg:text-[1.55rem] 2xl:text-[1.75rem] leading-[1.25] text-deep-forest group-hover:text-primary-green transition-colors duration-200">
            {pillar.title}
          </h3>
          <p className="font-sans font-light text-sm sm:text-base leading-relaxed text-charcoal/75">
            {pillar.desc}
          </p>
        </div>
      </div>

      {/* Bottom Footer: Aligned in exact same row across all cards */}
      <div className="pt-6 mt-auto flex items-center justify-between border-t border-stone-100">
        <span className="text-xs font-semibold text-stone-400">
          0{index + 1}
        </span>

        <Link
          href={pillar.route}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1A4D2E] group-hover:text-primary-green transition-colors duration-200"
        >
          <span>Explore Domain</span>
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
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
      impactTag: 'Value Chains & Markets',
      icon: Sprout,
      colSpanMd: 'md:col-span-2',
      colSpanLg: 'lg:col-span-7',
      route: '/our-work/project-implementation',
    },
    {
      key: '1',
      title: t('expertise_cards.1.title'),
      desc: t('expertise_cards.1.desc'),
      impactTag: 'Decision Support',
      icon: BarChart3,
      colSpanMd: 'md:col-span-1',
      colSpanLg: 'lg:col-span-5',
      route: '/our-work/technical-studies',
    },
    {
      key: '2',
      title: t('expertise_cards.2.title'),
      desc: t('expertise_cards.2.desc'),
      impactTag: 'Policy & Regulatory',
      icon: Scale,
      colSpanMd: 'md:col-span-1',
      colSpanLg: 'lg:col-span-4',
      route: '/our-work/client-advisory',
    },
    {
      key: '3',
      title: t('expertise_cards.3.title'),
      desc: t('expertise_cards.3.desc'),
      impactTag: 'Capacity Building',
      icon: GraduationCap,
      colSpanMd: 'md:col-span-1',
      colSpanLg: 'lg:col-span-4',
      route: '/our-work/capacity-building',
    },
    {
      key: '4',
      title: t('expertise_cards.4.title'),
      desc: t('expertise_cards.4.desc'),
      impactTag: 'Strategic Diagnostics',
      icon: Compass,
      colSpanMd: 'md:col-span-1',
      colSpanLg: 'lg:col-span-4',
      route: '/our-work/client-advisory',
    },
    {
      key: '5',
      title: t('expertise_cards.5.title'),
      desc: t('expertise_cards.5.desc'),
      impactTag: 'Digital & ICT Systems',
      icon: MonitorSmartphone,
      colSpanMd: 'md:col-span-1',
      colSpanLg: 'lg:col-span-6',
      route: '/our-work/digital-platforms',
    },
    {
      key: '6',
      title: t('expertise_cards.6.title'),
      desc: t('expertise_cards.6.desc'),
      impactTag: 'MEL & Impact Learning',
      icon: TrendingUp,
      colSpanMd: 'md:col-span-1',
      colSpanLg: 'lg:col-span-6',
      route: '/our-work/technical-studies',
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 2xl:py-24 bg-[#F8F6F0] relative border-t border-stone-200/60 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#3ab44a]/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#2484c6]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-6 md:gap-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F1A15] tracking-tight pb-1 leading-tight">
              {t('expertise_title')}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-light leading-relaxed">
              {t('expertise_desc')}
            </p>
          </div>

          <Link
            href="/our-work"
            className="group shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0F1A15] hover:bg-[#1A4D2E] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            <span>{t('view_services')}</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid with stretch heights and perfectly aligned row baselines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {pillars.map((pillar, idx) => (
            <BentoCard key={pillar.key} pillar={pillar} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
