'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import InteractiveMap from '@/components/interactive-map'
import TestimonialModal from '@/components/testimonial-modal'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Globe, Zap, Leaf, Shield, Award, BarChart } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden bg-background">
        {/* Premium Hero Section */}
        <section className="relative w-full min-h-screen flex items-center pt-24 pb-12 lg:pt-32">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero-bg.png')" }}
          ></div>
          
          {/* Left Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/95 to-transparent w-full md:w-3/4 lg:w-2/3"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16 pb-12">
            <div className="max-w-2xl space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-deep-forest leading-[1.1]"
              >
                Cultivating Sustainable Seed Systems Across Africa
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-charcoal leading-relaxed font-light"
              >
                Empowering farmers through innovation, expertise, and digital excellence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-4"
              >
                <Link href="/our-impact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-deep-forest text-white rounded-full font-bold transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-deep-forest/20">
                  Explore Our Impact
                  <ArrowRight size={20} />
                </Link>
              </motion.div>

              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-wrap gap-x-8 gap-y-4 pt-12 mt-12 border-t border-mist"
              >
                {[
                  { value: '500K+', label: 'Farmers Reached', icon: Leaf },
                  { value: '150+', label: 'Seed Partners', icon: Shield },
                  { value: '25', label: 'African Countries', icon: Globe },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full border-2 border-primary-green/20 flex items-center justify-center text-deep-forest bg-mist">
                      <stat.icon size={20} />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-deep-forest leading-none">{stat.value}</div>
                      <div className="text-xs text-charcoal/70 tracking-wide mt-1">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bento Expertise Section */}
        <section className="w-full py-16 lg:py-24 bg-white relative border-t border-mist">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-deep-forest">Our Expertise</h2>
                <p className="text-xl text-charcoal/70 font-light">
                  We focus on positive, sustainable systemic change with a highly customized approach for each assignment.
                </p>
              </div>
              <Link href="/our-work" className="group flex items-center gap-2 text-deep-forest font-bold hover:gap-4 transition-all">
                View All Services <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Feature 1: Large */}
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-7 bento-card bg-deep-forest text-white flex flex-col justify-between min-h-[350px] lg:min-h-[400px]"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <TrendingUp className="text-accent-gold" size={32} />
                  </div>
                  <h3 className="text-white text-3xl font-serif">Systemic Change Focus</h3>
                  <p className="text-white/80 text-lg max-w-md font-light">
                    We do not accept assignments that simply check a client&apos;s project or task box. We prioritize long-term, system-wide improvement.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider">Strategy</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider">Implementation</span>
                </div>
              </motion.div>

              {/* Feature 2: Medium */}
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-5 bento-card bg-mist border-primary-green/20 flex flex-col gap-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center">
                  <Shield className="text-primary-green" size={24} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-deep-forest">Customized by Context</h3>
                  <p className="text-charcoal/70 font-light">
                    Each crop and country represents a distinct set of circumstances, so we tailor services for every assignment.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3: Small */}
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-4 bento-card flex flex-col gap-6"
              >
                <Users className="text-deep-forest" size={24} />
                <div className="space-y-2">
                  <h4 className="text-xl font-serif text-deep-forest">Team-Oriented Practice</h4>
                  <p className="text-sm text-charcoal/70 font-light">A collaborative, learning-focused practice that continually updates based on field realities.</p>
                </div>
              </motion.div>

              {/* Feature 4: Small */}
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-4 bento-card flex flex-col gap-6"
              >
                <Zap className="text-deep-forest" size={24} />
                <div className="space-y-2">
                  <h4 className="text-xl font-serif text-deep-forest">Collaborative Partnerships</h4>
                  <p className="text-sm text-charcoal/70 font-light">Working with clients to improve smallholder access to high quality seed of modern crop varieties.</p>
                </div>
              </motion.div>

              {/* Feature 5: Small */}
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-4 bento-card flex flex-col gap-6"
              >
                <Globe className="text-deep-forest" size={24} />
                <div className="space-y-2">
                  <h4 className="text-xl font-serif text-deep-forest">Sub-Saharan Reach</h4>
                  <p className="text-sm text-charcoal/70 font-light">Deep experience across diverse agricultural zones throughout sub-Saharan Africa.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="bg-white py-16 lg:py-24 border-t border-mist">
          <InteractiveMap />
        </section>

        {/* Testimonials */}
        <section className="w-full py-16 lg:py-24 bg-mist">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-deep-forest">Trusted by Global Leaders</h2>
              <p className="text-xl text-charcoal/70 font-light max-w-2xl mx-auto">
                Our impact is measured through the success of our partners and the resilience of the communities we serve.
              </p>
            </div>
            <TestimonialModal />
          </div>
        </section>

        {/* Premium CTA Section */}
        <section className="relative w-full py-24 lg:py-32 bg-deep-forest text-white overflow-hidden">
          {/* Decorative Texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--accent-gold)_0%,transparent_70%)]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-white mb-6">Ready to Grow Together?</h2>
              <p className="text-xl lg:text-2xl text-white/80 mb-12 font-light leading-relaxed">
                Join our network of transformative agricultural projects across Africa. Let&apos;s build sustainable systems that last for generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="px-10 py-5 bg-primary-green text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-primary-green/20"
                >
                  Start a Partnership
                </Link>
                <Link
                  href="/resources"
                  className="px-10 py-5 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  View Case Studies
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
