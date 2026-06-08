import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the dedicated experts and agricultural development professionals driving the vision and success behind Agri Experience.',
}

export default function OurTeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
