import React from 'react'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service - Agri Experience',
  description: 'Understand the terms of service governing the use of Agri Experience platforms and services.',
}

export default function TermsPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen pt-24 lg:pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-charcoal/60 hover:text-primary-green transition-colors text-sm font-medium mb-12 group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="space-y-6 mb-16 border-b border-black/5 pb-10">
          <div className="w-16 h-16 rounded-2xl bg-primary-green/10 flex items-center justify-center text-primary-green">
            <FileText size={32} />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-deep-forest font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="text-charcoal/60 text-lg font-light">
            Last Updated: June 17, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-charcoal/80 font-light leading-relaxed space-y-10">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-deep-forest">1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Agri Experience ("we," "our," or "us"), concerning your access to and use of our website and platform.
            </p>
            <p>
              By accessing the Site, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-deep-forest">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
            </p>
            <p>
              The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-deep-forest">3. User Representations</h2>
            <p>
              By using the Site, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
              <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
              <li>Your use of the Site will not violate any applicable law or regulation.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-deep-forest">4. Prohibited Activities</h2>
            <p>
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-deep-forest">5. Limitations of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-deep-forest">6. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
            </p>
            <div className="bg-white border border-black/5 rounded-2xl p-6 inline-block space-y-2">
              <p className="font-medium text-deep-forest">Agri Experience</p>
              <p>Email: <a href="mailto:info@agriexperience.com" className="text-primary-green hover:underline">info@agriexperience.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
