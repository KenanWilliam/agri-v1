'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { publicDownloads } from '@/lib/public-downloads'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function OurResultsPage() {
  const downloads = publicDownloads

  const assignments = [
    {
      title: 'Bringing accurate and transparent information to seed sector stakeholders',
      challenge:
        'Kenya Markets Trust identified a lack of accessible, decision-ready information for the crop seed sector, limiting investment and growth.',
      solution:
        'Agri Experience surveyed stakeholders, partnered with KEPHIS, KALRO, and STAK, and built a comprehensive, searchable platform with mapping and filters.',
      benefit:
        'The platform has 1,200+ repeat users and supports seed companies, analysts, and regulators; STAK assumed responsibility for ongoing stewardship.',
      link: 'http://www.seedsectorplatformkenya.com/',
    },
    {
      title: 'Educating crop breeders about crop seed commercialisation',
      challenge:
        'WACCI needed its PhD breeding program to prepare scientists to bring improved varieties to farmers at scale.',
      solution:
        'Agri Experience delivered Seed Business Management training on production, quality, marketing, profitability, and the role of breeders.',
      benefit:
        'Graduates are better equipped to work with commercial partners and deliver real-world farmer impact at scale.',
    },
    {
      title: 'Introducing new drought tolerant maize varieties into the market',
      challenge:
        'A client needed to support private sector licensees to rapidly produce, market, and distribute new drought tolerant maize varieties.',
      solution:
        'Agri Experience surveyed seed companies, clarified information needs, and trained senior staff to think like private sector seed companies.',
      benefit:
        'The first-generation rollout was rapid and successful, enabling strong momentum for subsequent variety releases.',
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="relative w-full pt-32 lg:pt-48 pb-16 overflow-hidden border-b border-mist">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--mist)_0%,transparent_50%)] opacity-50"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-7xl font-serif font-bold text-deep-forest tracking-tight"
            >
              Our Results
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg lg:text-xl text-charcoal/80 max-w-2xl mx-auto font-light leading-relaxed"
            >
              The breadth and impact of our work are highlighted in selected reports and examples of assignments.
            </motion.p>
          </div>
        </section>

        {/* Downloads */}
        <section className="w-full py-16 lg:py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest mb-6">
                Downloads
              </h2>
              <p className="text-lg text-charcoal/80 font-light max-w-3xl mx-auto leading-relaxed">
                Below are downloadable versions of client reports and case studies that are in the public domain. Additional significant client
                work has been completed but is not available to the public per the terms of client engagement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {downloads.map((download, idx) => (
                <motion.div
                  key={`${download.title}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="p-8 lg:p-10 rounded-[32px] bg-mist border border-mist hover:border-primary-green/20 hover:bg-white hover:shadow-xl transition-colors transition-shadow duration-300 ease-in-out"
                >
                  <h3 className="text-xl font-serif font-bold text-deep-forest mb-4">{download.title}</h3>
                  <p className="text-sm font-bold text-primary-green tracking-wide mb-2 uppercase">{download.client}</p>
                  <p className="text-sm text-charcoal/70 font-light leading-relaxed mb-6">{download.citation}</p>
                  <div className="flex flex-wrap gap-4 pt-6 border-t border-primary-green/10 text-sm font-bold">
                    <a
                      href={download.link}
                      className="text-deep-forest hover:text-primary-green transition-colors inline-flex items-center gap-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download PDF <ArrowRight size={14} />
                    </a>
                    {download.clientLink && (
                      <a
                        href={download.clientLink}
                        className="text-deep-forest hover:text-primary-green transition-colors inline-flex items-center gap-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Client Link <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Examples of Assignments */}
        <section className="w-full py-16 lg:py-24 bg-mist border-t border-mist">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest">
                Examples of Assignments
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {assignments.map((assignment, idx) => (
                <motion.div
                  key={`${assignment.title}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-[32px] p-8 lg:p-10 border border-mist shadow-sm hover:shadow-xl transition-colors transition-shadow duration-300 ease-in-out space-y-6"
                >
                  <h3 className="text-xl font-serif font-bold text-deep-forest">{assignment.title}</h3>
                  <div className="space-y-4 text-sm text-charcoal/80 font-light leading-relaxed">
                    <p><span className="font-bold text-deep-forest">Client challenge:</span> {assignment.challenge}</p>
                    <p><span className="font-bold text-deep-forest">Agri Experience solution:</span> {assignment.solution}</p>
                    <p><span className="font-bold text-deep-forest">Client benefit:</span> {assignment.benefit}</p>
                  </div>
                  {assignment.link && (
                    <div className="pt-6 border-t border-mist">
                      <a
                        href={assignment.link}
                        className="text-primary-green font-bold text-sm hover:text-deep-forest transition-colors inline-flex items-center gap-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit resource <ArrowRight size={14} />
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-24 lg:py-32 bg-deep-forest text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--accent-gold)_0%,transparent_40%)] opacity-20"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white">
              Work With Us
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed">
              Contact our team to discuss your seed sector priorities and potential collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-green text-white rounded font-bold transition-colors transition-shadow duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-green/20"
              >
                Get In Touch
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
