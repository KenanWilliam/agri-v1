'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { FileText, Download, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function ResourcesPage() {
  const resources = [
    {
      icon: FileText,
      title: 'Seed System Assessment Framework',
      description: 'Comprehensive tool for evaluating seed sector development needs',
      type: 'Guide',
      size: '2.4 MB',
      link: '#',
    },
    {
      icon: BookOpen,
      title: 'Value Chain Integration Manual',
      description: 'Step-by-step guide for connecting producers to markets',
      type: 'Manual',
      size: '3.1 MB',
      link: '#',
    },
    {
      icon: FileText,
      title: 'Farmer Training Curriculum',
      description: 'Complete training program for seed producers and agro-dealers',
      type: 'Curriculum',
      size: '4.2 MB',
      link: '#',
    },
    {
      icon: BookOpen,
      title: 'Market Analysis Report 2024',
      description: 'Detailed analysis of seed markets across 21 African countries',
      type: 'Report',
      size: '5.8 MB',
      link: '#',
    },
    {
      icon: FileText,
      title: 'Climate-Smart Agriculture Guide',
      description: 'Practical approaches for climate-resilient farming',
      type: 'Guide',
      size: '2.9 MB',
      link: '#',
    },
    {
      icon: BookOpen,
      title: 'Monitoring & Evaluation Framework',
      description: 'Tools and methodologies for tracking impact',
      type: 'Framework',
      size: '1.8 MB',
      link: '#',
    },
  ]

  const caseStudies = [
    {
      title: 'Kenya Seed Producer Cooperative Success',
      excerpt: 'How a 500-farmer cooperative increased collective seed production by 300% in 18 months',
      country: 'Kenya',
    },
    {
      title: 'West Africa Youth in Agriculture',
      excerpt: 'Youth-led seed enterprises creating jobs and food security',
      country: 'Ghana',
    },
    {
      title: 'Southern Africa Climate Adaptation',
      excerpt: 'Implementing drought-resistant seed varieties across fragile ecosystems',
      country: 'Zambia',
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="w-full min-h-[400px] flex items-center bg-gradient-to-br from-mint via-background to-cream pt-20 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-serif font-bold text-dark-green"
            >
              Resources
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-dark-blue-gray max-w-2xl mx-auto"
            >
              Access our practical guides, manuals, and case studies to strengthen your agricultural initiatives.
            </motion.p>
          </div>
        </section>

        {/* Downloadable Resources */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
                Download Our Tools
              </h2>
              <p className="text-lg text-dark-blue-gray max-w-2xl mx-auto">
                Free resources to support your agricultural development work
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, idx) => {
                const Icon = resource.icon
                return (
                  <motion.a
                    key={idx}
                    href={resource.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-mint to-cream border-2 border-primary/20 hover:border-primary/50 transition-all group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {resource.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-dark-green mb-2">{resource.title}</h3>
                    <p className="text-sm text-dark-blue-gray mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-dark-blue-gray">{resource.size}</span>
                      <Download size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-mint to-cream">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
                Case Studies
              </h2>
              <p className="text-lg text-dark-blue-gray max-w-2xl mx-auto">
                Real-world examples of successful agricultural transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((study, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border-2 border-primary/10 hover:border-primary/50 transition-all group cursor-pointer"
                >
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-5xl">
                    📊
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-bold text-primary mb-2">{study.country}</p>
                    <h3 className="text-xl font-bold text-dark-green mb-3">{study.title}</h3>
                    <p className="text-dark-blue-gray text-sm mb-4">{study.excerpt}</p>
                    <a
                      href="#"
                      className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                    >
                      Read Case Study →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-8">
                More Resources Available
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-2xl bg-mint border-2 border-primary/20 text-left">
                  <h3 className="text-xl font-bold text-dark-green mb-4">Publications</h3>
                  <ul className="space-y-3 text-dark-blue-gray">
                    <li>✓ Journal articles</li>
                    <li>✓ Research papers</li>
                    <li>✓ Policy briefs</li>
                    <li>✓ White papers</li>
                  </ul>
                </div>

                <div className="p-8 rounded-2xl bg-cream border-2 border-secondary/20 text-left">
                  <h3 className="text-xl font-bold text-dark-green mb-4">Training Materials</h3>
                  <ul className="space-y-3 text-dark-blue-gray">
                    <li>✓ Video tutorials</li>
                    <li>✓ Webinar recordings</li>
                    <li>✓ Presentation slides</li>
                    <li>✓ Training toolkits</li>
                  </ul>
                </div>
              </div>

              <Link
                href="/insights"
                className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Visit Our Insights Blog
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
