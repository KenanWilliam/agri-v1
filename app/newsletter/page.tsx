'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, Users, TrendingUp } from 'lucide-react'
import { useState } from 'react'

export default function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
      setInterests([])
    }, 3000)
  }

  const newsletters = [
    {
      name: 'Weekly Digest',
      description: 'Latest news, insights, and updates from the field',
      frequency: 'Every Monday',
      topics: ['Market Updates', 'Research Insights', 'Success Stories'],
    },
    {
      name: 'Technical Newsletter',
      description: 'In-depth articles on seed systems and agricultural technology',
      frequency: 'Bi-weekly',
      topics: ['Seed Technology', 'Value Chains', 'Capacity Building'],
    },
    {
      name: 'Impact Stories',
      description: 'Stories of change from our partner communities',
      frequency: 'Monthly',
      topics: ['Farmer Stories', 'Community Impact', 'Case Studies'],
    },
  ]

  const interestOptions = [
    'Market Systems',
    'Climate & Agriculture',
    'Youth & Entrepreneurship',
    'Gender & Inclusion',
    'Technology & Innovation',
    'Policy & Advocacy',
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
              Subscribe to Our Newsletters
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-dark-blue-gray max-w-2xl mx-auto"
            >
              Stay updated with the latest insights, stories, and developments in agricultural transformation across Africa.
            </motion.p>
          </div>
        </section>

        {/* Newsletter Options */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
                Our Newsletters
              </h2>
              <p className="text-lg text-dark-blue-gray max-w-2xl mx-auto">
                Choose your preferred newsletter to stay informed
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {newsletters.map((newsletter, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-mint to-cream border-2 border-primary/20"
                >
                  <h3 className="text-2xl font-bold text-dark-green mb-2">{newsletter.name}</h3>
                  <p className="text-dark-blue-gray mb-4">{newsletter.description}</p>
                  <p className="text-sm font-semibold text-primary mb-4">
                    📅 {newsletter.frequency}
                  </p>
                  <div className="space-y-2">
                    {newsletter.topics.map((topic) => (
                      <div key={topic} className="flex gap-2 text-sm">
                        <span className="text-primary">✓</span>
                        <span className="text-dark-blue-gray">{topic}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Signup Form */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-mint to-cream">
          <div className="max-w-2xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 md:p-12 border-2 border-primary/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <Mail className="text-primary" size={28} />
                <h2 className="text-3xl font-bold text-dark-green">Sign Up Now</h2>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <CheckCircle className="w-16 h-16 text-primary mx-auto" />
                  <h3 className="text-2xl font-bold text-dark-green">
                    Subscription Confirmed!
                  </h3>
                  <p className="text-dark-blue-gray">
                    Check your email for a confirmation message. Welcome to our community!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-green mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-mint bg-cream/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-green mb-4">
                      What interests you? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {interestOptions.map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 border-2 ${
                            interests.includes(interest)
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-mint bg-mint text-dark-green hover:border-primary/30'
                          }`}
                        >
                          {interests.includes(interest) ? '✓ ' : ''}
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Frequency */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-green mb-3">
                      Email Frequency
                    </label>
                    <div className="space-y-2">
                      {['Weekly', 'Bi-weekly', 'Monthly'].map((freq) => (
                        <label key={freq} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="frequency"
                            defaultChecked={freq === 'Weekly'}
                            className="w-4 h-4"
                          />
                          <span className="text-dark-green">{freq}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Selection */}
                  <div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-dark-green">
                        I agree to receive newsletters and updates
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Subscribe to Newsletters
                  </motion.button>

                  <p className="text-xs text-dark-blue-gray text-center">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* Why Subscribe */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-12 text-center"
            >
              Why Subscribe?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: 'Stay Informed',
                  desc: 'Latest insights on agricultural trends and market developments',
                },
                {
                  icon: Users,
                  title: 'Learn from Others',
                  desc: 'Success stories and case studies from across Africa',
                },
                {
                  icon: CheckCircle,
                  title: 'Expert Knowledge',
                  desc: 'Practical guidance from our experienced team',
                },
              ].map((benefit, idx) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-dark-green mb-2">{benefit.title}</h3>
                    <p className="text-dark-blue-gray">{benefit.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
