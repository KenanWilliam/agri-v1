'use client';

import React, { useState } from 'react';
import { MapProvider } from './map-context';
import { MapControls } from './map-controls';
import { MapSearch } from './map-search';
import { MapMarker } from './map-marker';
import { MapPopup } from './map-popup';
import { MapHighlightedCountries } from './map-highlighted-countries';
import { MapAutoCenter } from './map-auto-center';
import { MapActiveProjectFlyTo } from './map-active-project-fly-to';
import { Building, Store, Coffee, Car, AlertCircle, MapPin, Navigation, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { CountryProject } from '../interactive-map';

interface SelectedLocation {
  lng: number;
  lat: number;
  name: string;
  address?: string;
  categories?: string[];
  operationalStatus?: string;
}

const getCategoryIcon = (categories?: string[]) => {
  if (!categories || categories.length === 0) return <MapPin className="w-5 h-5 text-primary" />;
  const cat = categories[0].toLowerCase();
  if (cat.includes('food') || cat.includes('restaurant') || cat.includes('cafe')) return <Coffee className="w-5 h-5 text-orange-500" />;
  if (cat.includes('store') || cat.includes('shop')) return <Store className="w-5 h-5 text-blue-500" />;
  if (cat.includes('car') || cat.includes('auto') || cat.includes('gas')) return <Car className="w-5 h-5 text-red-500" />;
  if (cat.includes('office') || cat.includes('business')) return <Building className="w-5 h-5 text-purple-500" />;
  return <MapPin className="w-5 h-5 text-primary" />;
};

interface InteractiveMapboxProps {
  onCountryClick?: (countryName: string) => void;
  setHoveredName?: (name: string | null) => void;
  setTooltipPos?: (pos: { x: number; y: number }) => void;
  selectedCountryName?: string;
  activeProjects?: CountryProject[];
  selectedProjectIndex?: number | null;
  setSelectedProjectIndex?: (index: number | null) => void;
  cityCoordinates?: Record<string, [number, number]>;
  onMapReady?: (map: any) => void;
}

export const InteractiveMapbox: React.FC<InteractiveMapboxProps> = ({
  onCountryClick,
  setHoveredName,
  setTooltipPos,
  selectedCountryName,
  activeProjects = [],
  selectedProjectIndex = null,
  setSelectedProjectIndex,
  cityCoordinates = {},
  onMapReady
}) => {
  const [selectedLocation, setSelectedLocation] = useState<SelectedLocation | null>(null);

  const handleDirections = () => {
    if (selectedLocation) {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.lat},${selectedLocation.lng}`, '_blank');
    }
  };

  return (
    <div className="w-full h-full relative">
      <MapProvider onMapReady={onMapReady}>
        <MapAutoCenter selectedCountryName={selectedCountryName} />
        <MapActiveProjectFlyTo 
          selectedCountryName={selectedCountryName}
          activeProjects={activeProjects}
          selectedProjectIndex={selectedProjectIndex}
          cityCoordinates={cityCoordinates}
        />
        <MapControls />
        
        <MapSearch onLocationSelect={setSelectedLocation} />
        
        <MapHighlightedCountries 
          onCountryClick={onCountryClick}
          setHoveredName={setHoveredName}
          setTooltipPos={setTooltipPos}
          selectedCountryName={selectedCountryName}
        />

        {/* Render Project Markers when a country is selected */}
        {selectedCountryName && activeProjects.map((project, index) => {
          const cityKey = project.location.split(' / ')[0];
          const coords = cityCoordinates[cityKey];
          const isActive = index === selectedProjectIndex;
          
          if (!coords) return null;

          return (
            <MapMarker key={index} lng={coords[0]} lat={coords[1]}>
              <div 
                className="relative group cursor-pointer flex flex-col items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  if (setSelectedProjectIndex) setSelectedProjectIndex(index);
                }}
              >
                {/* Custom Elegant Ring Marker */}
                <div className={`relative flex items-center justify-center w-6 h-6 transition-transform duration-500 ease-out ${isActive ? 'scale-110' : 'hover:scale-110'}`}>
                  {/* Outer pulse ring for active state */}
                  {isActive && <div className="absolute inset-0 rounded-full border border-accent-gold animate-ping opacity-20" />}
                  {/* Outer glass ring */}
                  <div className={`absolute inset-0 rounded-full border backdrop-blur-sm transition-colors duration-300 ${isActive ? 'border-accent-gold/40 bg-accent-gold/10' : 'border-white/30 bg-white/10 group-hover:border-white/60'}`} />
                  {/* Inner solid core */}
                  <div className={`w-2 h-2 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-colors duration-300 ${isActive ? 'bg-accent-gold' : 'bg-white group-hover:bg-accent-gold'}`} />
                </div>
                
                {/* Sophisticated Label */}
                <div className={`absolute top-full mt-2 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full backdrop-blur-md border transition-all duration-400 ease-out ${isActive ? 'bg-white/90 border-white text-deep-forest shadow-lg opacity-100 transform translate-y-0' : 'bg-deep-forest/40 border-white/10 text-white shadow-md opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                  {cityKey}
                </div>
              </div>
            </MapMarker>
          );
        })}

        {/* Global Search Location Marker */}
        {selectedLocation && (
          <>
            <MapMarker lng={selectedLocation.lng} lat={selectedLocation.lat}>
              <div className="bg-background rounded-full p-2 shadow-lg border border-border animate-bounce">
                {getCategoryIcon(selectedLocation.categories)}
              </div>
            </MapMarker>

            <MapPopup 
              lng={selectedLocation.lng} 
              lat={selectedLocation.lat} 
              options={{ offset: 25, closeButton: false, maxWidth: '320px' }}
            >
              <div className="flex flex-col gap-3 p-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-base leading-tight">{selectedLocation.name}</h3>
                  <button 
                    onClick={() => setSelectedLocation(null)}
                    className="text-muted-foreground hover:text-foreground shrink-0"
                  >
                    ✕
                  </button>
                </div>
                
                {selectedLocation.address && (
                  <p className="text-sm text-muted-foreground">{selectedLocation.address}</p>
                )}

                <div className="flex flex-wrap gap-2">
                  {selectedLocation.categories?.slice(0, 3).map(cat => (
                    <Badge key={cat} variant="secondary" className="text-[10px] flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {cat}
                    </Badge>
                  ))}
                </div>

                {selectedLocation.operationalStatus && (
                  <div className="flex items-center gap-2 text-sm">
                    <AlertCircle className={`w-4 h-4 ${selectedLocation.operationalStatus.toLowerCase() === 'open' ? 'text-green-500' : 'text-yellow-500'}`} />
                    <span className="capitalize">{selectedLocation.operationalStatus}</span>
                  </div>
                )}

                <Button className="w-full mt-2" size="sm" onClick={handleDirections}>
                  <Navigation className="w-4 h-4 mr-2" />
                  Directions
                </Button>
              </div>
            </MapPopup>
          </>
        )}
      </MapProvider>
    </div>
  );
};
