'use client';

import React, { useEffect } from 'react';
import { useMap } from './map-context';
import africaGeoJson from '@/africa.json';

export interface MapHighlightedCountriesProps {
  onCountryClick?: (countryName: string) => void;
  setHoveredName?: (name: string | null) => void;
  setTooltipPos?: (pos: { x: number; y: number }) => void;
}

export const MapHighlightedCountries: React.FC<MapHighlightedCountriesProps> = ({
  onCountryClick,
  setHoveredName,
  setTooltipPos
}) => {
  const { map } = useMap();

  useEffect(() => {
    if (!map) return;

    // Define the specific country highlighting by ISO A2 codes based on regions extracted from the workspace.
    // East Africa: Kenya (KE), Uganda (UG), Tanzania (TZ), Rwanda (RW), Ethiopia (ET), South Sudan (SS), Burundi (BI)
    // Southern Africa: Malawi (MW), Zambia (ZM), Zimbabwe (ZW), Mozambique (MZ), South Africa (ZA)
    // West Africa: Senegal (SN), Burkina Faso (BF), Mali (ML), Ghana (GH), Nigeria (NG), Liberia (LR), Sierra Leone (SL)
    // Central Africa: Cameroon (CM), Congo DRC (CD)
    
    // We map ISO A2 to the region color fill
    const regionColors: Record<string, string> = {
      'KE': 'rgba(15, 61, 49, 0.4)', // East Africa
      'UG': 'rgba(15, 61, 49, 0.4)', 
      'TZ': 'rgba(15, 61, 49, 0.4)',
      'RW': 'rgba(15, 61, 49, 0.4)',
      'ET': 'rgba(15, 61, 49, 0.4)',
      'SS': 'rgba(15, 61, 49, 0.4)',
      'BI': 'rgba(15, 61, 49, 0.4)',
      
      'MW': 'rgba(22, 163, 74, 0.4)', // Southern Africa
      'ZM': 'rgba(22, 163, 74, 0.4)',
      'ZW': 'rgba(22, 163, 74, 0.4)',
      'MZ': 'rgba(22, 163, 74, 0.4)',
      'ZA': 'rgba(22, 163, 74, 0.4)',
      
      'SN': 'rgba(180, 83, 9, 0.4)',  // West Africa
      'BF': 'rgba(180, 83, 9, 0.4)',
      'ML': 'rgba(180, 83, 9, 0.4)',
      'GH': 'rgba(180, 83, 9, 0.4)',
      'NG': 'rgba(180, 83, 9, 0.4)',
      'LR': 'rgba(180, 83, 9, 0.4)',
      'SL': 'rgba(180, 83, 9, 0.4)',
      
      'CM': 'rgba(22, 101, 52, 0.4)', // Central Africa
      'CD': 'rgba(22, 101, 52, 0.4)'
    };

    const matchExpression: any[] = ['match', ['get', 'iso_a2']];
    for (const [code, color] of Object.entries(regionColors)) {
      matchExpression.push(code, color);
    }
    matchExpression.push('rgba(0, 0, 0, 0)'); // Default transparent

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
            'fill-color': matchExpression as any,
            'fill-opacity': 0.8 // Opacity handles the overlay mix
          }
        }, 'waterway-label'); // Insert below labels if possible
      }

      if (!map.getLayer('africa-countries-line')) {
        map.addLayer({
          id: 'africa-countries-line',
          type: 'line',
          source: 'africa-countries',
          paint: {
            'line-color': '#ffffff',
            'line-width': 1,
            'line-opacity': 0.5
          }
        });
      }

      // Add interactivity
      map.on('mousemove', 'africa-countries-fill', (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          const isoA2 = feature.properties?.iso_a2;
          
          // Only show pointer/hover if it's one of our highlighted countries
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
      });

      map.on('mouseleave', 'africa-countries-fill', () => {
        map.getCanvas().style.cursor = '';
        if (setHoveredName) setHoveredName(null);
      });

      map.on('click', 'africa-countries-fill', (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          const isoA2 = feature.properties?.iso_a2;
          if (regionColors[isoA2] && onCountryClick) {
            
            // Fly to the country's center or the click point
            map.flyTo({
              center: e.lngLat,
              zoom: 4,
              essential: true
            });
            
            onCountryClick(feature.properties?.name || '');
          }
        }
      });
    };

    if (map.isStyleLoaded()) {
      addLayers();
    } else {
      map.once('style.load', addLayers);
    }

    return () => {
      // Remove event listeners
      map.off('mousemove', 'africa-countries-fill', () => {});
      map.off('mouseleave', 'africa-countries-fill', () => {});
      map.off('click', 'africa-countries-fill', () => {});

      if (map.getStyle()) {
        if (map.getLayer('africa-countries-fill')) map.removeLayer('africa-countries-fill');
        if (map.getLayer('africa-countries-line')) map.removeLayer('africa-countries-line');
        if (map.getSource('africa-countries')) map.removeSource('africa-countries');
      }
    };
  }, [map, onCountryClick, setHoveredName, setTooltipPos]);

  return null;
};