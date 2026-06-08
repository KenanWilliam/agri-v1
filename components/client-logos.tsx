'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ClientLogo {
  name: string
  src?: string
  alt: string
}

interface Category {
  title: string
  logos: ClientLogo[]
}

const topRowCategories: Category[] = [
  {
    title: 'Donors',
    logos: [
      { name: 'Gates Foundation', src: '/Gates_Foundation_Logo.svg', alt: 'Gates Foundation' },
      { name: 'AGRA', src: '/AGRA.png', alt: 'AGRA' },
      { name: 'Gatsby Africa', src: '/gatsby-logo.png', alt: 'Gatsby Africa' },
      { name: 'USAID', src: '/USAID-Identity.svg', alt: 'USAID' },
      { name: 'elan', src: '/elan-logo.png', alt: 'elan' },
    ]
  },
  {
    title: 'Government',
    logos: [
      { name: 'MOA Kenya', src: '/moa-kenya-logo.png', alt: 'Ministry of Agriculture Kenya' },
      { name: 'MOA Tanzania', src: '/moa-tanzania-logo.png', alt: 'Ministry of Agriculture Tanzania' },
    ]
  },
  {
    title: 'Regulators',
    logos: [
      { name: 'TOSCI', src: '/tosci-logo.jpg', alt: 'TOSCI' },
      { name: 'KEPHIS', src: '/kephis-logo.png', alt: 'KEPHIS' },
      { name: 'NASC', src: '/nasc-logo.svg', alt: 'NASC' },
      { name: 'SCCI', alt: 'SCCI' }, 
    ]
  }
]

const bottomRowCategories: Category[] = [
  {
    title: 'Breeding Institutions',
    logos: [
      { name: 'TARI', src: '/tari-logo.png', alt: 'TARI' },
      { name: 'KALRO', alt: 'KALRO' }, 
    ]
  },
  {
    title: 'Private Sector',
    logos: [
      { name: 'STAK', src: '/stak-logo.png', alt: 'STAK' },
      { name: 'TASTA', src: '/tasta-logo.png', alt: 'TASTA' },
      { name: 'USTA', src: '/usta-logo.png', alt: 'USTA' },
      { name: 'NASTAG', src: '/nastag-logo.png', alt: 'NASTAG' },
      { name: 'CIMMYT', src: '/cimmyt-logo.svg', alt: 'CIMMYT' },
    ]
  }
]

const TextLogo = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center h-20 px-4 shrink-0 group">
    <span className="font-serif text-3xl font-bold tracking-tighter text-charcoal/40 transition-colors duration-300 group-hover:text-deep-forest">
      {name}
    </span>
  </div>
)

const ImageLogo = ({ logo }: { logo: ClientLogo }) => (
  <div className="flex items-center justify-center relative group shrink-0 h-16 md:h-20 w-auto min-w-[100px] max-w-[200px]">
    <Image
      src={logo.src!}
      alt={logo.alt}
      width={200}
      height={100}
      className="h-full w-auto object-contain transition-all duration-300 ease-in-out grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
    />
  </div>
)

const CategoryBlock = ({ category }: { category: Category }) => (
  <div className="flex items-center shrink-0 pr-16 md:pr-24">
    <div className="flex items-center gap-8 md:gap-12 bg-white/50 backdrop-blur-sm border border-primary-green/10 rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="flex flex-col items-center justify-center pr-8 md:pr-12 border-r-2 border-mist">
        <span className="text-xs md:text-sm font-bold text-primary-green tracking-[0.25em] uppercase whitespace-nowrap">
          {category.title}
        </span>
      </div>
      <div className="flex items-center gap-8 md:gap-16">
        {category.logos.map((logo, idx) => (
          <div key={`${logo.name}-${idx}`}>
            {logo.src ? <ImageLogo logo={logo} /> : <TextLogo name={logo.name} />}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default function ClientLogos() {
  return (
    <div className="w-full overflow-hidden flex flex-col gap-12 md:gap-16 py-8 relative mask-edges">
      
      {/* CSS for edge masking (fade out left/right) */}
      <style dangerouslySetInnerHTML={{__html: `
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}} />

      {/* Top Row (Moves Right) */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex items-center shrink-0"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        >
          {/* Duplicate the array twice for smooth infinite scrolling */}
          {[...topRowCategories, ...topRowCategories].map((category, index) => (
            <CategoryBlock key={`top-${index}`} category={category} />
          ))}
        </motion.div>
      </div>

      {/* Bottom Row (Moves Left) */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex items-center shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        >
          {/* Duplicate the array twice for smooth infinite scrolling */}
          {[...bottomRowCategories, ...bottomRowCategories].map((category, index) => (
            <CategoryBlock key={`bottom-${index}`} category={category} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

