'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Users,
  MapPin,
  MessageCircle,
  Plane,
  Handshake,
  ArrowRight,
  Leaf,
  CheckCircle2,
  Calendar,
  Compass,
  Award,
} from 'lucide-react'
import Link from 'next/link'

const conveningTypes = [
  {
    title: 'Seed Industry Roundtables',
    description:
      'Multi-stakeholder dialogue platforms bringing together government, private sector, and development partners. Policy discussion and reform advocacy forums.',
    detail:
      "Such as the 'Seed Industry Private Sector Roundtable' series with Kenya Markets Trust.",
    icon: MessageCircle,
  },
  {
    title: 'Learning Trips & Field Visits',
    description:
      'Immersive experiences visiting successful seed systems and agricultural operations. Cross-country knowledge exchange for policymakers and practitioners.',
    detail: 'Exposure to best practices in production, distribution, and quality assurance.',
    icon: Plane,
  },
  {
    title: 'Multi-Stakeholder Platforms',
    description:
      'Creating and facilitating ongoing dialogue platforms. Connecting donors, government, private sector, and farmer organizations.',
    detail: 'Building consensus on sector priorities and interventions.',
    icon: Users,
  },
  {
    title: 'Knowledge Sharing Forums',
    description:
      'Technical workshops and seminars on seed sector topics. Presentation of research findings and position papers.',
    detail: 'Dissemination of Seed Sector Insights publications and policy briefs.',
    icon: Award,
  },
  {
    title: 'Partnership Facilitation',
    description:
      'Brokering partnerships between research institutions and commercial entities. Connecting international development partners with local stakeholders.',
    detail: 'Facilitating public-private partnerships for seed sector development.',
    icon: Handshake,
  },
  {
    title: 'Conference & Event Management',
    description:
      'End-to-end event planning and logistics for agricultural convenings. Speaker coordination, agenda design, and facilitation.',
    detail: 'Documentation and post-event follow-up.',
    icon: Calendar,
  },
]

const whyConveningsMatter = [
  {
    title: 'Knowledge Exchange',
    description:
      'Best practices spread when stakeholders meet face-to-face. Learning trips provide firsthand exposure to successful models that can be adapted and replicated.',
    icon: Compass,
    accent: 'from-lighter-dark-green/10 to-transparent',
  },
  {
    title: 'Policy Influence',
    description:
      'Roundtables and forums create direct channels between practitioners and policymakers. Evidence-based advocacy drives meaningful regulatory reform.',
    icon: MessageCircle,
    accent: 'from-primary-blue/10 to-transparent',
  },
  {
    title: 'Partnership Building',
    description:
      'Convenings create the trust and relationships that underpin successful collaboration. Networks formed at events lead to lasting partnerships.',
    icon: Handshake,
    accent: 'from-accent-gold/10 to-transparent',
  },
]

const regions = [
  { name: 'East Africa', countries: 'Kenya, Tanzania, Uganda, Ethiopia, Rwanda, South Sudan' },
  { name: 'West Africa', countries: 'Ghana, Nigeria, Senegal, Mali, Burkina Faso, Niger' },
  { name: 'Central Africa', countries: 'DRC, Cameroon, Republic of Congo' },
  { name: 'Southern Africa', countries: 'Zambia, Malawi, Mozambique, Zimbabwe, Madagascar' },
]

export default function StakeholderConveningsPage() {
  return (
    <>
      <main className="bg-white min-h-screen">
        {/* ===== HERO ===== */}
        <section className="relative w-full pt-24 lg:pt-28 pb-20 overflow-hidden">
          {/* Decorative background — connected dots pattern */}
          <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-lighter-dark-green/[0.04] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-blue/[0.03] rounded-full blur-[100px] pointer-events-none" />

          {/* Dots/network decorative pattern */}
          <div className="absolute top-32 right-20 pointer-events-none opacity-[0.06] hidden lg:block">
            <svg width="300" height="300" viewBox="0 0 300 300">
              <circle cx="50" cy="50" r="4" fill="#05632a" />
              <circle cx="150" cy="30" r="4" fill="#05632a" />
              <circle cx="250" cy="80" r="4" fill="#05632a" />
              <circle cx="100" cy="150" r="4" fill="#05632a" />
              <circle cx="200" cy="180" r="4" fill="#05632a" />
              <circle cx="50" cy="250" r="4" fill="#05632a" />
              <circle cx="250" cy="250" r="4" fill="#05632a" />
              <line x1="50" y1="50" x2="150" y2="30" stroke="#05632a" strokeWidth="1" />
              <line x1="150" y1="30" x2="250" y2="80" stroke="#05632a" strokeWidth="1" />
              <line x1="50" y1="50" x2="100" y2="150" stroke="#05632a" strokeWidth="1" />
              <line x1="100" y1="150" x2="200" y2="180" stroke="#05632a" strokeWidth="1" />
              <line x1="200" y1="180" x2="250" y2="250" stroke="#05632a" strokeWidth="1" />
              <line x1="50" y1="250" x2="100" y2="150" stroke="#05632a" strokeWidth="1" />
              <line x1="150" y1="30" x2="200" y2="180" stroke="#05632a" strokeWidth="1" />
            </svg>
          </div>

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
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
                  className="inline-flex items-center gap-2 text-lighter-dark-green font-bold text-sm tracking-[0.2em] uppercase hover:opacity-80 transition"
                >
                  <Leaf size={18} />
                  Our Work
                </Link>
                <h1 className="text-5xl lg:text-7xl font-serif text-deep-forest font-bold leading-[1.1] tracking-tight">
                  Connecting People,
                  <br />
                  <span className="text-lighter-dark-green/70">Cultivating Collaboration.</span>
                </h1>
                <p className="text-lighter-dark-green font-medium text-lg tracking-wide">
                  Stakeholder Convenings &amp; Learning Trips
                </p>
              </motion.div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 lg:pt-16 relative"
              >
                <div className="hidden lg:block absolute left-0 top-16 bottom-0 w-px bg-lighter-dark-green/15" />
                <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed font-light lg:pl-10">
                  Facilitating impactful gatherings and immersive learning experiences that bring
                  together diverse stakeholders to foster collaboration and share best practices
                  across agricultural systems.
                </p>
                <div className="lg:pl-10 mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-lighter-dark-green text-white rounded-full font-semibold text-sm hover:bg-deep-forest transition-colors"
                  >
                    Plan a Convening
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/our-work"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-lighter-dark-green/20 text-lighter-dark-green rounded-full font-semibold text-sm hover:bg-lighter-dark-green/5 transition-colors"
                  >
                    Our Work
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== INTRO ===== */}
        <section className="w-full py-20 bg-mist/40">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 text-lighter-dark-green/60 font-bold text-xs tracking-[0.2em] uppercase mb-6">
                <Leaf size={14} />
                Our Approach
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight mb-8">
                Convening the people who matter most.
              </h2>
              <p className="text-lg text-charcoal/80 font-light leading-relaxed">
                Agri Experience convenes the people who matter most in agricultural development.
                From high-level roundtables to immersive field learning trips, we create spaces
                where knowledge flows, partnerships form, and solutions emerge. Our convenings are
                designed to drive concrete outcomes — not just conversation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== CONVENING TYPES GRID ===== */}
        <section className="w-full py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 text-lighter-dark-green/60 font-bold text-xs tracking-[0.2em] uppercase mb-6">
                <Calendar size={14} />
                What We Convene
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight mb-6">
                Formats for every need
              </h2>
              <p className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto">
                From intimate policy roundtables to large-scale conferences, we design and
                facilitate convenings that create lasting impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conveningTypes.map((type, idx) => {
                const Icon = type.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group rounded-[32px] bg-mist border border-mist hover:border-lighter-dark-green/20 hover:bg-white hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200 p-8 lg:p-10 flex flex-col relative overflow-hidden"
                  >
                    {/* Subtle gradient accent on hover */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-lighter-dark-green/[0.04] to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10">
                      {/* Icon row */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="w-14 h-14 rounded-full bg-lighter-dark-green/[0.07] border border-lighter-dark-green/10 flex items-center justify-center text-lighter-dark-green group-hover:bg-lighter-dark-green group-hover:text-white transition duration-200">
                          <Icon size={24} />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-lighter-dark-green/[0.04] flex items-center justify-center">
                          <ArrowRight
                            size={16}
                            className="text-lighter-dark-green/30 group-hover:text-lighter-dark-green -rotate-45 group-hover:rotate-0 transition-all duration-200"
                          />
                        </div>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-deep-forest mb-3 tracking-tight">
                        {type.title}
                      </h3>
                      <p className="text-charcoal/70 font-light leading-relaxed text-sm mb-4 flex-1">
                        {type.description}
                      </p>
                      <p className="text-lighter-dark-green/60 text-sm font-light italic border-t border-lighter-dark-green/[0.08] pt-4">
                        {type.detail}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ===== WHY CONVENINGS MATTER — Split Layout ===== */}
        <section className="w-full py-24 bg-warm-earth/30 relative overflow-hidden">
          {/* Decorative arcs */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-lighter-dark-green/[0.06] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full border border-lighter-dark-green/[0.04] pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
              {/* Left title column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-2 space-y-6"
              >
                <div className="inline-flex items-center gap-2 text-lighter-dark-green/60 font-bold text-xs tracking-[0.2em] uppercase">
                  <Compass size={14} />
                  Why This Matters
                </div>
                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight leading-[1.1]">
                  The power of bringing people together
                </h2>
                <p className="text-charcoal/70 font-light leading-relaxed">
                  In complex agricultural systems, progress depends on connection. Our convenings
                  create the conditions for transformative change.
                </p>
              </motion.div>

              {/* Right — 3 key points stacked */}
              <div className="lg:col-span-3 space-y-6">
                {whyConveningsMatter.map((point, idx) => {
                  const Icon = point.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.12 }}
                      className="rounded-[24px] bg-white border border-lighter-dark-green/[0.06] p-8 lg:p-10 flex gap-6 items-start hover:shadow-lg transition-[background-color,border-color,box-shadow] duration-200"
                    >
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${point.accent} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon size={24} className="text-lighter-dark-green" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-deep-forest mb-2 tracking-tight">
                          {point.title}
                        </h3>
                        <p className="text-charcoal/70 font-light leading-relaxed text-sm">
                          {point.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ===== GEOGRAPHIC REACH ===== */}
        <section className="w-full py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 text-lighter-dark-green/60 font-bold text-xs tracking-[0.2em] uppercase mb-6">
                <MapPin size={14} />
                Geographic Reach
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight mb-6">
                Connecting stakeholders across the continent
              </h2>
              <p className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto">
                AE facilitates convenings across <strong className="font-semibold text-charcoal">20+ countries</strong> spanning
                four major African regions.
              </p>
            </motion.div>

            {/* Region cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regions.map((region, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-[24px] border border-lighter-dark-green/10 bg-gradient-to-br from-mist to-white p-8 text-center hover:shadow-lg hover:border-lighter-dark-green/20 transition-[background-color,border-color,box-shadow] duration-200 group"
                >
                  <div className="w-12 h-12 rounded-full bg-lighter-dark-green/[0.06] flex items-center justify-center mx-auto mb-5 group-hover:bg-lighter-dark-green group-hover:text-white transition duration-200">
                    <Globe size={22} className="text-lighter-dark-green group-hover:text-white transition duration-200" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-deep-forest mb-3 tracking-tight">
                    {region.name}
                  </h3>
                  <p className="text-charcoal/60 font-light text-sm leading-relaxed">
                    {region.countries}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* 20+ countries callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-lighter-dark-green/[0.06] border border-lighter-dark-green/10 px-8 py-4">
                <CheckCircle2 size={18} className="text-lighter-dark-green" />
                <span className="text-charcoal/70 font-light text-sm">
                  From Nairobi to Accra, Lusaka to Lagos — we bring stakeholders together where it
                  matters most.
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== CONVENING IMPACT STATS ===== */}
        <section className="w-full py-16 bg-mist/60">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '20+', label: 'Countries Reached', icon: Globe },
                { value: '100+', label: 'Events Facilitated', icon: Calendar },
                { value: '500+', label: 'Stakeholders Convened', icon: Users },
                { value: '4', label: 'African Regions', icon: MapPin },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <stat.icon size={24} className="text-lighter-dark-green/40 mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-data text-lighter-dark-green tracking-wide">
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
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(5,99,42,0.2),_transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(36,132,198,0.08),_transparent_60%)] pointer-events-none" />

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseCTA_SC">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.65"
                    numOctaves="3"
                    stitchTiles="stitch"
                  />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseCTA_SC)" />
              </svg>
            </div>

            {/* Decorative connection dots */}
            <div className="absolute top-12 left-12 pointer-events-none opacity-[0.08] hidden lg:block">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="10" cy="10" r="3" fill="white" />
                <circle cx="60" cy="30" r="3" fill="white" />
                <circle cx="110" cy="10" r="3" fill="white" />
                <circle cx="30" cy="80" r="3" fill="white" />
                <circle cx="90" cy="100" r="3" fill="white" />
                <line x1="10" y1="10" x2="60" y2="30" stroke="white" strokeWidth="1" />
                <line x1="60" y1="30" x2="110" y2="10" stroke="white" strokeWidth="1" />
                <line x1="10" y1="10" x2="30" y2="80" stroke="white" strokeWidth="1" />
                <line x1="60" y1="30" x2="90" y2="100" stroke="white" strokeWidth="1" />
              </svg>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 text-primary-green font-bold text-xs tracking-[0.2em] uppercase">
                  <Leaf size={14} />
                  Let&apos;s Connect
                </div>
                <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white tracking-tight max-w-3xl mx-auto leading-[1.1]">
                  Convene Your Stakeholders
                </h2>
                <p className="text-white/60 font-light text-lg max-w-xl mx-auto leading-relaxed">
                  Bring together the people, ideas, and partnerships that will shape the future of
                  agriculture in Africa.
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
