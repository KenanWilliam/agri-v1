'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Ensure the token is set (it should be in .env.local)
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

interface MapContextType {
  map: mapboxgl.Map | null;
  mapContainer: React.RefObject<HTMLDivElement | null>;
  isLoaded: boolean;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

export const useMap = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error('useMap must be used within a MapProvider');
  }
  return context;
};

interface MapProviderProps {
  children: React.ReactNode;
  initialOptions?: Omit<mapboxgl.MapboxOptions, 'container'>;
}

export const MapProvider: React.FC<MapProviderProps> = ({ children, initialOptions }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current) return;

    if (!process.env.NEXT_PUBLIC_MAPBOX_TOKEN) {
      console.error('NEXT_PUBLIC_MAPBOX_TOKEN is missing!');
      return;
    }

    const defaultOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
      style: 'mapbox://styles/mapbox/light-v11',
      center: [20, 0], // Center approximately on Africa
      zoom: 2.8,       // Zoom to view the continent
      projection: { name: 'globe' }, // Ensure globe projection is used
    };

    const mapInstance = new mapboxgl.Map({
      container: mapContainer.current,
      ...defaultOptions,
      ...initialOptions,
    });

    mapInstance.on('style.load', () => {
      // Enable atmosphere styling (fog) for a realistic globe effect
      mapInstance.setFog({});
    });

    mapInstance.on('load', () => {
      setMap(mapInstance);
      setIsLoaded(true);
    });

    return () => {
      mapInstance.remove();
      setMap(null);
      setIsLoaded(false);
    };
  }, [initialOptions]);

  return (
    <MapContext.Provider value={{ map, mapContainer, isLoaded }}>
      <div className="relative w-full h-full">
        <div ref={mapContainer} className="absolute inset-0 w-full h-full" />
        {isLoaded && children}
      </div>
    </MapContext.Provider>
  );
};
