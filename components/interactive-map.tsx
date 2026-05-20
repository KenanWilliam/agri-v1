'use client'

import { useState, useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Briefcase, Users, TrendingUp, Info, Globe, RefreshCcw, ArrowRight } from 'lucide-react'

interface Country {
  name: string
  code: string
  region: string
  projects: number
  impact: string[]
  focus: string[]
  engagement: number
}

const countriesData: Record<string, Country> = {
  'Kenya': { name: 'Kenya', code: 'KE', region: 'East Africa', projects: 12, impact: ['Seed regulations', 'Farmer networks', 'Quality assurance'], focus: ['Seed certification', 'Market linkages'], engagement: 120000 },
  'Uganda': { name: 'Uganda', code: 'UG', region: 'East Africa', projects: 8, impact: ['Value chain', 'Certification', 'Market access'], focus: ['Value chain dev', 'Training'], engagement: 85000 },
  'Tanzania': { name: 'Tanzania', code: 'TZ', region: 'East Africa', projects: 10, impact: ['Seed production', 'Distribution', 'Training'], focus: ['Production systems', 'Extension'], engagement: 95000 },
  'Rwanda': { name: 'Rwanda', code: 'RW', region: 'East Africa', projects: 7, impact: ['Variety research', 'Extension services'], focus: ['Research', 'Capacity'], engagement: 65000 },
  'Ethiopia': { name: 'Ethiopia', code: 'ET', region: 'East Africa', projects: 9, impact: ['Policy reform', 'Farmer support'], focus: ['Policy', 'Networks'], engagement: 75000 },
  'Malawi': { name: 'Malawi', code: 'MW', region: 'Southern Africa', projects: 6, impact: ['Seed systems', 'Quality control'], focus: ['Quality', 'Logistics'], engagement: 55000 },
  'Zambia': { name: 'Zambia', code: 'ZM', region: 'Southern Africa', projects: 8, impact: ['Market development', 'Capacity building'], focus: ['Markets', 'Training'], engagement: 70000 },
  'Zimbabwe': { name: 'Zimbabwe', code: 'ZW', region: 'Southern Africa', projects: 7, impact: ['Value addition', 'Trade'], focus: ['Processing', 'Export'], engagement: 60000 },
  'Mozambique': { name: 'Mozambique', code: 'MZ', region: 'Southern Africa', projects: 5, impact: ['Infrastructure', 'Logistics'], focus: ['Supply chain', 'Tech'], engagement: 45000 },
  'Madagascar': { name: 'Madagascar', code: 'MG', region: 'Southern Africa', projects: 4, impact: ['Conservation', 'Climate adaptation'], focus: ['Climate', 'Sustainability'], engagement: 40000 },
  'Senegal': { name: 'Senegal', code: 'SN', region: 'West Africa', projects: 6, impact: ['Market analysis', 'Youth engagement'], focus: ['Youth', 'Markets'], engagement: 50000 },
  'Burkina Faso': { name: 'Burkina Faso', code: 'BF', region: 'West Africa', projects: 5, impact: ['Seed multiplication', 'Farmer schools'], focus: ['Production', 'Education'], engagement: 48000 },
  'Mali': { name: 'Mali', code: 'ML', region: 'West Africa', projects: 4, impact: ['Regional trade', 'Nutrition'], focus: ['Trade', 'Food security'], engagement: 35000 },
  'Niger': { name: 'Niger', code: 'NE', region: 'West Africa', projects: 5, impact: ['Drought resilience', 'Varieties'], focus: ['Climate', 'Resilience'], engagement: 42000 },
  'Ghana': { name: 'Ghana', code: 'GH', region: 'West Africa', projects: 7, impact: ['Tech adoption', 'Farmer networks'], focus: ['Digital', 'Networks'], engagement: 68000 },
  'Cameroon': { name: 'Cameroon', code: 'CM', region: 'Central Africa', projects: 5, impact: ['Value chain', 'Processing'], focus: ['Value-add', 'Business'], engagement: 52000 },
  'Democratic Republic of the Congo': { name: 'DRC', code: 'CD', region: 'Central Africa', projects: 6, impact: ['Crop improvement', 'Supply chain'], focus: ['Research', 'Logistics'], engagement: 58000 },
  'Nigeria': { name: 'Nigeria', code: 'NG', region: 'West Africa', projects: 8, impact: ['Market size', 'Innovation hub'], focus: ['Innovation', 'Scale'], engagement: 92000 },
  'South Sudan': { name: 'South Sudan', code: 'SS', region: 'East Africa', projects: 3, impact: ['Food security', 'Recovery'], focus: ['Emergency', 'Recovery'], engagement: 28000 },
  'Botswana': { name: 'Botswana', code: 'BW', region: 'Southern Africa', projects: 3, impact: ['Sustainable agriculture'], focus: ['Sustainability'], engagement: 22000 },
  'Namibia': { name: 'Namibia', code: 'NA', region: 'Southern Africa', projects: 3, impact: ['Regional markets'], focus: ['Regional trade'], engagement: 20000 },
}

export default function InteractiveMap() {
  const svgRef = useRef<SVGSVGElement>(null)
  const gRef = useRef<SVGGElement>(null)
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
  const [hoveredName, setHoveredName] = useState<string | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!svgRef.current) return

    const width = 800
    const height = 800
    const svg = d3.select(svgRef.current)
    const g = d3.select(gRef.current)

    // Clear previous content
    g.selectAll('*').remove()

    // Map projection
    const projection = d3.geoMercator()
      .scale(width / 1.5)
      .center([15, 5])
      .translate([width / 2, height / 2])

    const pathGenerator = d3.geoPath().projection(projection)

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 12])
      .on('zoom', (event) => {
        g.attr('transform', event.transform)
      })

    svg.call(zoom)

    // Fetch GeoJSON
    d3.json('https://raw.githubusercontent.com/Anis-Koubaa/GeoJSON-Africa/master/Africa.geojson').then((data: any) => {
      const countries = g.selectAll('path')
        .data(data.features)
        .enter()
        .append('path')
        .attr('d', pathGenerator as any)
        .attr('class', (d: any) => {
          const name = d.properties.name
          return countriesData[name] ? 'country-active' : 'country-base'
        })
        .style('fill', (d: any) => {
          const name = d.properties.name
          return countriesData[name] ? 'rgba(6, 78, 59, 0.4)' : 'rgba(6, 78, 59, 0.05)'
        })
        .style('stroke', 'rgba(253, 252, 240, 0.2)')
        .style('stroke-width', '0.5px')
        .style('transition', 'fill 0.3s ease, stroke 0.3s ease, opacity 0.5s ease')
        .style('cursor', (d: any) => countriesData[d.properties.name] ? 'pointer' : 'default')
        .on('mouseenter', function(event, d: any) {
          const name = d.properties.name
          if (countriesData[name]) {
            setHoveredName(name)
            d3.select(this)
              .style('fill', 'rgba(180, 83, 9, 0.4)')
              .style('stroke', '#B45309')
              .style('stroke-width', '1px')
              .style('filter', 'drop-shadow(0 0 8px rgba(180, 83, 9, 0.3))')
          }
        })
        .on('mousemove', (event) => {
          setTooltipPos({ x: event.clientX, y: event.clientY })
        })
        .on('mouseleave', function(event, d: any) {
          setHoveredName(null)
          const name = d.properties.name
          if (!selectedCountry || selectedCountry.name !== name) {
             d3.select(this)
              .style('fill', countriesData[name] ? 'rgba(6, 78, 59, 0.4)' : 'rgba(6, 78, 59, 0.05)')
              .style('stroke', 'rgba(253, 252, 240, 0.2)')
              .style('stroke-width', '0.5px')
              .style('filter', 'none')
          }
        })
        .on('click', (event, d: any) => {
          const country = countriesData[d.properties.name]
          if (country) {
            handleCountryClick(d, country)
          } else {
            resetZoom()
          }
        })

      // Initial reveal
      countries.style('opacity', 0)
        .transition()
        .duration(1000)
        .delay((d, i) => i * 10)
        .style('opacity', 1)
    })

    const handleCountryClick = (d: any, country: Country) => {
      setSelectedCountry(country)
      
      const bounds = pathGenerator.bounds(d)
      const dx = bounds[1][0] - bounds[0][0]
      const dy = bounds[1][1] - bounds[0][1]
      const x = (bounds[0][0] + bounds[1][0]) / 2
      const y = (bounds[0][1] + bounds[1][1]) / 2
      const scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height)))
      const translate = [width / 2 - scale * x, height / 2 - scale * y]

      svg.transition()
        .duration(1200)
        .ease(d3.easeCubicInOut)
        .call(
          zoom.transform,
          d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale)
        )

      // Dim others
      g.selectAll('path')
        .transition()
        .duration(600)
        .style('opacity', (node: any) => node.properties.name === d.properties.name ? 1 : 0.2)
        .style('fill', (node: any) => node.properties.name === d.properties.name ? '#B45309' : 'rgba(6, 78, 59, 0.05)')
    }

    const resetZoom = () => {
      setSelectedCountry(null)
      svg.transition()
        .duration(1200)
        .ease(d3.easeCubicInOut)
        .call(zoom.transform, d3.zoomIdentity)

      g.selectAll('path')
        .transition()
        .duration(600)
        .style('opacity', 1)
        .style('fill', (d: any) => {
          const name = d.properties.name
          return countriesData[name] ? 'rgba(6, 78, 59, 0.4)' : 'rgba(6, 78, 59, 0.05)'
        })
        .style('stroke', 'rgba(253, 252, 240, 0.2)')
        .style('stroke-width', '0.5px')
        .style('filter', 'none')
    }

    // Attach reset to background click
    svg.on('click', (event) => {
      if (event.target === svgRef.current) resetZoom()
    })

    // Clean up
    return () => {
      svg.on('.zoom', null)
      svg.on('click', null)
    }
  }, [])

  const resetMap = () => {
    if (!svgRef.current) return
    const svg = d3.select(svgRef.current)
    const g = d3.select(gRef.current)
    setSelectedCountry(null)
    
    svg.transition()
      .duration(1200)
      .ease(d3.easeCubicInOut)
      .call(d3.zoom<SVGSVGElement, unknown>().transform, d3.zoomIdentity)

    g.selectAll('path')
      .transition()
      .duration(600)
      .style('opacity', 1)
      .style('fill', (d: any) => {
        const name = d.properties.name
        return countriesData[name] ? 'rgba(6, 78, 59, 0.4)' : 'rgba(6, 78, 59, 0.05)'
      })
      .style('stroke', 'rgba(253, 252, 240, 0.2)')
      .style('stroke-width', '0.5px')
      .style('filter', 'none')
  }

  return (
    <section className="w-full py-24 relative overflow-hidden bg-primary-ivory">
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilterMap">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterMap)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Map Section */}
          <div className="flex-1 w-full relative">
            <div className="mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <Globe size={14} />
                African Outreach
              </div>
              <h2 className="text-primary italic">Our Footprint Across the Continent</h2>
              <p className="text-xl text-foreground/60 font-light max-w-xl">
                Cinematic exploration of our deep-rooted agricultural initiatives. Click on a highlighted nation to fly into the details.
              </p>
            </div>

            <div className="relative aspect-square max-w-[800px] mx-auto overflow-visible">
              <svg 
                ref={svgRef}
                viewBox="0 0 800 800" 
                className="w-full h-full drop-shadow-[0_20px_50px_rgba(6,78,59,0.15)]"
              >
                <g ref={gRef}></g>
              </svg>

              {/* Reset Button */}
              <AnimatePresence>
                {selectedCountry && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={resetMap}
                    className="absolute bottom-4 left-4 bg-primary text-white px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-2 hover:bg-secondary transition-colors z-20"
                  >
                    <RefreshCcw size={18} />
                    Back to Continent
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredName && !selectedCountry && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: -40 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    style={{ 
                      position: 'fixed',
                      left: tooltipPos.x,
                      top: tooltipPos.y,
                      pointerEvents: 'none'
                    }}
                    className="bg-primary text-white px-4 py-2 rounded-xl shadow-2xl font-bold italic text-sm z-50 flex items-center gap-2"
                  >
                    <MapPin size={14} className="text-secondary" />
                    {hoveredName}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Immersive Details Panel */}
          <div className="w-full lg:w-[450px] min-h-[600px] perspective-1000">
            <AnimatePresence mode="wait">
              {selectedCountry ? (
                <motion.div
                  key={selectedCountry.code}
                  initial={{ opacity: 0, x: 50, rotateY: 10, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, rotateY: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: 50, rotateY: -10, filter: 'blur(10px)' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-panel rounded-[40px] p-10 h-full border-primary/5 shadow-2xl relative overflow-hidden flex flex-col z-10 bg-white/70 backdrop-blur-xl"
                >
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                  
                  <div className="flex justify-between items-start mb-12">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-[0.2em]">
                        <Globe size={14} />
                        {selectedCountry.region}
                      </div>
                      <h3 className="text-4xl text-primary italic leading-none">{selectedCountry.name}</h3>
                    </div>
                    <button 
                      onClick={resetMap}
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
                      className="group w-full flex justify-center items-center gap-3 py-5 bg-primary text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-[0.98]"
                    >
                      View Detailed Country Report
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-primary/10 rounded-[40px] bg-white/40 backdrop-blur-sm"
                >
                  <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mb-8 relative">
                    <Globe className="text-primary/10 animate-pulse" size={48} />
                    <div className="absolute inset-0 border-2 border-primary/5 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <h4 className="text-2xl text-primary italic mb-4">Select a Nation to Explore</h4>
                  <p className="text-base text-foreground/40 max-w-[280px] font-light leading-relaxed">
                    Cinematic mapping of our pan-African agricultural initiatives. Click on a highlighted country to view specific project data.
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
