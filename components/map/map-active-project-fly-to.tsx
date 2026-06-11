'use client';

import React, { useEffect } from 'react';
import { useMap } from './map-context';
import type { CountryProject } from '../interactive-map';

export interface MapActiveProjectFlyToProps {
  selectedCountryName?: string;
  activeProjects: CountryProject[];
  selectedProjectIndex: number;
  cityCoordinates: Record<string, [number, number]>;
}

export const MapActiveProjectFlyTo: React.FC<MapActiveProjectFlyToProps> = ({
  selectedCountryName,
  activeProjects,
  selectedProjectIndex,
  cityCoordinates
}) => {
  const { map } = useMap();

  useEffect(() => {
    if (map && selectedCountryName && activeProjects.length > 0) {
      const activeProject = activeProjects[selectedProjectIndex];
      if (activeProject) {
        const cityKey = activeProject.location.split(' / ')[0];
        const coords = cityCoordinates[cityKey];
        
        if (coords) {
          // Add padding for the right dossier
          map.flyTo({
            center: [coords[0], coords[1]],
            zoom: Math.max(map.getZoom(), 6),
            padding: { right: 420 },
            duration: 1200,
            essential: true
          });
        }
      }
    }
  }, [map, selectedProjectIndex, activeProjects, cityCoordinates, selectedCountryName]);

  return null;
};