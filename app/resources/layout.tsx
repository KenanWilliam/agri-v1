import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Access a wealth of public-domain reports, case studies, scoping studies, and toolkits curated by Agri Experience for agricultural professionals.',
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
