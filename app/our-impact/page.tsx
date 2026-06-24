'use client'

import InteractiveMap from '@/components/interactive-map'
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
        
        {/* Hero */}
        <section className="relative w-full pt-32 lg:pt-48 pb-16 overflow-hidden border-b border-mist">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--mist)_0%,transparent_50%)] opacity-50"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-6 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-7xl font-serif font-bold text-deep-forest tracking-tight"
            >
              Our Impact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg lg:text-xl text-charcoal/80 max-w-2xl mx-auto font-light leading-relaxed"
            >
              As a social enterprise, we are focused on a triple bottom line that prioritizes impact, capacity, and sustainability.
            </motion.p>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="w-full py-16 lg:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {impactAreas.map((area, idx) => {
                const Icon = area.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="p-10 rounded-[32px] bg-mist border border-mist hover:border-primary-green/20 hover:bg-white hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary-green/10 flex items-center justify-center mb-6">
                      <Icon className="text-primary-green" size={32} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-deep-forest mb-4">{area.title}</h3>
                    <p className="text-charcoal/80 font-light leading-relaxed mb-8">{area.description}</p>
                    <ul className="space-y-4">
                      {area.highlights.map((highlight, hidx) => (
                        <li key={hidx} className="flex gap-4 items-start">
                          <span className="text-primary-green font-bold flex-shrink-0 mt-0.5">✓</span>
                          <span className="text-charcoal/80 font-light leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Collaboration */}
        <section className="w-full py-16 lg:py-24 bg-white border-t border-mist">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-12">
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest"
              >
                How We Create Impact
              </motion.h2>
              <p className="text-lg lg:text-xl text-charcoal/80 font-light leading-relaxed max-w-3xl mx-auto">
                We prioritize working with key local officials and other seed sector stakeholders, and leverage our experience and network of collaborators
                to bring about meaningful and sustainable systemic change.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-10 rounded-[32px] bg-mist border border-mist hover:border-primary-green/20 transition-colors">
                <h3 className="text-2xl font-serif font-bold text-deep-forest mb-6">Typical Partners</h3>
                <ul className="space-y-4 text-charcoal/80 font-light leading-relaxed">
                  <li>&bull; Donors and development partners</li>
                  <li>&bull; Research organizations and ministry officials</li>
                  <li>&bull; Regulators and technology licensing entities</li>
                  <li>&bull; Seed companies, agrodealers, and associations</li>
                </ul>
              </div>
              <div className="p-10 rounded-[32px] bg-mist border border-mist hover:border-primary-green/20 transition-colors">
                <h3 className="text-2xl font-serif font-bold text-deep-forest mb-6">What We Deliver</h3>
                <ul className="space-y-4 text-charcoal/80 font-light leading-relaxed">
                  <li>&bull; Experience-based field analysis</li>
                  <li>&bull; Practical recommendations</li>
                  <li>&bull; Implementation support</li>
                  <li>&bull; Sustainable, systemic change</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

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
