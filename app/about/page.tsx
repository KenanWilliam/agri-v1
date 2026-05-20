'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { CheckCircle, Heart, Target, Lightbulb, Users, Globe, Award, Leaf } from 'lucide-react'
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
      <main className="bg-primary-ivory min-h-screen">
        {/* Editorial Hero */}
        <section className="relative w-full pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--sage-green)_0%,transparent_50%)] opacity-30"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase">
                <Award size={14} />
                Our Legacy of Impact
              </div>
              <h1 className="text-primary italic">Deep Roots in African Soil</h1>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light">
                Over 20 years of transforming agricultural value chains across the continent through expertise, innovation, and deep community partnerships.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Bento */}
        <section className="w-full py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <motion.div
                whileHover={{ y: -5 }}
                className="bento-card bg-primary text-white p-12 space-y-6"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Target className="text-secondary" size={24} />
                </div>
                <h2 className="text-white text-4xl italic">Our Mission</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  To strengthen seed systems and agricultural value chains across sub-Saharan Africa, enhancing farmer productivity, market access, and community resilience.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bento-card bg-secondary/5 border-secondary/20 p-12 space-y-6"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Leaf className="text-secondary" size={24} />
                </div>
                <h2 className="text-primary text-4xl italic">Our Vision</h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  A thriving African agricultural sector where smallholder farmers access quality seeds, viable markets, and sustainable livelihoods.
                </p>
              </motion.div>
            </div>

            {/* Core Values Grid */}
            <div className="space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-primary">Our Core Values</h2>
                <p className="text-foreground/50 font-bold uppercase tracking-widest text-xs">The principles that guide our work</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {values.map((value, idx) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -10 }}
                      className="p-8 rounded-3xl bg-primary-ivory border border-primary/5 hover:border-primary/20 transition-all text-center space-y-4"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <h4 className="text-xl text-primary">{value.title}</h4>
                      <p className="text-sm text-foreground/60 leading-relaxed">{value.desc}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Glass Panel Section */}
        <section className="w-full py-24 bg-primary text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--primary-gold)_0%,transparent_40%)] opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-white">Leadership Team</h2>
              <p className="text-primary-ivory/60 max-w-2xl mx-auto italic text-lg">
                Seasoned professionals committed to agricultural transformation across the continent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="glass-panel border-white/10 rounded-3xl overflow-hidden group"
                >
                  <div className="h-64 bg-white/5 flex items-center justify-center text-6xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary-gold/10 group-hover:bg-primary-gold/20 transition-colors"></div>
                    <Users size={64} className="text-white/20" />
                  </div>
                  <div className="p-8 space-y-2">
                    <h3 className="text-xl text-white italic">{member.name}</h3>
                    <p className="text-secondary font-bold text-xs uppercase tracking-widest">{member.role}</p>
                    <p className="text-sm text-primary-ivory/60 font-light pt-2">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="w-full py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-primary">Our Journey</h2>
              <p className="text-foreground/50 font-bold uppercase tracking-widest text-xs">Two decades of growth</p>
            </div>

            <div className="space-y-12">
              {[
                { year: '2003', title: 'Foundation', desc: 'Founded with a mission to strengthen seed systems in East Africa' },
                { year: '2008', title: 'Regional Expansion', desc: 'Extended operations to West and Southern Africa' },
                { year: '2015', title: 'Innovation Hub', desc: 'Launched research division focusing on market-driven solutions' },
                { year: '2024', title: 'Pan-African Leader', desc: 'Operating in 21 countries, impacting over 500,000 farmers' },
              ].map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex gap-12 items-center"
                >
                  <div className="text-5xl font-data text-secondary/20 w-32 shrink-0">{milestone.year}</div>
                  <div className="relative flex-1 p-8 rounded-3xl bg-primary-ivory border border-primary/5">
                    <h3 className="text-xl text-primary mb-2 italic">{milestone.title}</h3>
                    <p className="text-foreground/70 font-light">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-32 bg-primary-ivory">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
            <h2 className="text-primary italic">Partner With Us</h2>
            <p className="text-2xl text-foreground/70 font-light leading-relaxed">
              Let&apos;s collaborate to transform agricultural systems and create sustainable impact for generations to come.
            </p>
            <div className="pt-6">
              <Link href="/contact" className="btn-premium">
                Get In Touch
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
