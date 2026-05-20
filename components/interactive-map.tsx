'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin } from 'lucide-react'

interface Country {
  name: string
  code: string
  region: string
  projects: number
  lat: number
  lng: number
}

const countriesData: Country[] = [
  { name: 'Kenya', code: 'KE', region: 'East Africa', projects: 12, lat: -0.02, lng: 37.91 },
  { name: 'Uganda', code: 'UG', region: 'East Africa', projects: 8, lat: 1.37, lng: 32.29 },
  { name: 'Tanzania', code: 'TZ', region: 'East Africa', projects: 10, lat: -6.37, lng: 34.89 },
  { name: 'Rwanda', code: 'RW', region: 'East Africa', projects: 7, lat: -1.95, lng: 29.87 },
  { name: 'Ethiopia', code: 'ET', region: 'East Africa', projects: 9, lat: 9.15, lng: 40.49 },
  { name: 'Malawi', code: 'MW', region: 'Southern Africa', projects: 6, lat: -13.25, lng: 34.30 },
  { name: 'Zambia', code: 'ZM', region: 'Southern Africa', projects: 8, lat: -13.13, lng: 27.85 },
  { name: 'Zimbabwe', code: 'ZW', region: 'Southern Africa', projects: 7, lat: -19.02, lng: 29.15 },
  { name: 'Mozambique', code: 'MZ', region: 'Southern Africa', projects: 5, lat: -18.66, lng: 35.53 },
  { name: 'Madagascar', code: 'MG', region: 'Southern Africa', projects: 4, lat: -18.76, lng: 46.87 },
  { name: 'Senegal', code: 'SN', region: 'West Africa', projects: 6, lat: 14.50, lng: -14.45 },
  { name: 'Burkina Faso', code: 'BF', region: 'West Africa', projects: 5, lat: 12.24, lng: -1.56 },
  { name: 'Mali', code: 'ML', region: 'West Africa', projects: 4, lat: 17.57, lng: -4.00 },
  { name: 'Niger', code: 'NE', region: 'West Africa', projects: 5, lat: 17.61, lng: 8.67 },
  { name: 'Ghana', code: 'GH', region: 'West Africa', projects: 7, lat: 7.37, lng: -0.55 },
  { name: 'Cameroon', code: 'CM', region: 'Central Africa', projects: 5, lat: 3.85, lng: 11.50 },
  { name: 'DRC', code: 'CD', region: 'Central Africa', projects: 6, lat: -4.04, lng: 21.76 },
  { name: 'Nigeria', code: 'NG', region: 'West Africa', projects: 8, lat: 9.08, lng: 8.68 },
  { name: 'South Sudan', code: 'SS', region: 'East Africa', projects: 3, lat: 6.88, lng: 31.31 },
  { name: 'Botswana', code: 'BW', region: 'Southern Africa', projects: 3, lat: -22.33, lng: 24.68 },
  { name: 'Namibia', code: 'NA', region: 'Southern Africa', projects: 3, lat: -22.96, lng: 18.49 },
]

export default function InteractiveMap() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const getColorByRegion = (region: string) => {
    const colors: { [key: string]: string } = {
      'East Africa': 'bg-blue-100 hover:bg-blue-200 border-blue-400',
      'West Africa': 'bg-green-100 hover:bg-green-200 border-green-400',
      'Central Africa': 'bg-amber-100 hover:bg-amber-200 border-amber-400',
      'Southern Africa': 'bg-red-100 hover:bg-red-200 border-red-400',
    }
    return colors[region] || 'bg-gray-100 hover:bg-gray-200 border-gray-400'
  }

  const regionGroups = countriesData.reduce((acc, country) => {
    const region = country.region
    if (!acc[region]) acc[region] = []
    acc[region].push(country)
    return acc
  }, {} as { [key: string]: Country[] })

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-mint via-background to-cream">
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
          <p className="text-lg text-dark-blue-gray max-w-2xl mx-auto">
            Operating across 21 countries, transforming seed systems and strengthening agricultural value chains from the soil to the market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Visualization */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-mint"
            >
              <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 min-h-[500px]">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%233ab44a%22 width=%221%22 height=%221%22/></svg>')] rounded-xl"></div>

                <div className="relative grid grid-cols-5 gap-2">
                  {countriesData.map((country) => (
                    <motion.button
                      key={country.code}
                      onClick={() => setSelectedCountry(country)}
                      onMouseEnter={() => setHoveredCountry(country.code)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative h-16 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center border-2 ${getColorByRegion(
                        country.region
                      )} ${
                        selectedCountry?.code === country.code
                          ? 'ring-4 ring-primary scale-110'
                          : ''
                      } ${hoveredCountry === country.code ? 'shadow-lg' : ''}`}
                    >
                      <div className="text-center">
                        <div className="font-serif font-bold text-xs">{country.code}</div>
                        <div className="text-xs opacity-70">{country.projects}</div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-lg p-3 text-xs">
                  <div className="font-semibold mb-2 text-dark-green">Regions:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                      <span>East Africa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <span>West Africa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <span>Central Africa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <span>Southern Africa</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Country Details */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              {selectedCountry ? (
                <motion.div
                  key={selectedCountry.code}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-2xl shadow-lg p-6 border-2 border-primary h-full"
                >
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="absolute top-4 right-4 p-1 hover:bg-mint rounded-lg transition-colors"
                  >
                    <X size={20} className="text-dark-green" />
                  </button>

                  <MapPin className="w-8 h-8 text-primary mb-3" />

                  <h3 className="text-3xl font-serif font-bold text-dark-green mb-2">
                    {selectedCountry.name}
                  </h3>
                  <p className="text-sm text-dark-blue-gray mb-4">{selectedCountry.region}</p>

                  <div className="bg-mint rounded-lg p-4 mb-4">
                    <div className="text-5xl font-data text-primary mb-1">
                      {selectedCountry.projects}
                    </div>
                    <p className="text-sm font-medium text-dark-green">Active Projects</p>
                  </div>

                  <div className="space-y-3">
                    <div className="border-t border-mint pt-3">
                      <p className="text-xs font-semibold text-dark-blue-gray uppercase tracking-wider">
                        Impact Areas
                      </p>
                      <ul className="text-sm text-dark-green mt-2 space-y-1">
                        <li>• Seed Systems Development</li>
                        <li>• Value Chain Integration</li>
                        <li>• Farmer Capacity Building</li>
                        <li>• Market Access Support</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-gradient-to-br from-mint to-cream rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center border-2 border-dashed border-primary/30"
                >
                  <MapPin className="w-12 h-12 text-primary/30 mb-4" />
                  <p className="text-dark-blue-gray">
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
