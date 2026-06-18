'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useMap } from './map-context';
import africaGeoJson from '@/africa.json';

export interface MapHighlightedCountriesProps {
  onCountryClick?: (countryName: string) => void;
  setHoveredName?: (name: string | null) => void;
  setTooltipPos?: (pos: { x: number; y: number }) => void;
  selectedCountryName?: string;
}

const regionColors: Record<string, string> = {
  'KE': '#0f3d1e', // East Africa: Deep Forest
  'UG': '#0f3d1e', 
  'TZ': '#0f3d1e',
  'RW': '#0f3d1e',
  'ET': '#0f3d1e',
  'SS': '#0f3d1e',
  'BI': '#0f3d1e',
  'MW': '#c8a44a', // Southern Africa: Accent Gold (stands out against green terrain)
  'ZM': '#c8a44a',
  'ZW': '#c8a44a',
  'MZ': '#c8a44a',
  'ZA': '#c8a44a',
  'SN': '#3ab44a', // West Africa: Primary Green (stands out beautifully against desert terrain)
  'BF': '#3ab44a',
  'ML': '#3ab44a',
  'GH': '#3ab44a',
  'NG': '#3ab44a',
  'LR': '#3ab44a',
  'SL': '#3ab44a',
  'CM': '#2484c6', // Central Africa: Primary Blue
  'CD': '#2484c6'
};

export const MapHighlightedCountries: React.FC<MapHighlightedCountriesProps> = ({
  onCountryClick,
  setHoveredName,
  setTooltipPos,
  selectedCountryName
}) => {
  const { map } = useMap();

  const onCountryClickRef = useRef(onCountryClick);
  const setHoveredNameRef = useRef(setHoveredName);
  const setTooltipPosRef = useRef(setTooltipPos);
  
  const hoveredCountryRef = useRef<string | null>(null);
  const selectedCountryRef = useRef<string | null>(null);

  useEffect(() => {
    onCountryClickRef.current = onCountryClick;
    setHoveredNameRef.current = setHoveredName;
    setTooltipPosRef.current = setTooltipPos;
  });

  // Handle selected state efficiently
  useEffect(() => {
    if (!map || !map.isStyleLoaded()) return;

    if (selectedCountryRef.current && selectedCountryRef.current !== selectedCountryName) {
      map.setFeatureState(
        { source: 'africa-countries', id: selectedCountryRef.current },
        { selected: false }
      );
    }

    if (selectedCountryName) {
      map.setFeatureState(
        { source: 'africa-countries', id: selectedCountryName },
        { selected: true }
      );
      selectedCountryRef.current = selectedCountryName;
    } else {
      selectedCountryRef.current = null;
    }

    if (map.getLayer('africa-countries-fill')) {
      map.setPaintProperty('africa-countries-fill', 'fill-opacity', [
        'case',
        ['boolean', ['feature-state', 'selected'], false],
        0.55, // Rich glass for selected
        ['boolean', ['feature-state', 'hover'], false],
        0.45, // Hover glass
        0.35 // Base translucent glass remains consistent so they don't disappear
      ]);
    }
  }, [map, selectedCountryName]);

  useEffect(() => {
    if (!map) return;

    const addLayers = () => {
      if (!map.getSource('africa-countries')) {
        map.addSource('africa-countries', {
          type: 'geojson',
          data: africaGeoJson as any,
          promoteId: 'name' // Use 'name' for integer-free feature states
        });
      }

      const getBaseColorExpr = () => {
        const matchExpr: any[] = ['match', ['get', 'iso_a2']];
        for (const [code, color] of Object.entries(regionColors)) {
          matchExpr.push(code, color);
        }
        matchExpr.push('rgba(255, 255, 255, 0)');
        return matchExpr;
      };

      // We use a flat fill layer that drapes over the 3D terrain so topography is not obscured
      if (!map.getLayer('africa-countries-fill')) {
        map.addLayer({
          id: 'africa-countries-fill',
          type: 'fill',
          source: 'africa-countries',
          paint: {
            'fill-color': getBaseColorExpr(), // Always use the beautiful region colors
            'fill-opacity': [
              'case',
              ['boolean', ['feature-state', 'selected'], false],
              0.55, // Rich glass for selected
              ['boolean', ['feature-state', 'hover'], false],
              0.45, // Hover glass
              0.35 // Rich translucent glass base to let topography show through beautifully
            ]
          }
        }, 'waterway-label'); 
      }
    };

    if (map.isStyleLoaded()) {
      addLayers();
    } else {
      map.once('style.load', addLayers);
    }
    
    const handleMouseMove = (e: any) => {
      if (e.features && e.features.length > 0) {
        const feature = e.features[0];
        const isoA2 = feature.properties?.iso_a2;
        const name = feature.properties?.name;
        
        if (regionColors[isoA2]) {
          map.getCanvas().style.cursor = 'pointer';
          
          if (name !== hoveredCountryRef.current) {
            if (hoveredCountryRef.current) {
              map.setFeatureState(
                { source: 'africa-countries', id: hoveredCountryRef.current },
                { hover: false }
              );
            }
            if (name) {
              map.setFeatureState(
                { source: 'africa-countries', id: name },
                { hover: true }
              );
            }
            hoveredCountryRef.current = name || null;
            if (setHoveredNameRef.current) {
              setHoveredNameRef.current(name || null);
            }
          }
          
          if (setTooltipPosRef.current && e.originalEvent) {
            setTooltipPosRef.current({ x: e.originalEvent.clientX + 15, y: e.originalEvent.clientY + 15 });
          }
        } else {
          clearHover();
        }
      } else {
        clearHover();
      }
    };

    const clearHover = () => {
      map.getCanvas().style.cursor = '';
      if (hoveredCountryRef.current) {
        map.setFeatureState(
          { source: 'africa-countries', id: hoveredCountryRef.current },
          { hover: false }
        );
        hoveredCountryRef.current = null;
        if (setHoveredNameRef.current) {
          setHoveredNameRef.current(null);
        }
      }
    };

    const handleMouseLeave = () => clearHover();

    const handleClick = (e: any) => {
      if (e.features && e.features.length > 0) {
        const feature = e.features[0];
        const isoA2 = feature.properties?.iso_a2;
        if (regionColors[isoA2] && onCountryClickRef.current) {
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

          const smoothEasing = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

          if (minX !== Infinity) {
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
            const padding = isMobile 
              ? { top: 20, bottom: 20, left: 20, right: 20 }
              : { top: 80, bottom: 80, left: 80, right: 460 };

            map.fitBounds([[minX, minY], [maxX, maxY]] as mapboxgl.LngLatBoundsLike, {
              padding,
              duration: 2200,
              easing: smoothEasing,
              maxZoom: 5.5,
              pitch: 45, // Add dramatic pitch on select
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
              pitch: 45, // Add dramatic pitch on select
              duration: 2200,
              easing: smoothEasing
            });
          }

          if (onCountryClickRef.current) {
            onCountryClickRef.current(feature.properties?.name || '');
          }
        }
      }
    };

    map.on('mousemove', 'africa-countries-fill', handleMouseMove);
    map.on('mouseleave', 'africa-countries-fill', handleMouseLeave);
    map.on('click', 'africa-countries-fill', handleClick);

    return () => {
      map.off('mousemove', 'africa-countries-fill', handleMouseMove);
      map.off('mouseleave', 'africa-countries-fill', handleMouseLeave);
      map.off('click', 'africa-countries-fill', handleClick);
    };
  }, [map]);

  return null;
};