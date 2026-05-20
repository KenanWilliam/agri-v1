'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { CheckCircle, Briefcase, Users, TrendingUp, ArrowRight, Award, Globe, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function OurWorkPage() {
  const services = [
    {
      icon: Briefcase,
      title: 'Strategic Consultancy',
      description: 'Comprehensive seed sector assessments and strategic roadmaps for agricultural development',
      details: [
        'Market analysis and competitive positioning',
        'Regulatory landscape assessment',
        'Stakeholder engagement strategy',
        'Implementation planning',
      ],
    },
    {
      icon: Shield,
      title: 'Policy & Advocacy',
      description: 'Strengthening the legal frameworks that ensure seed quality and protect agricultural biodiversity',
      details: [
        'Seed law development',
        'Quality assurance frameworks',
        'Intellectual property rights',
        'Policy advocacy support',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Value Chain Integration',
      description: 'End-to-end solutions for strengthening agricultural value chains',
      details: [
        'Producer organization development',
        'Market linkages',
        'Quality standards implementation',
        'Post-harvest technology',
      ],
    },
    {
      icon: Zap,
      title: 'Innovation Support',
      description: 'Modernizing agricultural systems through digital tools and logistics',
      details: [
        'Digital extension services',
        'Supply chain transparency',
        'E-commerce for farmers',
        'Data-driven decision support',
      ],
    },
  ]

  const projects = [
    {
      country: 'Kenya',
      title: 'Eastern Africa Seed System Transformation',
      description: 'Supporting 50,000 smallholder farmers with quality seeds and market access',
      impact: '12 projects',
    },
    {
      country: 'Ghana',
      title: 'West African Seed Network Development',
      description: 'Building seed producer networks and improving supply chain efficiency',
      impact: '7 projects',
    },
    {
      country: 'Tanzania',
      title: 'Southern Highland Value Chain Initiative',
      description: 'Connecting highland seed producers with regional markets',
      impact: '10 projects',
    },
    {
      country: 'Senegal',
      title: 'Sahel Seed Security Program',
      description: 'Climate-resilient seed varieties for semi-arid regions',
      impact: '6 projects',
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-primary-ivory min-h-screen">
        {/* Premium Hero */}
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
                <Globe size={14} />
                Our Pan-African Services
              </div>
              <h1 className="text-primary italic">Transformative Expertise</h1>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light">
                Comprehensive consultancy and implementation services strengthening the foundations of African agriculture.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Services Bento */}
        <section className="w-full py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-primary">Our Core Expertise</h2>
              <p className="text-foreground/50 font-bold uppercase tracking-widest text-xs">How we drive change</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bento-card border-primary/10 p-10 flex flex-col gap-8"
                  >
                    <div className="flex justify-between items-start">
                      <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center">
                        <Icon className="text-primary" size={32} />
                      </div>
                      <Award className="text-secondary/20" size={32} />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-2xl text-primary italic">{service.title}</h3>
                      <p className="text-foreground/70 font-light leading-relaxed">{service.description}</p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-primary/5">
                      <p className="text-xs font-bold text-secondary uppercase tracking-widest">Service Delivery</p>
                      <ul className="grid grid-cols-1 gap-3">
                        {service.details.map((detail, didx) => (
                          <li key={didx} className="flex gap-3 items-center text-sm text-foreground/60">
                            <CheckCircle size={16} className="text-primary/40 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section className="w-full py-24 bg-primary text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--primary-gold)_0%,transparent_40%)] opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-white">Featured Impact</h2>
              <p className="text-primary-ivory/60 max-w-2xl mx-auto italic text-lg">
                Direct evidence of our transformation efforts across different regional contexts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="glass-panel border-white/10 rounded-3xl p-10 space-y-6"
                >
                  <div className="flex justify-between items-center">
                    <span className="px-4 py-1.5 rounded-full bg-white/10 text-secondary text-xs font-bold tracking-widest uppercase border border-white/10">
                      {project.country}
                    </span>
                    <span className="text-primary-ivory/40 text-sm font-bold tracking-tighter italic">{project.impact}</span>
                  </div>
                  <h3 className="text-2xl text-white italic leading-tight">{project.title}</h3>
                  <p className="text-primary-ivory/70 font-light leading-relaxed">{project.description}</p>
                  <Link href="/our-results" className="inline-flex items-center gap-2 text-secondary text-sm font-bold hover:gap-4 transition-all">
                    Explore Case Study <ArrowRight size={18} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="w-full py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-primary">Our Proven Methodology</h2>
              <p className="text-foreground/50 font-bold uppercase tracking-widest text-xs">Standardized excellence</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { num: '01', title: 'Deep Assessment', desc: 'Thorough analysis of current systems and local challenges.' },
                { num: '02', title: 'Bespoke Design', desc: 'Co-developing solutions with local stakeholders.' },
                { num: '03', title: 'Agile Implementation', desc: 'Hands-on support ensuring effective execution.' },
                { num: '04', title: 'Sustained Impact', desc: 'Continuous monitoring and adaptive management.' },
              ].map((step, idx) => (
                <div key={idx} className="relative p-8 rounded-3xl bg-primary-ivory border border-primary/5 space-y-4">
                  <div className="text-4xl font-data text-secondary/20">{step.num}</div>
                  <h4 className="text-xl text-primary italic">{step.title}</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-32 bg-primary-ivory">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
            <h2 className="text-primary italic">Ready to Begin?</h2>
            <p className="text-2xl text-foreground/70 font-light leading-relaxed">
              Let&apos;s discuss how our expertise can accelerate your agricultural development goals.
            </p>
            <div className="pt-6">
              <Link href="/contact" className="btn-premium">
                Schedule a Consultation
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
