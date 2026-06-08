import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'Subscribe to the Agri Experience newsletter to receive updates on agricultural value chains, seed systems, and our latest projects.',
}

export default function NewsletterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
