'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Briefcase, Users, TrendingUp, Info, Globe } from 'lucide-react'

interface Country {
  name: string
  code: string
  region: string
  projects: number
  impact: string[]
  focus: string[]
  engagement: number
}

const countriesData: Country[] = [
  { name: 'Kenya', code: 'KE', region: 'East Africa', projects: 12, impact: ['Seed regulations', 'Farmer networks', 'Quality assurance'], focus: ['Seed certification', 'Market linkages'], engagement: 120000 },
  { name: 'Uganda', code: 'UG', region: 'East Africa', projects: 8, impact: ['Value chain', 'Certification', 'Market access'], focus: ['Value chain dev', 'Training'], engagement: 85000 },
  { name: 'Tanzania', code: 'TZ', region: 'East Africa', projects: 10, impact: ['Seed production', 'Distribution', 'Training'], focus: ['Production systems', 'Extension'], engagement: 95000 },
  { name: 'Rwanda', code: 'RW', region: 'East Africa', projects: 7, impact: ['Variety research', 'Extension services'], focus: ['Research', 'Capacity'], engagement: 65000 },
  { name: 'Ethiopia', code: 'ET', region: 'East Africa', projects: 9, impact: ['Policy reform', 'Farmer support'], focus: ['Policy', 'Networks'], engagement: 75000 },
  { name: 'Malawi', code: 'MW', region: 'Southern Africa', projects: 6, impact: ['Seed systems', 'Quality control'], focus: ['Quality', 'Logistics'], engagement: 55000 },
  { name: 'Zambia', code: 'ZM', region: 'Southern Africa', projects: 8, impact: ['Market development', 'Capacity building'], focus: ['Markets', 'Training'], engagement: 70000 },
  { name: 'Zimbabwe', code: 'ZW', region: 'Southern Africa', projects: 7, impact: ['Value addition', 'Trade'], focus: ['Processing', 'Export'], engagement: 60000 },
  { name: 'Mozambique', code: 'MZ', region: 'Southern Africa', projects: 5, impact: ['Infrastructure', 'Logistics'], focus: ['Supply chain', 'Tech'], engagement: 45000 },
  { name: 'Madagascar', code: 'MG', region: 'Southern Africa', projects: 4, impact: ['Conservation', 'Climate adaptation'], focus: ['Climate', 'Sustainability'], engagement: 40000 },
  { name: 'Senegal', code: 'SN', region: 'West Africa', projects: 6, impact: ['Market analysis', 'Youth engagement'], focus: ['Youth', 'Markets'], engagement: 50000 },
  { name: 'Burkina Faso', code: 'BF', region: 'West Africa', projects: 5, impact: ['Seed multiplication', 'Farmer schools'], focus: ['Production', 'Education'], engagement: 48000 },
  { name: 'Mali', code: 'ML', region: 'West Africa', projects: 4, impact: ['Regional trade', 'Nutrition'], focus: ['Trade', 'Food security'], engagement: 35000 },
  { name: 'Niger', code: 'NE', region: 'West Africa', projects: 5, impact: ['Drought resilience', 'Varieties'], focus: ['Climate', 'Resilience'], engagement: 42000 },
  { name: 'Ghana', code: 'GH', region: 'West Africa', projects: 7, impact: ['Tech adoption', 'Farmer networks'], focus: ['Digital', 'Networks'], engagement: 68000 },
  { name: 'Cameroon', code: 'CM', region: 'Central Africa', projects: 5, impact: ['Value chain', 'Processing'], focus: ['Value-add', 'Business'], engagement: 52000 },
  { name: 'DRC', code: 'CD', region: 'Central Africa', projects: 6, impact: ['Crop improvement', 'Supply chain'], focus: ['Research', 'Logistics'], engagement: 58000 },
  { name: 'Nigeria', code: 'NG', region: 'West Africa', projects: 8, impact: ['Market size', 'Innovation hub'], focus: ['Innovation', 'Scale'], engagement: 92000 },
  { name: 'South Sudan', code: 'SS', region: 'East Africa', projects: 3, impact: ['Food security', 'Recovery'], focus: ['Emergency', 'Recovery'], engagement: 28000 },
  { name: 'Botswana', code: 'BW', region: 'Southern Africa', projects: 3, impact: ['Sustainable agriculture'], focus: ['Sustainability'], engagement: 22000 },
  { name: 'Namibia', code: 'NA', region: 'Southern Africa', projects: 3, impact: ['Regional markets'], focus: ['Regional trade'], engagement: 20000 },
]

export default function InteractiveMap() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  return (
    <section className="w-full py-24 relative overflow-hidden bg-primary-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Map Section */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="mb-12 space-y-4">
              <h2 className="text-primary">Our African Reach</h2>
              <p className="text-lg text-foreground/60 font-light">
                Operating across 21 nations to build resilient agricultural foundations. Hover or click to explore our local impact.
              </p>
            </div>

            <div className="relative aspect-square">
              {/* Simplified Africa SVG Map (Optimized for UI) */}
              <svg 
                viewBox="0 0 100 110" 
                className="w-full h-full drop-shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M33,10 L45,5 L60,8 L75,15 L85,30 L90,50 L85,70 L75,90 L60,105 L45,108 L30,105 L15,90 L5,70 L2,50 L5,30 L15,15 Z" 
                  fill="currentColor" 
                  className="text-primary/5"
                />
                
                {/* Simplified Country Markers for Premium Look */}
                {countriesData.map((country, idx) => {
                  // Coordinate mapping (Simplified for demonstration of high-end UI feel)
                  const coords: Record<string, [number, number]> = {
                    'KE': [78, 62], 'UG': [72, 58], 'TZ': [76, 72], 'RW': [70, 65],
                    'ET': [82, 45], 'MW': [75, 82], 'ZM': [65, 85], 'ZW': [68, 92],
                    'MZ': [80, 90], 'MG': [95, 88], 'SN': [5, 38], 'BF': [18, 42],
                    'ML': [15, 30], 'NE': [30, 32], 'GH': [22, 55], 'CM': [40, 58],
                    'CD': [55, 68], 'NG': [32, 50], 'SS': [68, 50], 'BW': [60, 95],
                    'NA': [52, 92]
                  }
                  
                  const [x, y] = coords[country.code] || [50, 50]
                  const isSelected = selectedCountry?.code === country.code
                  const isHovered = hoveredCountry === country.code

                  return (
                    <motion.g
                      key={country.code}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      onMouseEnter={() => setHoveredCountry(country.code)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      onClick={() => setSelectedCountry(country)}
                      className="cursor-pointer"
                    >
                      <circle 
                        cx={x} cy={y} r={isSelected ? 3 : isHovered ? 2.5 : 1.5} 
                        className={`transition-all duration-300 ${isSelected ? 'fill-secondary' : isHovered ? 'fill-primary' : 'fill-primary/20'}`} 
                      />
                      {isSelected && (
                        <circle cx={x} cy={y} r="6" className="fill-secondary/20 animate-pulse" />
                      )}
                    </motion.g>
                  )
                })}
              </svg>

              {/* Hover Tooltip */}
              <AnimatePresence>
                {hoveredCountry && !selectedCountry && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none"
                  >
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">
                      {countriesData.find(c => c.code === hoveredCountry)?.name}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Details Panel */}
          <div className="w-full lg:w-96 min-h-[500px]">
            <AnimatePresence mode="wait">
              {selectedCountry ? (
                <motion.div
                  key={selectedCountry.code}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="glass-panel rounded-3xl p-8 h-full border-primary/10"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest">
                        <MapPin size={14} />
                        {selectedCountry.region}
                      </div>
                      <h3 className="text-3xl text-primary">{selectedCountry.name}</h3>
                    </div>
                    <button 
                      onClick={() => setSelectedCountry(null)}
                      className="p-2 hover:bg-primary/5 rounded-full text-primary/40 hover:text-primary transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                      <div className="text-primary/40 mb-1"><Briefcase size={16} /></div>
                      <div className="text-2xl font-data text-primary">{selectedCountry.projects}</div>
                      <div className="text-[10px] uppercase font-bold text-foreground/40">Projects</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-secondary/5 border border-secondary/10">
                      <div className="text-secondary/60 mb-1"><Users size={16} /></div>
                      <div className="text-2xl font-data text-secondary">{(selectedCountry.engagement / 1000).toFixed(0)}K+</div>
                      <div className="text-[10px] uppercase font-bold text-foreground/40">Farmers</div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-primary/60 uppercase tracking-wide">
                        <TrendingUp size={14} />
                        Focus Areas
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedCountry.focus.map((f, i) => (
                          <span key={i} className="px-3 py-1 bg-white border border-primary/5 rounded-lg text-xs text-foreground/70">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-primary/60 uppercase tracking-wide">
                        <Info size={14} />
                        Key Impacts
                      </div>
                      <ul className="space-y-2">
                        {selectedCountry.impact.map((im, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                            {im}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-primary/10 rounded-3xl"
                >
                  <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                    <Globe className="text-primary/20 animate-pulse" size={40} />
                  </div>
                  <h4 className="text-primary mb-2">Select a Nation</h4>
                  <p className="text-sm text-foreground/40 max-w-[200px]">
                    Click on the map to view our specific impact and projects in that country.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

