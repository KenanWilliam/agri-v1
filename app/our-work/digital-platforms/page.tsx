'use client'

import { motion } from 'framer-motion'
import { MonitorSmartphone, Smartphone, Database, Wifi, BarChart3, Shield, ArrowRight, Leaf, Globe, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const platforms = [
  {
    title: 'MbeguChoice Platform',
    description: 'Partnership with KALRO, KEPHIS, and Kenya Markets Trust. An online tool cataloguing 200+ crop varieties with information on disease tolerance, maturity periods, and seed companies — helping farmers and agrodealers identify varieties suited to specific ecological zones.',
    icon: MonitorSmartphone,
    tag: 'Flagship Platform',
  },
  {
    title: 'Mulika Mbegu Mbovu (M3)',
    description: 'An SMS-based seed verification system developed with KEPHIS. Unique codes printed on seed packets allow instant authentication, while a farmer reporting mechanism helps combat fake and counterfeit seeds by connecting reports directly to regulators.',
    icon: Smartphone,
    tag: 'Verification System',
  },
  {
    title: 'National Variety Catalogues',
    description: 'Online variety catalogue systems designed for governments, providing digital interfaces for seed systems information access and comprehensive crop variety data management across national agricultural programs.',
    icon: Database,
    tag: 'Government Systems',
  },
  {
    title: 'Data Management Systems',
    description: 'Agricultural data collection and analysis platforms that power benchmarking tools for industry performance, survey infrastructure, and assessment systems for seed sector development.',
    icon: BarChart3,
    tag: 'Analytics & Data',
  },
]

const approach = [
  {
    step: '01',
    title: 'Assess & Design',
    description: 'Understand stakeholder needs through deep consultation and design intuitive digital interfaces that solve real problems in the agricultural value chain.',
    icon: Globe,
  },
  {
    step: '02',
    title: 'Build & Integrate',
    description: 'Develop scalable, robust platforms connected to existing agricultural systems — ensuring interoperability and seamless data flow across institutions.',
    icon: Wifi,
  },
  {
    step: '03',
    title: 'Deploy & Support',
    description: 'Launch solutions with comprehensive training and ongoing technical support, ensuring adoption and long-term sustainability across stakeholder groups.',
    icon: Shield,
  },
]

const spotlightStats = [
  { value: '200+', label: 'Varieties Catalogued' },
  { value: 'Multi-Zone', label: 'Ecological Coverage' },
  { value: '3', label: 'Key Partnerships' },
  { value: 'Live', label: 'Platform Status' },
]

export default function DigitalPlatformsPage() {
  return (
    <>
      <main className="bg-white min-h-screen">
        {/* ─── Hero ─── */}
        <section className="relative w-full pt-32 lg:pt-48 pb-20 overflow-hidden">
          {/* Background blobs */}
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary-green/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-green/3 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="max-w-[1800px] mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
              {/* Left: Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-6"
              >
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-2 text-primary-green font-bold text-sm tracking-[0.2em] uppercase hover:opacity-80 transition"
                >
                  <Leaf size={18} />
                  Our Work
                </Link>
                <h1 className="text-5xl lg:text-7xl font-serif text-deep-forest font-bold leading-[1.1] tracking-tight">
                  Digital Platforms
                </h1>
                <p className="text-primary-green font-medium text-lg tracking-wide">
                  Technology for Smarter Agriculture
                </p>
              </motion.div>

              {/* Right: Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 lg:pt-16 relative"
              >
                <div className="hidden lg:block absolute left-0 top-16 bottom-0 w-px bg-primary-green/20" />
                <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed font-light lg:pl-10">
                  Smart, scalable digital solutions that connect data, people, and decisions across the agricultural value chain. AE builds digital platforms that transform how agricultural data is collected, shared, and used — bridging the gap between research institutions, seed companies, regulators, and farmers.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Platform Capabilities — Bento Grid ─── */}
        <section className="w-full pb-28">
          <div className="max-w-[1800px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight">
                Our Platforms
              </h2>
              <p className="mt-4 text-charcoal/80 font-light leading-relaxed max-w-2xl text-lg">
                Purpose-built digital tools that address critical gaps in seed systems and agricultural value chains.
              </p>
            </motion.div>

            {/* Bento-style grid: first card spans 2 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platforms.map((platform, idx) => {
                const Icon = platform.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`rounded-[32px] bg-mist border border-mist hover:border-primary-green/20 hover:bg-white hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200 p-8 lg:p-10 flex flex-col ${
                      idx === 0 ? 'md:col-span-2 md:flex-row md:items-center md:gap-12' : ''
                    }`}
                  >
                    {/* Icon + Tag */}
                    <div className={`space-y-4 ${idx === 0 ? 'md:flex-shrink-0' : ''}`}>
                      <div className="w-16 h-16 rounded-2xl bg-primary-green/10 flex items-center justify-center text-primary-green">
                        <Icon size={30} />
                      </div>
                      <span className="inline-block text-xs font-bold text-primary-green tracking-[0.15em] uppercase bg-primary-green/10 px-3 py-1 rounded-full">
                        {platform.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={`mt-6 ${idx === 0 ? 'md:mt-0' : ''}`}>
                      <h3 className="text-2xl font-serif font-bold text-deep-forest tracking-tight">
                        {platform.title}
                      </h3>
                      <p className="mt-3 text-charcoal/80 font-light leading-relaxed">
                        {platform.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── Approach / Process — Numbered Steps ─── */}
        <section className="w-full py-28 bg-warm-earth/40">
          <div className="max-w-[1800px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight">
                Our Approach
              </h2>
              <p className="mt-4 text-charcoal/80 font-light leading-relaxed max-w-2xl mx-auto text-lg">
                A proven three-phase methodology that takes digital agricultural solutions from concept to lasting impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
              {approach.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="relative flex flex-col items-center text-center px-8 lg:px-12"
                  >
                    {/* Connector line (desktop) */}
                    {idx < approach.length - 1 && (
                      <div className="hidden lg:block absolute top-12 right-0 w-full h-px bg-primary-green/20 translate-x-1/2 z-0" />
                    )}

                    {/* Step number circle */}
                    <div className="relative z-10 w-24 h-24 rounded-full bg-white border-2 border-primary-green/30 flex items-center justify-center mb-8 shadow-sm">
                      <span className="text-3xl font-data font-bold text-primary-green tracking-wide">
                        {item.step}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center text-primary-green mb-6">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-xl font-serif font-bold text-deep-forest tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/80 font-light leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── MbeguChoice Spotlight ─── */}
        <section className="w-full py-28">
          <div className="max-w-[1800px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Decorative visual card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="rounded-[32px] bg-gradient-to-br from-deep-forest to-deep-forest/90 p-10 lg:p-14 text-white relative overflow-hidden">
                  {/* Subtle radial overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(58,180,74,0.15),transparent_60%)] pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(36,132,198,0.1),transparent_50%)] pointer-events-none" />

                  <div className="relative z-10">
                    <span className="inline-block text-xs font-bold text-primary-green tracking-[0.2em] uppercase mb-6">
                      Case Study
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-serif font-bold tracking-tight mb-4">
                      MbeguChoice
                    </h3>
                    <p className="text-white/80 font-light leading-relaxed mb-10">
                      A groundbreaking platform developed in partnership with KALRO, KEPHIS, and Kenya Markets Trust — empowering farmers and agrodealers to make data-driven seed selection decisions for their specific ecological zones.
                    </p>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-6">
                      {spotlightStats.map((stat, i) => (
                        <div key={i} className="bg-white/5 rounded-2xl p-4 border border-white/10">
                          <div className="text-2xl font-data font-bold text-primary-green tracking-wide">
                            {stat.value}
                          </div>
                          <div className="text-xs text-white/60 mt-1 tracking-wide">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-8"
              >
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight">
                  Transforming Seed Selection in Kenya
                </h2>
                <p className="text-charcoal/80 font-light leading-relaxed text-lg">
                  MbeguChoice represents the future of agricultural decision support — a digital platform that puts critical variety information directly in the hands of those who need it most.
                </p>

                <div className="space-y-5">
                  {[
                    'Over 200 crop varieties catalogued with full performance data',
                    'Coverage across multiple ecological zones for location-specific recommendations',
                    'Disease tolerance and maturity period data for every listed variety',
                    'Partnership with KALRO, KEPHIS, and Kenya Markets Trust',
                    'Helps farmers and agrodealers choose seeds with confidence',
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={20} className="text-primary-green flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80 font-light leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Why Digital Matters Strip ─── */}
        <section className="w-full py-20 bg-mist">
          <div className="max-w-[1800px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight">
                Why Digital Matters
              </h2>
              <p className="mt-4 text-charcoal/80 font-light leading-relaxed max-w-2xl mx-auto text-lg">
                Across sub-Saharan Africa, digital tools are reshaping how seed systems operate — improving transparency, reducing fraud, and connecting stakeholders at scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: 'Connected Ecosystems',
                  text: 'Our platforms create digital bridges between research institutions, seed companies, regulators, and the farming communities they serve.',
                },
                {
                  icon: Shield,
                  title: 'Trust & Verification',
                  text: 'From SMS-based seed authentication to real-time reporting, our tools help combat counterfeiting and build trust across supply chains.',
                },
                {
                  icon: BarChart3,
                  title: 'Data-Driven Decisions',
                  text: 'By digitizing variety catalogues and performance data, we empower every stakeholder to make smarter, evidence-based choices.',
                },
              ].map((card, idx) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="bg-white rounded-[32px] p-8 lg:p-10 border border-transparent hover:border-primary-green/20 hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary-green/10 flex items-center justify-center text-primary-green mb-6">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-deep-forest tracking-tight mb-3">
                      {card.title}
                    </h3>
                    <p className="text-charcoal/80 font-light leading-relaxed text-sm">
                      {card.text}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="w-full">
          <div className="w-full bg-deep-forest py-24 lg:py-32 px-6 relative overflow-hidden">
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(58,180,74,0.12),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(36,132,198,0.08),transparent_50%)] pointer-events-none" />

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilterDP">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilterDP)" />
              </svg>
            </div>

            <div className="max-w-[1800px] mx-auto relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-6">
                  Ready to Digitize Your Agricultural Systems?
                </h2>
                <p className="text-white/70 font-light leading-relaxed text-lg mb-10">
                  Partner with Agri Experience to build digital platforms that transform how your agricultural data flows — from research to the field.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary-green hover:bg-primary-green/90 text-white font-bold px-8 py-4 rounded-full transition duration-200"
                  >
                    Get in Touch
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/our-work"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full border border-white/20 transition duration-200"
                  >
                    Explore Our Work
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
