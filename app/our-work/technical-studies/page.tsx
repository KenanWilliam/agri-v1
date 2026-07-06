'use client'

import { motion } from 'framer-motion'
import { ClipboardCheck, Search, FileText, TrendingUp, Users, MapPin, Microscope, ArrowRight, Leaf, BarChart3, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const studyTypes = [
  {
    title: 'Market & Sector Assessments',
    description: 'Comprehensive surveys of market participants — farmers, seed producers, agrodealers, and regulators — delivering industry landscape analysis and competitive positioning.',
    icon: TrendingUp,
    accent: 'from-primary-blue/10 to-primary-blue/5',
  },
  {
    title: 'Scoping Studies',
    description: 'Field-based analysis for seed and input sector assessments, identifying opportunities, challenges, and intervention points across value chains.',
    icon: Search,
    accent: 'from-primary-blue/10 to-primary-blue/5',
  },
  {
    title: 'Crop Value Chain Analysis',
    description: 'End-to-end analysis of crop value chains — mapping production, distribution, and market access pathways while identifying bottlenecks and growth opportunities.',
    icon: BarChart3,
    accent: 'from-primary-blue/10 to-primary-blue/5',
  },
  {
    title: 'Industry Benchmarking',
    description: 'Development of industry benchmarking tools, performance metrics, and comparative analysis — setting standards for seed sector development.',
    icon: ClipboardCheck,
    accent: 'from-primary-blue/10 to-primary-blue/5',
  },
  {
    title: 'Policy & Regulatory Analysis',
    description: 'Analysis of seed policy frameworks and regulations, comparison with global best practices, and recommendations for regulatory reform and harmonization.',
    icon: FileText,
    accent: 'from-primary-blue/10 to-primary-blue/5',
  },
  {
    title: 'Feasibility Studies',
    description: 'Assessing viability of new programs, platforms, and interventions through risk assessment, mitigation strategies, and cost-benefit analysis for agricultural investments.',
    icon: Microscope,
    accent: 'from-primary-blue/10 to-primary-blue/5',
  },
]

const methodology = [
  {
    step: 1,
    title: 'Define Scope',
    description: 'Work with clients to establish clear research objectives and methodology, ensuring every study is purpose-built for the decisions that matter.',
    icon: Search,
  },
  {
    step: 2,
    title: 'Field Research',
    description: 'Deploy experienced teams for surveys, interviews, and on-ground data collection across the relevant geographies and stakeholder groups.',
    icon: MapPin,
  },
  {
    step: 3,
    title: 'Analysis & Synthesis',
    description: 'Apply rigorous analytical frameworks to transform raw data into structured insights, identifying patterns, risks, and opportunities.',
    icon: BarChart3,
  },
  {
    step: 4,
    title: 'Actionable Reporting',
    description: 'Deliver comprehensive reports with practical, implementable recommendations that clients can act on immediately.',
    icon: FileText,
  },
]

const caseStudyDetails = [
  { label: 'Client', value: 'RTI International (USAID-funded)' },
  { label: 'Scope', value: '12 Kenyan Counties' },
  { label: 'Methods', value: '3 Mapping Methodologies' },
  { label: 'Add-ons', value: 'Association & Planting Material Studies' },
]

export default function TechnicalStudiesPage() {
  return (
    <>
      <main className="bg-white min-h-screen">
        {/* ─── Hero ─── */}
        <section className="relative w-full pt-24 lg:pt-28 pb-20 overflow-hidden">
          {/* Background blobs */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-blue/5 rounded-full blur-[120px] -translate-y-1/3 -translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-blue/3 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
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
                  className="inline-flex items-center gap-2 text-primary-blue font-bold text-sm tracking-[0.2em] uppercase hover:opacity-80 transition"
                >
                  <Leaf size={18} />
                  Our Work
                </Link>
                <h1 className="text-5xl lg:text-7xl font-serif text-deep-forest font-bold leading-[1.1] tracking-tight">
                  Technical Studies
                </h1>
                <p className="text-primary-blue font-medium text-lg tracking-wide">
                  Evidence-Based Agricultural Intelligence
                </p>
              </motion.div>

              {/* Right: Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 lg:pt-16 relative"
              >
                <div className="hidden lg:block absolute left-0 top-16 bottom-0 w-px bg-primary-blue/20" />
                <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed font-light lg:pl-10">
                  In-depth analysis and feasibility studies that turn complex challenges into clear, actionable insights for seed systems and agricultural value chains. AE conducts rigorous, field-based research across sub-Saharan Africa, providing the evidence base that donors, governments, and private sector companies need to make informed decisions.
                </p>
                <div className="lg:pl-10 mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary-blue text-white rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Start a Study
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/our-work"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-primary-blue/20 text-primary-blue rounded-full font-semibold text-sm hover:bg-primary-blue/5 transition-colors"
                  >
                    Our Work
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Study Types — Icon Grid (3×2) ─── */}
        <section className="w-full pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight">
                What We Study
              </h2>
              <p className="mt-4 text-charcoal/80 font-light leading-relaxed max-w-2xl text-lg">
                Across six core study types, our technical teams deliver evidence that shapes policy, guides investment, and drives sustainable agricultural development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studyTypes.map((study, idx) => {
                const Icon = study.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group rounded-[32px] bg-mist border border-mist hover:border-primary-blue/20 hover:bg-white hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200 p-8 lg:p-10 relative overflow-hidden"
                  >
                    {/* Subtle gradient top-right */}
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${study.accent} rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500`} />

                    <div className="relative z-10">
                      {/* Numbered badge + icon */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 flex items-center justify-center text-primary-blue">
                          <Icon size={26} />
                        </div>
                        <span className="text-sm font-data font-bold text-primary-blue/40 tracking-wider">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-deep-forest tracking-tight mb-3">
                        {study.title}
                      </h3>
                      <p className="text-charcoal/80 font-light leading-relaxed text-sm">
                        {study.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── Methodology — Horizontal Timeline ─── */}
        <section className="w-full py-28 bg-gradient-to-b from-white to-warm-earth/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight">
                Our Methodology
              </h2>
              <p className="mt-4 text-charcoal/80 font-light leading-relaxed max-w-2xl text-lg">
                A structured, four-phase approach ensures every study delivers rigorous evidence and practical recommendations.
              </p>
            </motion.div>

            {/* Timeline layout */}
            <div className="relative">
              {/* Horizontal connector line (desktop) */}
              <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-primary-blue/15 z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {methodology.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                      className="relative flex flex-col items-center text-center"
                    >
                      {/* Step circle */}
                      <div className="relative z-10 w-[104px] h-[104px] rounded-full bg-white border-2 border-primary-blue/20 flex flex-col items-center justify-center mb-8 shadow-sm">
                        <span className="text-3xl font-data font-bold text-primary-blue leading-none">
                          {String(item.step).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="w-10 h-10 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-5">
                        <Icon size={18} />
                      </div>

                      <h3 className="text-lg font-serif font-bold text-deep-forest tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-charcoal/80 font-light leading-relaxed text-sm max-w-[280px]">
                        {item.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Case Study: KCDMS Agro-Dealer Mapping ─── */}
        <section className="w-full py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              {/* Left column: Label + text (3 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-3 space-y-8"
              >
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-primary-blue tracking-[0.2em] uppercase bg-primary-blue/10 px-4 py-2 rounded-full mb-6">
                    <MapPin size={14} />
                    Case Study
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight mt-4">
                    KCDMS Agro-Dealer Mapping
                  </h2>
                </div>

                <p className="text-charcoal/80 font-light leading-relaxed text-lg">
                  Commissioned by RTI International under the USAID-funded Kenya Crops and Dairy Market Systems (KCDMS) Activity, Agri Experience conducted comprehensive agro-dealer mapping across 12 Kenyan counties — testing three distinct mapping methodologies to determine the most effective approach for locating and characterizing agricultural input distributors.
                </p>

                <p className="text-charcoal/80 font-light leading-relaxed text-lg">
                  Beyond core mapping, the project included additional scoping studies examining agro-dealer associations and planting materials distribution networks, producing a rich evidence base for strengthening last-mile input delivery systems.
                </p>

                {/* Key highlights list */}
                <div className="space-y-4 pt-4">
                  {[
                    'Mapped agro-dealers across 12 Kenyan counties',
                    'Three mapping methodologies tested and compared',
                    'Additional scoping on agro-dealer associations',
                    'Planting materials distribution assessment',
                    'Evidence base for last-mile input delivery systems',
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={18} className="text-primary-blue flex-shrink-0 mt-1" />
                      <span className="text-charcoal/80 font-light leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right column: Stats card (2 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="lg:col-span-2"
              >
                <div className="rounded-[32px] bg-gradient-to-br from-deep-forest via-deep-forest to-deep-forest/95 p-8 lg:p-10 text-white relative overflow-hidden sticky top-32">
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(36,132,198,0.15),transparent_60%)] pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(58,180,74,0.08),transparent_50%)] pointer-events-none" />

                  <div className="relative z-10">
                    <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-primary-blue mb-8">
                      Project Details
                    </h4>

                    <div className="space-y-6">
                      {caseStudyDetails.map((detail, idx) => (
                        <div key={idx} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                          <div className="text-xs text-white/50 tracking-wide uppercase mb-1">
                            {detail.label}
                          </div>
                          <div className="text-lg font-serif font-bold text-white tracking-tight">
                            {detail.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Decorative element */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <Users size={20} className="text-primary-blue/70" />
                        <span className="text-white/60 text-sm font-light">
                          Funded by USAID via RTI International
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Clients Trust Section ─── */}
        <section className="w-full py-20 bg-mist">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-forest tracking-tight">
                Who Our Studies Serve
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Donor Agencies', desc: 'USAID, GIZ, Bill & Melinda Gates Foundation, and other development partners', icon: Users },
                { label: 'Governments', desc: 'National seed authorities and ministries of agriculture across Africa', icon: FileText },
                { label: 'Private Sector', desc: 'Seed companies, agribusinesses, and input manufacturers seeking market intelligence', icon: TrendingUp },
                { label: 'Research Institutions', desc: 'CGIAR centers, national research organizations, and academic institutions', icon: Microscope },
              ].map((client, idx) => {
                const Icon = client.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-[24px] p-6 lg:p-8 border border-transparent hover:border-primary-blue/15 hover:shadow-lg transition-[background-color,border-color,box-shadow] duration-200 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue mx-auto mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-base font-serif font-bold text-deep-forest tracking-tight mb-2">
                      {client.label}
                    </h3>
                    <p className="text-charcoal/70 font-light leading-relaxed text-xs">
                      {client.desc}
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
            {/* Radial gradient overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(36,132,198,0.12),transparent_55%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(58,180,74,0.06),transparent_50%)] pointer-events-none" />

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilterTS">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilterTS)" />
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
                  Need Evidence-Based Insights?
                </h2>
                <p className="text-white/70 font-light leading-relaxed text-lg mb-10">
                  From scoping studies to full value chain analysis, Agri Experience delivers the evidence your organization needs to make confident, impactful decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary-blue hover:bg-primary-blue/90 text-white font-bold px-8 py-4 rounded-full transition duration-200"
                  >
                    Start a Conversation
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
