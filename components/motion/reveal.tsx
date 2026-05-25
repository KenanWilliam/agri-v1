'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Translate offset in pixels before reveal */
  y?: number
  x?: number
  /** Once it appears, keep it visible (default true) */
  once?: boolean
  /** Tag to render */
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'span' | 'li' | 'h2' | 'h3' | 'h4' | 'p'
}

/**
 * Reveal — a polished, GPU-friendly scroll-into-view fade/slide animation.
 * Wraps any content with a tasteful, consistent entrance.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  x = 0,
  once = true,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion()

  const variants: Variants = {
    hidden: reduce ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x, filter: 'blur(6px)' },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}

/**
 * RevealStagger — stagger children using the same easing as Reveal.
 */
export function RevealStagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  once = true,
}: {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: reduce
            ? { staggerChildren: 0 }
            : { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * RevealItem — a child of RevealStagger.
 */
export function RevealItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode
  className?: string
  y?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
