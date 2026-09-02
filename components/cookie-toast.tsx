'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import LiquidGlass from './liquid-glass'

export default function CookieToast() {
  const t = useTranslations('CookieToast')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie_consent')
      if (!consent) {
        // Delay slightly for smooth entrance after initial page mount
        const timer = setTimeout(() => setVisible(true), 1200)
        return () => clearTimeout(timer)
      }
    } catch {
      // If localStorage is unavailable, do nothing
    }
  }, [])

  const handleConsent = (status: 'granted' | 'denied') => {
    try {
      localStorage.setItem('cookie_consent', status)
    } catch {
      // Ignore
    }

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: status,
      })
    }

    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100%-2rem)] max-w-[420px] rounded-[24px] shadow-2xl overflow-hidden border border-black/10"
        >
          <LiquidGlass
            blurAmount={0.25}
            elasticity={0}
            displacementScale={100}
            saturation={120}
            cornerRadius={24}
            padding="0"
            overLight={false}
            className="w-full"
          >
            <div className="p-5 sm:p-6 w-full text-deep-forest text-left">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary-green/15 flex items-center justify-center text-primary-green shrink-0">
                    <Cookie size={18} />
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-deep-forest">
                    {t('title')}
                  </h3>
                </div>
                <button
                  onClick={() => handleConsent('denied')}
                  className="text-charcoal/50 hover:text-charcoal p-1 rounded-full hover:bg-black/5 transition-colors"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              <p className="text-xs sm:text-[13.5px] text-charcoal/85 font-normal leading-relaxed mb-4">
                {t('desc')}{' '}
                <Link
                  href="/privacy"
                  className="text-primary-green font-medium underline underline-offset-2 hover:text-deep-forest transition-colors"
                >
                  {t('privacy_policy')}
                </Link>
                .
              </p>

              <div className="flex items-center justify-end gap-2.5 pt-1">
                <button
                  onClick={() => handleConsent('denied')}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-charcoal/70 bg-black/5 hover:bg-black/10 transition-colors"
                >
                  {t('decline')}
                </button>
                <button
                  onClick={() => handleConsent('granted')}
                  className="px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-primary-green hover:bg-[#1A4D2E] transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {t('accept')}
                </button>
              </div>
            </div>
          </LiquidGlass>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
