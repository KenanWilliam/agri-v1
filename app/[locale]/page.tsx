'use client'

import ClientLogos from '@/components/client-logos'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Globe, Zap, Leaf, Shield, Award, BarChart , BookOpen , Handshake , Target } from 'lucide-react'
import { Link } from '@/i18n/routing'
import WhyAgriExperience from '@/components/motion/why-agri-experience'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { RollingText } from '@/components/ui/rolling-text'

import { useState, useEffect } from 'react'

export default function Home() {
  const t = useTranslations('Home')
  const [isDesktop, setIsDesktop] = useState(true) // assume desktop for SSR, verify on mount

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768)
    handleResize() // check immediately on client
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <main className="-mt-[72px] lg:-mt-[88px] overflow-x-hidden bg-background">
        {/* Premium Hero Section */}
        <section className="relative w-full min-h-[100vh] flex flex-col justify-center items-center overflow-hidden pt-[104px] pb-10 bg-white">
          {/* Background Image/Video */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-mist animate-[kenburns_20s_ease-out_infinite_alternate] scale-100 hover:scale-105 transition-transform duration-[20000ms]">
            {isDesktop ? (
              <video
                src="/Videos/wheat swaying in the wind.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-center lg:object-[center_30%] 3xl:object-[center_40%]"
              />
            ) : (
              <Image 
                src="/SDG-images/2.webp" 
                alt="Agricultural landscape"
                fill
                priority
                className="object-cover object-center"
              />
            )}
          </div>
          
          {/* White Gradient Overlay to ensure dark text readability and blend into next section */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-white from-[10%] via-white/80 via-[40%] to-transparent to-[75%] md:w-[80%]"></div>
          
          {/* Centered Vertically Content Block */}
          <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 w-full flex-1 flex flex-col justify-center">
            <div className="max-w-2xl xl:max-w-3xl 3xl:max-w-4xl space-y-6 lg:space-y-8 xl:space-y-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="font-serif tracking-tight text-[#1A4D2E] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1]"
              >
                {t('hero_title_1')} <br />
                {t('hero_title_2')} <br />
                {t('hero_title_3')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-800 leading-relaxed font-medium max-w-xl xl:max-w-2xl text-sm md:text-base lg:text-lg"
              >
                {t('hero_desc')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-2"
              >
                <Link href="/our-impact" className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-6 py-3 lg:px-8 lg:py-4 bg-[#1A4D2E] text-white rounded-full font-bold transition duration-200 hover:bg-[#1A4D2E]/90 text-sm lg:text-base">
                  <RollingText className="gap-3">
                    {t('explore_impact')}
                    <ArrowRight size={18} />
                  </RollingText>
                </Link>
              </motion.div>

              {/* Inline Horizontal Stats matching grad.png */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="pt-4 lg:pt-6"
              >
                <div className="flex flex-wrap justify-start items-center gap-4 sm:gap-6 lg:gap-10 xl:gap-12">
                  {[
                    { value: t('stat_1_val'), label: t('stat_1_lbl'), icon: Leaf },
                    { value: t('stat_2_val'), label: t('stat_2_lbl'), icon: Shield },
                    { value: t('stat_3_val'), label: t('stat_3_lbl'), icon: Globe },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-primary-green/20 flex items-center justify-center text-[#1A4D2E] bg-white shadow-sm shrink-0">
                        <stat.icon size={18} className="lg:w-5 lg:h-5" />
                      </div>
                      <div className="flex flex-col text-left">
                        <div className="text-lg lg:text-xl font-bold text-[#1A4D2E] leading-none">{stat.value}</div>
                        <div className="text-[9px] lg:text-[10px] font-bold tracking-[0.15em] text-gray-500 mt-1.5 whitespace-nowrap">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>


                
        {/* Why Agri Experience Section */}
        <WhyAgriExperience />

        {/* What We Believe Section */}
        <section className="w-full py-24 lg:py-32 bg-deep-forest relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--primary-green)_0%,transparent_50%)] opacity-20"></div>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-1/3 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl lg:text-5xl font-serif text-white font-bold tracking-tight mb-6">{t('what_we_believe')}</h2>
                  <div className="w-20 h-1 bg-primary-green rounded-full"></div>
                </motion.div>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Leaf className="text-primary-green" size={24} />,
                    title: t('belief_1_title'),
                    text: t('belief_1_text')
                  },
                  {
                    icon: <Target className="text-primary-green" size={24} />,
                    title: t('belief_2_title'),
                    text: t('belief_2_text')
                  },
                  {
                    icon: <Shield className="text-primary-green" size={24} />,
                    title: t('belief_3_title'),
                    text: t('belief_3_text')
                  },
                  {
                    icon: <Users className="text-primary-green" size={24} />,
                    title: t('belief_4_title'),
                    text: t('belief_4_text')
                  }
                ].map((belief, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                      {belief.icon}
                    </div>
                    <h3 className="text-xl font-serif text-white mb-3">{belief.title}</h3>
                    <p className="text-white/70 font-light leading-relaxed">{belief.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Testimonials */}
        <section className="w-full py-16 lg:py-24 bg-mist">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-deep-forest">{t('trusted_leaders')}</h2>
              <p className="text-xl text-charcoal/70 font-light max-w-2xl mx-auto">
                {t('trusted_leaders_desc')}
              </p>
            </div>
            <ClientLogos />
          </div>
        </section>

        {/* Premium CTA Section */}
        <section className="relative w-full py-24 lg:py-32 bg-deep-forest text-white overflow-hidden">
          {/* Decorative Texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--accent-gold)_0%,transparent_70%)]"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-white mb-6">{t('cta_title')}</h2>
              <p className="text-xl lg:text-2xl text-white/80 mb-12 font-light leading-relaxed">
                {t('cta_desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-5 bg-primary-green text-white rounded-full font-bold text-lg transition duration-200 shadow-2xl shadow-primary-green/20"
                >
                  <RollingText>
                    {t('cta_btn_1')}
                  </RollingText>
                </Link>
                <Link
                  href="/contact"
                  className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition duration-200 backdrop-blur-sm"
                >
                  <RollingText>
                    {t('cta_btn_2')}
                  </RollingText>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>    </>
  )
}
