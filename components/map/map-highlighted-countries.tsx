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
  'KE': '#3ab44a',
  'UG': '#3ab44a',
  'TZ': '#3ab44a',
  'RW': '#3ab44a',
  'ET': '#3ab44a',
  'SS': '#3ab44a',
  'BI': '#3ab44a',
  'MW': '#3ab44a',
  'ZM': '#3ab44a',
  'ZW': '#3ab44a',
  'MZ': '#3ab44a',
  'ZA': '#3ab44a',
  'SN': '#3ab44a',
  'BF': '#3ab44a',
  'ML': '#3ab44a',
  'GH': '#3ab44a',
  'NG': '#3ab44a',
  'LR': '#3ab44a',
  'SL': '#3ab44a',
  'CM': '#3ab44a',
  'CD': '#3ab44a'
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
  const isZoomedInRef = useRef<boolean>(false);

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
        1.0, // Fully opaque for selected
        ['boolean', ['feature-state', 'hover'], false],
        0.75, // Bright hover glass
        0.45 // Solid enough base to clearly distinguish from the rest of the map
      ]);
    }
  }, [map, selectedCountryName]);

  // Reset zoom tracking when selection is cleared (user closed the panel)
  useEffect(() => {
    if (!selectedCountryName) {
      isZoomedInRef.current = false;
    }
  }, [selectedCountryName]);

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
              1.0, // Fully opaque for selected
              ['boolean', ['feature-state', 'hover'], false],
              0.75, // Bright hover glass
              0.45 // Solid enough base to clearly distinguish from the rest of the map
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
            const containerHeight = map.getContainer().clientHeight;
            
            const bounds: mapboxgl.LngLatBoundsLike = [[minX, minY], [maxX, maxY]];
            const pitch = isMobile ? 0 : 45;

            // Desktop uses standard padding. Mobile uses light padding to get base zoom,
            // then we mathematically shrink the zoom to fit the 50vh visible area.
            const basePadding = isMobile 
              ? { top: 20, bottom: 20, left: 20, right: 20 }
              : { top: 60, bottom: 60, left: 60, right: 460 };

            const camera = map.cameraForBounds(bounds, { padding: basePadding });
            
            if (camera && camera.zoom !== undefined) {
              if (isMobile) {
                // The visible map area is the container height minus the 50vh bottom sheet
                const bottomSheetHeight = window.innerHeight * 0.5;
                const visibleHeight = Math.max(containerHeight - bottomSheetHeight, 100);
                
                // Adjust zoom mathematically so bounds fit in the smaller visible height
                const ratio = visibleHeight / containerHeight;
                camera.zoom = camera.zoom + Math.log2(ratio);
              }
              
              // Cap zoom to prevent getting too close to tiny countries
              camera.zoom = Math.min(camera.zoom, isMobile ? 5.5 : 5.5);

              // Offset center UP by 25% to place the geographic center exactly in the visible strip
              const offset: [number, number] = isMobile 
                ? [0, -(containerHeight * 0.25)] 
                : [0, 0];

              if (isZoomedInRef.current) {
                map.easeTo({
                  center: camera.center,
                  zoom: camera.zoom,
                  pitch,
                  offset,
                  duration: 1200,
                  easing: smoothEasing,
                  essential: true
                });
              } else {
                map.flyTo({
                  center: camera.center,
                  zoom: camera.zoom,
                  pitch,
                  offset,
                  duration: 2200,
                  easing: smoothEasing,
                  essential: true
                });
              }
            }

            isZoomedInRef.current = true;
          } else {
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
            const containerHeight = map.getContainer().clientHeight;
            const offset: [number, number] = isMobile 
              ? [0, -(containerHeight * 0.25)] 
              : [0, 0];

            map.flyTo({
              center: e.lngLat,
              zoom: isMobile ? 3.5 : 4.5,
              offset,
              essential: true,
              pitch: isMobile ? 0 : 45,
              duration: 2200,
              easing: smoothEasing
            });

            isZoomedInRef.current = true;
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