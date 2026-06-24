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
    <div className="h-12 md:h-16 flex items-center justify-center">
      <Image
        src={logo.src!}
        alt={logo.alt}
        width={300}
        height={100}
        unoptimized={true}
        priority
        className="h-full w-auto object-contain object-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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

export default function ClientLogos() {
  const baseTop = Array(4).fill(topRowCategories).flat()
  const baseBottom = Array(4).fill(bottomRowCategories).flat()

  const topRepeated = [...baseTop, ...baseTop]
  const bottomRepeated = [...baseBottom, ...baseBottom]

  return (
    <div className="relative w-full overflow-hidden flex flex-col gap-8 md:gap-12 bg-gray-50 py-16">
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
        }
        .animate-marquee-right {
          animation: marquee-right 100s linear infinite;
          will-change: transform;
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
  )
}