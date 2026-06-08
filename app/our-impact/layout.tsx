import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Impact',
  description: 'Discover the profound impact Agri Experience has made on agricultural development, improving farmer yields and seed access in sub-Saharan Africa.',
}

export default function OurImpactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
