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
  path: string
}

const countriesData: Country[] = [
  { name: 'Kenya', code: 'KE', region: 'East Africa', projects: 12, impact: ['Seed regulations', 'Farmer networks', 'Quality assurance'], focus: ['Seed certification', 'Market linkages'], engagement: 120000, path: "M439.5,296.8l-1.6-1.9l-2.4-0.1l-2,1.3l-2.1,3.4l-1.3,0.1l-1.6-2l-2.8,0.7l-0.8,3.2l0.4,4.4l3.1,4.4l4,1l3.5-3.3l3.6-4.5l3.1-0.7L439.5,296.8z" },
  { name: 'Uganda', code: 'UG', region: 'East Africa', projects: 8, impact: ['Value chain', 'Certification', 'Market access'], focus: ['Value chain dev', 'Training'], engagement: 85000, path: "M422.3,293.4l-0.8,3.1l-3.2,0.8l-1.6,2.1l0,3.3l2.8,0.7l1.6,1.9l2,1.3l2.1-3.4l1.3-0.1l0.8-3.2l-0.4-4.4L422.3,293.4z" },
  { name: 'Tanzania', code: 'TZ', region: 'East Africa', projects: 10, impact: ['Seed production', 'Distribution', 'Training'], focus: ['Production systems', 'Extension'], engagement: 95000, path: "M421.3,312.8l-1.1,5.9l2.7,4.3l7,1l5.4,3.7l6.6-0.3l3.4-3.3l0.3-6.6l-3.3-3.4l-3.6,4.5l-3.5,3.3l-4-1l-3.1-4.4l-3.1,0.7L421.3,312.8z" },
  { name: 'Ethiopia', code: 'ET', region: 'East Africa', projects: 9, impact: ['Policy reform', 'Farmer support'], focus: ['Policy', 'Networks'], engagement: 75000, path: "M433.1,250.2l-5.6,3.6l-2.1,6.5l-0.6,6.9l5.3,7l2.8,0.7l3.1,0.7l4.5,2.1l4.4,0.4l3.3-3.1l3.3-3.3l-0.3-6.6l-3.3-3.4l-3.3-3.3l-3.3,0.3l-3.4,3.3l-3.3-3.4L433.1,250.2z" },
  { name: 'Nigeria', code: 'NG', region: 'West Africa', projects: 8, impact: ['Market size', 'Innovation hub'], focus: ['Innovation', 'Scale'], engagement: 92000, path: "M278.4,260.4l-6.6,0.3l-3.4,3.3l-0.3,6.6l3.3,3.4l3.3,3.3l3.3-0.3l3.4-3.3l3.3,3.4l6.6-0.3l3.4-3.3l0.3-6.6l-3.3-3.4l-3.3-3.3l-3.3,0.3l-3.4,3.3L278.4,260.4z" },
  { name: 'Ghana', code: 'GH', region: 'West Africa', projects: 7, impact: ['Tech adoption', 'Farmer networks'], focus: ['Digital', 'Networks'], engagement: 68000, path: "M248.4,275.4l-3.3,0.3l-3.4,3.3l-3.3-3.4l-6.6,0.3l-3.4,3.3l-0.3,6.6l3.3,3.4l3.3,3.3l3.3-0.3l3.4-3.3l3.3,3.4l6.6-0.3l3.4-3.3l0.3-6.6L248.4,275.4z" },
  // Adding placeholders for all 21 countries with representative paths to demonstrate functionality
  { name: 'Rwanda', code: 'RW', region: 'East Africa', projects: 7, impact: ['Variety research', 'Extension services'], focus: ['Research', 'Capacity'], engagement: 65000, path: "M416,310l-2,2l0,3l2,2l3,0l2-2l0-3l-2-2L416,310z" },
  { name: 'Malawi', code: 'MW', region: 'Southern Africa', projects: 6, impact: ['Seed systems', 'Quality control'], focus: ['Quality', 'Logistics'], engagement: 55000, path: "M425,345l-1,4l3,2l4-2l0-4l-3-2L425,345z" },
  { name: 'Zambia', code: 'ZM', region: 'Southern Africa', projects: 8, impact: ['Market development', 'Capacity building'], focus: ['Markets', 'Training'], engagement: 70000, path: "M390,360l-5,5l2,10l10,5l8-8l-2-10L390,360z" },
  { name: 'Zimbabwe', code: 'ZW', region: 'Southern Africa', projects: 7, impact: ['Value addition', 'Trade'], focus: ['Processing', 'Export'], engagement: 60000, path: "M405,385l-4,4l2,8l8,4l6-6l-2-8L405,385z" },
  { name: 'Mozambique', code: 'MZ', region: 'Southern Africa', projects: 5, impact: ['Infrastructure', 'Logistics'], focus: ['Supply chain', 'Tech'], engagement: 45000, path: "M435,365l-5,10l4,15l10,5l5-10l-4-15L435,365z" },
  { name: 'Madagascar', code: 'MG', region: 'Southern Africa', projects: 4, impact: ['Conservation', 'Climate adaptation'], focus: ['Climate', 'Sustainability'], engagement: 40000, path: "M490,370l-3,10l5,20l8,5l3-10l-5-20L490,370z" },
  { name: 'Senegal', code: 'SN', region: 'West Africa', projects: 6, impact: ['Market analysis', 'Youth engagement'], focus: ['Youth', 'Markets'], engagement: 50000, path: "M170,235l-5,5l2,8l8,4l5-5l-2-8L170,235z" },
  { name: 'Burkina Faso', code: 'BF', region: 'West Africa', projects: 5, impact: ['Seed multiplication', 'Farmer schools'], focus: ['Production', 'Education'], engagement: 48000, path: "M235,245l-6,3l2,7l9,2l4-4l-2-6L235,245z" },
  { name: 'Mali', code: 'ML', region: 'West Africa', projects: 4, impact: ['Regional trade', 'Nutrition'], focus: ['Trade', 'Food security'], engagement: 35000, path: "M210,210l-8,8l4,15l15,10l10-10l-4-15L210,210z" },
  { name: 'Niger', code: 'NE', region: 'West Africa', projects: 5, impact: ['Drought resilience', 'Varieties'], focus: ['Climate', 'Resilience'], engagement: 42000, path: "M280,215l-10,5l5,15l15,10l10-10l-5-15L280,215z" },
  { name: 'Cameroon', code: 'CM', region: 'Central Africa', projects: 5, impact: ['Value chain', 'Processing'], focus: ['Value-add', 'Business'], engagement: 52000, path: "M325,295l-5,5l3,12l12,3l5-5l-3-12L325,295z" },
  { name: 'DRC', code: 'CD', region: 'Central Africa', projects: 6, impact: ['Crop improvement', 'Supply chain'], focus: ['Research', 'Logistics'], engagement: 58000, path: "M360,315l-15,15l5,30l30,15l20-20l-5-30L360,315z" },
  { name: 'South Sudan', code: 'SS', region: 'East Africa', projects: 3, impact: ['Food security', 'Recovery'], focus: ['Emergency', 'Recovery'], engagement: 28000, path: "M395,265l-8,6l3,12l15,3l8-8l-3-12L395,265z" },
  { name: 'Botswana', code: 'BW', region: 'Southern Africa', projects: 3, impact: ['Sustainable agriculture'], focus: ['Sustainability'], engagement: 22000, path: "M385,410l-6,6l3,12l15,3l6-6l-3-12L385,410z" },
  { name: 'Namibia', code: 'NA', region: 'Southern Africa', projects: 3, impact: ['Regional markets'], focus: ['Regional trade'], engagement: 20000, path: "M355,405l-6,12l4,15l15,4l6-12l-4-15L355,405z" },
]

export default function InteractiveMap() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  return (
    <section className="w-full py-24 relative overflow-hidden bg-primary-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Map Section */}
          <div className="flex-1 w-full max-w-3xl">
            <div className="mb-12 space-y-4">
              <h2 className="text-primary italic">Our African Outreach</h2>
              <p className="text-xl text-foreground/60 font-light max-w-xl">
                A physical presence across 21 nations. Click on a highlighted country to explore our deep roots and local impact.
              </p>
            </div>

            <div className="relative">
              {/* Detailed Africa SVG Map */}
              <svg 
                viewBox="100 0 500 600" 
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(6,78,59,0.15)]"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Outline of Africa */}
                <path 
                  d="M208,35c-15,6-31,18-38,33c-7,15-8,32-4,47c4,15,13,29,26,38c13,9,30,13,46,12c16-1,31-6,44-15c13-9,23-22,29-37 c6-15,7-31,3-46c-4-15-13-28-26-38C275,21,259,16,243,17C227,18,212,24,208,35z M143,117c-25,12-42,39-43,67c-1,28,14,56,38,71 c24,15,55,17,81,5c26-12,45-38,47-66c2-28-11-56-34-73c-23-17-54-21-81-11c-2,1-4,2-7,4c-1,0-1,1-2,1c-10,6-18,14-23,24c0,1,0,1,0,1 c-2,3-3,7-4,10c-1,3-1,7-1,10c1,14,7,26,17,35c10,9,24,13,38,10c14-3,25-11,31-23c6-12,6-26,0-38c-6-12-18-21-31-23 c-13-2-27,2-37,11c-10,9-15,22-14,35c1,13,8,25,19,32c11,7,25,8,37,3c12-5,20-16,22-29c2-13-3-26-13-35c-10-9-24-11-36-7 c-12,4-20,15-21,28c-1,13,6,25,16,32c10,7,24,8,35,3c11-5,18-16,19-28c1-12-5-24-15-30c-10-6-23-7-33-2 c-10,5-16,16-16,27c0,11,6,22,16,28c10,6,22,5,31-1c9-6,14-16,13-26c-1-10-8-19-17-23c-9-4-21-2-28,5c-7,7-10,18-8,27 c2,9,10,17,19,19c9,2,20-2,26-10c6-8,8-19,4-28c-4-9-13-15-23-15c-10,0-19,7-21,17c-2,10,4,20,13,24c9,4,20,2,26-6c6-8,6-20-1-27 c-7-7-19-8-26-2c-7,6-9,17-4,25c5,8,16,10,24,5c8-5,11-16,6-24c-5-8-16-9-23-4c-7,5-9,15-4,22c5,7,15,9,22,4c7-5,9-14,4-21 c-5-7-14-9-21-4c-7,5-9,14-4,21c5,7,14,9,21,4c7-5,9-14,4-21" 
                  fill="currentColor" 
                  className="text-primary/5"
                  transform="scale(2) translate(-50, -50)"
                />
                
                {/* Detailed Country Paths */}
                {countriesData.map((country, idx) => {
                  const isSelected = selectedCountry?.code === country.code
                  const isHovered = hoveredCountry === country.code

                  return (
                    <motion.path
                      key={country.code}
                      d={country.path}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ 
                        opacity: 1, 
                        scale: isSelected ? 1.05 : 1,
                        fill: isSelected ? '#B45309' : isHovered ? '#064E3B' : 'rgba(6,78,59,0.1)'
                      }}
                      transition={{ duration: 0.4 }}
                      stroke={isSelected ? '#B45309' : isHovered ? '#064E3B' : '#FFFFFF'}
                      strokeWidth={isSelected ? 1.5 : 0.5}
                      onMouseEnter={() => setHoveredCountry(country.code)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      onClick={() => setSelectedCountry(country)}
                      className="cursor-pointer transition-all duration-300"
                    />
                  )
                })}

                {/* Markers for specific projects within countries */}
                {selectedCountry && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <circle 
                      cx="420" cy="300" r="3" 
                      fill="#B45309" 
                      className="animate-ping" 
                    />
                  </motion.g>
                )}
              </svg>

              {/* Float Label */}
              <AnimatePresence>
                {hoveredCountry && !selectedCountry && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute top-0 right-0 bg-primary text-white px-6 py-3 rounded-2xl shadow-2xl font-bold italic"
                  >
                    {countriesData.find(c => c.code === hoveredCountry)?.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Immersive Details Panel */}
          <div className="w-full lg:w-[450px] min-h-[600px]">
            <AnimatePresence mode="wait">
              {selectedCountry ? (
                <motion.div
                  key={selectedCountry.code}
                  initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-panel rounded-[40px] p-10 h-full border-primary/5 shadow-2xl relative overflow-hidden flex flex-col"
                >
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                  
                  <div className="flex justify-between items-start mb-12">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-[0.2em]">
                        <Globe size={14} />
                        {selectedCountry.region}
                      </div>
                      <h3 className="text-4xl text-primary italic leading-none">{selectedCountry.name}</h3>
                    </div>
                    <button 
                      onClick={() => setSelectedCountry(null)}
                      className="p-3 bg-primary/5 hover:bg-primary/10 rounded-full text-primary transition-all hover:rotate-90"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-12">
                    <div className="p-6 rounded-[32px] bg-primary/5 border border-primary/10 space-y-2">
                      <Briefcase className="text-primary/40" size={20} />
                      <div className="text-4xl font-data text-primary leading-none">{selectedCountry.projects}</div>
                      <div className="text-[11px] uppercase font-bold text-foreground/40 tracking-wider">Active Projects</div>
                    </div>
                    <div className="p-6 rounded-[32px] bg-secondary/5 border border-secondary/10 space-y-2">
                      <Users className="text-secondary/60" size={20} />
                      <div className="text-4xl font-data text-secondary leading-none">{(selectedCountry.engagement / 1000).toFixed(0)}K+</div>
                      <div className="text-[11px] uppercase font-bold text-foreground/40 tracking-wider">Farmers Impacted</div>
                    </div>
                  </div>

                  <div className="space-y-10 flex-1">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-primary/40 uppercase tracking-[0.2em]">
                        <TrendingUp size={16} />
                        Primary Focus
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {selectedCountry.focus.map((f, i) => (
                          <span key={i} className="px-5 py-2 bg-white border border-primary/5 rounded-full text-sm text-foreground/70 shadow-sm">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-primary/40 uppercase tracking-[0.2em]">
                        <Info size={16} />
                        Key Impacts & Results
                      </div>
                      <ul className="space-y-4">
                        {selectedCountry.impact.map((im, i) => (
                          <li key={i} className="flex items-start gap-4 text-base text-foreground/70 font-light leading-relaxed group">
                            <span className="mt-2 w-2 h-2 rounded-full bg-secondary shrink-0 group-hover:scale-150 transition-transform"></span>
                            {im}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-10 mt-auto">
                    <Link 
                      href={`/our-results?country=${selectedCountry.code}`}
                      className="w-full flex justify-center items-center gap-3 py-5 bg-primary text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-[0.98]"
                    >
                      View Full Report
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-primary/10 rounded-[40px] bg-white/40"
                >
                  <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mb-8 relative">
                    <Globe className="text-primary/10 animate-pulse" size={48} />
                    <div className="absolute inset-0 border-2 border-primary/5 rounded-full animate-ping"></div>
                  </div>
                  <h4 className="text-2xl text-primary italic mb-4">Select a Nation to Explore</h4>
                  <p className="text-base text-foreground/40 max-w-[280px] font-light leading-relaxed">
                    Interactive mapping of our agricultural initiatives across the African continent.
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
