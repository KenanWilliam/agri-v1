'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', organization: '', message: '' })
  }

  const offices = [
    {
      region: 'East Africa',
      country: 'Kenya',
      address: 'Nairobi, Kenya',
      email: 'east@agri-experience.com',
      phone: '+254 (0) 700 000 001',
    },
    {
      region: 'West Africa',
      country: 'Senegal',
      address: 'Dakar, Senegal',
      email: 'west@agri-experience.com',
      phone: '+221 (0) 700 000 002',
    },
    {
      region: 'Southern Africa',
      country: 'Zimbabwe',
      address: 'Harare, Zimbabwe',
      email: 'south@agri-experience.com',
      phone: '+263 (0) 700 000 003',
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="w-full min-h-[300px] flex items-center bg-gradient-to-br from-primary/10 to-secondary/10 pt-20 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-serif font-bold text-dark-green"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-dark-blue-gray max-w-2xl mx-auto"
            >
              Ready to transform your agricultural systems? Contact our team today.
            </motion.p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-bold text-dark-green mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-dark-green mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-mint bg-cream/50 focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-green mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-mint bg-cream/50 focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-green mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-mint bg-cream/50 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-green mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-mint bg-cream/50 focus:border-primary focus:outline-none transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                  >
                    {submitted ? '✓ Message Sent!' : 'Send Message'}
                    {!submitted && <Send size={18} />}
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-serif font-bold text-dark-green mb-6">
                    Contact Information
                  </h2>
                  <p className="text-dark-blue-gray leading-relaxed mb-8">
                    Our teams across East, West, and Southern Africa are ready to discuss how we can support your agricultural development goals.
                  </p>
                </div>

                {/* Offices */}
                <div className="space-y-6">
                  {offices.map((office, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="p-6 rounded-xl bg-mint border border-primary/20 hover:border-primary/50 transition-all duration-300"
                    >
                      <p className="text-sm font-bold text-primary mb-3">{office.region}</p>
                      <h3 className="text-xl font-bold text-dark-green mb-4">{office.country}</h3>

                      <div className="space-y-3">
                        <div className="flex gap-3 items-start">
                          <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                          <p className="text-dark-blue-gray">{office.address}</p>
                        </div>
                        <div className="flex gap-3 items-start">
                          <Mail size={18} className="text-primary flex-shrink-0 mt-1" />
                          <a
                            href={`mailto:${office.email}`}
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            {office.email}
                          </a>
                        </div>
                        <div className="flex gap-3 items-start">
                          <Phone size={18} className="text-primary flex-shrink-0 mt-1" />
                          <a
                            href={`tel:${office.phone}`}
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Links */}
                <div className="pt-6 border-t-2 border-mint space-y-3">
                  <p className="font-semibold text-dark-green">Other Ways to Connect</p>
                  <div className="flex gap-3">
                    <a
                      href="https://linkedin.com"
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-semibold"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://twitter.com"
                      className="px-4 py-2 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition-colors text-sm font-semibold"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
