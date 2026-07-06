'use client'

import { motion } from 'framer-motion'
import {
  LineChart,
  Lightbulb,
  Scale,
  FileSearch,
  TrendingUp,
  Compass,
  ArrowRight,
  Leaf,
  CheckCircle2,
  Shield,
  Target,
  Briefcase,
} from 'lucide-react'
import Link from 'next/link'

const advisoryServices = [
  {
    icon: Compass,
    title: 'Strategic Consulting',
    description:
      'Consulting on marketing, distribution, and local implementation strategies. Helping private sector companies navigate regulatory environments. Long-term strategic planning for agricultural enterprises.',
  },
  {
    icon: Scale,
    title: 'Policy Advisory',
    description:
      'Seed policy analysis and regulatory framework development. Supporting harmonization of seed trade protocols. Advocating evidence-based regulatory reform — shifting from preventive to deterrent-based regulation.',
  },
  {
    icon: FileSearch,
    title: 'Development Partner Reviews',
    description:
      'Reviews of proposed or ongoing donor-funded programs. Independent assessment of project design and implementation approaches. Recommendations for program optimization.',
  },
  {
    icon: TrendingUp,
    title: 'Market Strategy',
    description:
      'Advisory on market positioning and competitive strategy. Distribution channel optimization. Go-to-market strategies for seed companies entering new markets.',
  },
  {
    icon: Shield,
    title: 'Regulatory Navigation',
    description:
      'Guiding companies through seed registration, variety protection, and compliance. Understanding phytosanitary requirements across jurisdictions. Liaising with government bodies and regulators like KEPHIS.',
  },
  {
    icon: Lightbulb,
    title: 'Seed System Optimization',
    description:
      'Variety protection and seed quality system advisory. Optimizing seed production, processing, and distribution. Supply chain analysis and improvement.',
  },
]

const approachPillars = [
  {
    icon: Target,
    title: 'Experience-Based Analysis',
    description:
      '85+ years of collective expertise applied to every engagement. Field-grounded insights, not theoretical models.',
    accent: 'from-accent-gold/20 to-accent-gold/5',
  },
  {
    icon: Lightbulb,
    title: 'Customized Solutions',
    description:
      'Every engagement is tailored. Not a static menu of services but bespoke advisory work designed for each client\'s unique context.',
    accent: 'from-accent-gold/15 to-accent-gold/5',
  },
  {
    icon: Leaf,
    title: 'Sustainable Impact',
    description:
      'Recommendations designed for long-term systemic change, not quick fixes. Building local capacity alongside advisory delivery.',
    accent: 'from-accent-gold/10 to-accent-gold/5',
  },
]

const clientsServed = [
  {
    category: 'Donors & Development Partners',
    names: 'USAID, Gates Foundation, AGRA, World Bank',
    icon: Briefcase,
  },
  {
    category: 'Seed Companies & Agribusinesses',
    names: 'Private sector seed and agri-input companies across Africa',
    icon: TrendingUp,
  },
  {
    category: 'Government Ministries & Regulatory Bodies',
    names: 'KEPHIS and national agricultural ministries',
    icon: Shield,
  },
  {
    category: 'Research Organizations',
    names: 'KALRO, CIMMYT, and partner research institutions',
    icon: FileSearch,
  },
  {
    category: 'Industry Associations',
    names: 'Seed trade associations and farmer organizations',
    icon: Scale,
  },
]

export default function ClientAdvisoryPage() {
  return (
    <>
      <main className="bg-white min-h-screen">
        {/* ─── Hero ─── */}
        <section className="relative w-full pt-24 lg:pt-28 pb-20 overflow-hidden">
          {/* Luxury background accents */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-gold/[0.04] rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 w-[600px] h-[400px] bg-warm-earth/40 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

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
                  className="inline-flex items-center gap-2 text-accent-gold font-bold text-sm tracking-[0.2em] uppercase hover:opacity-80 transition"
                >
                  <Leaf size={18} />
                  Our Work
                </Link>
                <h1 className="text-5xl lg:text-7xl font-serif text-deep-forest font-bold leading-[1.1] tracking-tight">
                  Client Advisory
                  <span className="block text-accent-gold">&amp; Analytical Work</span>
                </h1>
                <p className="text-accent-gold font-medium text-lg tracking-wide">
                  Strategic Counsel for Agricultural Transformation
                </p>
              </motion.div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 lg:pt-16 relative"
              >
                <div className="hidden lg:block absolute left-0 top-16 bottom-0 w-px bg-accent-gold/20" />
                <div className="lg:pl-10 space-y-5">
                  <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed font-light">
                    Strategic guidance and in-depth analysis to navigate complex
                    agricultural value chains, optimize seed systems, and drive
                    policy reform.
                  </p>
                  <p className="text-base text-charcoal/60 leading-relaxed font-light">
                    Agri Experience operates as a practice — like a medical or
                    legal firm — providing customized, experience-based strategic
                    advice. Our advisory services draw on 85+ years of
                    collective seed sector expertise.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-accent-gold text-deep-forest rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Request Advisory
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="/our-work"
                      className="inline-flex items-center gap-2 px-8 py-4 border border-charcoal/20 text-charcoal rounded-full font-semibold text-sm hover:bg-charcoal/5 transition-colors"
                    >
                      Our Work
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Advisory Services Grid ─── */}
        <section className="w-full pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl mb-16"
            >
              <div className="inline-flex items-center gap-2 text-accent-gold font-bold text-sm tracking-[0.2em] uppercase mb-4">
                <Briefcase size={16} />
                Our Advisory Services
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight">
                Expertise Across the
                <br />
                Agricultural Value Chain
              </h2>
            </motion.div>

            {/* 2-column staggered layout for premium feel */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {advisoryServices.map((service, idx) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`rounded-[32px] border border-mist hover:border-accent-gold/20 hover:bg-white hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200 p-8 lg:p-10 group relative overflow-hidden ${
                      idx % 2 === 0 ? 'bg-mist' : 'bg-warm-earth/30'
                    }`}
                  >
                    {/* Subtle gold corner accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/[0.04] rounded-bl-[80px] pointer-events-none group-hover:bg-accent-gold/[0.08] transition duration-300" />

                    <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-accent-gold/10 flex items-center justify-center text-accent-gold shrink-0 group-hover:bg-accent-gold group-hover:text-white transition duration-200">
                        <Icon size={26} />
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-serif font-bold text-deep-forest">
                          {service.title}
                        </h3>
                        <p className="text-charcoal/70 font-light leading-relaxed text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── Our Approach — 3 Pillars ─── */}
        <section className="w-full pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 text-accent-gold font-bold text-sm tracking-[0.2em] uppercase mb-4">
                <Compass size={16} />
                Our Approach
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight">
                Three Pillars of Advisory Excellence
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {approachPillars.map((pillar, idx) => {
                const Icon = pillar.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="relative group"
                  >
                    {/* Vertical gold line on top */}
                    <div className="w-12 h-1 bg-accent-gold rounded-full mb-8 group-hover:w-20 transition-all duration-300" />

                    {/* Step number */}
                    <div className="text-6xl font-data text-accent-gold/15 leading-none mb-4">
                      0{idx + 1}
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold mb-5">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-deep-forest mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-charcoal/70 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── Clients Served ─── */}
        <section className="w-full pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl mb-16"
            >
              <div className="inline-flex items-center gap-2 text-accent-gold font-bold text-sm tracking-[0.2em] uppercase mb-4">
                <Briefcase size={16} />
                Who We Serve
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight">
                Trusted by Leaders in
                <br />
                African Agriculture
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {clientsServed.map((client, idx) => {
                const Icon = client.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="rounded-[24px] bg-warm-earth/40 border border-accent-gold/10 hover:border-accent-gold/30 hover:shadow-lg p-6 text-center hover:bg-white transition-[background-color,border-color,box-shadow] duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold mx-auto mb-4 group-hover:bg-accent-gold group-hover:text-white transition duration-200">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-sm font-serif font-bold text-deep-forest mb-2 leading-snug">
                      {client.category}
                    </h4>
                    <p className="text-xs text-charcoal/50 font-light leading-relaxed">
                      {client.names}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── Highlight Band — Practice Model ─── */}
        <section className="w-full pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[40px] bg-gradient-to-br from-warm-earth to-mist border border-accent-gold/10 overflow-hidden relative"
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-gold/[0.06] rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-accent-gold/[0.04] rounded-tr-full pointer-events-none" />

              <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 text-accent-gold font-bold text-sm tracking-[0.2em] uppercase">
                    <Leaf size={16} />
                    The AE Practice Model
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold text-deep-forest tracking-tight leading-tight">
                    We operate as a practice — not a consultancy.
                  </h3>
                  <p className="text-charcoal/70 font-light leading-relaxed max-w-xl">
                    Like a medical or legal firm, Agri Experience draws on deep
                    collective expertise to deliver customized strategic advice.
                    Our team&apos;s 85+ years of combined seed sector experience
                    means every engagement benefits from hard-won field knowledge
                    — not generic frameworks.
                  </p>
                </div>

                {/* Stats cluster */}
                <div className="flex-shrink-0 grid grid-cols-2 gap-5">
                  {[
                    { value: '85+', label: 'Years Combined Expertise' },
                    { value: '20+', label: 'Countries Served' },
                    { value: '250+', label: 'Projects Delivered' },
                    { value: '100%', label: 'Tailored Engagements' },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="w-36 h-36 rounded-[20px] bg-white/70 border border-accent-gold/10 flex flex-col items-center justify-center text-center backdrop-blur-sm"
                    >
                      <div className="text-3xl font-data text-accent-gold leading-none">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-charcoal/50 tracking-wide uppercase mt-2 px-2 leading-tight font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        <section className="w-full">
          <div className="w-full bg-deep-forest rounded-t-[40px] lg:rounded-t-[80px] overflow-hidden relative">
            {/* Radial gradient overlay — gold tint for advisory */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,164,74,0.08),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,164,74,0.04),transparent_50%)] pointer-events-none" />

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilterAdvCTA">
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
                  filter="url(#noiseFilterAdvCTA)"
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
                <div className="inline-flex items-center gap-2 text-accent-gold font-bold text-sm tracking-[0.2em] uppercase mb-6">
                  <LineChart size={16} />
                  Engage With Us
                </div>
                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-6">
                  Seeking Expert
                  <br />
                  Agricultural Advisory?
                </h2>
                <p className="text-lg text-white/60 font-light leading-relaxed mb-10">
                  Whether you need strategic counsel for a seed system
                  transformation, a regulatory review, or market entry strategy,
                  our practice is ready to partner with you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent-gold text-deep-forest rounded-full font-semibold hover:scale-[1.02] hover:shadow-xl hover:shadow-accent-gold/20 transition-all"
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
