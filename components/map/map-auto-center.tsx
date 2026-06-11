'use client';

import React, { useEffect, useRef } from 'react';
import { useMap } from './map-context';

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
        essential: true,
        duration: 2000
      });
    };

    const handleInteraction = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(resetCenter, 3000); // 3 seconds of inactivity
    };

    const stopTimer = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    // Listen for drag, zoom, and pitch events to reset the timer
    map.on('dragstart', stopTimer);
    map.on('dragend', handleInteraction);
    map.on('zoomstart', stopTimer);
    map.on('zoomend', handleInteraction);
    map.on('pitchstart', stopTimer);
    map.on('pitchend', handleInteraction);

    // Initial timer
    handleInteraction();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      map.off('dragstart', stopTimer);
      map.off('dragend', handleInteraction);
      map.off('zoomstart', stopTimer);
      map.off('zoomend', handleInteraction);
      map.off('pitchstart', stopTimer);
      map.off('pitchend', handleInteraction);
    };
  }, [map, selectedCountryName]);

  return null;
};