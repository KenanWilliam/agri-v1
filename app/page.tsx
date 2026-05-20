'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import InteractiveMap from '@/components/interactive-map'
import TestimonialModal from '@/components/testimonial-modal'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Globe, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-mint to-cream">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-4000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  Transforming African Agriculture
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-serif font-bold text-dark-green leading-tight">
                Seed Systems That <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Grow Communities</span>
              </h1>

              <p className="text-xl md:text-2xl text-dark-blue-gray max-w-3xl mx-auto leading-relaxed">
                Expert consultancy transforming agricultural value chains across 21 African countries. We strengthen seed systems, empower farmers, and create sustainable market opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Explore Our Work
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-full font-semibold hover:bg-mint transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-4xl font-data text-primary mb-2">21</div>
                  <p className="text-sm text-dark-blue-gray">African Countries</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-data text-secondary mb-2">500K+</div>
                  <p className="text-sm text-dark-blue-gray">Farmers Impacted</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-data text-accent mb-2">20+</div>
                  <p className="text-sm text-dark-blue-gray">Years Experience</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
                Our Expertise
              </h2>
              <p className="text-lg text-dark-blue-gray max-w-2xl mx-auto">
                Comprehensive solutions for sustainable agricultural development
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Globe,
                  title: 'Market Analysis',
                  desc: 'Strategic insights for agricultural market development',
                },
                {
                  icon: Users,
                  title: 'Capacity Building',
                  desc: 'Training programs for farmers and stakeholders',
                },
                {
                  icon: TrendingUp,
                  title: 'Value Chain Dev',
                  desc: 'Integrated solutions for agricultural systems',
                },
                {
                  icon: Zap,
                  title: 'Innovation',
                  desc: 'Modern approaches to seed sector challenges',
                },
              ].map((service, idx) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group p-6 rounded-xl bg-gradient-to-br from-mint to-cream border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-lg text-dark-green mb-2">
                      {service.title}
                    </h3>
                    <p className="text-dark-blue-gray text-sm">{service.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Interactive Map */}
        <InteractiveMap />

        {/* Testimonials Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
                  Trusted by Leaders
                </h2>
                <p className="text-lg text-dark-blue-gray max-w-2xl mx-auto">
                  Hear from organizations that have partnered with us
                </p>
              </div>

              <TestimonialModal />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-dark-green to-dark-blue-gray text-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Ready to Transform Your Agricultural Systems?
              </h2>
              <p className="text-xl text-cream mb-8">
                Join hundreds of organizations across Africa working with us to strengthen seed systems and improve farmer livelihoods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-dark-green rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  Start a Partnership
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  Download Resources
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
