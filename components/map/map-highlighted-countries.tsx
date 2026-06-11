'use client';

import React, { useEffect } from 'react';
import { useMap } from './map-context';
import africaGeoJson from '@/africa.json';

export interface MapHighlightedCountriesProps {
  onCountryClick?: (countryName: string) => void;
  setHoveredName?: (name: string | null) => void;
  setTooltipPos?: (pos: { x: number; y: number }) => void;
  selectedCountryName?: string;
}

export const MapHighlightedCountries: React.FC<MapHighlightedCountriesProps> = ({
  onCountryClick,
  setHoveredName,
  setTooltipPos,
  selectedCountryName
}) => {
  const { map } = useMap();

  useEffect(() => {
    if (!map) return;

    // We map ISO A2 to the region color fill
    const regionColors: Record<string, string> = {
      'KE': 'rgba(15, 61, 49, 0.7)', // East Africa (base dark forest)
      'UG': 'rgba(15, 61, 49, 0.7)', 
      'TZ': 'rgba(15, 61, 49, 0.7)',
      'RW': 'rgba(15, 61, 49, 0.7)',
      'ET': 'rgba(15, 61, 49, 0.7)',
      'SS': 'rgba(15, 61, 49, 0.7)',
      'BI': 'rgba(15, 61, 49, 0.7)',
      
      'MW': 'rgba(22, 163, 74, 0.7)', // Southern Africa (bright green)
      'ZM': 'rgba(22, 163, 74, 0.7)',
      'ZW': 'rgba(22, 163, 74, 0.7)',
      'MZ': 'rgba(22, 163, 74, 0.7)',
      'ZA': 'rgba(22, 163, 74, 0.7)',
      
      'SN': 'rgba(180, 83, 9, 0.7)',  // West Africa (burnt orange)
      'BF': 'rgba(180, 83, 9, 0.7)',
      'ML': 'rgba(180, 83, 9, 0.7)',
      'GH': 'rgba(180, 83, 9, 0.7)',
      'NG': 'rgba(180, 83, 9, 0.7)',
      'LR': 'rgba(180, 83, 9, 0.7)',
      'SL': 'rgba(180, 83, 9, 0.7)',
      
      'CM': 'rgba(22, 101, 52, 0.7)', // Central Africa (dark green)
      'CD': 'rgba(22, 101, 52, 0.7)'
    };

    // Helper to get the correct color expression based on selection state
    const getPaintExpression = () => {
      const matchExpr: any[] = ['match', ['get', 'iso_a2']];
      
      for (const [code, color] of Object.entries(regionColors)) {
        if (selectedCountryName) {
          // If a country is selected, we use a case expression for EACH country code
          // If it matches the selected name, use full color, else dim it
          matchExpr.push(
            code,
            ['case',
              ['==', ['get', 'name'], selectedCountryName],
              color, // Highlighted
              'rgba(15, 61, 49, 0.15)' // Dimmed
            ]
          );
        } else {
          // No selection: standard regional colors
          matchExpr.push(code, color);
        }
      }
      
      matchExpr.push('rgba(0, 0, 0, 0)'); // Fallback transparent
      return matchExpr;
    };

    const addLayers = () => {
      if (!map.getSource('africa-countries')) {
        map.addSource('africa-countries', {
          type: 'geojson',
          data: africaGeoJson as any
        });
      }

      if (!map.getLayer('africa-countries-fill')) {
        map.addLayer({
          id: 'africa-countries-fill',
          type: 'fill',
          source: 'africa-countries',
          paint: {
            'fill-color': getPaintExpression() as any,
            'fill-opacity': 0.8
          }
        }, 'waterway-label'); 
      } else {
        // If layer exists (e.g. from style reload), just update the paint property
        map.setPaintProperty('africa-countries-fill', 'fill-color', getPaintExpression() as any);
      }

      if (!map.getLayer('africa-countries-line')) {
        map.addLayer({
          id: 'africa-countries-line',
          type: 'line',
          source: 'africa-countries',
          paint: {
            'line-color': '#ffffff',
            'line-width': 1,
            'line-opacity': selectedCountryName ? 0.2 : 0.5 // Dim borders when selected
          }
        });
      } else {
        map.setPaintProperty('africa-countries-line', 'line-opacity', selectedCountryName ? 0.2 : 0.5);
      }
    };

    if (map.isStyleLoaded()) {
      addLayers();
    } else {
      map.once('style.load', addLayers);
    }
    
    // We bind to style.load so that when the MapStyleManager swaps Satellite <-> Light, 
    // it automatically re-adds the missing vectors without throwing errors.
    map.on('style.load', addLayers);

    // Event Listeners (bind only once)
    const handleMouseMove = (e: any) => {
      if (e.features && e.features.length > 0) {
        const feature = e.features[0];
        const isoA2 = feature.properties?.iso_a2;
        
        if (regionColors[isoA2]) {
          map.getCanvas().style.cursor = 'pointer';
          if (setHoveredName) {
            setHoveredName(feature.properties?.name || null);
          }
          if (setTooltipPos && e.originalEvent) {
            setTooltipPos({ x: e.originalEvent.clientX + 15, y: e.originalEvent.clientY + 15 });
          }
        } else {
          map.getCanvas().style.cursor = '';
          if (setHoveredName) setHoveredName(null);
        }
      }
    };

    const handleMouseLeave = () => {
      map.getCanvas().style.cursor = '';
      if (setHoveredName) setHoveredName(null);
    };

    const handleClick = (e: any) => {
      if (e.features && e.features.length > 0) {
        const feature = e.features[0];
        const isoA2 = feature.properties?.iso_a2;
        if (regionColors[isoA2] && onCountryClick) {
          
          let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
          const update = (coord: number[]) => {
            if (coord[0] < minX) minX = coord[0];
            if (coord[0] > maxX) maxX = coord[0];
            if (coord[1] < minY) minY = coord[1];
            if (coord[1] > maxY) maxY = coord[1];
          };
          const geom = feature.geometry;
          const type = geom.type;
          const coords = geom.coordinates;
          
          if (type === 'Polygon') {
            coords.forEach((ring: any) => ring.forEach(update));
          } else if (type === 'MultiPolygon') {
            coords.forEach((poly: any) => poly.forEach((ring: any) => ring.forEach(update)));
          }

          if (minX !== Infinity) {
            // Padding accounts for the 420px sidebar on the right side
            map.fitBounds([[minX, minY], [maxX, maxY]] as mapboxgl.LngLatBoundsLike, {
              padding: { top: 100, bottom: 100, left: 100, right: 420 + 100 },
              duration: 1500,
              essential: true
            });
          } else {
            map.flyTo({
              center: e.lngLat,
              zoom: 4.5,
              padding: { right: 420 },
              essential: true,
              duration: 1500
            });
          }

          onCountryClick(feature.properties?.name || '');
        }
      }
    };

    map.on('mousemove', 'africa-countries-fill', handleMouseMove);
    map.on('mouseleave', 'africa-countries-fill', handleMouseLeave);
    map.on('click', 'africa-countries-fill', handleClick);

    return () => {
      map.off('style.load', addLayers);
      map.off('mousemove', 'africa-countries-fill', handleMouseMove);
      map.off('mouseleave', 'africa-countries-fill', handleMouseLeave);
      map.off('click', 'africa-countries-fill', handleClick);
    };
  }, [map, onCountryClick, setHoveredName, setTooltipPos, selectedCountryName]);

  return null;
};