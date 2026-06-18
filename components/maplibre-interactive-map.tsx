'use client'

import React, { useCallback, useRef, useState } from 'react'
import { MaplibreProvider } from './map/maplibre-context'
import { MaplibreHighlightedCountries } from './map/maplibre-highlighted-countries'

interface MaplibreInteractiveMapboxProps {
  onMapReady?: (map: any) => void;
  onCountryClick?: (countryName: string) => void;
  setHoveredName?: (name: string | null) => void;
  setTooltipPos?: (pos: { x: number; y: number }) => void;
  selectedCountryName?: string;
}

export const MaplibreInteractiveMapbox: React.FC<MaplibreInteractiveMapboxProps> = ({
  onMapReady,
  onCountryClick,
  setHoveredName,
  setTooltipPos,
  selectedCountryName
}) => {
  return (
    <div className="w-full h-full relative">
      <MaplibreProvider onMapReady={onMapReady}>
        <MaplibreHighlightedCountries 
          onCountryClick={onCountryClick}
          setHoveredName={setHoveredName}
          setTooltipPos={setTooltipPos}
          selectedCountryName={selectedCountryName}
        />
      </MaplibreProvider>
    </div>
  )
}
