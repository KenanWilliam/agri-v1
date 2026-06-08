import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Results',
  description: 'Review the tangible results and metrics of our consultancy work, showcasing successful seed system developments and agricultural transformations.',
}

export default function OurResultsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
