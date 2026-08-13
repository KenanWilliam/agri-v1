'use client'

import { motion } from 'framer-motion'
import { Leaf, MonitorSmartphone, ClipboardCheck, Tractor, Users, Briefcase, Globe, Target, ArrowRight, BookOpen, LineChart } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function OurWorkPage() {
  const t = useTranslations('OurWork')
  const cards = [
    {
      title: t('c1_title'),
      description: t('c1_desc'),
      icon: MonitorSmartphone,
      color: 'primary-green',
      link: '/our-work/digital-platforms',
    },
    {
      title: t('c2_title'),
      description: t('c2_desc'),
      icon: ClipboardCheck,
      color: 'primary-blue',
      link: '/our-work/technical-studies',
    },
    {
      title: t('c3_title'),
      description: t('c3_desc'),
      icon: Tractor,
      color: 'deep-forest',
      link: '/our-work/project-implementation',
    },
    {
      title: t('c4_title'),
      description: t('c4_desc'),
      icon: LineChart,
      color: 'accent-gold',
      link: '/our-work/client-advisory',
    },
    {
      title: t('c5_title'),
      description: t('c5_desc'),
      icon: BookOpen,
      color: 'charcoal',
      link: '/our-work/capacity-building',
    },
    {
      title: t('c6_title'),
      description: t('c6_desc'),
      icon: Globe,
      color: 'lighter-dark-green',
      link: '/our-work/stakeholder-convenings',
    },
  ]

  const stats = [
    { value: '120+', label: t('s1_label'), icon: Users },
    { value: '250+', label: t('s2_label'), icon: Briefcase },
    { value: '35+', label: t('s3_label'), icon: Globe },
    { value: '100%', label: t('s4_label'), icon: Target },
  ]

  return (
    <>      <main className="bg-white min-h-screen">
        {/* Top Section */}
        <section className="relative w-full pt-16 lg:pt-28 pb-16 overflow-hidden">
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
                <div className="inline-flex items-center gap-2 text-primary-green font-bold text-sm tracking-[0.2em] uppercase">
                  <Leaf size={18} />
                  {t('practice')}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-7xl font-serif text-deep-forest font-bold leading-[1.1] tracking-tight">
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
        <section className="w-full pt-8 pb-16 relative z-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cards.map((card, idx) => {
                const Icon = card.icon;
                
                // Determine specific color classes based on the assigned color name
                let borderClass = 'border-primary-green/20';
                let textClass = 'text-primary-green';
                let bgClass = 'bg-primary-green';
                let iconBgClass = 'bg-primary-green/5';

                if (card.color === 'primary-blue') {
                  borderClass = 'border-primary-blue/20';
                  textClass = 'text-primary-blue';
                  bgClass = 'bg-primary-blue';
                  iconBgClass = 'bg-primary-blue/5';
                } else if (card.color === 'deep-forest') {
                  borderClass = 'border-deep-forest/20';
                  textClass = 'text-deep-forest';
                  bgClass = 'bg-deep-forest';
                  iconBgClass = 'bg-deep-forest/5';
                } else if (card.color === 'accent-gold') {
                  borderClass = 'border-accent-gold/20';
                  textClass = 'text-accent-gold';
                  bgClass = 'bg-accent-gold';
                  iconBgClass = 'bg-accent-gold/5';
                } else if (card.color === 'charcoal') {
                  borderClass = 'border-charcoal/20';
                  textClass = 'text-charcoal';
                  bgClass = 'bg-charcoal';
                  iconBgClass = 'bg-charcoal/5';
                } else if (card.color === 'lighter-dark-green') {
                  borderClass = 'border-lighter-dark-green/20';
                  textClass = 'text-lighter-dark-green';
                  bgClass = 'bg-lighter-dark-green';
                  iconBgClass = 'bg-lighter-dark-green/5';
                }

                return (
                  <Link key={idx} href={card.link} className="block h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 + (idx * 0.1) }}
                      whileHover={{ y: -5 }}
                      className={`rounded-[32px] border ${borderClass} p-8 lg:p-10 flex flex-col justify-between h-full min-h-[300px] md:min-h-[400px] bg-white shadow-sm hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200 group cursor-pointer`}
                    >
                      <div className="space-y-8">
                        {/* Top icon and arrow */}
                        <div className="flex justify-between items-start">
                          <div className={`w-16 h-16 rounded-full ${borderClass} border flex items-center justify-center ${textClass} ${iconBgClass}`}>
                            <Icon size={28} />
                          </div>
                          <div className={`w-10 h-10 rounded-full ${iconBgClass} flex items-center justify-center ${textClass}`}>
                            <ArrowRight size={18} className="rotate-[-45deg] group-hover:rotate-0 transition-transform" />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-4">
                          <h3 className={`text-2xl font-serif font-bold ${textClass}`}>{card.title}</h3>
                          <p className="text-charcoal/70 font-light leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Link */}
                      <div className="mt-8 flex justify-between items-center">
                        <span className={`font-bold text-sm ${textClass}`}>{t('learn_more')}</span>
                        <div className={`w-10 h-10 rounded-full ${bgClass} text-white flex items-center justify-center`}>
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats Bottom Banner */}
        <section className="w-full">
          <div className="w-full bg-deep-forest rounded-t-[40px] lg:rounded-t-[80px] py-12 px-6 overflow-hidden relative">
             {/* Decorative wave background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilterMap">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilterMap)" />
              </svg>
            </div>
            
            <div className="max-w-[1800px] mx-auto relative z-10 flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4 min-w-[200px]">
                  <stat.icon className="text-primary-green opacity-80" size={32} />
                  <div>
                    <div className="text-3xl font-serif font-bold text-white leading-none">{stat.value}</div>
                    <div className="text-xs text-white/70 tracking-wide mt-1">{stat.label}</div>
                  </div>
                  {/* Vertical separator (hidden on mobile, visible on desktop between items) */}
                  {i < stats.length - 1 && (
                    <div className="hidden lg:block w-px h-12 bg-white/10 ml-8 lg:ml-12"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>    </>
  )
}
