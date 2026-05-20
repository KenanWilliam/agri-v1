'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { Heart, Globe, Sprout, Leaf } from 'lucide-react'
import Link from 'next/link'

export default function OurImpactPage() {
  const impactAreas = [
    {
      icon: Leaf,
      title: 'Environmental Sustainability',
      description: 'Promoting climate-smart agriculture and biodiversity conservation',
      highlights: [
        'Conservation agriculture practices adopted by 100,000+ farmers',
        'Climate-resilient seed varieties distributed',
        'Water-efficient farming techniques promoted',
      ],
    },
    {
      icon: Heart,
      title: 'Social Impact',
      description: 'Improving food security, nutrition, and community resilience',
      highlights: [
        'Year-round food availability for farming households',
        'Women farmer empowerment initiatives',
        'Youth engagement in agriculture',
      ],
    },
    {
      icon: Globe,
      title: 'Economic Growth',
      description: 'Creating sustainable livelihoods and market opportunities',
      highlights: [
        'Average household income increase of 35%+',
        'Job creation across value chains',
        'Small business development support',
      ],
    },
    {
      icon: Sprout,
      title: 'Agricultural Development',
      description: 'Strengthening agricultural systems and food security',
      highlights: [
        'Improved crop productivity',
        'Diversified income sources',
        'Enhanced market access',
      ],
    },
  ]

  const sdgs = [
    { num: '1', name: 'No Poverty', color: 'from-red-400 to-red-600' },
    { num: '2', name: 'Zero Hunger', color: 'from-yellow-400 to-yellow-600' },
    { num: '5', name: 'Gender Equality', color: 'from-red-300 to-red-500' },
    { num: '8', name: 'Decent Work', color: 'from-red-500 to-red-700' },
    { num: '13', name: 'Climate Action', color: 'from-green-500 to-green-700' },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="w-full min-h-[400px] flex items-center bg-gradient-to-br from-mint via-background to-cream pt-20 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-serif font-bold text-dark-green"
            >
              Our Impact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-dark-blue-gray max-w-2xl mx-auto"
            >
              Creating positive change across environmental, social, and economic dimensions.
            </motion.p>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {impactAreas.map((area, idx) => {
                const Icon = area.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-mint to-cream border-2 border-primary/20 hover:border-primary/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-green mb-2">{area.title}</h3>
                    <p className="text-dark-blue-gray mb-6">{area.description}</p>
                    <ul className="space-y-3">
                      {area.highlights.map((highlight, hidx) => (
                        <li key={hidx} className="flex gap-3 text-sm">
                          <span className="text-primary font-bold flex-shrink-0">✓</span>
                          <span className="text-dark-blue-gray">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SDG Alignment */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-mint to-cream">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
                Supporting UN SDGs
              </h2>
              <p className="text-lg text-dark-blue-gray max-w-2xl mx-auto">
                Our work directly contributes to achieving the Sustainable Development Goals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {sdgs.map((sdg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`rounded-xl p-6 bg-gradient-to-br ${sdg.color} text-white flex flex-col items-center justify-center min-h-[200px] cursor-pointer hover:scale-105 transition-transform`}
                >
                  <div className="text-5xl font-data mb-3">{sdg.num}</div>
                  <p className="text-sm font-semibold text-center">{sdg.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stories */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-12 text-center"
            >
              Stories of Change
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Grace Kipchoge',
                  location: 'Kenya',
                  story:
                    'From struggling smallholder to successful seed producer earning 3x her previous income. Now mentors 50 other farmers.',
                },
                {
                  name: 'Kofi Mensah',
                  location: 'Ghana',
                  story:
                    'Women farmer group went from traditional methods to certified producers. Income increased by 250% in 2 years.',
                },
                {
                  name: 'Amina Hassan',
                  location: 'Senegal',
                  story:
                    'Youth-led enterprise now supplies seeds to 5 neighboring communities. Created 15 jobs in her village.',
                },
              ].map((story, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10"
                >
                  <div className="text-5xl mb-4">👩‍🌾</div>
                  <h3 className="text-xl font-bold text-dark-green mb-1">{story.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-4">{story.location}</p>
                  <p className="text-dark-blue-gray leading-relaxed">{story.story}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="w-full py-16 md:py-24 bg-dark-green text-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center"
            >
              Impact by Numbers
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '500K+', label: 'Farmers Impacted' },
                { value: '40%', label: 'Average Yield Increase' },
                { value: '35%', label: 'Income Growth' },
                { value: '100K', label: 'Women Empowered' },
              ].map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-data text-primary mb-2">{metric.value}</div>
                  <p className="text-cream text-sm md:text-base">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Be Part of the Impact
            </h2>
            <p className="text-xl text-cream/90">
              Join us in transforming agricultural systems and improving livelihoods across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/our-work"
                className="inline-block px-8 py-4 bg-white text-dark-green rounded-full font-semibold hover:bg-cream transition-all duration-300"
              >
                Explore Our Work
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white/20 text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
