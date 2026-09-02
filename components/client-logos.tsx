'use client'

import Image from 'next/image'

interface ClientLogo {
  name: string
  src: string
  alt: string
  href: string
}

const row1Logos: ClientLogo[] = [
  { name: 'Gates Foundation', src: '/Gates_Foundation_Logo.svg', alt: 'Gates Foundation', href: 'https://www.gatesfoundation.org/' },
  { name: 'Adam Smith International', src: '/adam-smith-international-logo.png', alt: 'Adam Smith International', href: 'https://adamsmithinternational.com/' },
  { name: 'AGRA', src: '/AGRA.png', alt: 'AGRA', href: 'https://agra.org/' },
  { name: 'Ministry of Agriculture Kenya', src: '/moa-kenya-logo.png', alt: 'Ministry of Agriculture Kenya', href: 'https://kilimo.go.ke/' },
  { name: 'Catholic Relief Services', src: '/crs-logo.png', alt: 'Catholic Relief Services', href: 'https://www.crs.org/where-we-work/africa/kenya' },
  { name: 'KEPHIS', src: '/kephis-logo.png', alt: 'KEPHIS', href: 'https://www.kephis.org/' },
  { name: 'AgDevCo', src: '/agdevco-logo.png', alt: 'AgDevCo', href: 'https://www.agdevco.com/' },
  { name: 'CIMMYT', src: '/cimmyt-logo.svg', alt: 'CIMMYT', href: 'https://www.cimmyt.org/' },
  { name: 'KALRO', src: '/kalro-logo.png', alt: 'KALRO', href: 'https://www.kalro.org/' },
  { name: 'STAK', src: '/stak-logo.png', alt: 'STAK', href: 'https://stak.or.ke/' },
  { name: 'USAID', src: '/USAID-Identity.svg', alt: 'USAID', href: 'https://www.usaid.gov/' },
]

const row2Logos: ClientLogo[] = [
  { name: 'Gatsby Africa', src: '/gatsby-logo.png', alt: 'Gatsby Africa', href: 'https://www.gatsbyafrica.org.uk/' },
  { name: 'IFDC', src: '/ifdc-logo.png', alt: 'IFDC', href: 'https://ifdc.org/' },
  { name: 'Ministry of Agriculture Tanzania', src: '/moa-tanzania-logo.png', alt: 'Ministry of Agriculture Tanzania', href: 'https://www.kilimo.go.tz/' },
  { name: 'NARO Uganda', src: '/naro-logo.png', alt: 'National Agricultural Research Organisation Uganda', href: 'https://naro.go.ug/' },
  { name: 'TOSCI', src: '/tosci-logo.jpg', alt: 'TOSCI', href: 'https://www.tosci.go.tz/' },
  { name: 'NASC', src: '/nasc-logo.svg', alt: 'NASC', href: 'https://seedcouncil.gov.ng/' },
  { name: 'TARI', src: '/tari-logo.png', alt: 'TARI', href: 'https://www.tari.go.tz/' },
  { name: 'TASTA', src: '/tasta-logo-v2.png', alt: 'TASTA', href: 'https://tasta.or.tz/' },
  { name: 'elan', src: '/elan-logo.png', alt: 'elan RDC', href: 'https://www.beamexchange.org/practice/programme-database/elan-rdc/' },
  { name: 'NASTAG', src: '/nastag-logo.png', alt: 'NASTAG', href: 'https://nastag.org/' },
  { name: 'USTA', src: '/usta-logo.png', alt: 'USTA', href: 'http://www.usta.ug/' },
]

const LogoItem = ({ logo }: { logo: ClientLogo }) => (
  <a
    href={logo.href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={logo.name}
    className="group flex items-center justify-center shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10 h-16 sm:h-20 md:h-24 lg:h-28 w-44 sm:w-52 md:w-60 lg:w-64 transition-transform duration-300 hover:scale-105"
  >
    <div className="relative w-full h-full flex items-center justify-center">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={240}
        height={90}
        sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 240px"
        quality={85}
        className="max-h-full max-w-full object-contain object-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 mix-blend-multiply"
      />
    </div>
  </a>
)

export default function ClientLogos() {
  const topRepeated = [...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos]
  const bottomRepeated = [...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos]

  return (
    <div className="relative w-full flex flex-col pt-4 pb-8 md:py-12 overflow-hidden">
      {/* Side gradient fade masks */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-36 bg-gradient-to-r from-mist to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-24 md:w-36 bg-gradient-to-l from-mist to-transparent z-10 pointer-events-none" />

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
          animation: marquee-left 60s linear infinite;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }
        .animate-marquee-right {
          animation: marquee-right 60s linear infinite;
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

      {/* Marquee Rows Container */}
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full">
        {/* Top Row (Moves Left) */}
        <div className="flex w-full overflow-hidden marquee-container">
          <div className="flex items-center shrink-0 w-max animate-marquee-left py-2">
            {topRepeated.map((logo, index) => (
              <LogoItem key={`top-${logo.name}-${index}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Bottom Row (Moves Right) */}
        <div className="flex w-full overflow-hidden marquee-container">
          <div className="flex items-center shrink-0 w-max animate-marquee-right py-2">
            {bottomRepeated.map((logo, index) => (
              <LogoItem key={`bottom-${logo.name}-${index}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}