import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stakeholder Convenings and Learning Trips',
  description: 'Facilitating impactful gatherings and immersive learning experiences that bring together diverse stakeholders to foster collaboration and share best practices across agricultural systems.',
}

export default function StakeholderConveningsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
