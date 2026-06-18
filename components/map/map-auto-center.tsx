'use client';

import React, { useEffect, useRef } from 'react';
import { useMap } from './map-context';

export interface MapAutoCenterProps {
  selectedCountryName?: string;
}

export const MapAutoCenter: React.FC<MapAutoCenterProps> = ({ selectedCountryName }) => {
  const { map } = useMap();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!map) return;

    const resetCenter = (immediate = false) => {
      // Don't auto-center if a country is currently selected/zoomed in
      if (selectedCountryName) return;
      
      const smoothEasing = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
      map.fitBounds([[-20, -35], [55, 38]], {
        padding: isMobile 
          ? { top: 20, bottom: 20, left: 20, right: 20 }
          : { top: 60, bottom: 60, left: 60, right: 60 },
        pitch: 0,
        essential: true,
        duration: immediate ? 1100 : 2200,
        easing: smoothEasing
      });
    };

    const handleInteraction = (e: any) => {
      // If user drags or zooms, we restart the inactivity timer to return back
      if (e && e.originalEvent) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => resetCenter(false), 2000); // 2 seconds of inactivity
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

    if (isFirstRender.current) {
      isFirstRender.current = false;
      // On mount, position the map, but don't force a flying animation unless needed
      timeoutRef.current = setTimeout(() => resetCenter(false), 2000);
    } else if (!selectedCountryName) {
      // User closed the dossier panel -> refocus IMMEDIATELY!
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      resetCenter(true);
    }

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