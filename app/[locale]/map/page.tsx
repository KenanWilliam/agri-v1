import { InteractiveMapbox } from '@/components/map/interactive-mapbox';

export default function MapPage() {
  return (
    <div className="w-full h-[calc(100dvh-var(--header-height))]">
      <InteractiveMapbox />
    </div>
  );
}
