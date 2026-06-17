import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Implementation',
  description: 'From strategy to execution, we manage and implement projects that deliver measurable results on the ground across sub-Saharan Africa.',
}

export default function ProjectImplementationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
