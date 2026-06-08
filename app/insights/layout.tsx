import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Explore the latest insights, strategies, and industry news in seed systems and agricultural development from Agri Experience.',
}

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
