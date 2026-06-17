'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useMap } from './map-context';
import africaGeoJson from '@/africa.json';

export interface MapHighlightedCountriesProps {
  onCountryClick?: (countryName: string) => void;
  setHoveredName?: (name: string | null) => void;
  setTooltipPos?: (pos: { x: number; y: number }) => void;
  selectedCountryName?: string;
}

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

export const MapHighlightedCountries: React.FC<MapHighlightedCountriesProps> = ({
  onCountryClick,
  setHoveredName,
  setTooltipPos,
  selectedCountryName
}) => {
  const { map } = useMap();
  const [localHoveredName, setLocalHoveredName] = useState<string | null>(null);

  // Sync props to refs to avoid rebuilding mouse handlers and tearing down Mapbox events
  const onCountryClickRef = useRef(onCountryClick);
  const setHoveredNameRef = useRef(setHoveredName);
  const setTooltipPosRef = useRef(setTooltipPos);
  const selectedCountryNameRef = useRef(selectedCountryName);
  const localHoveredNameRef = useRef(localHoveredName);

  useEffect(() => {
    onCountryClickRef.current = onCountryClick;
    setHoveredNameRef.current = setHoveredName;
    setTooltipPosRef.current = setTooltipPos;
    selectedCountryNameRef.current = selectedCountryName;
    localHoveredNameRef.current = localHoveredName;
  });

  // Helper to get the correct color expression based on selection & hover state
  const getPaintExpression = (selected: string | undefined, hovered: string | null) => {
    const matchExpr: any[] = ['match', ['get', 'iso_a2']];
    
    for (const [code, color] of Object.entries(regionColors)) {
      const baseColor = selected ? 'rgba(28, 43, 34, 0.08)' : color;
      
      matchExpr.push(
        code,
        ['case',
          ['==', ['get', 'name'], selected || ''],
          color,
          ['==', ['get', 'name'], hovered || ''],
          color.replace('0.85', '0.98'),
          baseColor
        ]
      );
    }
    
    matchExpr.push('rgba(0, 0, 0, 0)');
    return matchExpr;
  };

  // Helper expressions for outline styling (adds green for hovered, gold for selected)
  const getLineColor = (selected: string | undefined, hovered: string | null) => {
    if (selected || hovered) {
      return [
        'case',
        ['==', ['get', 'name'], selected || ''],
        '#c8a44a', // Brand Gold border for active country
        ['==', ['get', 'name'], hovered || ''],
        '#3ab44a', // Brand Green border for hovered country
        '#ffffff' // White border for other countries
      ];
    }
    return '#ffffff';
  };

  const getLineWidth = (selected: string | undefined, hovered: string | null) => {
    if (selected || hovered) {
      return [
        'case',
        ['==', ['get', 'name'], selected || ''],
        2.5, // Thicker border for active country
        ['==', ['get', 'name'], hovered || ''],
        1.5, // Subtle highlight for hovered country
        1.0
      ];
    }
    return 1.0;
  };

  const getLineOpacity = (selected: string | undefined, hovered: string | null) => {
    if (selected || hovered) {
      return [
        'case',
        ['==', ['get', 'name'], selected || ''],
        1.0, // Fully opaque for active country
        ['==', ['get', 'name'], hovered || ''],
        1.0, // Fully opaque for hovered country
        0.3 // Dimmed for other countries
      ];
    }
    return 0.6;
  };

  // Effect 1: Initialize layers & setup event listeners once when map style loaded.
  useEffect(() => {
    if (!map) return;

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
            'fill-color': getPaintExpression(selectedCountryNameRef.current, localHoveredNameRef.current) as any,
            'fill-opacity': 0.8
          }
        }, 'waterway-label'); 
      }

      if (!map.getLayer('africa-countries-line')) {
        map.addLayer({
          id: 'africa-countries-line',
          type: 'line',
          source: 'africa-countries',
          paint: {
            'line-color': getLineColor(selectedCountryNameRef.current, localHoveredNameRef.current) as any,
            'line-width': getLineWidth(selectedCountryNameRef.current, localHoveredNameRef.current) as any,
            'line-opacity': getLineOpacity(selectedCountryNameRef.current, localHoveredNameRef.current) as any
          }
        });
      }
    };

    if (map.isStyleLoaded()) {
      addLayers();
    } else {
      map.once('style.load', addLayers);
    }
    
    map.on('style.load', addLayers);

    // Event handlers using Refs for callbacks
    const handleMouseMove = (e: any) => {
      if (e.features && e.features.length > 0) {
        const feature = e.features[0];
        const isoA2 = feature.properties?.iso_a2;
        const name = feature.properties?.name || null;
        
        if (regionColors[isoA2]) {
          map.getCanvas().style.cursor = 'pointer';
          
          // CRITICAL OPTIMIZATION: Only state transition when country name changes
          if (name !== localHoveredNameRef.current) {
            setLocalHoveredName(name);
            if (setHoveredNameRef.current) {
              setHoveredNameRef.current(name);
            }
          }
          
          if (setTooltipPosRef.current && e.originalEvent) {
            setTooltipPosRef.current({ x: e.originalEvent.clientX + 15, y: e.originalEvent.clientY + 15 });
          }
        } else {
          map.getCanvas().style.cursor = '';
          if (localHoveredNameRef.current !== null) {
            setLocalHoveredName(null);
            if (setHoveredNameRef.current) {
              setHoveredNameRef.current(null);
            }
          }
        }
      }
    };

    const handleMouseLeave = () => {
      map.getCanvas().style.cursor = '';
      if (localHoveredNameRef.current !== null) {
        setLocalHoveredName(null);
        if (setHoveredNameRef.current) {
          setHoveredNameRef.current(null);
        }
      }
    };

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
      map.off('style.load', addLayers);
      map.off('mousemove', 'africa-countries-fill', handleMouseMove);
      map.off('mouseleave', 'africa-countries-fill', handleMouseLeave);
      map.off('click', 'africa-countries-fill', handleClick);
    };
  }, [map]);

  // Effect 2: Update layer paint property styling when hovered or selected name changes.
  // This does NOT tear down/rebind any mouse listeners. It only updates colors instantly!
  useEffect(() => {
    if (!map) return;
    
    if (map.getLayer('africa-countries-fill')) {
      map.setPaintProperty(
        'africa-countries-fill', 
        'fill-color', 
        getPaintExpression(selectedCountryName, localHoveredName) as any
      );
    }
    if (map.getLayer('africa-countries-line')) {
      map.setPaintProperty(
        'africa-countries-line', 
        'line-color', 
        getLineColor(selectedCountryName, localHoveredName) as any
      );
      map.setPaintProperty(
        'africa-countries-line', 
        'line-width', 
        getLineWidth(selectedCountryName, localHoveredName) as any
      );
      map.setPaintProperty(
        'africa-countries-line', 
        'line-opacity', 
        getLineOpacity(selectedCountryName, localHoveredName) as any
      );
    }
  }, [map, selectedCountryName, localHoveredName]);

  return null;
};