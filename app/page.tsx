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
      <main className="overflow-hidden">
        {/* Premium Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center pt-20">
          {/* Subtle Background Grain & Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--sage-green)_0%,transparent_50%),radial-gradient(circle_at_bottom_left,var(--primary-ivory)_0%,transparent_50%)] opacity-40"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div className="text-center space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold tracking-wide uppercase"
              >
                <Leaf size={14} />
                Transforming African Agriculture
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-5xl mx-auto"
              >
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="block"
                  >
                    Seed Systems That
                  </motion.span>
                </span>
                <span className="block overflow-hidden italic text-secondary">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                    className="block"
                  >
                    Grow Communities
                  </motion.span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Expert consultancy strengthening seed systems and empowering farmers across 21 African nations. We build the foundations for sustainable prosperity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
              >
                <Link href="/our-work" className="btn-premium">
                  Explore Our Work
                  <ArrowRight size={20} />
                </Link>
                <Link href="/contact" className="btn-premium-outline">
                  Get In Touch
                </Link>
              </motion.div>

              {/* Refined Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 max-w-4xl mx-auto border-t border-primary/10"
              >
                {[
                  { label: 'African Nations', value: '21', icon: Globe },
                  { label: 'Farmers Impacted', value: '500K+', icon: Users },
                  { label: 'Years Experience', value: '20+', icon: Award },
                  { label: 'Active Projects', value: '150+', icon: BarChart },
                ].map((stat, i) => (
                  <div key={i} className="text-center space-y-2">
                    <div className="flex justify-center text-primary/40"><stat.icon size={20} /></div>
                    <div className="text-4xl font-data text-primary">{stat.value}</div>
                    <p className="text-xs uppercase tracking-widest text-foreground/50 font-bold">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bento Expertise Section */}
        <section className="w-full py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-primary">Our Expertise</h2>
                <p className="text-xl text-foreground/60 font-light">
                  Comprehensive solutions tailored to the unique challenges of African agricultural landscapes.
                </p>
              </div>
              <Link href="/our-work" className="group flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                View All Services <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Feature 1: Large */}
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-7 bento-card bg-primary text-white flex flex-col justify-between min-h-[400px]"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <TrendingUp className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-white text-3xl">Value Chain Development</h3>
                  <p className="text-white/80 text-lg max-w-md">
                    We integrate agricultural systems from seed to market, ensuring every step adds value for smallholder farmers and stakeholders.
                  </p>
                </div>
                <div className="mt-8 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider">Strategy</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider">Implementation</span>
                </div>
              </motion.div>

              {/* Feature 2: Medium */}
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-5 bento-card bg-secondary/5 border-secondary/20 flex flex-col gap-8"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Shield className="text-secondary" size={24} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl">Policy & Seed Regulations</h3>
                  <p className="text-foreground/70">
                    Navigating and shaping the legal frameworks that ensure seed quality and protect agricultural biodiversity.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3: Small */}
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-4 bento-card flex flex-col gap-6"
              >
                <Users className="text-primary" size={24} />
                <div className="space-y-2">
                  <h4 className="text-xl">Capacity Building</h4>
                  <p className="text-sm text-foreground/60">Training programs that empower local communities and agricultural extension workers.</p>
                </div>
              </motion.div>

              {/* Feature 4: Small */}
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-4 bento-card flex flex-col gap-6"
              >
                <Zap className="text-primary" size={24} />
                <div className="space-y-2">
                  <h4 className="text-xl">Market Innovation</h4>
                  <p className="text-sm text-foreground/60">Leveraging digital tools and modern logistics to connect rural farmers to urban demand.</p>
                </div>
              </motion.div>

              {/* Feature 5: Small */}
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-4 bento-card flex flex-col gap-6"
              >
                <Globe className="text-primary" size={24} />
                <div className="space-y-2">
                  <h4 className="text-xl">Regional Trade</h4>
                  <p className="text-sm text-foreground/60">Facilitating cross-border agricultural exchange to strengthen regional food security.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="bg-primary-ivory">
          <InteractiveMap />
        </section>

        {/* Testimonials */}
        <section className="w-full py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-primary">Trusted by Global Leaders</h2>
              <p className="text-xl text-foreground/60 font-light max-w-2xl mx-auto">
                Our impact is measured through the success of our partners and the resilience of the communities we serve.
              </p>
            </div>
            <TestimonialModal />
          </div>
        </section>

        {/* Premium CTA Section */}
        <section className="relative w-full py-32 bg-primary text-white overflow-hidden">
          {/* Decorative Texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary-gold)_0%,transparent_70%)]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-white mb-6">Ready to Grow Together?</h2>
              <p className="text-2xl text-primary-ivory/80 mb-12 font-light leading-relaxed">
                Join our network of transformative agricultural projects across Africa. Let&apos;s build sustainable systems that last for generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="px-10 py-5 bg-secondary text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-secondary/20"
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
