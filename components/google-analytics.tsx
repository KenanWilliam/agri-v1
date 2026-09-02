'use client'

import Script from 'next/script'
import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer?: any[]
    gtag?: (...args: any[]) => void
  }
}

export default function GoogleAnalytics({ gaId }: { gaId?: string }) {
  const measurementId = gaId || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      try {
        const consent = localStorage.getItem('cookie_consent')
        if (consent === 'granted') {
          window.gtag('consent', 'update', {
            analytics_storage: 'granted',
          })
        }
      } catch {
        // Ignore localStorage access errors
      }
    }
  }, [])

  if (!measurementId) return null

  return (
    <>
      <Script
        id="google-consent-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            var storedConsent = 'denied';
            try {
              if (localStorage.getItem('cookie_consent') === 'granted') {
                storedConsent = 'granted';
              }
            } catch(e) {}

            gtag('consent', 'default', {
              'analytics_storage': storedConsent,
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
          `,
        }}
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
