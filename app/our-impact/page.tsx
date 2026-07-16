'use client'

import InteractiveMap from '@/components/interactive-map'
import ImpactAlignment from '@/components/motion/impact-alignment'
import { motion } from 'framer-motion'
import { Heart, Globe, Leaf, ArrowRight } from 'lucide-react'
import Link from 'next/link'



export default function OurImpactPage() {
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
                <h2 className="text-5xl lg:text-7xl font-serif font-normal text-deep-forest leading-[0.9]">
                  Our<br/>Journey.
                </h2>
                <p className="text-charcoal/60 text-xl font-light leading-relaxed max-w-md">
                  Over 30 years of seed sector experience, accelerating growth and sustainable seed systems across Africa.
                </p>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-deep-forest">Milestones</h3>
                    <ul className="space-y-3 text-charcoal/60 font-light text-lg">
                      <li><span className="font-medium text-deep-forest">1991</span> &mdash; Seed sector experience begins</li>
                      <li><span className="font-medium text-deep-forest">2007</span> &mdash; Work across Africa accelerates</li>
                      <li><span className="font-medium text-deep-forest">2012</span> &mdash; Agri Experience is founded</li>
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
                Our Key Achievements
              </motion.h2>
              <p className="text-lg lg:text-xl text-charcoal/80 font-light leading-relaxed max-w-3xl mx-auto">
                Our consulting work has led to major advancements in seed systems and farmer empowerment across the continent. Here is a look at some of our transformative programs.
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
                <h3 className="text-3xl font-serif font-bold text-deep-forest mb-4">Revolutionizing Kenya's Seed Sector</h3>
                <p className="text-charcoal/80 font-light leading-relaxed mb-8">
                  We partnered with MoA, KEPHIS, seed companies, and STAK to make significant improvements in the Kenyan seed sector.
                </p>
                <div className="space-y-6 flex-grow">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-deep-forest flex items-center gap-2">
                      <Leaf className="text-primary-green" size={20} /> Policy & Regulatory Reforms
                    </h4>
                    <p className="text-charcoal/80 font-light leading-relaxed pl-7 text-sm">
                      Enabled authorization of private seed inspection, gazetting over 40 inspectors and 17 analysts. Piloted "standard seed" to increase non-maize and non-hybrid crops.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-deep-forest flex items-center gap-2">
                      <Heart className="text-primary-green" size={20} /> Authentication & Traceability
                    </h4>
                    <p className="text-charcoal/80 font-light leading-relaxed pl-7 text-sm">
                      Introduced scratch-off labels, reducing counterfeits by over 40% and label costs by 85%, empowering farmers to confirm seed quality.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-deep-forest flex items-center gap-2">
                      <Globe className="text-primary-green" size={20} /> Institutional Strengthening
                    </h4>
                    <p className="text-charcoal/80 font-light leading-relaxed pl-7 text-sm">
                      Revitalized STAK, growing membership by over 30%. Created County Agrodealer Associations in 10 counties and trained agrodealers through Mazao forums.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-deep-forest flex items-center gap-2">
                      <ArrowRight className="text-primary-green" size={20} /> Regional Influence
                    </h4>
                    <p className="text-charcoal/80 font-light leading-relaxed pl-7 text-sm">
                      Kenya's innovations spread! Scratch labels were adopted in Nigeria, Tanzania, and Uganda, and Tanzania benchmarked Kenya's private inspection model.
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
                <h3 className="text-3xl font-serif font-bold text-deep-forest mb-4">Strengthening Tanzania's Seed Systems</h3>
                <p className="text-charcoal/80 font-light leading-relaxed mb-8">
                  A six-year initiative aimed at modernizing three key public institutions to enhance the delivery of quality seed to farmers and foster a private sector-oriented industry.
                </p>
                <ul className="space-y-4 flex-grow">
                  <li className="flex gap-4 items-start">
                    <span className="text-primary-green font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-charcoal/80 font-light leading-relaxed text-sm">
                      <strong className="text-deep-forest font-medium">Strengthened Institutional Capacity:</strong> Established the National Planning and Coordination Unit for effective oversight.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-primary-green font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-charcoal/80 font-light leading-relaxed text-sm">
                      <strong className="text-deep-forest font-medium">Streamlined Certification:</strong> Reduced delays and increased efficiency with a fully digitized certification system.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-primary-green font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-charcoal/80 font-light leading-relaxed text-sm">
                      <strong className="text-deep-forest font-medium">Enhanced Laboratory Services:</strong> Renovated two labs, cutting sample wait times by over 50% and expanding seed variety availability.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-primary-green font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-charcoal/80 font-light leading-relaxed text-sm">
                      <strong className="text-deep-forest font-medium">Decentralized Quality Assurance:</strong> Recognized authorized private seed inspectors and laboratory analysts.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-primary-green font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-charcoal/80 font-light leading-relaxed text-sm">
                      <strong className="text-deep-forest font-medium">Improved Information Flow:</strong> Deployed a digitized platform for accurate seed demand forecasting.
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
              Be Part of the Impact
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed">
              Join us in transforming agricultural systems and improving livelihoods across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-green text-white rounded-full font-bold transition duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-green/20"
                >
                Work With Us
                <ArrowRight size={20} />
                </Link>
                <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold transition duration-200 hover:bg-white/10 backdrop-blur-sm"
                >
                Partner With Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>    </>
  )
}
