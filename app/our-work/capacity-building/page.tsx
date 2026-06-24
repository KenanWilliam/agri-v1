'use client'

import { motion } from 'framer-motion'
import {
  BookOpen,
  GraduationCap,
  Users,
  Radio,
  Presentation,
  Sprout,
  ArrowRight,
  Leaf,
  CheckCircle2,
  Award,
  Target,
  Lightbulb,
} from 'lucide-react'
import Link from 'next/link'

const trainingPrograms = [
  {
    title: 'Seed Business Management Training',
    description:
      'Training seed company managers on forecasting, quality control, HR, and business operations. Partnership with WACCI (West Africa Centre for Crop Improvement) PhD students in plant breeding.',
    detail: 'Practical, business-focused curriculum for seed enterprise professionalization.',
    icon: BookOpen,
  },
  {
    title: 'Seed Company Professionalization',
    description:
      "Using 'The African Seed Company Toolbox: 52 Tools Every Seed Company Manager Should Know How to Use' (authored by A. O'Connor Funk).",
    detail:
      "Covers 'meaningful moments' with customers, business management, and operational strategies designed specifically for seed enterprises in Africa.",
    icon: GraduationCap,
  },
  {
    title: 'Agrodealer Development',
    description:
      'Training agrodealers on product knowledge, customer service, and business management. Building agrodealer associations and networks.',
    detail: 'Supporting last-mile delivery capacity for quality inputs.',
    icon: Sprout,
  },
  {
    title: 'Breeder & Researcher Training',
    description:
      'Equipping plant breeders with commercial awareness and seed business knowledge. Bridging the gap between research and market.',
    detail: 'Understanding seed production, marketing, and distribution.',
    icon: Target,
  },
  {
    title: 'Industry Association Strengthening',
    description:
      'Building organizational capacity for seed trade associations. Governance, advocacy, and member services training.',
    detail: 'Strengthening industry self-regulation capabilities.',
    icon: Users,
  },
  {
    title: 'Educational Campaigns',
    description:
      'Radio campaigns related to seed awareness and quality. Public education on identifying genuine vs. counterfeit seed.',
    detail: 'Farmer education on variety selection and best practices.',
    icon: Radio,
  },
]

const approachSteps = [
  {
    step: '01',
    title: 'Needs Assessment',
    description: 'Identify knowledge gaps and training priorities with stakeholders',
    icon: Lightbulb,
  },
  {
    step: '02',
    title: 'Curriculum Design',
    description: 'Develop tailored, practical training materials and resources',
    icon: BookOpen,
  },
  {
    step: '03',
    title: 'Delivery & Facilitation',
    description: 'Conduct interactive workshops, field training, and mentoring',
    icon: Presentation,
  },
  {
    step: '04',
    title: 'Follow-up & Support',
    description: 'Provide ongoing support and measure capability improvements',
    icon: CheckCircle2,
  },
]

const toolboxHighlights = [
  '52 practical management tools in one comprehensive resource',
  'Business planning, forecasting, and financial management',
  'Quality assurance and production planning frameworks',
  'Customer relationship and marketing strategies',
  'Human resource management and team development',
  'Used in training programs across sub-Saharan Africa',
]

export default function CapacityBuildingPage() {
  return (
    <>
      <main className="bg-white min-h-screen">
        {/* ===== HERO ===== */}
        <section className="relative w-full pt-32 lg:pt-48 pb-20 overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-charcoal/[0.03] rounded-full blur-[120px] -translate-y-1/3 -translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-green/[0.04] rounded-full blur-[100px] translate-y-1/3 translate-x-1/4 pointer-events-none" />

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #1c2b22 1px, transparent 1px), linear-gradient(to bottom, #1c2b22 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-6"
              >
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-2 text-charcoal font-bold text-sm tracking-[0.2em] uppercase hover:opacity-80 transition"
                >
                  <Leaf size={18} />
                  Our Work
                </Link>
                <h1 className="text-5xl lg:text-7xl font-serif text-deep-forest font-bold leading-[1.1] tracking-tight">
                  Building Skills,
                  <br />
                  <span className="text-charcoal/70">Growing Futures.</span>
                </h1>
                <p className="text-charcoal font-medium text-lg tracking-wide">
                  Capacity Building
                </p>
              </motion.div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 lg:pt-16 relative"
              >
                <div className="hidden lg:block absolute left-0 top-16 bottom-0 w-px bg-charcoal/10" />
                <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed font-light lg:pl-10">
                  Empowering stakeholders through targeted training, skill development, and
                  knowledge transfer to ensure sustainable growth in agricultural systems.
                </p>
                <div className="lg:pl-10 mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white rounded-full font-semibold text-sm hover:bg-deep-forest transition-colors"
                  >
                    Start a Conversation
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/our-work"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-charcoal/20 text-charcoal rounded-full font-semibold text-sm hover:bg-charcoal/5 transition-colors"
                  >
                    Our Work
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== INTRO / OVERVIEW ===== */}
        <section className="w-full py-20 bg-mist/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 text-charcoal/60 font-bold text-xs tracking-[0.2em] uppercase mb-6">
                <Leaf size={14} />
                Our Philosophy
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight mb-8">
                Lasting change comes from building local capacity.
              </h2>
              <p className="text-lg text-charcoal/80 font-light leading-relaxed">
                Agri Experience&apos;s training programs equip seed companies, breeders,
                agrodealers, and industry leaders with the skills and knowledge they need to drive
                sustainable sector growth. We believe that when people have the right tools and
                knowledge, they can transform their organizations and communities from the inside
                out.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== TRAINING PROGRAMS GRID ===== */}
        <section className="w-full py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 text-charcoal/60 font-bold text-xs tracking-[0.2em] uppercase mb-6">
                <GraduationCap size={14} />
                Training Programs
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight mb-6">
                Comprehensive capacity development
              </h2>
              <p className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto">
                From seed business managers to farmer educators, our programs are tailored to the
                unique needs of every stakeholder in the agricultural value chain.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainingPrograms.map((program, idx) => {
                const Icon = program.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group rounded-[32px] bg-mist border border-mist hover:border-charcoal/15 hover:bg-white hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200 p-8 lg:p-10 flex flex-col"
                  >
                    {/* Icon with number badge */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-charcoal/[0.06] border border-charcoal/10 flex items-center justify-center text-charcoal group-hover:bg-charcoal group-hover:text-white transition duration-200">
                        <Icon size={24} />
                      </div>
                      <span className="font-data text-4xl text-charcoal/10 group-hover:text-charcoal/20 transition-colors leading-none">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-deep-forest mb-3 tracking-tight">
                      {program.title}
                    </h3>
                    <p className="text-charcoal/70 font-light leading-relaxed text-sm mb-4 flex-1">
                      {program.description}
                    </p>
                    <p className="text-charcoal/50 text-sm font-light italic border-t border-charcoal/5 pt-4">
                      {program.detail}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ===== APPROACH / METHODOLOGY — Visual Path ===== */}
        <section className="w-full py-24 bg-warm-earth/40 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-charcoal/[0.03] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-charcoal/[0.03] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 text-charcoal/60 font-bold text-xs tracking-[0.2em] uppercase mb-6">
                <Target size={14} />
                Our Approach
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight mb-6">
                A proven path to capability growth
              </h2>
              <p className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto">
                Every capacity building engagement follows a structured, participatory approach that
                ensures lasting impact.
              </p>
            </motion.div>

            {/* Steps — horizontal journey on desktop, vertical on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
              {/* Connecting line (desktop only) */}
              <div className="hidden lg:block absolute top-[72px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-charcoal/15 to-transparent" />

              {approachSteps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="text-center relative"
                  >
                    {/* Step circle */}
                    <div className="relative mx-auto mb-8">
                      <div className="w-20 h-20 rounded-full bg-white border-2 border-charcoal/10 flex items-center justify-center mx-auto relative z-10 shadow-sm">
                        <Icon size={28} className="text-charcoal" />
                      </div>
                      {/* Step number floating badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-charcoal text-white text-xs font-bold flex items-center justify-center z-20 shadow-md">
                        {step.step}
                      </div>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-deep-forest mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-charcoal/60 font-light text-sm leading-relaxed max-w-[240px] mx-auto">
                      {step.description}
                    </p>

                    {/* Arrow between steps (desktop only) */}
                    {idx < approachSteps.length - 1 && (
                      <div className="hidden lg:flex absolute top-[72px] -right-3 z-20">
                        <ArrowRight size={16} className="text-charcoal/30" />
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ===== TOOLBOX HIGHLIGHT ===== */}
        <section className="w-full py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left — visual block */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative rounded-[32px] bg-gradient-to-br from-charcoal to-deep-forest p-12 lg:p-16 text-white overflow-hidden">
                  {/* Texture */}
                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <filter id="noiseToolbox">
                        <feTurbulence
                          type="fractalNoise"
                          baseFrequency="0.65"
                          numOctaves="3"
                          stitchTiles="stitch"
                        />
                      </filter>
                      <rect width="100%" height="100%" filter="url(#noiseToolbox)" />
                    </svg>
                  </div>

                  {/* Decorative circles */}
                  <div className="absolute top-8 right-8 w-24 h-24 rounded-full border border-white/10" />
                  <div className="absolute top-12 right-12 w-16 h-16 rounded-full border border-white/5" />
                  <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full bg-primary-green/10 blur-2xl" />

                  <div className="relative z-10 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                      <BookOpen size={32} className="text-white" />
                    </div>

                    <div className="space-y-1">
                      <p className="text-white/50 font-bold text-xs tracking-[0.2em] uppercase">
                        Featured Resource
                      </p>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-serif font-bold leading-tight">
                      The African Seed Company Toolbox
                    </h3>
                    <p className="text-white/60 text-sm italic">
                      52 Tools Every Seed Company Manager Should Know How to Use
                    </p>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                        Author
                      </p>
                      <p className="text-white font-semibold">
                        A. O&apos;Connor Funk{' '}
                        <span className="text-white/40 font-normal">
                          — Aline O&apos;Connor, AE Founder
                        </span>
                      </p>
                    </div>

                    <div className="font-data text-6xl lg:text-8xl text-white/[0.06] absolute bottom-4 right-8 leading-none">
                      52
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right — checklist details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="space-y-8"
              >
                <div>
                  <div className="inline-flex items-center gap-2 text-charcoal/60 font-bold text-xs tracking-[0.2em] uppercase mb-4">
                    <Award size={14} />
                    Toolbox Highlights
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-forest tracking-tight mb-4">
                    52 practical tools for seed company success
                  </h2>
                  <p className="text-charcoal/70 font-light leading-relaxed">
                    This comprehensive resource has become the standard reference for seed company
                    managers across sub-Saharan Africa, providing actionable frameworks for every
                    aspect of seed enterprise management.
                  </p>
                </div>

                <ul className="space-y-4">
                  {toolboxHighlights.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-charcoal/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={14} className="text-charcoal" />
                      </div>
                      <span className="text-charcoal/80 font-light text-sm leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== IMPACT STATS BAR ===== */}
        <section className="w-full py-16 bg-mist/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '1,000+', label: 'Professionals Trained', icon: Users },
                { value: '52', label: 'Management Tools Developed', icon: BookOpen },
                { value: '20+', label: 'Countries Reached', icon: Sprout },
                { value: '100%', label: 'Practical, Hands-On Approach', icon: Award },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <stat.icon size={24} className="text-charcoal/40 mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-data text-charcoal tracking-wide">
                    {stat.value}
                  </div>
                  <div className="text-charcoal/50 text-xs font-semibold uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="w-full relative overflow-hidden">
          <div className="bg-deep-forest py-24 lg:py-32 relative">
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(58,180,74,0.12),_transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(28,43,34,0.4),_transparent_60%)] pointer-events-none" />

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseCTA_CB">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.65"
                    numOctaves="3"
                    stitchTiles="stitch"
                  />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseCTA_CB)" />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 text-primary-green font-bold text-xs tracking-[0.2em] uppercase">
                  <Leaf size={14} />
                  Get Started
                </div>
                <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white tracking-tight max-w-3xl mx-auto leading-[1.1]">
                  Invest in Your Team&apos;s Growth
                </h2>
                <p className="text-white/60 font-light text-lg max-w-xl mx-auto leading-relaxed">
                  Equip your organization with the skills, tools, and knowledge to thrive in
                  Africa&apos;s dynamic agricultural sector.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-deep-forest rounded-full font-semibold text-sm hover:bg-primary-green hover:text-white transition-colors"
                  >
                    Contact Us
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/our-work"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
                  >
                    Explore Our Work
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
