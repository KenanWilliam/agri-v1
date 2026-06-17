'use client';

import React, { useEffect, useState } from 'react';
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
  const [localHoveredName, setLocalHoveredName] = useState<string | null>(null);

  useEffect(() => {
    if (!map) return;

    // Premium brand-aligned colors for regional categorizations
    const regionColors: Record<string, string> = {
      'KE': 'rgba(15, 61, 49, 0.85)', // East Africa: Deep Forest (#0f3d1e)
      'UG': 'rgba(15, 61, 49, 0.85)', 
      'TZ': 'rgba(15, 61, 49, 0.85)',
      'RW': 'rgba(15, 61, 49, 0.85)',
      'ET': 'rgba(15, 61, 49, 0.85)',
      'SS': 'rgba(15, 61, 49, 0.85)',
      'BI': 'rgba(15, 61, 49, 0.85)',
      
      'MW': 'rgba(58, 180, 74, 0.85)', // Southern Africa: Primary Green (#3ab44a)
      'ZM': 'rgba(58, 180, 74, 0.85)',
      'ZW': 'rgba(58, 180, 74, 0.85)',
      'MZ': 'rgba(58, 180, 74, 0.85)',
      'ZA': 'rgba(58, 180, 74, 0.85)',
      
      'SN': 'rgba(200, 164, 74, 0.85)', // West Africa: Accent Gold (#c8a44a)
      'BF': 'rgba(200, 164, 74, 0.85)',
      'ML': 'rgba(200, 164, 74, 0.85)',
      'GH': 'rgba(200, 164, 74, 0.85)',
      'NG': 'rgba(200, 164, 74, 0.85)',
      'LR': 'rgba(200, 164, 74, 0.85)',
      'SL': 'rgba(200, 164, 74, 0.85)',
      
      'CM': 'rgba(36, 132, 198, 0.85)', // Central Africa: Primary Blue (#2484c6)
      'CD': 'rgba(36, 132, 198, 0.85)'
    };

    // Helper to get the correct color expression based on selection & hover state
    const getPaintExpression = () => {
      const matchExpr: any[] = ['match', ['get', 'iso_a2']];
      
      for (const [code, color] of Object.entries(regionColors)) {
        // Dimmed color for non-selected countries
        const baseColor = selectedCountryName ? 'rgba(28, 43, 34, 0.08)' : color;
        
        matchExpr.push(
          code,
          ['case',
            // If it is the selected country, keep its highlighted color
            ['==', ['get', 'name'], selectedCountryName || ''],
            color,
            // If it is the hovered country, make it stand out with high-contrast full opacity
            ['==', ['get', 'name'], localHoveredName || ''],
            color.replace('0.85', '0.98'),
            // Otherwise, use base color
            baseColor
          ]
        );
      }
      
      matchExpr.push('rgba(0, 0, 0, 0)'); // Fallback transparent
      return matchExpr;
    };

    // Helper expressions for outline styling (adds green for hovered, gold for selected)
    const getLineColor = () => {
      if (selectedCountryName || localHoveredName) {
        return [
          'case',
          ['==', ['get', 'name'], selectedCountryName || ''],
          '#c8a44a', // Brand Gold border for active country
          ['==', ['get', 'name'], localHoveredName || ''],
          '#3ab44a', // Brand Green border for hovered country
          '#ffffff' // White border for other countries
        ];
      }
      return '#ffffff';
    };

    const getLineWidth = () => {
      if (selectedCountryName || localHoveredName) {
        return [
          'case',
          ['==', ['get', 'name'], selectedCountryName || ''],
          2.5, // Thicker border for active country
          ['==', ['get', 'name'], localHoveredName || ''],
          1.5, // Subtle highlight for hovered country
          1.0
        ];
      }
      return 1.0;
    };

    const getLineOpacity = () => {
      if (selectedCountryName || localHoveredName) {
        return [
          'case',
          ['==', ['get', 'name'], selectedCountryName || ''],
          1.0, // Fully opaque for active country
          ['==', ['get', 'name'], localHoveredName || ''],
          1.0, // Fully opaque for hovered country
          0.3 // Dimmed for other countries
        ];
      }
      return 0.6;
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
        map.setPaintProperty('africa-countries-fill', 'fill-color', getPaintExpression() as any);
      }

      if (!map.getLayer('africa-countries-line')) {
        map.addLayer({
          id: 'africa-countries-line',
          type: 'line',
          source: 'africa-countries',
          paint: {
            'line-color': getLineColor() as any,
            'line-width': getLineWidth() as any,
            'line-opacity': getLineOpacity() as any
          }
        });
      } else {
        map.setPaintProperty('africa-countries-line', 'line-color', getLineColor() as any);
        map.setPaintProperty('africa-countries-line', 'line-width', getLineWidth() as any);
        map.setPaintProperty('africa-countries-line', 'line-opacity', getLineOpacity() as any);
      }
    };

    if (map.isStyleLoaded()) {
      addLayers();
    } else {
      map.once('style.load', addLayers);
    }
    
    map.on('style.load', addLayers);

    // Event Listeners (bind only once)
    const handleMouseMove = (e: any) => {
      if (e.features && e.features.length > 0) {
        const feature = e.features[0];
        const isoA2 = feature.properties?.iso_a2;
        const name = feature.properties?.name || null;
        
        if (regionColors[isoA2]) {
          map.getCanvas().style.cursor = 'pointer';
          setLocalHoveredName(name);
          if (setHoveredName) {
            setHoveredName(name);
          }
          if (setTooltipPos && e.originalEvent) {
            setTooltipPos({ x: e.originalEvent.clientX + 15, y: e.originalEvent.clientY + 15 });
          }
        } else {
          map.getCanvas().style.cursor = '';
          setLocalHoveredName(null);
          if (setHoveredName) setHoveredName(null);
        }
      }
    };

    const handleMouseLeave = () => {
      map.getCanvas().style.cursor = '';
      setLocalHoveredName(null);
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

          // Silky smooth cubic ease-in-out curve
          const smoothEasing = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

          if (minX !== Infinity) {
            // Padding right: 460px to offset the 420px sidebar on desktop, centering the country beautifully in the viewport
            // Set maxZoom: 5.5 to prevent sudden jarring focus jumps on smaller countries (like Rwanda/Burundi)
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
            const padding = isMobile 
              ? { top: 20, bottom: 20, left: 20, right: 20 }
              : { top: 80, bottom: 80, left: 80, right: 460 };

            map.fitBounds([[minX, minY], [maxX, maxY]] as mapboxgl.LngLatBoundsLike, {
              padding,
              duration: 2200,
              easing: smoothEasing,
              maxZoom: 5.5,
              essential: true
            });
          } else {
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
            const padding = isMobile
              ? { top: 0, bottom: 0, left: 0, right: 0 }
              : { top: 0, bottom: 0, left: 0, right: 380 };

            map.flyTo({
              center: e.lngLat,
              zoom: 4.5,
              padding,
              essential: true,
              duration: 2200,
              easing: smoothEasing
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
  }, [map, onCountryClick, setHoveredName, setTooltipPos, selectedCountryName, localHoveredName]);

  return null;
};