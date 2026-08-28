'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

interface ClientLogo {
  name: string
  src?: string
  alt: string
  href?: string
}

interface Category {
  titleKey: string
  title: string
  logos: ClientLogo[]
}

interface MobileCardData {
  id: string
  groups: Category[]
}

const topRowCategories = [
  {
    titleKey: 'development_partners',
    logos: [
      { name: 'Gates Foundation', src: '/Gates_Foundation_Logo.svg', alt: 'Gates Foundation', href: 'https://www.gatesfoundation.org/' },
      { name: 'AGRA', src: '/AGRA.png', alt: 'AGRA', href: 'https://agra.org/' },
      { name: 'Gatsby Africa', src: '/gatsby-logo.png', alt: 'Gatsby Africa', href: 'https://www.gatsbyafrica.org.uk/' },
      { name: 'USAID', src: '/USAID-Identity.svg', alt: 'USAID', href: 'https://www.usaid.gov/' },
      { name: 'elan', src: '/elan-logo.png', alt: 'elan', href: 'https://www.beamexchange.org/practice/programme-database/elan-rdc/' },
    ]
  },
  {
    titleKey: 'government',
    logos: [
      { name: 'MOA Kenya', src: '/moa-kenya-logo.png', alt: 'Ministry of Agriculture Kenya', href: 'https://kilimo.go.ke/' },
      { name: 'MOA Tanzania', src: '/moa-tanzania-logo.png', alt: 'Ministry of Agriculture Tanzania', href: 'https://www.kilimo.go.tz/' },
    ]
  },
  {
    titleKey: 'regulators',
    logos: [
      { name: 'TOSCI', src: '/tosci-logo.jpg', alt: 'TOSCI', href: 'https://www.tosci.go.tz/' },
      { name: 'KEPHIS', src: '/kephis-logo.png', alt: 'KEPHIS', href: 'https://www.kephis.org/' },
      { name: 'NASC', src: '/nasc-logo.svg', alt: 'NASC', href: 'https://seedcouncil.gov.ng/' },
      { name: 'SCCI', alt: 'SCCI', href: 'https://www.agriculture.gov.zm/' }, 
    ]
  }
]

const bottomRowCategories = [
  {
    titleKey: 'breeding_institutions',
    logos: [
      { name: 'TARI', src: '/tari-logo.png', alt: 'TARI', href: 'https://www.tari.go.tz/' },
      { name: 'KALRO', src: '/kalro-logo.png', alt: 'KALRO', href: 'https://www.kalro.org/' }, 
    ]
  },
  {
    titleKey: 'private_sector',
    logos: [
      { name: 'STAK', src: '/stak-logo.png', alt: 'STAK', href: 'https://stak.or.ke/' },
      { name: 'TASTA', src: '/tasta-logo.png', alt: 'TASTA', href: 'https://tasta.or.tz/' },
      { name: 'USTA', src: '/usta-logo.png', alt: 'USTA', href: 'http://www.usta.ug/' },
      { name: 'NASTAG', src: '/nastag-logo.png', alt: 'NASTAG', href: 'https://nastag.org/' },
      { name: 'CIMMYT', src: '/cimmyt-logo.svg', alt: 'CIMMYT', href: 'https://www.cimmyt.org/' },
      { name: 'Agrodealers', alt: 'Agrodealers', href: '/our-impact' },
      { name: 'Seed Companies', alt: 'Seed Companies', href: '/our-impact' },
    ]
  }
]

const TextLogo = ({ name, href }: { name: string; href?: string }) => {
  const content = (
    <div className="h-12 md:h-16 flex items-center justify-center">
      <span className="font-serif text-2xl md:text-3xl font-bold tracking-tighter whitespace-nowrap text-gray-400 transition-colors duration-300 hover:text-gray-900">
        {name}
      </span>
    </div>
  )

  if (href) {
    return <Link href={href} className="flex items-center justify-center shrink-0 mx-4 md:mx-6">{content}</Link>
  }
  return <div className="flex items-center justify-center shrink-0 mx-4 md:mx-6">{content}</div>
}

const ImageLogo = ({ logo }: { logo: ClientLogo }) => {
  const content = (
    <div className="h-12 md:h-16 w-32 md:w-44 flex items-center justify-center">
      <Image
        src={logo.src!}
        alt={logo.alt}
        width={176}
        height={64}
        sizes="(max-width: 768px) 128px, 176px"
        quality={75}
        className="max-h-full max-w-full object-contain object-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      />
    </div>
  )

  if (logo.href) {
    return <Link href={logo.href} className="flex items-center justify-center shrink-0 mx-4 md:mx-6">{content}</Link>
  }
  return <div className="flex items-center justify-center shrink-0 mx-4 md:mx-6">{content}</div>
}

const CategoryBlock = ({ category }: { category: Category }) => (
  <div className="flex items-center shrink-0 px-4 md:px-6">
    <div className="flex items-center gap-6 md:gap-10 bg-white rounded-full border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] px-8 md:px-12 py-5 md:py-7 transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.06)] hover:border-gray-200 group">
      {/* Category Label */}
      <div className="flex items-center pr-6 md:pr-10 border-r border-gray-100 transition-colors group-hover:border-gray-200">
        <span className="text-[10px] md:text-xs font-semibold text-primary-green/90 tracking-[0.2em] uppercase whitespace-nowrap">
          {category.title}
        </span>
      </div>
      
      {/* Logos */}
      <div className="flex items-center gap-4 md:gap-8">
        {category.logos.map((logo, idx) => (
          <div key={`${logo.name}-${idx}`}>
            {logo.src ? <ImageLogo logo={logo} /> : <TextLogo name={logo.name} href={logo.href} />}
          </div>
        ))}
      </div>
    </div>
  </div>
)

const MobileLogoCarousel = ({ cards }: { cards: MobileCardData[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isInteracting, setIsInteracting] = useState(false)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const itemWidth = scrollRef.current.clientWidth
    const index = Math.round(scrollRef.current.scrollLeft / itemWidth)
    if (index !== currentIndex) {
      setCurrentIndex(index)
    }
  }

  useEffect(() => {
    if (isInteracting) return

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const itemWidth = scrollRef.current.clientWidth
        const next = (currentIndex + 1) % cards.length
        scrollRef.current.scrollTo({
          left: next * itemWidth,
          behavior: 'smooth'
        })
      }
    }, 3500)

    return () => clearInterval(interval)
  }, [currentIndex, isInteracting, cards.length])

  return (
    <div 
      className="md:hidden relative w-full mt-4 flex flex-col items-center"
      onTouchStart={() => setIsInteracting(true)}
      onTouchEnd={() => setIsInteracting(false)}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
    >
      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 pb-4 hide-scrollbar" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          @keyframes fillProgress {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
        `}} />
        {cards.map((card) => (
          <div key={card.id} className="min-w-[90vw] w-[90vw] shrink-0 snap-center flex flex-col items-center gap-10">
            {card.groups.map((category) => (
              <div key={category.titleKey} className="flex flex-col items-center gap-6 w-full">
                <span className="text-xs font-semibold text-primary-green tracking-[0.2em] uppercase text-center border-b border-gray-200 pb-2 w-max">
                  {category.title}
                </span>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 px-2">
                  {category.logos.map((logo, idx) => {
                    const logoContent = (
                      <div className="h-16 w-32 flex items-center justify-center px-1">
                        {logo.src ? (
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={140}
                            height={80}
                            className="max-h-full max-w-full object-contain"
                          />
                        ) : (
                          <span className="font-serif text-xl font-bold tracking-tight pb-2 text-gray-800 text-center leading-tight">
                            {logo.name}
                          </span>
                        )}
                      </div>
                    )
                    
                    if (logo.href) {
                      return <Link key={`mobile-logo-${idx}`} href={logo.href}>{logoContent}</Link>
                    }
                    return <div key={`mobile-logo-${idx}`}>{logoContent}</div>
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Timer Indicator (Dots) */}
      <div className="flex justify-center items-center gap-2 mt-4 h-4">
        {cards.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full overflow-hidden relative transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-gray-200' : 'w-2 bg-gray-300'}`}
          >
             {idx === currentIndex && !isInteracting && (
               <div 
                 className="absolute top-0 left-0 h-full w-full bg-[#1A4D2E] origin-left"
                 style={{ animation: 'fillProgress 3.5s linear forwards' }}
               />
             )}
             {idx === currentIndex && isInteracting && (
               <div className="absolute top-0 left-0 h-full w-full bg-[#1A4D2E]" />
             )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ClientLogos() {
  const t = useTranslations('ClientLogos')

  const translatedTopRow = topRowCategories.map(cat => ({ titleKey: cat.titleKey, title: t(cat.titleKey), logos: cat.logos }))
  const translatedBottomRow = bottomRowCategories.map(cat => ({ titleKey: cat.titleKey, title: t(cat.titleKey), logos: cat.logos }))

  const baseTop = Array(4).fill(translatedTopRow).flat()
  const baseBottom = Array(4).fill(translatedBottomRow).flat()

  const topRepeated = [...baseTop, ...baseTop]
  const bottomRepeated = [...baseBottom, ...baseBottom]

  // Group smaller categories together for mobile
  const mobileCards: MobileCardData[] = [
    { id: 'c1', groups: [translatedTopRow[0]] }, // Dev Partners
    { id: 'c2', groups: [translatedTopRow[1], translatedBottomRow[0]] }, // Gov + Breeding
    { id: 'c3', groups: [translatedTopRow[2]] }, // Regulators
    { id: 'c4', groups: [translatedBottomRow[1]] }, // Private Sector
  ]

  return (
    <div className="relative w-full flex flex-col bg-gray-50 pt-2 pb-12 md:py-16">
      
      {/* ─── Desktop Marquee ─── */}
      <div className="hidden md:flex flex-col gap-12 w-full relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee-left {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          @keyframes marquee-right {
            0% { transform: translate3d(-50%, 0, 0); }
            100% { transform: translate3d(0, 0, 0); }
          }
          .animate-marquee-left {
            animation: marquee-left 100s linear infinite;
            will-change: transform;
            transform: translateZ(0);
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
          }
          .animate-marquee-right {
            animation: marquee-right 100s linear infinite;
            will-change: transform;
            transform: translateZ(0);
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
          }
          .marquee-container:hover .animate-marquee-left,
          .marquee-container:hover .animate-marquee-right {
            animation-play-state: paused;
          }
        `}} />

        {/* Top Row (Moves Left) */}
        <div className="flex w-full overflow-hidden marquee-container">
          <div className="flex items-center shrink-0 w-max animate-marquee-left">
            {topRepeated.map((category, index) => (
              <CategoryBlock key={`top-${index}`} category={category} />
            ))}
          </div>
        </div>

        {/* Bottom Row (Moves Right) */}
        <div className="flex w-full overflow-hidden marquee-container">
          <div className="flex items-center shrink-0 w-max animate-marquee-right">
            {bottomRepeated.map((category, index) => (
              <CategoryBlock key={`bottom-${index}`} category={category} />
            ))}
          </div>
        </div>
      </div>

      {/* ─── Mobile Carousel ─── */}
      <MobileLogoCarousel cards={mobileCards} />
      
    </div>
  )
}