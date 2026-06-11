'use client';

import React, { useEffect, useRef } from 'react';
import { useMap } from './map-context';
import mapboxgl from 'mapbox-gl';

export interface MapAutoCenterProps {
  selectedCountryName?: string;
}

export const MapAutoCenter: React.FC<MapAutoCenterProps> = ({ selectedCountryName }) => {
  const { map } = useMap();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!map) return;

    const resetCenter = () => {
      // Don't auto-center if a country is currently selected/zoomed in
      if (selectedCountryName) return;
      
      map.flyTo({
        center: [20, 0],
        zoom: 2.8,
        padding: { top: 0, bottom: 0, left: 0, right: 0 },
        essential: true,
        duration: 2000
      });
    };

    const handleInteraction = (e: any) => {
      // Only reset the timer if the movement was caused by the user (has an originalEvent)
      if (e && e.originalEvent) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(resetCenter, 3000); // 3 seconds of inactivity
      }
    };

    const stopTimer = (e: any) => {
      if (e && e.originalEvent) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
    };

    // Listen for move and zoom events
    map.on('movestart', stopTimer);
    map.on('moveend', handleInteraction);
    map.on('zoomstart', stopTimer);
    map.on('zoomend', handleInteraction);

    // Set an initial timer so it centers if the user loads the page and does nothing
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(resetCenter, 3000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      map.off('movestart', stopTimer);
      map.off('moveend', handleInteraction);
      map.off('zoomstart', stopTimer);
      map.off('zoomend', handleInteraction);
    };
  }, [map, selectedCountryName]);

  return null;
};