'use client'
import { RollingText } from '@/components/ui/rolling-text';

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
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function CapacityBuildingPage() {
  const t = useTranslations('CapacityBuilding')

  const trainingPrograms = [
    {
      title: t('tp.0.title'),
      description: t('tp.0.description'),
      detail: t('tp.0.detail'),
      icon: BookOpen,
    },
    {
      title: t('tp.1.title'),
      description: t('tp.1.description'),
      detail: t('tp.1.detail'),
      icon: GraduationCap,
    },
    {
      title: t('tp.2.title'),
      description: t('tp.2.description'),
      detail: t('tp.2.detail'),
      icon: Sprout,
    },
    {
      title: t('tp.3.title'),
      description: t('tp.3.description'),
      detail: t('tp.3.detail'),
      icon: Target,
    },
    {
      title: t('tp.4.title'),
      description: t('tp.4.description'),
      detail: t('tp.4.detail'),
      icon: Users,
    },
    {
      title: t('tp.5.title'),
      description: t('tp.5.description'),
      detail: t('tp.5.detail'),
      icon: Radio,
    },
  ]

  const approachSteps = [
    {
      step: '01',
      title: t('step1_title'),
      description: t('step1_desc'),
      icon: Lightbulb,
    },
    {
      step: '02',
      title: t('step2_title'),
      description: t('step2_desc'),
      icon: BookOpen,
    },
    {
      step: '03',
      title: t('step3_title'),
      description: t('step3_desc'),
      icon: Presentation,
    },
    {
      step: '04',
      title: t('step4_title'),
      description: t('step4_desc'),
      icon: CheckCircle2,
    },
  ]

  const toolboxHighlights = [
    t('th1'),
    t('th2'),
    t('th3'),
    t('th4'),
    t('th5'),
    t('th6'),
  ]

  return (
    <>
      <main className="bg-white min-h-screen">
        {/* ===== HERO ===== */}
        <section className="relative w-full pt-16 lg:pt-28 pb-20 overflow-hidden">
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

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
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
                  {t('our_work')}
                </Link>
                <h1 className="text-3xl sm:text-4xl lg:text-7xl font-serif text-deep-forest font-bold leading-tight tracking-tight pb-2">
                  {t('hero_title1')}
                  <br />
                  <span className="text-charcoal/70">{t('hero_title2')}</span>
                </h1>
                <p className="text-charcoal font-medium text-lg tracking-wide">
                  {t('hero_subtitle')}
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
                  {t('hero_desc')}
                </p>
                <div className="lg:pl-10 mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="overflow-hidden relative group inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white rounded-full font-semibold text-sm hover:bg-deep-forest transition-colors"
                  >
<RollingText className="gap-2">
                    {t('start_conversation')}
                    <ArrowRight size={16} />
                  </RollingText>
</Link>
                  <Link
                    href="/our-work"
                    className="overflow-hidden relative group inline-flex items-center gap-2 px-8 py-4 border border-charcoal/20 text-charcoal rounded-full font-semibold text-sm hover:bg-charcoal/5 transition-colors"
                  >
<RollingText className="gap-2">
                    {t('our_work')}
                  </RollingText>
</Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== INTRO / OVERVIEW ===== */}
        <section className="w-full py-20 bg-mist/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 text-charcoal/60 font-bold text-xs tracking-[0.2em] uppercase mb-6">
                <Leaf size={14} />
                {t('our_philosophy')}
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight pb-2 mb-8">
                {t('phil_title')}
              </h2>
              <p className="text-lg text-charcoal/80 font-light leading-relaxed">
                {t('phil_desc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== TRAINING PROGRAMS GRID ===== */}
        <section className="w-full py-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 text-charcoal/60 font-bold text-xs tracking-[0.2em] uppercase mb-6">
                <GraduationCap size={14} />
                {t('tp_tag')}
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight pb-2 mb-6">
                {t('tp_title')}
              </h2>
              <p className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto">
                {t('tp_desc')}
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
                    className="group rounded-[32px] bg-mist border border-mist hover:border-charcoal/15 hover:bg-white hover:shadow-xl transition-[background-color,border-color,box-shadow] duration-200 p-6 sm:p-8 lg:p-10 flex flex-col"
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

                    <h3 className="text-xl font-serif font-bold text-deep-forest mb-3 tracking-tight pb-2">
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
        <section className="w-full py-16 bg-warm-earth/40 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-charcoal/[0.03] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-charcoal/[0.03] pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 text-charcoal/60 font-bold text-xs tracking-[0.2em] uppercase mb-6">
                <Target size={14} />
                {t('oa_tag')}
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-deep-forest tracking-tight pb-2 mb-6">
                {t('oa_title')}
              </h2>
              <p className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto">
                {t('oa_desc')}
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

                    <h3 className="text-lg font-serif font-bold text-deep-forest mb-3 tracking-tight pb-2">
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
        <section className="w-full py-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left — visual block */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative rounded-[32px] bg-gradient-to-br from-charcoal to-deep-forest p-6 sm:p-8 lg:p-16 text-white overflow-hidden">
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
                        {t('fr_tag')}
                      </p>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-serif font-bold leading-tight">
                      {t('fr_title')}
                    </h3>
                    <p className="text-white/60 text-sm italic">
                      {t('fr_subtitle')}
                    </p>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                        {t('fr_author_label')}
                      </p>
                      <p className="text-white font-semibold">
                        {t('fr_author_name')}{' '}
                        <span className="text-white/40 font-normal">
                          {t('fr_author_desc')}
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
                    {t('th_tag')}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-deep-forest tracking-tight pb-2 mb-4">
                    {t('th_title')}
                  </h2>
                  <p className="text-charcoal/70 font-light leading-relaxed">
                    {t('th_desc')}
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
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: t('stats.0.value'), label: t('stats.0.label'), icon: Users },
                { value: t('stats.1.value'), label: t('stats.1.label'), icon: BookOpen },
                { value: t('stats.2.value'), label: t('stats.2.label'), icon: Sprout },
                { value: t('stats.3.value'), label: t('stats.3.label'), icon: Award },
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
          <div className="bg-deep-forest py-16 lg:py-20 relative">
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
                  {t('cta_tag')}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-6xl font-serif font-bold text-white tracking-tight pb-2 max-w-3xl mx-auto leading-tight">
                  {t('cta_title')}
                </h2>
                <p className="text-white/60 font-light text-lg max-w-xl mx-auto leading-relaxed">
                  {t('cta_desc')}
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="overflow-hidden relative group inline-flex items-center gap-2 px-8 py-4 bg-white text-deep-forest rounded-full font-semibold text-sm hover:bg-primary-green hover:text-white transition-colors"
                  >
<RollingText className="gap-2">
                    {t('cta_btn1')}
                    <ArrowRight size={16} />
                  </RollingText>
</Link>
                  <Link
                    href="/our-work"
                    className="overflow-hidden relative group inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
                  >
<RollingText className="gap-2">
                    {t('cta_btn2')}
                  </RollingText>
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
