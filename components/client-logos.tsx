'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ClientLogo {
  name: string
  src: string
  alt: string
  title: string
  description: string
  image: string
  caseStudyLink: string
}

const clients: ClientLogo[] = [
  { 
    name: 'USAID', 
    src: '/USAID-Identity.svg', 
    alt: 'USAID',
    title: 'Strengthening Agricultural Value Chains',
    description: 'USAID partnership focused on enhancing seed systems resilience across East Africa, supporting smallholder farmers through improved access to quality seeds and modern agricultural practices.',
    image: '/hero-bg.png',
    caseStudyLink: '/our-impact'
  },
  { 
    name: 'World Bank', 
    src: '/The_World_Bank_logo.svg', 
    alt: 'World Bank',
    title: 'Scaling Sustainable Agricultural Development',
    description: 'World Bank collaboration on financing agricultural transformation across 8 African nations, enabling access to improved seed varieties and climate-smart farming techniques.',
    image: '/hero-bg.png',
    caseStudyLink: '/our-impact'
  },
  { 
    name: 'Gates Foundation', 
    src: '/Gates_Foundation_Logo.svg', 
    alt: 'Gates Foundation',
    title: 'Innovation in Seed Systems for Africa',
    description: 'Gates Foundation-funded initiatives advancing nutrition-rich seed varieties and farmer training programs, reaching over 250,000 farming households.',
    image: '/hero-bg.png',
    caseStudyLink: '/our-impact'
  },
  { 
    name: 'CGIAR', 
    src: '/CGIAR-logo.svg', 
    alt: 'CGIAR',
    title: 'Global Research for Food Security',
    description: 'CGIAR research partnership developing climate-adapted seed varieties and sustainable agricultural practices for smallholder farmers across Africa.',
    image: '/hero-bg.png',
    caseStudyLink: '/our-impact'
  },
  { 
    name: 'AGRA', 
    src: '/AGRA.png', 
    alt: 'AGRA',
    title: 'African Green Revolution Alliance',
    description: 'AGRA collaboration improving agricultural productivity through quality seed distribution, farmer training, and market linkages across sub-Saharan Africa.',
    image: '/hero-bg.png',
    caseStudyLink: '/our-impact'
  },
  { 
    name: 'FAO', 
    src: '/fao-logo-blue-3lines-en.svg', 
    alt: 'FAO',
    title: 'Food Security and Agricultural Standards',
    description: 'FAO partnership ensuring food security through sustainable seed production systems and technical support for agricultural policy development.',
    image: '/hero-bg.png',
    caseStudyLink: '/our-impact'
  },
  { 
    name: 'ICRISAT', 
    src: '/ICRISAT.png', 
    alt: 'ICRISAT',
    title: 'Dryland Crop Innovation',
    description: 'ICRISAT collaboration on developing drought-resistant crop varieties and improving seed production systems in semi-arid regions.',
    image: '/hero-bg.png',
    caseStudyLink: '/our-impact'
  },
  { 
    name: 'Australian University', 
    src: '/auweblogo-en.png', 
    alt: 'Australian University',
    title: 'Research and Capacity Building',
    description: 'University partnership advancing agricultural research, farmer training, and knowledge transfer to strengthen seed systems and farmer resilience.',
    image: '/hero-bg.png',
    caseStudyLink: '/our-impact'
  },
]

export default function ClientLogos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  useEffect(() => {
    setSelectedIndex(0)
  }, [])

  const activeClient = clients[selectedIndex]

  return (
    <div className="w-full space-y-12">
      {/* Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => {
              setHoveredIndex(index)
              setSelectedIndex(index)
            }}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedIndex(index)}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center relative group cursor-pointer"
          >
            {/* Hover Background */}
            {(hoveredIndex === index || selectedIndex === index) && (
              <motion.div
                layoutId="hover-bg"
                className={`absolute inset-0 -m-4 rounded-lg ${
                  selectedIndex === index
                    ? 'bg-gradient-to-br from-primary-green/20 to-primary-green/15'
                    : 'bg-gradient-to-br from-primary-green/5 to-primary-green/10'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}

            {/* Logo Image */}
            <div className="relative z-10 p-1 flex items-center justify-center min-h-[120px]">
              <Image
                src={client.src}
                alt={client.alt}
                width={200}
                height={100}
                className={`h-24 max-w-[200px] w-auto object-contain transition-all duration-300 ease-in-out ${
                  hoveredIndex === index || selectedIndex === index
                    ? 'grayscale-0 opacity-100 scale-110'
                    : 'grayscale opacity-60 hover:opacity-75'
                }`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Details Section */}
      <motion.div
        key={selectedIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-mist to-white/50 rounded-lg p-8 md:p-12 border border-primary-green/10"
      >
        {/* Image */}
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
          <Image
            src={activeClient.image}
            alt={activeClient.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <motion.h3 
              className="text-2xl md:text-3xl font-serif font-bold text-deep-forest mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {activeClient.title}
            </motion.h3>
            <motion.p 
              className="text-lg text-charcoal/80 leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {activeClient.description}
            </motion.p>
          </div>

          {/* CTA Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href={activeClient.caseStudyLink}
              className="inline-flex items-center gap-2 text-primary-green font-semibold hover:gap-3 transition-all duration-300 group"
            >
              Read the case study
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
