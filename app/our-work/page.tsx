'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { CheckCircle, Briefcase, Users, TrendingUp } from 'lucide-react'
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
      icon: Users,
      title: 'Capacity Development',
      description: 'Training and skills development for farmers, agro-dealers, and sector professionals',
      details: [
        'Farmer training programs',
        'Value chain skill development',
        'Leadership and management training',
        'Digital literacy initiatives',
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
      icon: CheckCircle,
      title: 'Implementation Support',
      description: 'On-the-ground support ensuring successful project execution',
      details: [
        'Project management',
        'M&E framework development',
        'Technical guidance',
        'Impact assessment',
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
              Our Work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-dark-blue-gray max-w-2xl mx-auto"
            >
              Comprehensive consultancy and implementation services transforming agricultural value chains across Africa.
            </motion.p>
          </div>
        </section>

        {/* Services */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
                Core Services
              </h2>
            </motion.div>

            <div className="space-y-8">
              {services.map((service, idx) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start p-8 rounded-2xl bg-gradient-to-r from-mint to-cream border border-primary/10 hover:border-primary/30 transition-all"
                  >
                    <div>
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="text-primary" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-dark-green">{service.title}</h3>
                      <p className="text-dark-blue-gray mt-2">{service.description}</p>
                    </div>

                    <div className="md:col-span-2">
                      <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                        What We Provide
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.details.map((detail, didx) => (
                          <li key={didx} className="flex gap-3 items-start">
                            <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-dark-blue-gray">{detail}</span>
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

        {/* Featured Projects */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-mint to-cream">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-dark-blue-gray max-w-2xl mx-auto">
                Representative initiatives across our operating regions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-8 border-2 border-primary/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                    {project.country}
                  </div>
                  <h3 className="text-2xl font-bold text-dark-green mb-3">{project.title}</h3>
                  <p className="text-dark-blue-gray mb-6">{project.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <span className="text-2xl font-data">{project.impact}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
                Our Approach
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  num: '1',
                  title: 'Assessment',
                  desc: 'Thorough analysis of current systems, challenges, and opportunities',
                },
                {
                  num: '2',
                  title: 'Design',
                  desc: 'Co-development of locally-adapted solutions with stakeholders',
                },
                {
                  num: '3',
                  title: 'Implementation',
                  desc: 'Hands-on support ensuring effective execution and adoption',
                },
                {
                  num: '4',
                  title: 'Monitoring',
                  desc: 'Continuous tracking and adaptive management for sustained impact',
                },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative p-8 rounded-xl bg-mint border-2 border-primary/20"
                >
                  <div className="text-5xl font-data text-primary/20 mb-4">{step.num}</div>
                  <h3 className="text-xl font-bold text-dark-green mb-3">{step.title}</h3>
                  <p className="text-dark-blue-gray">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-dark-green to-dark-blue-gray text-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-cream max-w-2xl mx-auto">
              Contact us to discuss how our services can support your agricultural development goals.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-dark-green rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
