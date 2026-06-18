'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useMaplibre } from './maplibre-context';
import africaGeoJson from '@/africa.json';

export interface MaplibreHighlightedCountriesProps {
  onCountryClick?: (countryName: string) => void;
  setHoveredName?: (name: string | null) => void;
  setTooltipPos?: (pos: { x: number; y: number }) => void;
  selectedCountryName?: string;
}

const regionColors: Record<string, string> = {
  'KE': 'rgba(15, 61, 49, 0.85)', 
  'UG': 'rgba(15, 61, 49, 0.85)', 
  'TZ': 'rgba(15, 61, 49, 0.85)',
  'RW': 'rgba(15, 61, 49, 0.85)',
  'ET': 'rgba(15, 61, 49, 0.85)',
  'SS': 'rgba(15, 61, 49, 0.85)',
  'BI': 'rgba(15, 61, 49, 0.85)',
  'MW': 'rgba(58, 180, 74, 0.85)',
  'ZM': 'rgba(58, 180, 74, 0.85)',
  'ZW': 'rgba(58, 180, 74, 0.85)',
  'MZ': 'rgba(58, 180, 74, 0.85)',
  'ZA': 'rgba(58, 180, 74, 0.85)',
  'SN': 'rgba(200, 164, 74, 0.85)',
  'BF': 'rgba(200, 164, 74, 0.85)',
  'ML': 'rgba(200, 164, 74, 0.85)',
  'GH': 'rgba(200, 164, 74, 0.85)',
  'NG': 'rgba(200, 164, 74, 0.85)',
  'LR': 'rgba(200, 164, 74, 0.85)',
  'SL': 'rgba(200, 164, 74, 0.85)',
  'CM': 'rgba(36, 132, 198, 0.85)',
  'CD': 'rgba(36, 132, 198, 0.85)'
};

export const MaplibreHighlightedCountries: React.FC<MaplibreHighlightedCountriesProps> = ({
  onCountryClick,
  setHoveredName,
  setTooltipPos,
  selectedCountryName
}) => {
  const { map } = useMaplibre();

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

  // Handle selected country state
  useEffect(() => {
    if (!map || !map.isStyleLoaded()) return;

    // Reset previous selection
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
  }, [map, selectedCountryName]);

  useEffect(() => {
    if (!map) return;

    const addLayers = () => {
      if (!map.getSource('africa-countries')) {
        map.addSource('africa-countries', {
          type: 'geojson',
          data: africaGeoJson as any,
          promoteId: 'name' // Use 'name' as the feature ID for setFeatureState
        });
      }

      // We use expressions to match the base region color, but use feature-state for hover/selection
      const getBaseColorExpr = () => {
        const matchExpr: any[] = ['match', ['get', 'iso_a2']];
        for (const [code, color] of Object.entries(regionColors)) {
          matchExpr.push(code, color);
        }
        matchExpr.push('rgba(0, 0, 0, 0)');
        return matchExpr;
      };

      if (!map.getLayer('africa-countries-fill')) {
        map.addLayer({
          id: 'africa-countries-fill',
          type: 'fill',
          source: 'africa-countries',
          paint: {
            'fill-color': [
              'case',
              ['boolean', ['feature-state', 'hover'], false],
              '#3ab44a', // Bright Green on hover
              ['boolean', ['feature-state', 'selected'], false],
              getBaseColorExpr(), 
              // If something is selected, fade out the unselected ones
              ['==', ['feature-state', 'anySelected'], true],
              'rgba(28, 43, 34, 0.08)',
              getBaseColorExpr()
            ],
            'fill-opacity': 0.45
          }
        });
      }

      if (!map.getLayer('africa-countries-line')) {
        map.addLayer({
          id: 'africa-countries-line',
          type: 'line',
          source: 'africa-countries',
          paint: {
            'line-color': [
              'case',
              ['boolean', ['feature-state', 'selected'], false],
              '#c8a44a', // Brand Gold border for active
              ['boolean', ['feature-state', 'hover'], false],
              '#3ab44a', // Brand Green border for hovered
              '#ffffff'
            ],
            'line-width': [
              'case',
              ['boolean', ['feature-state', 'selected'], false],
              2.5,
              ['boolean', ['feature-state', 'hover'], false],
              1.5,
              1.0
            ],
            'line-opacity': [
              'case',
              ['boolean', ['feature-state', 'selected'], false],
              1.0,
              ['boolean', ['feature-state', 'hover'], false],
              1.0,
              ['==', ['feature-state', 'anySelected'], true],
              0.3,
              0.6
            ]
          }
        });
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
            // Unhover previous
            if (hoveredCountryRef.current) {
              map.setFeatureState(
                { source: 'africa-countries', id: hoveredCountryRef.current },
                { hover: false }
              );
            }
            // Hover new
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
          // Fit Bounds calculation
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
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
            const padding = isMobile 
              ? { top: 20, bottom: 20, left: 20, right: 20 }
              : { top: 80, bottom: 80, left: 80, right: 460 };

            map.fitBounds([[minX, minY], [maxX, maxY]] as maplibregl.LngLatBoundsLike, {
              padding,
              duration: 2200,
              maxZoom: 5.5
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
              duration: 2200
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

  // Update "anySelected" feature state on all countries to dim them if one is selected
  useEffect(() => {
    if (!map || !map.isStyleLoaded()) return;
    const isAnySelected = !!selectedCountryName;
    // We can update the layer paint properties directly or set a global state.
    // Instead of looping all features, we can dynamically change the paint property expression.
    if (map.getLayer('africa-countries-fill')) {
      const getBaseColorExpr = () => {
        const matchExpr: any[] = ['match', ['get', 'iso_a2']];
        for (const [code, color] of Object.entries(regionColors)) {
          matchExpr.push(code, color);
        }
        matchExpr.push('rgba(0, 0, 0, 0)');
        return matchExpr;
      };

      map.setPaintProperty('africa-countries-fill', 'fill-color', [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        '#3ab44a', // Hover color
        ['boolean', ['feature-state', 'selected'], false],
        getBaseColorExpr(), // Active color
        isAnySelected ? 'rgba(28, 43, 34, 0.08)' : getBaseColorExpr()
      ]);
    }

    if (map.getLayer('africa-countries-line')) {
      map.setPaintProperty('africa-countries-line', 'line-opacity', [
        'case',
        ['boolean', ['feature-state', 'selected'], false],
        1.0,
        ['boolean', ['feature-state', 'hover'], false],
        1.0,
        isAnySelected ? 0.3 : 0.6
      ]);
    }
  }, [map, selectedCountryName]);

  return null;
};
