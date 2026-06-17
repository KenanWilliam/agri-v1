import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Advisory and Analytical Work',
  description: 'Strategic guidance and in-depth analysis to navigate complex agricultural value chains, optimize seed systems, and drive policy reform.',
}

export default function ClientAdvisoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
