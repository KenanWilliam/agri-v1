'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionHeroProps = {
  eyebrow?: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  /** Center the text by default; pass 'left' for the left-aligned variant */
  align?: 'center' | 'left'
  children?: ReactNode
  className?: string
}

/**
 * SectionHero — unified hero used by every non-home page.
 * Sits below the fixed nav and adds consistent vertical rhythm plus entrance animation.
 */
export default function SectionHero({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  children,
  className = '',
}: SectionHeroProps) {
  const reduce = useReducedMotion()
  const alignCls =
    align === 'center'
      ? 'text-center items-center'
      : 'text-left items-start'

  return (
    <section
      className={`relative w-full pt-20 sm:pt-36 lg:pt-44 pb-12 lg:pb-16 overflow-hidden border-b border-mist ${className}`}
    >
      {/* Soft decorative bloom */}
      <div
        aria-hidden
        className="absolute -top-1/3 -right-1/4 w-[80vmin] h-[80vmin] rounded-full bg-[radial-gradient(circle,var(--mist)_0%,transparent_60%)] opacity-70 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-1/4 -left-1/4 w-[60vmin] h-[60vmin] rounded-full bg-[radial-gradient(circle,rgba(58,180,74,0.06)_0%,transparent_60%)] opacity-90 pointer-events-none"
      />

      <div className="page-container relative z-10">
        <div className={`flex flex-col gap-5 max-w-4xl ${align === 'center' ? 'mx-auto' : ''} ${alignCls}`}>
          {eyebrow && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-mist bg-white/70 backdrop-blur-sm px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-deep-forest"
            >
              {eyebrow}
            </motion.div>
          )}

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-bold text-deep-forest leading-[1.05] tracking-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg lg:text-xl text-charcoal/75 font-light leading-relaxed max-w-2xl"
            >
              {subtitle}
            </motion.div>
          )}

          {children && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="pt-2"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
