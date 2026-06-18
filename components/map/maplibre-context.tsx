'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface MaplibreContextType {
  map: maplibregl.Map | null;
  mapContainer: React.RefObject<HTMLDivElement | null>;
  isLoaded: boolean;
}

const MaplibreContext = createContext<MaplibreContextType | undefined>(undefined);

export const useMaplibre = () => {
  const context = useContext(MaplibreContext);
  if (!context) {
    throw new Error('useMaplibre must be used within a MaplibreProvider');
  }
  return context;
};

interface MaplibreProviderProps {
  children: React.ReactNode;
  initialOptions?: Omit<maplibregl.MapOptions, 'container'>;
  onMapReady?: (map: maplibregl.Map) => void;
}

export const MaplibreProvider: React.FC<MaplibreProviderProps> = ({ children, initialOptions, onMapReady }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<maplibregl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current) return;

    const defaultOptions: Omit<maplibregl.MapOptions, 'container'> = {
      style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
      center: [20, 0],
      zoom: 2.8,
      scrollZoom: false,
    };

    const mapInstance = new maplibregl.Map({
      container: mapContainer.current,
      ...defaultOptions,
      ...initialOptions,
    });

    mapInstance.on('load', () => {
      setMap(mapInstance);
      setIsLoaded(true);
      if (onMapReady) onMapReady(mapInstance);
    });

    return () => {
      mapInstance.remove();
      setMap(null);
      setIsLoaded(false);
    };
  }, [initialOptions, onMapReady]);

  return (
    <MaplibreContext.Provider value={{ map, mapContainer, isLoaded }}>
      <div className="relative w-full h-full">
        <div ref={mapContainer} className="absolute inset-0 w-full h-full" />
        {isLoaded && children}
      </div>
    </MaplibreContext.Provider>
  );
};
