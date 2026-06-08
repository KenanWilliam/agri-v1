import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Explore the portfolio of consultancy projects, initiatives, and value chain transformations led by Agri Experience across 21 African countries.',
}

export default function OurWorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
