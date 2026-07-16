import OfficePlantsGallery from '@/components/motion/office-plants-gallery'

export const metadata = {
  title: 'Gallery | Agri Experience',
  description: 'Explore our gallery of office plants and environments.',
}

export default function GalleryPage() {
  return (
    <main className="bg-white min-h-screen pt-24 lg:pt-28 pb-10">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 mb-12 text-center">
        <h1 className="text-5xl lg:text-7xl font-serif text-deep-forest font-bold tracking-tight mb-4">
          Visual Gallery
        </h1>
        <p className="text-lg lg:text-xl text-charcoal/80 max-w-2xl mx-auto font-light">
          Experience our interactive 3D gallery.
        </p>
      </div>
      
      <OfficePlantsGallery />
    </main>
  )
}
