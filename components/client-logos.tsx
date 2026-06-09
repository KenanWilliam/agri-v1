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
      { name: 'KALRO', src: '/kalro-logo.png', alt: 'KALRO' }, 
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
      { name: 'Agrodealers', alt: 'Agrodealers' },
      { name: 'Seed Companies', alt: 'Seed Companies' },
    ]
  }
]

const TextLogo = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center h-20 md:h-24 px-4 md:px-6 shrink-0 group">
    <span className="font-serif text-3xl md:text-4xl font-bold tracking-tighter whitespace-nowrap text-charcoal/40 transition-colors duration-300 group-hover:text-deep-forest [@media(hover:none)]:text-deep-forest">
      {name}
    </span>
  </div>
)

const ImageLogo = ({ logo }: { logo: ClientLogo }) => (
  <div className="flex items-center justify-center relative group shrink-0 h-16 md:h-24 w-auto min-w-[110px] md:min-w-[140px] max-w-[180px] md:max-w-[240px]">
    <Image
      src={logo.src!}
      alt={logo.alt}
      width={240}
      height={100}
      unoptimized={true}
      className="h-full w-auto object-contain transition-all duration-300 ease-in-out grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 [@media(hover:none)]:grayscale-0 [@media(hover:none)]:opacity-100"
    />
  </div>
)

const CategoryBlock = ({ category }: { category: Category }) => (
  <div className="flex items-center shrink-0 pr-4 md:pr-10">
    <div className="relative flex items-center gap-4 md:gap-12 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-8 transition-all duration-500 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] hover:bg-white/80 overflow-hidden group/block">
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/50 to-transparent opacity-0 group-hover/block:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="flex flex-col items-center justify-center pr-4 md:pr-10 relative">
        <span className="text-[10px] md:text-sm font-semibold text-primary-green/90 tracking-[0.2em] uppercase whitespace-nowrap">
          {category.title}
        </span>
        {/* Elegant divider */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 md:h-12 bg-gradient-to-b from-transparent via-primary-green/20 to-transparent" />
      </div>
      
      <div className="flex items-center gap-6 md:gap-16 relative z-10">
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
  // Create a base array wide enough to fill an ultrawide screen
  const baseTop = Array(2).fill(topRowCategories).flat()
  const baseBottom = Array(2).fill(bottomRowCategories).flat()

  // Duplicate it exactly once to create two perfect identical halves. 
  // This allows us to translate by exactly -50% for a seamless infinite loop.
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
        
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .animate-marquee-right {
          animation: marquee-right 60s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }

        .animate-marquee-left {
          animation: marquee-left 60s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
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

