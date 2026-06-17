import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Studies | Agri Experience',
  description: 'In-depth analysis and feasibility studies that turn complex challenges into clear, actionable insights for seed systems and agricultural value chains.',
}

export default function TechnicalStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
