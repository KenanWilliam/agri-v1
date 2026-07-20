'use client'

import { motion } from 'framer-motion'
import { Award, Heart, Handshake, Users, BookOpen, ShieldCheck, Target, Leaf, ArrowRight, TrendingUp, Shield, Zap, Globe } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import OfficePlantsGallery from '@/components/motion/office-plants-gallery'
import { useTranslations } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations('About')
  return (
    <>      <main className="bg-white min-h-screen">


        {/* <OfficePlantsGallery showMissionVision /> */}
        {/* Mission, Vision, Goal Section */}
        <section className="w-full pt-[140px] pb-24 bg-mist relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary-green)_0%,transparent_40%)] opacity-10"></div>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-7xl font-serif text-deep-forest font-bold tracking-tight mb-6">{t('title')}</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-green to-transparent mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Vision */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-mist relative group overflow-hidden flex flex-col"
              >
                <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Target size={200} />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary-green/10 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
                  <Target className="text-primary-green" size={32} />
                </div>
                <h2 className="text-3xl font-serif text-deep-forest mb-4 relative z-10">{t('vision_title')}</h2>
                <p className="text-lg text-charcoal/80 leading-relaxed font-light relative z-10 flex-grow">
                  {t.rich('vision_desc', { strong: (chunks) => <strong className="font-semibold text-deep-forest">{chunks}</strong> })}
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-deep-forest rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden text-white flex flex-col"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--primary-green)_0%,transparent_60%)] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="absolute -top-10 -right-10 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Heart size={200} />
                </div>
                <div className="relative z-10 flex-grow">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform">
                    <Heart className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-serif text-white mb-4">{t('mission_title')}</h2>
                  <p className="text-lg text-white/90 leading-relaxed font-light">
                    {t('mission_desc')}
                  </p>
                </div>
              </motion.div>

              {/* Goal */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-mist relative group overflow-hidden flex flex-col"
              >
                <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Award size={200} />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary-green/10 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
                  <Award className="text-primary-green" size={32} />
                </div>
                <h2 className="text-3xl font-serif text-deep-forest mb-4 relative z-10">{t('goal_title')}</h2>
                <p className="text-lg text-charcoal/80 leading-relaxed font-light relative z-10 flex-grow">
                  {t.rich('goal_desc', { br: () => <br /> })}
                  <span className="inline-flex items-center gap-2 font-bold text-primary-green text-xl bg-primary-green/10 px-4 py-2 rounded-xl">
                    1, 2, 3, 5, 8 and 13.
                  </span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bento Expertise Section */}
        <section className="w-full py-16 lg:py-24 bg-white relative border-t border-mist">
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
              {/* Feature 1: Large */}
              <motion.div
                className="md:col-span-7 rounded-3xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex flex-col justify-between min-h-[350px] lg:min-h-[400px]"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center">
                    <TrendingUp className="text-primary-green" size={32} />
                  </div>
                  <h3 className="font-serif tracking-tight text-[#1A4D2E] text-3xl">{t('feat1_title')}</h3>
                  <p className="font-sans text-gray-600 text-lg max-w-md">
                    {t('feat1_desc')}
                  </p>
                </div>
                <ArrowRight className="text-primary-green group-hover:translate-x-1 transition-transform mt-4" size={24} />
              </motion.div>

              {/* Feature 2: Medium */}
              <motion.div
                className="md:col-span-5 rounded-3xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex flex-col gap-8"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                  <Shield className="text-[#1A4D2E]" size={24} />
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif tracking-tight text-[#1A4D2E] text-2xl">{t('feat2_title')}</h3>
                  <p className="font-sans text-gray-600">
                    {t('feat2_desc')}
                  </p>
                  <ArrowRight className="text-primary-green group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </motion.div>

              {/* Feature 3: Small */}
              <motion.div
                className="md:col-span-4 rounded-3xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex flex-col gap-6"
              >
                <Users className="text-[#1A4D2E]" size={24} />
                <div className="space-y-2">
                  <h4 className="font-serif tracking-tight text-[#1A4D2E] text-xl">{t('feat3_title')}</h4>
                  <p className="font-sans text-gray-600 text-sm">{t('feat3_desc')}</p>
                </div>
                <ArrowRight className="text-primary-green group-hover:translate-x-1 transition-transform mt-auto" size={18} />
              </motion.div>

              {/* Feature 4: Small */}
              <motion.div
                className="md:col-span-4 rounded-3xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex flex-col gap-6"
              >
                <Zap className="text-[#1A4D2E]" size={24} />
                <div className="space-y-2">
                  <h4 className="font-serif tracking-tight text-[#1A4D2E] text-xl">{t('feat4_title')}</h4>
                  <p className="font-sans text-gray-600 text-sm">{t('feat4_desc')}</p>
                </div>
                <ArrowRight className="text-primary-green group-hover:translate-x-1 transition-transform mt-auto" size={18} />
              </motion.div>

              {/* Feature 5: Small */}
              <motion.div
                className="md:col-span-4 rounded-3xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex flex-col gap-6"
              >
                <Globe className="text-[#1A4D2E]" size={24} />
                <div className="space-y-2">
                  <h4 className="font-serif tracking-tight text-[#1A4D2E] text-xl">{t('feat5_title')}</h4>
                  <p className="font-sans text-gray-600 text-sm">{t('feat5_desc')}</p>
                </div>
                <ArrowRight className="text-primary-green group-hover:translate-x-1 transition-transform mt-auto" size={18} />
              </motion.div>
            </div>
          </div>
        </section>


        {/* Core Values Grid */}
        <section className="w-full py-16 lg:py-24 bg-white relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-deep-forest">{t('values_title')}</h2>
                <p className="text-charcoal/50 font-bold uppercase tracking-widest text-xs">{t('values_subtitle')}</p>
              </div>
              
              <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-primary-green/10">
                <Image
                  src="/our values.png"
                  alt="Our Core Values"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-24 lg:py-32 bg-mist">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-10">
            <h2 className="text-deep-forest text-4xl lg:text-5xl font-serif">{t('cta_title')}</h2>
            <p className="text-xl lg:text-2xl text-charcoal/80 font-light leading-relaxed">
              {t('cta_desc')}
            </p>
            <div className="pt-6">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-deep-forest text-white rounded-full font-bold transition duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-deep-forest/20">
                {t('get_in_touch')}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>    </>
  )
}
