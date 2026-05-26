'use client'

import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

interface ContinentMapProps {
  africaGeoJson: any
  countriesByGeoName: any
  selectedCountry: any
  onCountryClick: (country: any, e: any) => void
  setHoveredName: (name: string | null) => void
  setTooltipPos: (pos: { x: number; y: number }) => void
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

function MapController({ selectedCountry, geoJsonLayerRef, africaGeoJson }: any) {
  const map = useMap()

  // Handle container resize
  useEffect(() => {
    let timeout: NodeJS.Timeout
    const observer = new ResizeObserver(() => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        map.invalidateSize()
      }, 150)
    })
    
    observer.observe(map.getContainer())
    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [map])

  // Handle fitting bounds to Africa on load or when returning to continent view
  useEffect(() => {
    if (africaGeoJson && !selectedCountry) {
      const layer = L.geoJSON(africaGeoJson)
      const bounds = layer.getBounds()
      if (bounds.isValid()) {
        // Use a small uniform padding so the continent maximizes vertical space
        // and touches the nav and bottom of the page.
        map.fitBounds(bounds, { padding: [20, 20] })
      }
    }
  }, [map, africaGeoJson, selectedCountry])

  return null
}

export default function LeafletContinentMap({
  africaGeoJson,
  countriesByGeoName,
  selectedCountry,
  onCountryClick,
  setHoveredName,
  setTooltipPos
}: ContinentMapProps) {
  const geoJsonLayerRef = useRef<L.GeoJSON>(null)

  const onEachFeature = (feature: any, layer: L.Layer) => {
    const countryData = countriesByGeoName[feature.properties.name]
    
    if (countryData) {
      layer.on({
        mouseover: (e) => {
          setHoveredName(countryData.name)
          setTooltipPos({ x: e.originalEvent.clientX, y: e.originalEvent.clientY })
          
          if (!selectedCountry) {
            const l = e.target
            l.setStyle({
              fillOpacity: 0.7,
              color: '#B45309',
              weight: 2
            })
          }
        },
        mousemove: (e) => {
          setTooltipPos({ x: e.originalEvent.clientX, y: e.originalEvent.clientY })
        },
        mouseout: (e) => {
          setHoveredName(null)
          if (geoJsonLayerRef.current) {
            geoJsonLayerRef.current.resetStyle(e.target)
          }
        },
        click: (e) => {
          onCountryClick(countryData, e.originalEvent)
        }
      })
    }
  }

  const style = (feature: any) => {
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

    return {
      fillColor: regionFill(countryData.region),
      weight: isSelected ? 2 : 1,
      opacity: 1,
      color: isSelected ? '#fff1c6' : 'white',
      fillOpacity: isSelected ? 0.9 : 0.4
    }
  }

  return (
    <MapContainer 
      center={[2.5, 18]} 
      zoom={3.5} 
      minZoom={2}
      style={{ height: '100%', width: '100%', background: 'transparent' }}
      zoomControl={false}
      attributionControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      dragging={false}
      zoomSnap={0.1}
      wheelPxPerZoomLevel={120}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <MapController selectedCountry={selectedCountry} geoJsonLayerRef={geoJsonLayerRef} africaGeoJson={africaGeoJson} />
      <GeoJSON 
        data={africaGeoJson} 
        style={style} 
        onEachFeature={onEachFeature}
        ref={geoJsonLayerRef}
      />
    </MapContainer>
  )
}
