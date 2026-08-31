import { MonitorSmartphone, ClipboardCheck, Tractor, Globe, ArrowRight, BookOpen, LineChart } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function OurWorkPage() {
  const t = useTranslations('OurWork')
  const cards = [
    {
      title: t('c1_title'),
      description: t('c1_desc'),
      mobileDescription: t('c1_mobile_desc'),
      icon: MonitorSmartphone,
      link: '/our-work/digital-platforms',
      borderClass: 'border-emerald-200/90 hover:border-emerald-500',
      textClass: 'text-emerald-950',
      iconBgClass: 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/20',
      cardBgClass: 'bg-[#F0F9F4] hover:bg-white',
      btnBgClass: 'bg-emerald-700 text-white group-hover:bg-emerald-800',
    },
    {
      title: t('c2_title'),
      description: t('c2_desc'),
      mobileDescription: t('c2_mobile_desc'),
      icon: ClipboardCheck,
      link: '/our-work/technical-studies',
      borderClass: 'border-sky-200/90 hover:border-sky-500',
      textClass: 'text-slate-950',
      iconBgClass: 'bg-sky-700 text-white shadow-sm shadow-sky-700/20',
      cardBgClass: 'bg-[#F0F6FA] hover:bg-white',
      btnBgClass: 'bg-sky-700 text-white group-hover:bg-sky-800',
    },
    {
      title: t('c3_title'),
      description: t('c3_desc'),
      mobileDescription: t('c3_mobile_desc'),
      icon: Tractor,
      link: '/our-work/project-implementation',
      borderClass: 'border-[#1A4D2E]/25 hover:border-[#1A4D2E]/70',
      textClass: 'text-[#123821]',
      iconBgClass: 'bg-[#1A4D2E] text-white shadow-sm shadow-[#1A4D2E]/20',
      cardBgClass: 'bg-[#EDF3EF] hover:bg-white',
      btnBgClass: 'bg-[#1A4D2E] text-white group-hover:bg-[#123821]',
    },
    {
      title: t('c4_title'),
      description: t('c4_desc'),
      mobileDescription: t('c4_mobile_desc'),
      icon: LineChart,
      link: '/our-work/client-advisory',
      borderClass: 'border-lime-200/90 hover:border-lime-600',
      textClass: 'text-[#233110]',
      iconBgClass: 'bg-[#435826] text-white shadow-sm shadow-[#435826]/20',
      cardBgClass: 'bg-[#F4F7EE] hover:bg-white',
      btnBgClass: 'bg-[#435826] text-white group-hover:bg-[#34441B]',
    },
    {
      title: t('c5_title'),
      description: t('c5_desc'),
      mobileDescription: t('c5_mobile_desc'),
      icon: BookOpen,
      link: '/our-work/capacity-building',
      borderClass: 'border-orange-200/90 hover:border-orange-500',
      textClass: 'text-[#451A03]',
      iconBgClass: 'bg-[#9A3412] text-white shadow-sm shadow-[#9A3412]/20',
      cardBgClass: 'bg-[#FAF0E9] hover:bg-white',
      btnBgClass: 'bg-[#9A3412] text-white group-hover:bg-[#7C2D12]',
    },
    {
      title: t('c6_title'),
      description: t('c6_desc'),
      mobileDescription: t('c6_mobile_desc'),
      icon: Globe,
      link: '/our-work/stakeholder-convenings',
      borderClass: 'border-teal-200/90 hover:border-teal-500',
      textClass: 'text-teal-950',
      iconBgClass: 'bg-teal-700 text-white shadow-sm shadow-teal-700/20',
      cardBgClass: 'bg-[#EDF7F7] hover:bg-white',
      btnBgClass: 'bg-teal-700 text-white group-hover:bg-teal-800',
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
              <div className="flex-1 space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-7xl font-serif text-deep-forest font-bold leading-tight tracking-tight pb-2">
                  {t('title')}
                </h1>
              </div>

              {/* Right Side: Description */}
              <div className="flex-1 lg:pt-16 relative">
                {/* Vertical divider line for desktop */}
                <div className="hidden lg:block absolute left-0 top-16 bottom-0 w-px bg-mist"></div>
                <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed font-light lg:pl-10">
                  {t('subtitle')}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="w-full pt-10 md:pt-14 lg:pt-20 pb-20 relative z-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {cards.map((card, idx) => {
                const Icon = card.icon

                return (
                  <Link key={idx} href={card.link} className="block h-full group">
                    <div
                      className={`rounded-[20px] md:rounded-[32px] border ${card.borderClass} ${card.cardBgClass} p-4 sm:p-5 md:p-8 lg:p-10 flex flex-col justify-between h-full min-h-[auto] md:min-h-[380px] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}
                    >
                      {/* Mobile Layout (< md) */}
                      <div className="flex items-center gap-3.5 sm:gap-4 md:hidden">
                        <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center ${card.iconBgClass}`}>
                          <Icon size={20} />
                        </div>
                        <div className="flex-1 flex flex-col gap-0.5 min-w-0">
                          <h2 className={`text-base sm:text-lg font-serif font-bold ${card.textClass} leading-snug truncate`}>
                            {card.title}
                          </h2>
                          <p className="text-xs text-charcoal/70 leading-relaxed line-clamp-2 pr-1">
                            {card.mobileDescription}
                          </p>
                        </div>
                        <div className={`w-8 h-8 shrink-0 rounded-full ${card.btnBgClass} flex items-center justify-center`}>
                          <ArrowRight size={14} className="rotate-[-45deg] group-hover:rotate-0 transition-transform" />
                        </div>
                      </div>

                      {/* Desktop Layout (md+) */}
                      <div className="hidden md:flex flex-col justify-between h-full space-y-6">
                        <div className="space-y-6">
                          {/* Top Icon */}
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${card.iconBgClass} group-hover:scale-105 transition-transform duration-300`}>
                            <Icon size={26} />
                          </div>

                          {/* Content */}
                          <div className="space-y-3">
                            <h2 className={`text-2xl lg:text-[1.65rem] font-serif font-bold ${card.textClass} tracking-tight pb-1 leading-snug`}>
                              {card.title}
                            </h2>
                            <p className="text-charcoal/75 font-light leading-relaxed text-sm lg:text-base">
                              {card.description}
                            </p>
                          </div>
                        </div>

                        {/* Bottom Action Link */}
                        <div className="pt-6 mt-auto flex items-center justify-between">
                          <span className={`text-sm font-semibold ${card.textClass}`}>{t('learn_more')}</span>
                          <div className={`w-9 h-9 rounded-full ${card.btnBgClass} flex items-center justify-center shadow-sm group-hover:scale-105 transition-all duration-300`}>
                            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
    </main>
  )
}
