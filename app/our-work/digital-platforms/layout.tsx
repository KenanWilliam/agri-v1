import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Platforms | Agri Experience',
  description: 'Smart, scalable digital solutions that connect data, people, and decisions across the agricultural value chain. Explore MbeguChoice, M3, and more.',
}

export default function DigitalPlatformsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
