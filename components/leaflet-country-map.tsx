'use client'

import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, GeoJSON, useMap, CircleMarker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

interface CountryMapProps {
  africaGeoJson: any
  selectedCountry: any
  activeProjects: any[]
  selectedProjectIndex: number
  setSelectedProjectIndex: (index: number) => void
  cityCoordinates: Record<string, [number, number]>
}

function CountryMapController({ feature, activeProjects, selectedProjectIndex, cityCoordinates }: any) {
  const map = useMap()
  const hasFittedBounds = useRef(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const observer = new ResizeObserver(() => {
      map.invalidateSize()
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        if (feature) {
          const geoJsonLayer = L.geoJSON(feature)
          const bounds = geoJsonLayer.getBounds()
          if (bounds.isValid()) {
            map.fitBounds(bounds, { padding: [40, 40] })
          }
        }
      }, 150)
    })
    
    observer.observe(map.getContainer())
    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [map, feature])

  useEffect(() => {
    // When a project is selected via sidebar, pan/zoom to it
    const activeProject = activeProjects[selectedProjectIndex]
    if (activeProject) {
      const cityKey = activeProject.location.split(' / ')[0]
      const coords = cityCoordinates[cityKey]
      
      if (coords) {
        // We pan to the city coords, but don't zoom in *too* much 
        // to still show the country context.
        map.flyTo(coords, map.getZoom() > 6 ? map.getZoom() : 6, {
          duration: 1.2
        })
      }
    }
  }, [selectedProjectIndex, activeProjects, cityCoordinates, map])

  return null
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

export default function LeafletCountryMap({
  africaGeoJson,
  selectedCountry,
  activeProjects,
  selectedProjectIndex,
  setSelectedProjectIndex,
  cityCoordinates
}: CountryMapProps) {
  
  if (!selectedCountry) return null

  const feature = (africaGeoJson?.features || []).find(
    (item: any) => item.properties.name === (selectedCountry.geoName ?? selectedCountry.name)
  )

  const style = {
    fillColor: regionFill(selectedCountry.region),
    weight: 2,
    opacity: 1,
    color: '#c8a44a',
    fillOpacity: 0.2
  }

  return (
    <MapContainer 
      center={[0, 20]} // Default center to prevent runtime errors before fitBounds
      zoom={4} 
      style={{ height: '100%', width: '100%', borderRadius: 'inherit' }}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      
      <CountryMapController 
        feature={feature} 
        activeProjects={activeProjects} 
        selectedProjectIndex={selectedProjectIndex}
        cityCoordinates={cityCoordinates}
      />
      
      {feature && (
        <GeoJSON 
          data={feature} 
          style={style} 
        />
      )}

      {activeProjects.map((project, index) => {
        const cityKey = project.location.split(' / ')[0]
        const coords = cityCoordinates[cityKey]
        const isActive = index === selectedProjectIndex
        
        // If we don't have coords for a dummy project, we skip or generate
        if (!coords) return null

        return (
          <CircleMarker
            key={index}
            center={coords}
            pathOptions={{ 
              color: isActive ? '#fff7e6' : 'rgba(255,255,255,0.9)', 
              fillColor: isActive ? '#c8a44a' : '#0f3d31', 
              fillOpacity: 1,
              weight: 2
            }}
            radius={isActive ? 8 : 5}
            eventHandlers={{
              click: () => setSelectedProjectIndex(index)
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
