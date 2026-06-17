import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Capacity Building',
  description: 'Empowering stakeholders through targeted training, skill development, and knowledge transfer to ensure sustainable growth in agricultural systems.',
}

export default function CapacityBuildingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
