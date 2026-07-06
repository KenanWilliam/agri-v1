'use client'

import { motion } from 'framer-motion'
import {
  Tractor,
  Target,
  Users,
  ClipboardList,
  MapPin,
  Sprout,
  ArrowRight,
  Leaf,
  CheckCircle2,
  Handshake,
  Calendar,
  Shield,
} from 'lucide-react'
import Link from 'next/link'

const implementationAreas = [
  {
    icon: Sprout,
    title: 'Seed System Development',
    points: [
      'Designing and implementing tools to improve seed quality and transparency',
      'Building infrastructure for better seed access and distribution',
      'Supporting national seed system strengthening',
    ],
  },
  {
    icon: MapPin,
    title: 'Agrodealer Network Development',
    points: [
      'Operational support for agrodealer-led climate-smart demonstrations',
      'Mapping and organizing agrodealer networks across counties',
      'Strengthening last-mile seed and input delivery',
    ],
  },
  {
    icon: Handshake,
    title: 'Regional Seed Trade',
    points: [
      'Development of strategies to promote regional seed trade',
      'Supporting harmonization of seed trade protocols',
      'Facilitating cross-border seed movement and compliance',
    ],
  },
  {
    icon: Shield,
    title: 'Quality Assurance Programs',
    points: [
      'Implementing seed quality verification systems',
      'Supporting phytosanitary compliance and standards',
      'Building trust in the seed supply chain',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Field Operations Management',
    points: [
      'Coordinating multi-county, multi-stakeholder field activities',
      'Managing survey teams, data collection, and logistics',
      'Ensuring quality and timeliness of deliverables',
    ],
  },
  {
    icon: Target,
    title: 'Monitoring & Evaluation',
    points: [
      'Tracking project outcomes and impact metrics',
      'Adaptive management based on field data',
      'Reporting to donors and stakeholders',
    ],
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Scoping & Planning',
    description: 'Define objectives, stakeholders, and success metrics',
    icon: Target,
  },
  {
    step: '02',
    title: 'Team Mobilization',
    description: 'Assemble local teams with deep sector knowledge',
    icon: Users,
  },
  {
    step: '03',
    title: 'Field Execution',
    description: 'Implement activities with rigorous quality control',
    icon: Tractor,
  },
  {
    step: '04',
    title: 'Monitoring',
    description: 'Track progress and adapt strategies in real-time',
    icon: ClipboardList,
  },
  {
    step: '05',
    title: 'Reporting & Handover',
    description: 'Deliver results and ensure sustainability',
    icon: CheckCircle2,
  },
]

const stats = [
  { value: '20+', label: 'Countries' },
  { value: '250+', label: 'Projects' },
  { value: '12', label: 'Counties (KCDMS)' },
  { value: '85+', label: 'Years Experience' },
]

export default function ProjectImplementationPage() {
  return (
    <>
      <main className="bg-white min-h-screen">
        {/* ─── Hero ─── */}
        <section className="relative w-full pt-24 lg:pt-28 pb-20 overflow-hidden">
          {/* Background accents */}
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-deep-forest/[0.04] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-green/[0.03] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

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
                  className="inline-flex items-center gap-2 text-deep-forest font-bold text-sm tracking-[0.2em] uppercase hover:opacity-80 transition"
                >
                  <Leaf size={18} />
                  Our Work
                </Link>
                <h1 className="text-5xl lg:text-7xl font-serif text-deep-forest font-bold leading-[1.1] tracking-tight">
                  Project
                  <br />
                  Implementation
                </h1>
                <p className="text-deep-forest font-medium text-lg tracking-wide">
                  From Strategy to Field Impact
                </p>
              </motion.div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 lg:pt-16 relative"
              >
                <div className="hidden lg:block absolute left-0 top-16 bottom-0 w-px bg-deep-forest/10" />
                <div className="lg:pl-10 space-y-5">
                  <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed font-light">
                    From strategy to execution, we manage and implement projects
                    that deliver measurable results on the ground across
                    sub-Saharan Africa.
                  </p>
                  <p className="text-base text-charcoal/60 leading-relaxed font-light">
                    Agri Experience doesn&apos;t just advise — we implement. With
                    deep field presence across 20+ countries, we manage
                    end-to-end project delivery for donors, governments, and
                    private sector partners.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-deep-forest text-white rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Discuss Implementation
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="/our-work"
                      className="inline-flex items-center gap-2 px-8 py-4 border border-deep-forest/20 text-deep-forest rounded-full font-semibold text-sm hover:bg-deep-forest/5 transition-colors"
                    >
                      Our Work
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Stats Bar ─── */}
        <section className="w-full pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-[32px] bg-mist border border-mist p-8 text-center"
                >
                  <div className="text-4xl lg:text-5xl font-data text-deep-forest leading-none">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-charcoal/60 tracking-wide uppercase font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── Key Implementation Areas ─── */}
        <section className="w-full pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl mb-16"
            >
              <div className="inline-flex items-center gap-2 text-deep-forest font-bold text-sm tracking-[0.2em] uppercase mb-4">
                <Leaf size={16} />
                What We Deliver
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight">
                Key Implementation Areas
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {implementationAreas.map((area, idx) => {
                const Icon = area.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="rounded-[32px] bg-mist border border-mist hover:border-deep-forest/20 hover:bg-white hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200 p-8 lg:p-10 group"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-deep-forest/[0.07] flex items-center justify-center text-deep-forest mb-6 group-hover:bg-deep-forest group-hover:text-white transition duration-200">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-serif font-bold text-deep-forest mb-4">
                      {area.title}
                    </h3>

                    <ul className="space-y-3">
                      {area.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-charcoal/70 font-light leading-relaxed text-sm"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-primary-green mt-0.5 shrink-0"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── Process / Timeline ─── */}
        <section className="w-full pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 text-deep-forest font-bold text-sm tracking-[0.2em] uppercase mb-4">
                <Calendar size={16} />
                Our Process
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight">
                From Brief to Impact
              </h2>
            </motion.div>

            {/* Desktop timeline */}
            <div className="hidden lg:block relative">
              {/* Connecting line */}
              <div className="absolute top-[52px] left-[10%] right-[10%] h-px bg-deep-forest/10" />

              <div className="grid grid-cols-5 gap-6 relative">
                {processSteps.map((step, idx) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="flex flex-col items-center text-center"
                    >
                      {/* Step Number */}
                      <div className="text-xs font-data text-deep-forest/40 tracking-widest mb-3">
                        STEP {step.step}
                      </div>

                      {/* Circle Node */}
                      <div className="w-[56px] h-[56px] rounded-full bg-deep-forest text-white flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-deep-forest/20">
                        <Icon size={22} />
                      </div>

                      <h4 className="text-lg font-serif font-bold text-deep-forest mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm text-charcoal/60 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Mobile stacked */}
            <div className="lg:hidden space-y-6">
              {processSteps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-5"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-deep-forest text-white flex items-center justify-center shrink-0 shadow-lg shadow-deep-forest/20">
                        <Icon size={20} />
                      </div>
                      {idx < processSteps.length - 1 && (
                        <div className="w-px h-12 bg-deep-forest/10 mt-2" />
                      )}
                    </div>
                    <div className="pt-1">
                      <div className="text-xs font-data text-deep-forest/40 tracking-widest mb-1">
                        STEP {step.step}
                      </div>
                      <h4 className="text-lg font-serif font-bold text-deep-forest mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-charcoal/60 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── Case Study Highlight ─── */}
        <section className="w-full pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[40px] bg-deep-forest overflow-hidden relative"
            >
              {/* Background texture */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <filter id="noiseFilterCase">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.65"
                      numOctaves="3"
                      stitchTiles="stitch"
                    />
                  </filter>
                  <rect
                    width="100%"
                    height="100%"
                    filter="url(#noiseFilterCase)"
                  />
                </svg>
              </div>

              {/* Radial glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green/10 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />

              <div className="relative z-10 p-10 lg:p-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                  {/* Left content */}
                  <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center gap-2 text-primary-green font-bold text-sm tracking-[0.2em] uppercase">
                      <Leaf size={16} />
                      Case Study
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                      KCDMS Agro-Dealer
                      <br />
                      Mapping Project
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed">
                      Commissioned by RTI International under the USAID Kenya
                      Crops and Dairy Market Systems (KCDMS) Activity, Agri
                      Experience mapped agro-dealers across 12 Kenyan counties,
                      testing innovative methodologies to strengthen last-mile
                      input distribution.
                    </p>

                    <div className="flex items-center gap-3 text-sm text-white/50">
                      <Calendar size={14} />
                      <span>2017 – 2022 project period</span>
                    </div>
                  </div>

                  {/* Right detail cards */}
                  <div className="flex-1 space-y-5">
                    <div className="rounded-2xl bg-white/[0.06] border border-white/[0.08] p-6 backdrop-blur-sm">
                      <div className="text-xs text-primary-green tracking-widest uppercase font-bold mb-3">
                        Client
                      </div>
                      <p className="text-white/90 font-light">
                        RTI International — USAID Kenya Crops and Dairy Market
                        Systems Activity
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/[0.06] border border-white/[0.08] p-6 backdrop-blur-sm">
                      <div className="text-xs text-primary-green tracking-widest uppercase font-bold mb-3">
                        Methodologies Tested
                      </div>
                      <ul className="space-y-2">
                        {[
                          'County government collaboration',
                          'Self-organization approach',
                          'Blended methodology',
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-white/80 font-light text-sm"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-primary-green shrink-0"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl bg-white/[0.06] border border-white/[0.08] p-6 backdrop-blur-sm">
                      <div className="text-xs text-primary-green tracking-widest uppercase font-bold mb-3">
                        Additional Scope
                      </div>
                      <ul className="space-y-2">
                        {[
                          'Agro-dealer association scoping studies',
                          'Planting materials for value chain crops',
                          'Pasture and fodder planting materials analysis',
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-white/80 font-light text-sm"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-primary-green shrink-0"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        <section className="w-full">
          <div className="w-full bg-deep-forest rounded-t-[40px] lg:rounded-t-[80px] overflow-hidden relative">
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(58,180,74,0.08),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(36,132,198,0.05),transparent_50%)] pointer-events-none" />

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilterCTA">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.65"
                    numOctaves="3"
                    stitchTiles="stitch"
                  />
                </filter>
                <rect
                  width="100%"
                  height="100%"
                  filter="url(#noiseFilterCTA)"
                />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-24 lg:py-32 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center gap-2 text-primary-green font-bold text-sm tracking-[0.2em] uppercase mb-6">
                  <Sprout size={16} />
                  Get Started
                </div>
                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-6">
                  Ready to Move from
                  <br />
                  Planning to Impact?
                </h2>
                <p className="text-lg text-white/60 font-light leading-relaxed mb-10">
                  Whether you&apos;re launching a new initiative or scaling an
                  existing program, our implementation team is ready to deliver
                  results on the ground.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary-green text-white rounded-full font-semibold hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-green/20 transition-all"
                  >
                    Contact Us
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/our-work"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold hover:bg-white/5 transition-all"
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
