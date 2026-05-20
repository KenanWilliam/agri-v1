'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { CheckCircle, Heart, Target, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      desc: 'We prioritize the needs and aspirations of farming communities in everything we do.',
    },
    {
      icon: Target,
      title: 'Precision & Impact',
      desc: 'Data-driven approaches ensuring sustainable, measurable outcomes.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      desc: 'Modern solutions adapted to local contexts and realities.',
    },
    {
      icon: CheckCircle,
      title: 'Excellence',
      desc: 'Highest standards of professionalism and service delivery.',
    },
  ]

  const team = [
    { name: 'Dr. James Kiprop', role: 'Founder & CEO', bio: '25+ years in seed systems development' },
    { name: 'Dr. Margaret Njoroge', role: 'Head of Programs', bio: 'Agricultural economist and policy expert' },
    { name: 'Kofi Mensah', role: 'Regional Director West Africa', bio: 'Value chain integration specialist' },
    { name: 'Amina Hassan', role: 'Head of Research', bio: 'Market dynamics and farmer insights' },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="w-full min-h-[400px] flex items-center bg-gradient-to-br from-mint via-background to-cream pt-20 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-serif font-bold text-dark-green"
            >
              Who We Are
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-dark-blue-gray max-w-2xl mx-auto"
            >
              20+ years of transforming agricultural value chains across Africa through expertise, innovation, and deep community partnerships.
            </motion.p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: 'Our Mission',
                  content:
                    'To strengthen seed systems and agricultural value chains across sub-Saharan Africa, enhancing farmer productivity, market access, and community resilience.',
                  color: 'from-primary',
                },
                {
                  title: 'Our Vision',
                  content:
                    'A thriving African agricultural sector where smallholder farmers access quality seeds, viable markets, and sustainable livelihoods.',
                  color: 'from-secondary',
                },
                {
                  title: 'Our Values',
                  content:
                    'Community engagement, professional excellence, data-driven decisions, cultural sensitivity, and long-term sustainability.',
                  color: 'from-accent',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`p-8 rounded-2xl bg-gradient-to-br ${item.color} to-transparent bg-opacity-10 border-2 border-current`}
                >
                  <h3 className="text-2xl font-serif font-bold text-dark-green mb-4">
                    {item.title}
                  </h3>
                  <p className="text-dark-blue-gray leading-relaxed">{item.content}</p>
                </motion.div>
              ))}
            </div>

            {/* Core Values */}
            <div>
              <h2 className="text-4xl font-serif font-bold text-dark-green mb-12 text-center">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, idx) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="p-6 rounded-xl bg-mint border border-primary/20 hover:border-primary/50 transition-all duration-300"
                    >
                      <Icon className="w-8 h-8 text-primary mb-4" />
                      <h4 className="font-bold text-lg text-dark-green mb-2">{value.title}</h4>
                      <p className="text-sm text-dark-blue-gray">{value.desc}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-mint via-cream to-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-dark-blue-gray">
                Seasoned professionals committed to agricultural transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="rounded-xl overflow-hidden bg-white border border-mint shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl">
                    👤
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-dark-green mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                    <p className="text-sm text-dark-blue-gray">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-12 text-center"
            >
              Our Journey
            </motion.h2>

            <div className="space-y-8">
              {[
                {
                  year: '2003',
                  title: 'Foundation',
                  desc: 'Founded with a mission to strengthen seed systems in East Africa',
                },
                {
                  year: '2008',
                  title: 'Regional Expansion',
                  desc: 'Extended operations to West and Southern Africa',
                },
                {
                  year: '2015',
                  title: 'Innovation Hub',
                  desc: 'Launched research division focusing on market-driven solutions',
                },
                {
                  year: '2020',
                  title: 'Digital Transformation',
                  desc: 'Implemented digital tools for farmer engagement and data collection',
                },
                {
                  year: '2024',
                  title: 'Pan-African Leader',
                  desc: 'Operating in 21 countries, impacting over 500,000 farmers',
                },
              ].map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold text-sm">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-primary">{milestone.year}</p>
                    <h3 className="text-xl font-bold text-dark-green mt-1">{milestone.title}</h3>
                    <p className="text-dark-blue-gray mt-2">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-dark-green to-dark-blue-gray text-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Partner With Us
            </h2>
            <p className="text-xl text-cream">
              Let&apos;s collaborate to transform agricultural systems and create sustainable impact.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-dark-green rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
