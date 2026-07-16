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
