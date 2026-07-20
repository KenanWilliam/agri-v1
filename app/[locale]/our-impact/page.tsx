'use client'

import InteractiveMap from '@/components/interactive-map'
import ImpactAlignment from '@/components/motion/impact-alignment'
import { motion } from 'framer-motion'
import { Heart, Globe, Leaf, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function OurImpactPage() {
  const t = useTranslations('OurImpact')
  const impactAreas = [
    {
      icon: Leaf,
      title: 'Social Impact',
      description: 'Improve smallholder farmer and seed producer productivity.',
      highlights: [
        'Focus on practical, field-based solutions',
        'Improve access to high quality seed',
        'Support sustainable livelihood gains',
      ],
    },
    {
      icon: Heart,
      title: 'Capacity Development',
      description: 'Build local talent among permanent seed sector stakeholders.',
      highlights: [
        'Strengthen local institutions and service providers',
        'Equip leaders and technical teams',
        'Invest in long-term sector capability',
      ],
    },
    {
      icon: Globe,
      title: 'Organizational Strength',
      description: 'Maintain the financial stability needed to sustain our work.',
      highlights: [
        'Deliver high-quality, experience-based analysis',
        'Provide actionable recommendations',
        'Support implementation with partners',
      ],
    },
  ]

  return (
    <>      <main className="bg-white min-h-screen">


        <InteractiveMap />

        {/* Curated Our Journey Section */}
        <section className="w-full py-16 lg:py-24 xl:py-32 bg-white relative border-b border-mist">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
              <div className="lg:w-1/3 space-y-8">
                <h2 className="text-5xl lg:text-7xl font-serif font-normal text-deep-forest leading-[0.9]" dangerouslySetInnerHTML={{ __html: t('journey_title') }} />
                <p className="text-charcoal/60 text-xl font-light leading-relaxed max-w-md">
                  {t('journey_desc')}
                </p>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-deep-forest">{t('milestones')}</h3>
                    <ul className="space-y-3 text-charcoal/60 font-light text-lg">
                      <li><span className="font-medium text-deep-forest">{t('m1_year')}</span> &mdash; {t('m1_desc')}</li>
                      <li><span className="font-medium text-deep-forest">{t('m2_year')}</span> &mdash; {t('m2_desc')}</li>
                      <li><span className="font-medium text-deep-forest">{t('m3_year')}</span> &mdash; {t('m3_desc')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="w-full py-16 lg:py-24 bg-white relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-12">
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest"
              >
                {t('achievements_title')}
              </motion.h2>
              <p className="text-lg lg:text-xl text-charcoal/80 font-light leading-relaxed max-w-3xl mx-auto">
                {t('achievements_desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
              {/* Kenya */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col h-full p-10 rounded-[32px] bg-mist border border-mist hover:border-primary-green/20 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary-green/10 flex items-center justify-center mb-6">
                  <Globe className="text-primary-green" size={32} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-deep-forest mb-4">{t('kenya_title')}</h3>
                <p className="text-charcoal/80 font-light leading-relaxed mb-8">
                  {t('kenya_desc')}
                </p>
                <div className="space-y-6 flex-grow">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-deep-forest flex items-center gap-2">
                      <Leaf className="text-primary-green" size={20} /> {t('k1_title')}
                    </h4>
                    <p className="text-charcoal/80 font-light leading-relaxed pl-7 text-sm">
                      {t('k1_desc')}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-deep-forest flex items-center gap-2">
                      <Heart className="text-primary-green" size={20} /> {t('k2_title')}
                    </h4>
                    <p className="text-charcoal/80 font-light leading-relaxed pl-7 text-sm">
                      {t('k2_desc')}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-deep-forest flex items-center gap-2">
                      <Globe className="text-primary-green" size={20} /> {t('k3_title')}
                    </h4>
                    <p className="text-charcoal/80 font-light leading-relaxed pl-7 text-sm">
                      {t('k3_desc')}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-deep-forest flex items-center gap-2">
                      <ArrowRight className="text-primary-green" size={20} /> {t('k4_title')}
                    </h4>
                    <p className="text-charcoal/80 font-light leading-relaxed pl-7 text-sm">
                      {t('k4_desc')}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Tanzania */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col h-full p-10 rounded-[32px] bg-mist border border-mist hover:border-primary-green/20 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary-green/10 flex items-center justify-center mb-6">
                  <Leaf className="text-primary-green" size={32} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-deep-forest mb-4">{t('tz_title')}</h3>
                <p className="text-charcoal/80 font-light leading-relaxed mb-8">
                  {t('tz_desc')}
                </p>
                <ul className="space-y-4 flex-grow">
                  <li className="flex gap-4 items-start">
                    <span className="text-primary-green font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-charcoal/80 font-light leading-relaxed text-sm">
                      {t.rich('t1', { strong: (chunks) => <strong className="text-deep-forest font-medium">{chunks}</strong> })}
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-primary-green font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-charcoal/80 font-light leading-relaxed text-sm">
                      {t.rich('t2', { strong: (chunks) => <strong className="text-deep-forest font-medium">{chunks}</strong> })}
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-primary-green font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-charcoal/80 font-light leading-relaxed text-sm">
                      {t.rich('t3', { strong: (chunks) => <strong className="text-deep-forest font-medium">{chunks}</strong> })}
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-primary-green font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-charcoal/80 font-light leading-relaxed text-sm">
                      {t.rich('t4', { strong: (chunks) => <strong className="text-deep-forest font-medium">{chunks}</strong> })}
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-primary-green font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-charcoal/80 font-light leading-relaxed text-sm">
                      {t.rich('t5', { strong: (chunks) => <strong className="text-deep-forest font-medium">{chunks}</strong> })}
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Alignment */}
        <ImpactAlignment />

        {/* CTA */}
        <section className="w-full py-24 lg:py-32 bg-deep-forest text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--accent-gold)_0%,transparent_40%)] opacity-20"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-10 relative z-10">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white">
              {t('cta_title')}
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed">
              {t('cta_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-green text-white rounded-full font-bold transition duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-green/20"
                >
                {t('work_with_us')}
                <ArrowRight size={20} />
                </Link>
                <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold transition duration-200 hover:bg-white/10 backdrop-blur-sm"
                >
                {t('partner_with_us')}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>    </>
  )
}
