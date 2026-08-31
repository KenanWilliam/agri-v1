'use client'

import { motion } from 'framer-motion'
import { MonitorSmartphone, ClipboardCheck, Tractor, Globe, ArrowRight, BookOpen, LineChart } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function OurWorkPage() {
  const t = useTranslations('OurWork')
  const cards = [
    {
      title: t('c1_title'),
      description: t('c1_desc'),
      icon: MonitorSmartphone,
      link: '/our-work/digital-platforms',
    },
    {
      title: t('c2_title'),
      description: t('c2_desc'),
      icon: ClipboardCheck,
      link: '/our-work/technical-studies',
    },
    {
      title: t('c3_title'),
      description: t('c3_desc'),
      icon: Tractor,
      link: '/our-work/project-implementation',
    },
    {
      title: t('c4_title'),
      description: t('c4_desc'),
      icon: LineChart,
      link: '/our-work/client-advisory',
    },
    {
      title: t('c5_title'),
      description: t('c5_desc'),
      icon: BookOpen,
      link: '/our-work/capacity-building',
    },
    {
      title: t('c6_title'),
      description: t('c6_desc'),
      icon: Globe,
      link: '/our-work/stakeholder-convenings',
    },
  ]

  return (
    <main className="bg-white min-h-[100dvh]">
        {/* Top Section */}
        <section className="relative w-full pt-16 lg:pt-28 pb-0 overflow-hidden">
          {/* Subtle background decorative shapes */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-green/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
              
              {/* Left Side: Title */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-6"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-7xl font-serif text-deep-forest font-bold leading-tight tracking-tight pb-2">
                  {t('title')}
                </h1>
              </motion.div>

              {/* Right Side: Description */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 lg:pt-16 relative"
              >
                {/* Vertical divider line for desktop */}
                <div className="hidden lg:block absolute left-0 top-16 bottom-0 w-px bg-mist"></div>
                <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed font-light lg:pl-10">
                  {t('subtitle')}
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="w-full pt-12 lg:pt-20 pb-20 relative z-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cards.map((card, idx) => {
                const Icon = card.icon

                return (
                  <Link key={idx} href={card.link} className="block h-full group">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + idx * 0.08 }}
                      whileHover={{ y: -6 }}
                      className="rounded-[28px] md:rounded-[32px] bg-mist border border-stone-200/70 group-hover:border-primary-green/30 group-hover:bg-white group-hover:shadow-xl transition-all duration-300 p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full min-h-[300px] md:min-h-[360px]"
                    >
                      <div className="space-y-6">
                        {/* Icon Badge */}
                        <div className="w-14 h-14 rounded-2xl bg-white border border-stone-200/60 shadow-sm flex items-center justify-center text-primary-green group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                          <Icon size={26} />
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-3">
                          <h2 className="text-2xl lg:text-[1.65rem] font-serif font-bold text-deep-forest tracking-tight pb-1 leading-snug group-hover:text-primary-green transition-colors duration-200">
                            {card.title}
                          </h2>
                          <p className="text-charcoal/75 font-light leading-relaxed text-sm lg:text-base">
                            {card.description}
                          </p>
                        </div>
                      </div>

                      {/* Single Clean Bottom Action Link */}
                      <div className="pt-6 mt-auto flex items-center gap-2 text-primary-green font-semibold text-sm">
                        <span>{t('learn_more')}</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
    </main>
  )
}
