'use client'

import { useRef, type ReactNode } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion'
import Image from 'next/image'

type ParallaxHeroProps = {
  imageSrc: string
  imageAlt?: string
  children: ReactNode
  /** Overlay tone applied above the image */
  overlay?: 'left-fade' | 'bottom-fade' | 'none'
  className?: string
  /** Min height — defaults to 100dvh with sensible mobile floor */
  minHeight?: string
}

/**
 * ParallaxHero — fixed-height hero with a true parallax background.
 *
 * - As the user scrolls, the background image moves slower than the foreground (true parallax)
 *   and gently zooms in for a cinematic feel.
 * - The whole hero crossfades & lifts slightly as you scroll past it, so the next section feels
 *   like it is sliding over the bottom half of the hero (paired with `<CardSlideSection>`).
 */
export default function ParallaxHero({
  imageSrc,
  imageAlt = '',
  children,
  overlay = 'left-fade',
  className = '',
  minHeight = '100dvh',
}: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Background moves slower than scroll & zooms slightly — classic parallax
  const bgY: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.35])

  // Foreground gently lifts and fades
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0])

  return (
    <section
      ref={ref}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      {/* Parallax background layer */}
      <motion.div
        aria-hidden
        style={
          reduce
            ? undefined
            : { y: bgY, scale: bgScale, willChange: 'transform' }
        }
        className="absolute inset-0 -top-[10%] -bottom-[10%] z-0"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-center lg:object-[center_30%]"
        />
      </motion.div>

      {/* Overlay */}
      {overlay === 'left-fade' && (
        <div
          aria-hidden
          className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.88)_30%,rgba(255,255,255,0.4)_60%,rgba(255,255,255,0)_85%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.8)_38%,rgba(255,255,255,0.25)_65%,rgba(255,255,255,0)_88%)]"
        />
      )}
      {overlay === 'bottom-fade' && (
        <div
          aria-hidden
          className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(255,255,255,0)_55%,rgba(255,255,255,0.7)_90%,rgba(255,255,255,1)_100%)]"
        />
      )}

      {/* Soft top vignette so the transparent nav sits on something */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-32 z-[1] bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_100%)] pointer-events-none"
      />

      {/* Foreground content */}
      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full w-full"
      >
        {children}
      </motion.div>

      {/* Scroll affordance */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={reduce ? undefined : { opacity: contentOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-deep-forest/70"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-8 w-px bg-deep-forest/40 animate-float-slow" />
      </motion.div>
    </section>
  )
}
