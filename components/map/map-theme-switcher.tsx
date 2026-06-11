'use client';

import React, { useEffect, useState } from 'react';
import { useMap } from './map-context';
import { useTheme } from 'next-themes';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MAP_STYLES = {
  Light: 'mapbox://styles/mapbox/light-v11',
  Dark: 'mapbox://styles/mapbox/dark-v11',
  Streets: 'mapbox://styles/mapbox/streets-v12',
  Satellite: 'mapbox://styles/mapbox/satellite-v9',
  Terrain: 'mapbox://styles/mapbox/outdoors-v12',
};

export const MapThemeSwitcher: React.FC = () => {
  const { map } = useMap();
  const { resolvedTheme } = useTheme();
  const [activeStyle, setActiveStyle] = useState<keyof typeof MAP_STYLES>('Light');

  // Initial sync with system/app theme if we haven't manually changed it to something else
  useEffect(() => {
    if (activeStyle === 'Light' || activeStyle === 'Dark') {
      const newStyle = resolvedTheme === 'dark' ? 'Dark' : 'Light';
      if (newStyle !== activeStyle) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveStyle(newStyle);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedTheme]); // Only runs when theme changes

  useEffect(() => {
    if (!map) return;
    map.setStyle(MAP_STYLES[activeStyle]);
  }, [map, activeStyle]);

  return (
    <div className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-md rounded-lg shadow-sm">
      <Tabs value={activeStyle} onValueChange={(val) => setActiveStyle(val as keyof typeof MAP_STYLES)}>
        <TabsList className="grid w-full grid-cols-5 h-auto py-1 px-1 bg-transparent">
          {Object.keys(MAP_STYLES).map((styleKey) => (
            <TabsTrigger
              key={styleKey}
              value={styleKey}
              className="text-xs py-1.5 px-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {styleKey}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
