'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OurResultsPage() {
  const results = [
    { label: 'Farmers Reached', value: '500K+', description: 'Smallholder farmers benefited' },
    { label: 'Countries', value: '21', description: 'Across sub-Saharan Africa' },
    { label: 'Active Projects', value: '150+', description: 'Ongoing initiatives' },
    { label: 'Years', value: '20+', description: 'Of proven impact' },
  ]

  const outcomes = [
    {
      category: 'Production',
      items: [
        'Average yield increase of 40% through improved seeds',
        '80,000 metric tons of quality seeds produced annually',
        'Adoption of climate-smart agricultural practices',
      ],
    },
    {
      category: 'Market Access',
      items: [
        '250+ farmer groups connected to markets',
        'Average income increase of 35% for participating farmers',
        'Direct market relationships for 60% of producers',
      ],
    },
    {
      category: 'Capacity',
      items: [
        '50,000 farmers trained in value chain management',
        '2,000+ agro-dealers strengthened',
        '100+ institutions with upgraded facilities',
      ],
    },
  ]

  const testimonials = [
    {
      quote: 'Working with Agri Experience transformed our entire seed supply system. We went from 2,000 to 15,000 farmers in just 3 years.',
      org: 'East Africa Farmers Alliance',
    },
    {
      quote: 'Their expertise in market linkages helped us increase our revenues by 45%. This is transformative for our business.',
      org: 'Seed Producers Network',
    },
    {
      quote: 'The capacity building programs were culturally sensitive and highly practical. Our members still apply the lessons daily.',
      org: 'West African Community Association',
    },
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
              Our Results
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-dark-blue-gray max-w-2xl mx-auto"
            >
              Measurable impact across production, market access, and farmer livelihoods.
            </motion.p>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((result, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-mint to-cream border-2 border-primary/20 text-center"
                >
                  <div className="text-5xl font-data text-primary mb-2">{result.value}</div>
                  <h3 className="font-bold text-lg text-dark-green mb-2">{result.label}</h3>
                  <p className="text-sm text-dark-blue-gray">{result.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes by Category */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-mint to-cream">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-12 text-center"
            >
              Key Outcomes
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {outcomes.map((outcome, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-8 border-2 border-primary/10"
                >
                  <h3 className="text-2xl font-bold text-primary mb-6">{outcome.category}</h3>
                  <ul className="space-y-4">
                    {outcome.items.map((item, iidx) => (
                      <li key={iidx} className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span className="text-dark-blue-gray">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-12 text-center"
            >
              What Partners Say
            </motion.h2>

            <div className="space-y-6">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary"
                >
                  <p className="text-lg text-dark-green italic mb-4">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-semibold text-primary">{testimonial.org}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-dark-green to-dark-blue-gray text-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Join Our Success Stories
            </h2>
            <p className="text-xl text-cream">
              Explore how we can help achieve your agricultural development objectives.
            </p>
            <Link
              href="/our-work"
              className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-dark-green rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Learn About Our Services
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
