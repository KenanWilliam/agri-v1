'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function InsightsPage() {
  const articles = [
    {
      title: 'Climate Change and African Seed Systems: Adaptation Strategies',
      excerpt:
        'How seed systems can be made climate-resilient and what governments should prioritize.',
      date: 'March 15, 2024',
      category: 'Climate & Agriculture',
      author: 'Dr. Sarah Mwangi',
      readTime: '8 min',
    },
    {
      title: 'Youth Entrepreneurship in Agriculture: Breaking Barriers',
      excerpt: 'Creating opportunities for young farmers and agripreneurs across Africa.',
      date: 'March 8, 2024',
      category: 'Youth & Employment',
      author: 'James Kiprop',
      readTime: '6 min',
    },
    {
      title: 'Digital Tools for Seed Producers: A Practical Guide',
      excerpt:
        'How technology can improve seed production efficiency and market access.',
      date: 'February 28, 2024',
      category: 'Technology',
      author: 'Kofi Mensah',
      readTime: '10 min',
    },
    {
      title: 'Gender in Agriculture: Empowering Women Farmers',
      excerpt: 'Why gender equality is key to agricultural transformation.',
      date: 'February 20, 2024',
      category: 'Gender & Inclusion',
      author: 'Amina Hassan',
      readTime: '7 min',
    },
    {
      title: 'Market Access Solutions for Smallholder Farmers',
      excerpt:
        'Connecting small producers to lucrative markets and improving profitability.',
      date: 'February 12, 2024',
      category: 'Market Systems',
      author: 'Grace Okonkwo',
      readTime: '9 min',
    },
    {
      title: 'Strengthening Seed Quality: Standards & Certification',
      excerpt: 'Ensuring seed quality across supply chains in developing contexts.',
      date: 'February 5, 2024',
      category: 'Quality & Standards',
      author: 'Prof. David Kabir',
      readTime: '8 min',
    },
  ]

  const categories = [
    'All',
    'Climate & Agriculture',
    'Youth & Employment',
    'Technology',
    'Gender & Inclusion',
    'Market Systems',
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
              Insights & Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-dark-blue-gray max-w-2xl mx-auto"
            >
              Explore articles, analysis, and stories from the field about agricultural transformation.
            </motion.p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="w-full py-8 bg-white border-b border-mint sticky top-16 z-30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex overflow-x-auto gap-3 pb-2">
              {categories.map((cat, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                    idx === 0
                      ? 'bg-primary text-white'
                      : 'bg-mint text-dark-green hover:bg-primary/20'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="rounded-2xl overflow-hidden bg-white border-2 border-primary/10 hover:border-primary/50 transition-all group cursor-pointer"
                >
                  {/* Featured Image */}
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                    📰
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-dark-blue-gray">{article.readTime} read</span>
                    </div>

                    <h3 className="text-lg font-bold text-dark-green leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-sm text-dark-blue-gray leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="space-y-3 border-t border-mint pt-4">
                      <div className="flex items-center gap-2 text-xs text-dark-blue-gray">
                        <Calendar size={14} />
                        {article.date}
                      </div>
                      <p className="text-sm font-semibold text-dark-green">by {article.author}</p>
                    </div>

                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform"
                    >
                      Read Article <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
              <button className="px-8 py-4 bg-mint hover:bg-primary/10 text-primary rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Load More Articles
              </button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green">
              Get Insights Delivered
            </h2>
            <p className="text-lg text-dark-blue-gray">
              Subscribe to our newsletter for weekly insights and updates from the field.
            </p>
            <Link
              href="/newsletter"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Subscribe Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
