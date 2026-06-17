'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useMap } from './map-context';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Building, Store, Coffee, Car, AlertCircle, LucideIcon } from 'lucide-react';

// Using inline debounce for simplicity since useDebounce might not exist
function useDebounceValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

interface Suggestion {
  mapbox_id: string;
  name: string;
  full_address?: string;
  maki?: string;
  poi_category?: string[];
}

interface MapSearchProps {
  onLocationSelect: (location: any) => void;
}

export const MapSearch: React.FC<MapSearchProps> = ({ onLocationSelect }) => {
  const { map } = useMap();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounceValue(query, 300);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const sessionToken = useRef(crypto.randomUUID());

  useEffect(() => {
    if (!debouncedQuery) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
        const africaBbox = '-17.53,-34.83,51.41,37.34';
        const countriesLimit = 'KE,UG,TZ,RW,ET,MW,ZM,ZW,MZ,SN,BF,ML,GH,CM,CD,NG,SS,BI,LR,ZA,SL';
        const res = await fetch(
          `https://api.mapbox.com/search/searchbox/v1/suggest?q=${encodeURIComponent(debouncedQuery)}&bbox=${africaBbox}&country=${countriesLimit}&access_token=${token}&session_token=${sessionToken.current}`
        );
        const data = await res.json();
        if (data.suggestions) {
          setSuggestions(data.suggestions);
        }
      } catch (error) {
        console.error('Error fetching suggestions', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [debouncedQuery]);

  const handleSelect = async (mapbox_id: string) => {
    setOpen(false);
    try {
      const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
      const res = await fetch(
        `https://api.mapbox.com/search/searchbox/v1/retrieve/${mapbox_id}?session_token=${sessionToken.current}&access_token=${token}`
      );
      const data = await res.json();
      if (data.features && data.features.length > 0) {
        const feature = data.features[0];
        const coordinates = feature.geometry.coordinates; // [lng, lat]
        
        if (map) {
          map.flyTo({
            center: coordinates as [number, number],
            zoom: 14,
            essential: true
          });
        }
        
        onLocationSelect({
          lng: coordinates[0],
          lat: coordinates[1],
          name: feature.properties.name,
          address: feature.properties.full_address,
          categories: feature.properties.poi_category,
          operationalStatus: feature.properties.operational_status,
        });

        // Reset session token for next search
        sessionToken.current = crypto.randomUUID();
        setQuery('');
      }
    } catch (error) {
      console.error('Error retrieving location details', error);
    }
  };

  return (
    <div className="absolute top-4 left-4 z-10 w-[320px]">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-start text-muted-foreground bg-background/90 backdrop-blur-sm"
          >
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            {query || "Search for places..."}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[320px] p-0" align="start">
          <Command shouldFilter={false}>
            <CommandInput 
              placeholder="Search map..." 
              value={query} 
              onValueChange={setQuery} 
            />
            <CommandList>
              <CommandEmpty>{loading ? 'Loading...' : 'No results found.'}</CommandEmpty>
              <CommandGroup>
                {suggestions.map((suggestion) => (
                  <CommandItem
                    key={suggestion.mapbox_id}
                    value={suggestion.name}
                    onSelect={() => handleSelect(suggestion.mapbox_id)}
                  >
                    <MapPin className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                    <div className="flex flex-col">
                      <span>{suggestion.name}</span>
                      {suggestion.full_address && (
                        <span className="text-xs text-muted-foreground line-clamp-1">
                          {suggestion.full_address}
                        </span>
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
