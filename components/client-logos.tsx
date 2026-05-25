'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface ClientLogo {
  name: string
  src: string
  alt: string
}

const clients: ClientLogo[] = [
  { name: 'USAID', src: '/logos/usaid.svg', alt: 'USAID' },
  { name: 'World Bank', src: '/logos/world-bank.svg', alt: 'World Bank' },
  { name: 'Gates Foundation', src: '/logos/gates-foundation.svg', alt: 'Gates Foundation' },
  { name: 'CGIAR', src: '/logos/cgiar.svg', alt: 'CGIAR' },
  { name: 'AGRA', src: '/logos/agra.svg', alt: 'AGRA' },
  { name: 'FAO', src: '/logos/fao.svg', alt: 'FAO' },
  { name: 'ICRISAT', src: '/logos/icrisat.svg', alt: 'ICRISAT' },
  { name: 'African Union', src: '/logos/african-union.svg', alt: 'African Union' },
]

export default function ClientLogos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center relative group"
          >
            {/* Hover Background */}
            {hoveredIndex === index && (
              <motion.div
                layoutId="hover-bg"
                className="absolute inset-0 -m-4 bg-gradient-to-br from-primary-green/5 to-primary-green/10 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}

            {/* Logo Image */}
            <div className="relative z-10 p-4 flex items-center justify-center min-h-[120px]">
              <Image
                src={client.src}
                alt={client.alt}
                width={120}
                height={48}
                className={`h-12 max-w-[120px] w-auto object-contain transition-colors transition-shadow duration-300 ease-in-out duration-300 ${
                  hoveredIndex === index
                    ? 'grayscale-0 opacity-100'
                    : 'grayscale opacity-60 hover:opacity-75'
                }`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
