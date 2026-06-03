'use client'

import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, GeoJSON, useMap, CircleMarker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

interface UnifiedMapProps {
  africaGeoJson: any
  countriesByGeoName: any
  selectedCountry: any
  hoveredName: string | null
  activeProjects: any[]
  selectedProjectIndex: number
  setSelectedProjectIndex: (index: number) => void
  onCountryClick: (country: any, e: any) => void
  setHoveredName: (name: string | null) => void
  setTooltipPos: (pos: { x: number; y: number }) => void
  cityCoordinates: Record<string, [number, number]>
}

const regionFill = (region: string) => {
  switch (region) {
    case 'West Africa':
      return '#b45309'
    case 'Central Africa':
      return '#166534'
    case 'Southern Africa':
      return '#16a34a'
    default:
      return '#0f3d31'
  }
}

function MapController({ selectedCountry, geoJsonLayerRef, africaGeoJson, activeProjects, selectedProjectIndex, cityCoordinates }: any) {
  const map = useMap()

  // Handle container resize
  useEffect(() => {
    if (!map) return
    
    let timeout: NodeJS.Timeout
    const container = map.getContainer()
    if (!container) return
    
    const observer = new ResizeObserver(() => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        if (map && map.getContainer()) {
          map.invalidateSize()
        }
      }, 100) // Increased debounce time, removed animate: true
    })
    
    observer.observe(container)
    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [map])

  // Programmatic Camera Paths
  const hasFittedBounds = useRef(false)
  useEffect(() => {
    if (!map || !africaGeoJson || !geoJsonLayerRef.current) return

    if (selectedCountry) {
      // Find the specific layer for the selected country
      const layers = geoJsonLayerRef.current.getLayers()
      const layer = layers.find((l: any) => l.feature.properties.name === (selectedCountry.geoName ?? selectedCountry.name))
      
      if (layer && typeof layer.getBounds === 'function') {
        const bounds = layer.getBounds()
        if (bounds.isValid()) {
          map.fitBounds(bounds, { padding: [50, 50], animate: true, duration: 1 })
          hasFittedBounds.current = false // Reset for next time we go to continent view
        }
      }
    } else if (!hasFittedBounds.current) {
      // Fly back to continent bounds
      const layer = L.geoJSON(africaGeoJson)
      const bounds = layer.getBounds()
      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [20, 20], animate: true, duration: 1 })
        hasFittedBounds.current = true
      }
    }
  }, [selectedCountry, map, africaGeoJson, geoJsonLayerRef])

  // Pan to selected project city when country is selected
  useEffect(() => {
    if (selectedCountry && activeProjects.length > 0) {
      const activeProject = activeProjects[selectedProjectIndex]
      if (activeProject) {
        const cityKey = activeProject.location.split(' / ')[0]
        const coords = cityCoordinates[cityKey]
        
        if (coords) {
          map.flyTo([coords[1], coords[0]], map.getZoom() > 6 ? map.getZoom() : 6, {
            duration: 1.2
          })
        }
      }
    }
  }, [selectedProjectIndex, activeProjects, cityCoordinates, map, selectedCountry])

  return null
}

export default function LeafletUnifiedMap({
  africaGeoJson,
  countriesByGeoName,
  selectedCountry,
  hoveredName,
  activeProjects,
  selectedProjectIndex,
  setSelectedProjectIndex,
  onCountryClick,
  setHoveredName,
  setTooltipPos,
  cityCoordinates
}: UnifiedMapProps) {
  const geoJsonLayerRef = useRef<L.GeoJSON>(null)

  // Fix Broken Leaflet Hovers: deterministic style recalculation
  useEffect(() => {
    if (geoJsonLayerRef.current) {
      geoJsonLayerRef.current.setStyle((feature: any) => {
        const countryData = countriesByGeoName[feature?.properties.name]
        
        if (!countryData) {
          return {
            fillColor: '#0f3d31',
            weight: 1,
            opacity: 0.3,
            color: 'white',
            fillOpacity: 0.1
          }
        }
        
        const isSelected = selectedCountry && countryData.name === selectedCountry.name
        const isHovered = hoveredName === countryData.name

        // When a country is selected, dim others and highlight the selected one
        if (selectedCountry) {
           return {
             fillColor: isSelected ? regionFill(countryData.region) : '#0f3d31',
             weight: isSelected ? 2 : 1,
             opacity: 1,
             color: isSelected ? '#c8a44a' : 'white',
             fillOpacity: isSelected ? 0.2 : 0.1
           }
        }

        // Continent view
        return {
          fillColor: regionFill(countryData.region),
          weight: isHovered ? 2 : 1,
          opacity: 1,
          color: isHovered ? '#B45309' : 'white',
          fillOpacity: isHovered ? 0.7 : 0.4
        }
      })
    }
  }, [selectedCountry, hoveredName, countriesByGeoName])

  const onEachFeature = (feature: any, layer: L.Layer) => {
    const countryData = countriesByGeoName[feature.properties.name]
    
    if (countryData) {
      layer.on({
        mouseover: (e) => {
          if (!selectedCountry) {
            setHoveredName(countryData.name)
          }
          setTooltipPos({ x: e.originalEvent.clientX, y: e.originalEvent.clientY })
        },
        mousemove: (e) => {
          setTooltipPos({ x: e.originalEvent.clientX, y: e.originalEvent.clientY })
        },
        mouseout: () => {
          if (!selectedCountry) {
            setHoveredName(null)
          }
        },
        click: (e) => {
          // Only process clicks if not already selected, or if clicking a different country
          if (!selectedCountry || selectedCountry.name !== countryData.name) {
             onCountryClick(countryData, e.originalEvent)
          }
        }
      })
    }
  }

  // Define initial style to prevent flash of unstyled content before useEffect kicks in
  const getInitialStyle = (feature: any) => {
    const countryData = countriesByGeoName[feature?.properties.name]
    if (!countryData) {
      return { fillColor: '#0f3d31', weight: 1, opacity: 0.3, color: 'white', fillOpacity: 0.1 }
    }
    const isSelected = selectedCountry && countryData.name === selectedCountry.name
    if (selectedCountry) {
      return {
        fillColor: isSelected ? regionFill(countryData.region) : '#0f3d31',
        weight: isSelected ? 2 : 1,
        opacity: 1,
        color: isSelected ? '#c8a44a' : 'white',
        fillOpacity: isSelected ? 0.2 : 0.1
      }
    }
    return {
      fillColor: regionFill(countryData.region),
      weight: 1,
      opacity: 1,
      color: 'white',
      fillOpacity: 0.4
    }
  }

  return (
    <MapContainer 
      center={[2.5, 18]} 
      zoom={3.5} 
      minZoom={2}
      style={{ height: '100%', width: '100%', background: 'transparent' }}
      zoomControl={true}
      attributionControl={false}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      dragging={true}
      zoomSnap={0.1}
      wheelPxPerZoomLevel={120}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      
      <MapController 
        selectedCountry={selectedCountry} 
        geoJsonLayerRef={geoJsonLayerRef} 
        africaGeoJson={africaGeoJson} 
        activeProjects={activeProjects}
        selectedProjectIndex={selectedProjectIndex}
        cityCoordinates={cityCoordinates}
      />
      
      <GeoJSON 
        data={africaGeoJson} 
        style={getInitialStyle} 
        onEachFeature={onEachFeature}
        ref={geoJsonLayerRef}
      />

      {/* City Coordinates / Markers - only display when a country is selected */}
      {selectedCountry && activeProjects.map((project, index) => {
        const cityKey = project.location.split(' / ')[0]
        const coords = cityCoordinates[cityKey]
        const isActive = index === selectedProjectIndex
        
        if (!coords) return null

        return (
          <CircleMarker
            key={index}
            center={[coords[1], coords[0]]}
            pathOptions={{ 
              color: isActive ? '#fff7e6' : 'rgba(255,255,255,0.9)', 
              fillColor: isActive ? '#c8a44a' : '#0f3d31', 
              fillOpacity: 1,
              weight: 2
            }}
            radius={isActive ? 8 : 5}
            eventHandlers={{
              click: (e) => {
                L.DomEvent.stopPropagation(e)
                setSelectedProjectIndex(index)
              }
            }}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={isActive}>
              <div style={{ fontWeight: 800, color: isActive ? '#c8a44a' : '#0f3d31', fontSize: '12px' }}>
                {cityKey}
              </div>
            </Tooltip>
          </CircleMarker>
        )
      })}
    </MapContainer>
  )
}
