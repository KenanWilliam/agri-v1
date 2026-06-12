import Image from 'next/image'
import Link from 'next/link'

interface ClientLogo {
  name: string
  src?: string
  alt: string
  href?: string
}

interface Category {
  title: string
  logos: ClientLogo[]
}

const topRowCategories: Category[] = [
  {
    title: 'Donors',
    logos: [
      { name: 'Gates Foundation', src: '/Gates_Foundation_Logo.svg', alt: 'Gates Foundation', href: 'https://www.gatesfoundation.org/' },
      { name: 'AGRA', src: '/AGRA.png', alt: 'AGRA', href: 'https://agra.org/' },
      { name: 'Gatsby Africa', src: '/gatsby-logo.png', alt: 'Gatsby Africa', href: 'https://www.gatsbyafrica.org.uk/' },
      { name: 'USAID', src: '/USAID-Identity.svg', alt: 'USAID', href: 'https://www.usaid.gov/' },
      { name: 'elan', src: '/elan-logo.png', alt: 'elan', href: 'https://www.beamexchange.org/practice/programme-database/elan-rdc/' },
    ]
  },
  {
    title: 'Government',
    logos: [
      { name: 'MOA Kenya', src: '/moa-kenya-logo.png', alt: 'Ministry of Agriculture Kenya', href: 'https://kilimo.go.ke/' },
      { name: 'MOA Tanzania', src: '/moa-tanzania-logo.png', alt: 'Ministry of Agriculture Tanzania', href: 'https://www.kilimo.go.tz/' },
    ]
  },
  {
    title: 'Regulators',
    logos: [
      { name: 'TOSCI', src: '/tosci-logo.jpg', alt: 'TOSCI', href: 'https://www.tosci.go.tz/' },
      { name: 'KEPHIS', src: '/kephis-logo.png', alt: 'KEPHIS', href: 'https://www.kephis.org/' },
      { name: 'NASC', src: '/nasc-logo.svg', alt: 'NASC', href: 'https://seedcouncil.gov.ng/' },
      { name: 'SCCI', alt: 'SCCI', href: 'https://www.agriculture.gov.zm/' }, 
    ]
  }
]

const bottomRowCategories: Category[] = [
  {
    title: 'Breeding Institutions',
    logos: [
      { name: 'TARI', src: '/tari-logo.png', alt: 'TARI', href: 'https://www.tari.go.tz/' },
      { name: 'KALRO', src: '/kalro-logo.png', alt: 'KALRO', href: 'https://www.kalro.org/' }, 
    ]
  },
  {
    title: 'Private Sector',
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
    <span className="font-serif text-3xl md:text-4xl font-bold tracking-tighter whitespace-nowrap text-charcoal/40 transition-colors duration-300 group-hover:text-deep-forest [@media(hover:none)]:text-deep-forest">
      {name}
    </span>
  )

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="flex items-center justify-center h-20 md:h-24 px-4 md:px-6 shrink-0 group focus:outline-none transition-transform duration-300 hover:scale-105"
      >
        {content}
      </Link>
    )
  }

  return (
    <div className="flex items-center justify-center h-20 md:h-24 px-4 md:px-6 shrink-0">
      {content}
    </div>
  )
}

const ImageLogo = ({ logo }: { logo: ClientLogo }) => {
  const content = (
    <Image
      src={logo.src!}
      alt={logo.alt}
      width={240}
      height={100}
      unoptimized={true}
      priority // CRITICAL: Prevents lazy-load layout shifts that break the -50% calculation
      className="h-full w-auto object-contain transition-all duration-300 ease-in-out grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 [@media(hover:none)]:grayscale-0 [@media(hover:none)]:opacity-100"
    />
  )

  if (logo.href) {
    const isExternal = logo.href.startsWith('http')
    return (
      <Link
        href={logo.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="flex items-center justify-center relative group shrink-0 h-16 md:h-24 w-auto min-w-[110px] md:min-w-[140px] max-w-[180px] md:max-w-[240px] focus:outline-none transition-transform duration-300 hover:scale-105"
      >
        {content}
      </Link>
    )
  }

  return (
    <div className="flex items-center justify-center relative group shrink-0 h-16 md:h-24 w-auto min-w-[110px] md:min-w-[140px] max-w-[180px] md:max-w-[240px]">
      {content}
    </div>
  )
}

const CategoryBlock = ({ category }: { category: Category }) => (
  <div className="flex items-center shrink-0 pr-4 md:pr-10">
    <div className="relative flex items-center gap-4 md:gap-12 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-8 transition-all duration-500 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] hover:bg-white/80 overflow-hidden group/block">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/50 to-transparent opacity-0 group-hover/block:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="flex flex-col items-center justify-center pr-4 md:pr-10 relative">
        <span className="text-[10px] md:text-sm font-semibold text-primary-green/90 tracking-[0.2em] uppercase whitespace-nowrap">
          {category.title}
        </span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 md:h-12 bg-gradient-to-b from-transparent via-primary-green/20 to-transparent" />
      </div>
      <div className="flex items-center gap-6 md:gap-16 relative z-10">
        {category.logos.map((logo, idx) => (
          <div key={`${logo.name}-${idx}`}>
            {logo.src ? <ImageLogo logo={logo} /> : <TextLogo name={logo.name} href={logo.href} />}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default function ClientLogos() {
  // Boosted to 4 to ensure half the array always exceeds an ultrawide screen width
  const baseTop = Array(4).fill(topRowCategories).flat()
  const baseBottom = Array(4).fill(bottomRowCategories).flat()

  // Exact duplication creates a seamless -50% loop point
  const topRepeated = [...baseTop, ...baseTop]
  const bottomRepeated = [...baseBottom, ...baseBottom]

  return (
    <div className="w-full overflow-hidden flex flex-col gap-8 md:gap-14 py-8 md:py-12 relative mask-edges">
      
      <style dangerouslySetInnerHTML={{__html: `
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent);
        }

        @media (min-width: 768px) {
          .mask-edges {
            mask-image: linear-gradient(to right, transparent, black 150px, black calc(100% - 150px), transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 150px, black calc(100% - 150px), transparent);
          }
        }
        
        /* Restored to -50% on a single track */
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .animate-marquee-right {
          animation: marquee-right 100s linear infinite;
          will-change: transform;
        }

        .animate-marquee-left {
          animation: marquee-left 100s linear infinite;
          will-change: transform;
        }

        @media (hover: hover) and (pointer: fine) {
          .marquee-container:hover .animate-marquee-right,
          .marquee-container:hover .animate-marquee-left {
            animation-play-state: paused;
          }
        }
      `}} />

      {/* Top Row (Moves Right) */}
      <div className="flex w-full overflow-hidden marquee-container">
        <div className="flex items-center shrink-0 w-max animate-marquee-right">
          {topRepeated.map((category, index) => (
            <CategoryBlock key={`top-${index}`} category={category} />
          ))}
        </div>
      </div>

      {/* Bottom Row (Moves Left) */}
      <div className="flex w-full overflow-hidden marquee-container">
        <div className="flex items-center shrink-0 w-max animate-marquee-left">
          {bottomRepeated.map((category, index) => (
            <CategoryBlock key={`bottom-${index}`} category={category} />
          ))}
        </div>
      </div>
    </div>
  )
}