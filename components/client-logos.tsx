'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ClientLogo {
  name: string
  src: string
  alt: string
}

const clients: ClientLogo[] = [
  { 
    name: 'Gates Foundation', 
    src: '/Gates_Foundation_Logo.svg', 
    alt: 'Gates Foundation',
  },
  { 
    name: 'World Bank', 
    src: '/The_World_Bank_logo.svg', 
    alt: 'World Bank',
  },
  { 
    name: 'CGIAR', 
    src: '/CGIAR-logo.svg', 
    alt: 'CGIAR',
  },
  { 
    name: 'AGRA', 
    src: '/AGRA.png', 
    alt: 'AGRA',
  },
  { 
    name: 'FAO', 
    src: '/fao-logo-blue-3lines-en.svg', 
    alt: 'FAO',
  },
  { 
    name: 'ICRISAT', 
    src: '/ICRISAT.png', 
    alt: 'ICRISAT',
  },
  { 
    name: 'Australian University', 
    src: '/auweblogo-en.png', 
    alt: 'Australian University',
  },
  { 
    name: 'USAID', 
    src: '/USAID-Identity.svg', 
    alt: 'USAID',
  },
]

export default function ClientLogos() {
  return (
    <div className="w-full">
      {/* Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center relative group"
          >
            {/* Logo Image */}
            <div className="relative z-10 p-1 flex items-center justify-center min-h-[120px]">
              <Image
                src={client.src}
                alt={client.alt}
                width={200}
                height={100}
                className="h-24 max-w-[200px] w-auto object-contain transition-all duration-300 ease-in-out grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
