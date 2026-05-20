'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, ChevronRight, Users, Briefcase, TrendingUp } from 'lucide-react'

interface Country {
  name: string
  code: string
  region: string
  projects: number
  lat: number
  lng: number
  impact: string[]
  focus: string[]
  engagement: number
}

const countriesData: Country[] = [
  { name: 'Kenya', code: 'KE', region: 'East Africa', projects: 12, lat: -0.02, lng: 37.91, impact: ['Seed regulations', 'Farmer networks', 'Quality assurance'], focus: ['Seed certification', 'Market linkages'], engagement: 120000 },
  { name: 'Uganda', code: 'UG', region: 'East Africa', projects: 8, lat: 1.37, lng: 32.29, impact: ['Value chain', 'Certification', 'Market access'], focus: ['Value chain dev', 'Training'], engagement: 85000 },
  { name: 'Tanzania', code: 'TZ', region: 'East Africa', projects: 10, lat: -6.37, lng: 34.89, impact: ['Seed production', 'Distribution', 'Training'], focus: ['Production systems', 'Extension'], engagement: 95000 },
  { name: 'Rwanda', code: 'RW', region: 'East Africa', projects: 7, lat: -1.95, lng: 29.87, impact: ['Variety research', 'Extension services'], focus: ['Research', 'Capacity'], engagement: 65000 },
  { name: 'Ethiopia', code: 'ET', region: 'East Africa', projects: 9, lat: 9.15, lng: 40.49, impact: ['Policy reform', 'Farmer support'], focus: ['Policy', 'Networks'], engagement: 75000 },
  { name: 'Malawi', code: 'MW', region: 'Southern Africa', projects: 6, lat: -13.25, lng: 34.30, impact: ['Seed systems', 'Quality control'], focus: ['Quality', 'Logistics'], engagement: 55000 },
  { name: 'Zambia', code: 'ZM', region: 'Southern Africa', projects: 8, lat: -13.13, lng: 27.85, impact: ['Market development', 'Capacity building'], focus: ['Markets', 'Training'], engagement: 70000 },
  { name: 'Zimbabwe', code: 'ZW', region: 'Southern Africa', projects: 7, lat: -19.02, lng: 29.15, impact: ['Value addition', 'Trade'], focus: ['Processing', 'Export'], engagement: 60000 },
  { name: 'Mozambique', code: 'MZ', region: 'Southern Africa', projects: 5, lat: -18.66, lng: 35.53, impact: ['Infrastructure', 'Logistics'], focus: ['Supply chain', 'Tech'], engagement: 45000 },
  { name: 'Madagascar', code: 'MG', region: 'Southern Africa', projects: 4, lat: -18.76, lng: 46.87, impact: ['Conservation', 'Climate adaptation'], focus: ['Climate', 'Sustainability'], engagement: 40000 },
  { name: 'Senegal', code: 'SN', region: 'West Africa', projects: 6, lat: 14.50, lng: -14.45, impact: ['Market analysis', 'Youth engagement'], focus: ['Youth', 'Markets'], engagement: 50000 },
  { name: 'Burkina Faso', code: 'BF', region: 'West Africa', projects: 5, lat: 12.24, lng: -1.56, impact: ['Seed multiplication', 'Farmer schools'], focus: ['Production', 'Education'], engagement: 48000 },
  { name: 'Mali', code: 'ML', region: 'West Africa', projects: 4, lat: 17.57, lng: -4.00, impact: ['Regional trade', 'Nutrition'], focus: ['Trade', 'Food security'], engagement: 35000 },
  { name: 'Niger', code: 'NE', region: 'West Africa', projects: 5, lat: 17.61, lng: 8.67, impact: ['Drought resilience', 'Varieties'], focus: ['Climate', 'Resilience'], engagement: 42000 },
  { name: 'Ghana', code: 'GH', region: 'West Africa', projects: 7, lat: 7.37, lng: -0.55, impact: ['Tech adoption', 'Farmer networks'], focus: ['Digital', 'Networks'], engagement: 68000 },
  { name: 'Cameroon', code: 'CM', region: 'Central Africa', projects: 5, lat: 3.85, lng: 11.50, impact: ['Value chain', 'Processing'], focus: ['Value-add', 'Business'], engagement: 52000 },
  { name: 'DRC', code: 'CD', region: 'Central Africa', projects: 6, lat: -4.04, lng: 21.76, impact: ['Crop improvement', 'Supply chain'], focus: ['Research', 'Logistics'], engagement: 58000 },
  { name: 'Nigeria', code: 'NG', region: 'West Africa', projects: 8, lat: 9.08, lng: 8.68, impact: ['Market size', 'Innovation hub'], focus: ['Innovation', 'Scale'], engagement: 92000 },
  { name: 'South Sudan', code: 'SS', region: 'East Africa', projects: 3, lat: 6.88, lng: 31.31, impact: ['Food security', 'Recovery'], focus: ['Emergency', 'Recovery'], engagement: 28000 },
  { name: 'Botswana', code: 'BW', region: 'Southern Africa', projects: 3, lat: -22.33, lng: 24.68, impact: ['Sustainable agriculture'], focus: ['Sustainability'], engagement: 22000 },
  { name: 'Namibia', code: 'NA', region: 'Southern Africa', projects: 3, lat: -22.96, lng: 18.49, impact: ['Regional markets'], focus: ['Regional trade'], engagement: 20000 },
]

const regionData = {
  'East Africa': {
    color: 'from-blue-500 to-blue-600',
    icon: '🌍',
    description: 'Leading seed system transformation across East African highlands and lowlands',
  },
  'West Africa': {
    color: 'from-green-500 to-green-600',
    icon: '🌾',
    description: 'Strengthening Sahel resilience and expanding farmer networks',
  },
  'Central Africa': {
    color: 'from-amber-500 to-amber-600',
    icon: '🌳',
    description: 'Developing agricultural value chains and market infrastructure',
  },
  'Southern Africa': {
    color: 'from-red-500 to-red-600',
    icon: '🌱',
    description: 'Sustaining development and regional trade integration',
  },
}

export default function InteractiveMap() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const getColorByRegion = (region: string) => {
    const colors: { [key: string]: string } = {
      'East Africa': 'bg-blue-100 border-blue-300',
      'West Africa': 'bg-green-100 border-green-300',
      'Central Africa': 'bg-amber-100 border-amber-300',
      'Southern Africa': 'bg-red-100 border-red-300',
    }
    return colors[region] || 'bg-gray-100 border-gray-300'
  }

  const regionGroups = countriesData.reduce((acc, country) => {
    const region = country.region
    if (!acc[region]) acc[region] = []
    acc[region].push(country)
    return acc
  }, {} as { [key: string]: Country[] })

  const regions = Object.keys(regionGroups)
  const filteredCountries = selectedRegion 
    ? countriesData.filter(c => c.region === selectedRegion)
    : countriesData

  const regionStats = (region: string) => {
    const countries = regionGroups[region]
    const projects = countries.reduce((sum, c) => sum + c.projects, 0)
    const farmers = countries.reduce((sum, c) => sum + c.engagement, 0)
    return { projects, farmers, count: countries.length }
  }

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
            Our Reach Across Africa
          </h2>
          <p className="text-lg text-dark-blue-gray max-w-2xl mx-auto font-light">
            Operating across 21 countries across 4 regions, transforming seed systems and strengthening agricultural value chains.
          </p>
        </motion.div>

        {/* Region Selection Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-8"
        >
          <motion.button
            onClick={() => setSelectedRegion(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedRegion === null
                ? 'bg-dark-green text-white shadow-lg'
                : 'bg-white border-2 border-dark-green text-dark-green hover:bg-primary/5'
            }`}
          >
            All Regions (21)
          </motion.button>
          {regions.map((region) => {
            const stats = regionStats(region)
            const regionColors: { [key: string]: string } = {
              'East Africa': 'bg-blue-50 border-blue-200 text-blue-900 hover:bg-blue-100',
              'West Africa': 'bg-green-50 border-green-200 text-green-900 hover:bg-green-100',
              'Central Africa': 'bg-amber-50 border-amber-200 text-amber-900 hover:bg-amber-100',
              'Southern Africa': 'bg-red-50 border-red-200 text-red-900 hover:bg-red-100',
            }
            return (
              <motion.button
                key={region}
                onClick={() => setSelectedRegion(region)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all border-2 ${
                  selectedRegion === region
                    ? `${regionColors[region]} shadow-lg bg-opacity-100`
                    : 'bg-white border-dark-green text-dark-green hover:bg-primary/5'
                }`}
              >
                {region} ({stats.count})
              </motion.button>
            )
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Visualization */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-primary/15"
            >
              <div className="relative bg-white rounded-xl p-6 min-h-[500px] border border-primary/10">
                <div className="relative">
                  {selectedRegion && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 pb-4 border-b-2 border-primary/20"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{regionData[selectedRegion as keyof typeof regionData].icon}</span>
                        <div>
                          <h3 className="text-2xl font-serif font-bold text-dark-green">{selectedRegion}</h3>
                          <p className="text-sm text-dark-blue-gray font-light">{regionData[selectedRegion as keyof typeof regionData].description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
                    <AnimatePresence mode="wait">
                      {filteredCountries.map((country, idx) => {
                        const regionBgColors: { [key: string]: string } = {
                          'East Africa': 'bg-blue-50 border-blue-300 hover:bg-blue-100',
                          'West Africa': 'bg-green-50 border-green-300 hover:bg-green-100',
                          'Central Africa': 'bg-amber-50 border-amber-300 hover:bg-amber-100',
                          'Southern Africa': 'bg-red-50 border-red-300 hover:bg-red-100',
                        }
                        return (
                          <motion.button
                            key={country.code}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ delay: idx * 0.02 }}
                            onClick={() => setSelectedCountry(country)}
                            onMouseEnter={() => setHoveredCountry(country.code)}
                            onMouseLeave={() => setHoveredCountry(null)}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative h-20 rounded-lg font-bold text-sm transition-all duration-300 flex flex-col items-center justify-center border-2 ${regionBgColors[country.region]} ${
                              selectedCountry?.code === country.code
                                ? 'ring-4 ring-primary shadow-lg scale-110'
                                : ''
                          } ${hoveredCountry === country.code ? 'shadow-md brightness-110' : ''}`}
                          >
                            <div className="text-lg">🌾</div>
                            <div className="font-serif font-bold text-xs mt-1">{country.code}</div>
                            <div className="text-xs opacity-75 font-data">{country.projects}</div>
                          </motion.button>
                        )})
                    </AnimatePresence>
                  </div>
                </div>

                {/* Legend */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-lg p-3 text-xs border border-primary/20"
                >
                  <div className="font-semibold mb-2 text-dark-green">Regions:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-dark-blue-gray">East Africa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-dark-blue-gray">West Africa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <span className="text-dark-blue-gray">Central Africa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-dark-blue-gray">Southern Africa</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Country Details Panel */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              {selectedCountry ? (
                <motion.div
                  key={selectedCountry.code}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-lg p-6 border-2 border-primary h-full flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-dark-green">
                          {selectedCountry.name}
                        </h3>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider">{selectedCountry.region}</p>
                      </div>
                    </div>
                    <motion.button
                      onClick={() => setSelectedCountry(null)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1 hover:bg-mint rounded-lg transition-colors"
                    >
                      <X size={20} className="text-dark-green" />
                    </motion.button>
                  </div>

                  <div className="space-y-4 flex-1">
                    {/* Projects Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-white rounded-lg p-4 border-2 border-primary/15 hover:border-primary/30"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase size={16} className="text-primary" />
                        <p className="text-xs font-semibold text-dark-blue-gray uppercase tracking-wider">Active Projects</p>
                      </div>
                      <div className="text-4xl font-data text-primary mb-1">{selectedCountry.projects}</div>
                      <p className="text-xs text-dark-blue-gray">ongoing initiatives</p>
                    </motion.div>

                    {/* Engagement Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="bg-white rounded-lg p-4 border-2 border-secondary/15 hover:border-secondary/30"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Users size={16} className="text-secondary" />
                        <p className="text-xs font-semibold text-dark-blue-gray uppercase tracking-wider">Farmers Engaged</p>
                      </div>
                      <div className="text-3xl font-data text-secondary mb-1">{(selectedCountry.engagement / 1000).toFixed(0)}K+</div>
                      <p className="text-xs text-dark-blue-gray">direct beneficiaries</p>
                    </motion.div>

                    {/* Focus Areas */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="border-t border-mint pt-4"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp size={16} className="text-accent" />
                        <p className="text-xs font-semibold text-dark-blue-gray uppercase tracking-wider">Focus Areas</p>
                      </div>
                      <ul className="space-y-2">
                        {selectedCountry.focus.map((area, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25 + idx * 0.05 }}
                            className="text-sm text-dark-green flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            {area}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center border-2 border-dashed border-primary/20"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-5xl mb-4"
                  >
                    🗺️
                  </motion.div>
                  <p className="text-dark-blue-gray font-medium mb-2">
                    Select a Country
                  </p>
                  <p className="text-sm text-dark-blue-gray/70">
                    Click on any country to explore our work and impact
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