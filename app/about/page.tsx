'use client'

import { motion } from 'framer-motion'
import { Award, Heart, Handshake, Users, BookOpen, ShieldCheck, Target, Leaf, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      desc: 'Deliver high-quality, evidence-based analysis, recommendations, and implementation support in all our agricultural initiatives.',
    },
    {
      icon: Heart,
      title: 'Passion',
      desc: 'Driven by a deep commitment to improving smallholder productivity and agricultural value chains across Africa.',
    },
    {
      icon: Handshake,
      title: 'Respect',
      desc: 'Honor our partnerships with local stakeholders, government officials, and communities, valuing their local expertise.',
    },
    {
      icon: Users,
      title: 'Teamwork',
      desc: 'Collaborate closely with clients, partners, and local groups to build sustainable capacity and achieve shared goals.',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      desc: 'Constantly expand our field-based expertise and adapt to evolving agricultural practices and systems.',
    },
    {
      icon: ShieldCheck,
      title: 'Integrity',
      desc: 'Conduct our work with financial transparency, accountability, and the highest ethical and professional standards.',
    },
  ]

  return (
    <>      <main className="bg-white min-h-screen">
        {/* Editorial Hero */}
        <section className="relative w-full pt-32 lg:pt-48 pb-16 overflow-hidden border-b border-mist">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--mist)_0%,transparent_50%)] opacity-50"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center"
            >
              <h1 className="text-5xl lg:text-7xl font-serif text-deep-forest font-bold tracking-tight">Old and New by Design</h1>
              <p className="text-lg lg:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed font-light">
                Agri Experience is both an old and new company. Old because the direct experience of our group of principals dates back to 1991. New because Agri Experience, Ltd. was founded in 2012.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Bento */}
        <section className="w-full py-16 lg:py-24 bg-white relative">
          <div className="max-w-[1800px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <motion.div
                whileHover={{ y: -5 }}
                className="bento-card bg-deep-forest text-white p-10 lg:p-12 space-y-6 rounded-[32px]"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Target className="text-accent-gold" size={32} />
                </div>
                <h2 className="text-white text-4xl font-serif">Our Mission</h2>
                <p className="text-white/80 text-lg leading-relaxed font-light">
                  To deliver high-quality, experience-based field analysis, recommendations, and implementation support for seed systems development.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bento-card bg-mist border-primary-green/20 p-10 lg:p-12 space-y-6 rounded-[32px]"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-green/10 flex items-center justify-center">
                  <Leaf className="text-primary-green" size={32} />
                </div>
                <h2 className="text-deep-forest text-4xl font-serif">Our Vision</h2>
                <p className="text-charcoal/80 text-lg leading-relaxed font-light">
                  Meaningful and sustainable systemic change through close collaboration with local officials and seed sector stakeholders.
                </p>
              </motion.div>
            </div>

            {/* Core Values Grid */}
            <div className="space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-deep-forest">Our Core Values</h2>
                <p className="text-charcoal/50 font-bold uppercase tracking-widest text-xs">The principles that guide our work</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, idx) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -10 }}
                      className="p-8 rounded-3xl bg-mist border border-mist hover:border-primary-green/20 hover:bg-white hover:shadow-xl transition duration-200 text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary-green/10 flex items-center justify-center mx-auto mb-6">
                        <Icon className="text-primary-green" size={32} />
                      </div>
                      <h4 className="text-xl font-serif text-deep-forest font-bold">{value.title}</h4>
                      <p className="text-sm text-charcoal/70 leading-relaxed font-light">{value.desc}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Team Link Section */}
        <section className="w-full py-20 lg:py-28 bg-primary-green/5 border-b border-primary-green/10">
          <div className="max-w-[1400px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between gap-8 p-12 bg-white rounded-[32px] border border-primary-green/10 shadow-lg"
            >
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-deep-forest">Meet Our Dedicated Team</h3>
                <p className="text-lg text-charcoal/70 font-light leading-relaxed max-w-lg">
                  Discover the experienced professionals behind Agri Experience who bring decades of expertise to every project.
                </p>
              </div>
              <Link 
                href="/our-team" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-green text-white rounded-lg font-bold whitespace-nowrap transition-all duration-300 hover:shadow-xl hover:shadow-primary-green/20 hover:scale-105"
              >
                View Team
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Supporting Consultants Section */}
        <section className="w-full py-16 lg:py-24 bg-white border-b border-mist">
          <div className="max-w-[1400px] mx-auto px-6 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-deep-forest">Supporting Consultants</h2>
              <p className="text-charcoal/80 font-light text-lg">
                Depending upon the assignment and geography, we have a strong network of vetted independent consultants with whom we partner
                for specific assignments. These experts support us in areas such as national government liaison, technical advisory work, local
                costing and estimates, marketing and distribution, and local implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="p-10 rounded-[32px] bg-mist border border-mist space-y-6">
                <h3 className="text-2xl font-serif font-bold text-deep-forest">Valued Support Team</h3>
                <p className="text-charcoal/80 font-light leading-relaxed">
                  Our long-standing relationships with experienced seed system experts across sub-Saharan Africa deepen our ability to deliver
                  successful results to our clients.
                </p>
                <ul className="space-y-2 text-charcoal/80 font-bold">
                  <li>&bull; Nicholas Kilonzo</li>
                </ul>
              </div>

              <div className="p-10 rounded-[32px] bg-mist border border-mist space-y-6">
                <h3 className="text-2xl font-serif font-bold text-deep-forest">Milestones</h3>
                <ul className="space-y-4 text-charcoal/80 font-light">
                  <li><span className="font-bold text-deep-forest">1991</span> &mdash; Principals&apos; seed sector experience begins.</li>
                  <li><span className="font-bold text-deep-forest">2007</span> &mdash; Seed systems work across Africa accelerates.</li>
                  <li><span className="font-bold text-deep-forest">2012</span> &mdash; Agri Experience, Ltd. is founded.</li>
                  <li><span className="font-bold text-deep-forest">Today</span> &mdash; Over 80 years of combined seed sector experience.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-24 lg:py-32 bg-mist">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
            <h2 className="text-deep-forest text-4xl lg:text-5xl font-serif">Partner With Us</h2>
            <p className="text-xl lg:text-2xl text-charcoal/80 font-light leading-relaxed">
              Let&apos;s collaborate to transform agricultural systems and create sustainable impact for generations to come.
            </p>
            <div className="pt-6">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-deep-forest text-white rounded font-bold transition duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-deep-forest/20">
                Get In Touch
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>    </>
  )
}