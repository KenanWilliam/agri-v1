import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Bebas_Neue, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://agri-experience.com'),
  title: {
    default: 'Agri Experience | Seed Systems & Agricultural Development',
    template: '%s | Agri Experience',
  },
  description: 'Expert consultancy transforming agricultural value chains and seed systems across sub-Saharan Africa. Sustainable development for growing communities.',
  keywords: ['Agriculture', 'Seed Systems', 'Agricultural Development', 'Sub-Saharan Africa', 'Kenya', 'Agri Experience', 'Value Chains'],
  authors: [{ name: 'Agri Experience' }],
  creator: 'Agri Experience',
  publisher: 'Agri Experience',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agri-experience.com',
    siteName: 'Agri Experience',
    title: 'Agri Experience | Seed Systems & Agricultural Development',
    description: 'Expert consultancy transforming agricultural value chains and seed systems across sub-Saharan Africa. Sustainable development for growing communities.',
    images: [
      {
        url: '/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Agri Experience - Agricultural Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agri Experience | Seed Systems & Agricultural Development',
    description: 'Expert consultancy transforming agricultural value chains and seed systems across sub-Saharan Africa.',
    images: ['/hero-bg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.png',
  },
}

import ScrollToTop from '@/components/scroll-to-top'
import AgriLoader from '@/components/agri-loader'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfairDisplay.variable} ${dmSans.variable} ${bebasNeue.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body suppressHydrationWarning className="font-dm-sans antialiased text-foreground">
        <AgriLoader />
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
