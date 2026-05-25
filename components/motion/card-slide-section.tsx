'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

type CardSlideSectionProps = {
  children: ReactNode
  className?: string
  /** Pull the card up so it overlaps the previous (hero) section by this many viewport-relative units */
  overlap?: string
  /** Rounded radius at the top of the card */
  radius?: string
}

/**
 * CardSlideSection — the section right under a `<ParallaxHero>`.
 *
 * The card "grows" upward as the user scrolls:
 *  - it sits offset upward so it visually slides OVER the bottom half of the hero
 *  - its width gently widens and its top radius opens up from full-rounded to flat
 *  - subtle elevation grows with scroll for a polished, tactile feel
 */
export default function CardSlideSection({
  children,
  className = '',
  overlap = '-14vh',
  radius = '64px',
}: CardSlideSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Card-slide effect — fully expanded by the time it’s ~30% in view.
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.45], [0.92, 0.985, 1])
  const radiusTop = useTransform(scrollYProgress, [0, 0.25, 0.45], [radius, '40px', '24px'])
  const y = useTransform(scrollYProgress, [0, 0.45], ['8%', '0%'])
  const shadow = useTransform(
    scrollYProgress,
    [0, 0.4],
    [
      '0 -10px 30px rgba(15, 61, 30, 0.04)',
      '0 -30px 80px rgba(15, 61, 30, 0.18)',
    ]
  )

  return (
    <motion.section
      ref={ref}
      style={
        reduce
          ? { marginTop: overlap, borderTopLeftRadius: radius, borderTopRightRadius: radius }
          : {
              marginTop: overlap,
              scale,
              y,
              borderTopLeftRadius: radiusTop,
              borderTopRightRadius: radiusTop,
              boxShadow: shadow,
              transformOrigin: 'top center',
              willChange: 'transform, border-radius',
            }
      }
      className={`relative z-20 bg-white overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  )
}
