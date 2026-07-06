'use client'

import ClientLogos from '@/components/client-logos'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Globe, Zap, Leaf, Shield, Award, BarChart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="overflow-hidden bg-background">
        {/* Premium Hero Section */}
        <section className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden pt-[104px] pb-10 bg-white">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-mist animate-[kenburns_20s_ease-out_infinite_alternate] scale-100 hover:scale-105 transition-transform duration-[20000ms]">
            <Image
              src="/hero-bg.png"
              alt="Agri Experience Hero Background"
              fill
              priority
              quality={100}
              className="object-cover object-center lg:object-[center_30%] 3xl:object-[center_40%]"
            />
          </div>
          
          {/* White Gradient Overlay to ensure dark text readability and blend into next section */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-white from-[10%] via-white/80 via-[40%] to-transparent to-[75%] md:w-[80%]"></div>
          
          {/* Centered Vertically Content Block */}
          <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 w-full flex-1 flex flex-col justify-center">
            <div className="max-w-2xl xl:max-w-3xl 3xl:max-w-4xl space-y-6 lg:space-y-8 xl:space-y-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="font-serif tracking-tight text-[#1A4D2E] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]"
              >
                Cultivating Sustainable <br />
                Seed Systems <br />
                Across Africa
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-800 leading-relaxed font-medium max-w-xl xl:max-w-2xl text-base sm:text-lg lg:text-xl"
              >
                Empowering farmers through innovation, expertise, and digital excellence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-2"
              >
                <Link href="/our-impact" className="inline-flex items-center justify-center gap-3 px-6 py-3 lg:px-8 lg:py-4 bg-[#1A4D2E] text-white rounded-full font-bold transition duration-200 hover:bg-[#1A4D2E]/90 text-sm lg:text-base">
                  Explore Our Impact
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              {/* Inline Horizontal Stats matching grad.png */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="pt-4 lg:pt-6"
              >
                <div className="flex flex-wrap justify-start items-center gap-4 sm:gap-6 lg:gap-10 xl:gap-12">
                  {[
                    { value: '500K+', label: 'Farmers Reached', icon: Leaf },
                    { value: '150+', label: 'Seed Partners', icon: Shield },
                    { value: '25', label: 'African Countries', icon: Globe },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-primary-green/20 flex items-center justify-center text-[#1A4D2E] bg-white shadow-sm shrink-0">
                        <stat.icon size={18} className="lg:w-5 lg:h-5" />
                      </div>
                      <div className="flex flex-col text-left">
                        <div className="text-lg lg:text-xl font-bold text-[#1A4D2E] leading-none">{stat.value}</div>
                        <div className="text-[9px] lg:text-[10px] font-bold tracking-[0.15em] text-gray-500 mt-1.5 whitespace-nowrap">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bento Expertise Section */}
        <section className="w-full py-16 lg:py-24 bg-white relative border-t border-mist">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-deep-forest">Our Expertise</h2>
                <p className="text-xl text-charcoal/70 font-light">
                  We focus on positive, sustainable systemic change with a highly customized approach for each assignment.
                </p>
              </div>
              <Link href="/our-work" className="group flex items-center gap-2 text-deep-forest font-bold hover:gap-4 transition duration-200">
                View All Services <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Feature 1: Large */}
              <motion.div
                className="md:col-span-7 rounded-3xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex flex-col justify-between min-h-[350px] lg:min-h-[400px]"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center">
                    <TrendingUp className="text-primary-green" size={32} />
                  </div>
                  <h3 className="font-serif tracking-tight text-[#1A4D2E] text-3xl">Systemic Change Focus</h3>
                  <p className="font-sans text-gray-600 text-lg max-w-md">
                    We do not accept assignments that simply check a client&apos;s project or task box. We prioritize long-term, system-wide improvement.
                  </p>
                </div>
                <ArrowRight className="text-primary-green group-hover:translate-x-1 transition-transform mt-4" size={24} />
              </motion.div>

              {/* Feature 2: Medium */}
              <motion.div
                className="md:col-span-5 rounded-3xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex flex-col gap-8"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                  <Shield className="text-[#1A4D2E]" size={24} />
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif tracking-tight text-[#1A4D2E] text-2xl">Customized by Context</h3>
                  <p className="font-sans text-gray-600">
                    Each crop and country represents a distinct set of circumstances, so we tailor services for every assignment.
                  </p>
                  <ArrowRight className="text-primary-green group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </motion.div>

              {/* Feature 3: Small */}
              <motion.div
                className="md:col-span-4 rounded-3xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex flex-col gap-6"
              >
                <Users className="text-[#1A4D2E]" size={24} />
                <div className="space-y-2">
                  <h4 className="font-serif tracking-tight text-[#1A4D2E] text-xl">Team-Oriented Practice</h4>
                  <p className="font-sans text-gray-600 text-sm">A collaborative, learning-focused practice that continually updates based on field realities.</p>
                </div>
                <ArrowRight className="text-primary-green group-hover:translate-x-1 transition-transform mt-auto" size={18} />
              </motion.div>

              {/* Feature 4: Small */}
              <motion.div
                className="md:col-span-4 rounded-3xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex flex-col gap-6"
              >
                <Zap className="text-[#1A4D2E]" size={24} />
                <div className="space-y-2">
                  <h4 className="font-serif tracking-tight text-[#1A4D2E] text-xl">Collaborative Partnerships</h4>
                  <p className="font-sans text-gray-600 text-sm">Working with clients to improve smallholder access to high quality seed of modern crop varieties.</p>
                </div>
                <ArrowRight className="text-primary-green group-hover:translate-x-1 transition-transform mt-auto" size={18} />
              </motion.div>

              {/* Feature 5: Small */}
              <motion.div
                className="md:col-span-4 rounded-3xl bg-white border border-gray-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex flex-col gap-6"
              >
                <Globe className="text-[#1A4D2E]" size={24} />
                <div className="space-y-2">
                  <h4 className="font-serif tracking-tight text-[#1A4D2E] text-xl">Sub-Saharan Reach</h4>
                  <p className="font-sans text-gray-600 text-sm">Deep experience across diverse agricultural zones throughout sub-Saharan Africa.</p>
                </div>
                <ArrowRight className="text-primary-green group-hover:translate-x-1 transition-transform mt-auto" size={18} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-16 lg:py-24 bg-mist">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-deep-forest">Trusted by Global Leaders</h2>
              <p className="text-xl text-charcoal/70 font-light max-w-2xl mx-auto">
                Our impact is measured through the success of our partners and the resilience of the communities we serve.
              </p>
            </div>
            <ClientLogos />
          </div>
        </section>

        {/* Premium CTA Section */}
        <section className="relative w-full py-24 lg:py-32 bg-deep-forest text-white overflow-hidden">
          {/* Decorative Texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--accent-gold)_0%,transparent_70%)]"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-10">
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
                  className="px-10 py-5 bg-primary-green text-white rounded-full font-bold text-lg hover:scale-105 transition duration-200 shadow-2xl shadow-primary-green/20"
                  >
                  Work With Us
                  </Link>
                  <Link
                  href="/contact"
                  className="px-10 py-5 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition duration-200 backdrop-blur-sm"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>    </>
  )
}
