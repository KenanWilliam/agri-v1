'use client'

import { motion } from 'framer-motion'
import { Award, Heart, Handshake, Users, BookOpen, ShieldCheck, Target, Leaf, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import OfficePlantsGallery from '@/components/motion/office-plants-gallery'

export default function AboutPage() {


  return (
    <>      <main className="bg-white min-h-screen">


        <OfficePlantsGallery showMissionVision />

        {/* Bento Expertise Section */}
        <section className="w-full py-16 lg:py-24 bg-white relative border-t border-mist">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
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


        {/* Core Values Grid */}
        <section className="w-full py-16 lg:py-24 bg-white relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-deep-forest">Our Core Values</h2>
                <p className="text-charcoal/50 font-bold uppercase tracking-widest text-xs">The principles that guide our work</p>
              </div>
              
              <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-primary-green/10">
                <Image
                  src="/our values.png"
                  alt="Our Core Values"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-24 lg:py-32 bg-mist">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-10">
            <h2 className="text-deep-forest text-4xl lg:text-5xl font-serif">Partner With Us</h2>
            <p className="text-xl lg:text-2xl text-charcoal/80 font-light leading-relaxed">
              Let&apos;s collaborate to transform agricultural systems and create sustainable impact for generations to come.
            </p>
            <div className="pt-6">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-deep-forest text-white rounded-full font-bold transition duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-deep-forest/20">
                Get In Touch
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>    </>
  )
}
