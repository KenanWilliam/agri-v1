'use client'

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
      region: 'Head Office',
      country: 'Kenya',
      address: 'Watermark Business Park - Spring Court Ground Floor, Karen. P.O. Box 1720 - 00606, Nairobi, Kenya',
      email: 'info@agri-experience.com',
      phone: '+254 (20) 2626888',
      mobile: '+254 (719) 554 154',
    },
  ]

  return (
    <>      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="relative w-full pt-24 lg:pt-28 pb-10 overflow-hidden border-b border-mist">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--mist)_0%,transparent_50%)] opacity-50"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-6 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-7xl font-serif font-bold text-deep-forest tracking-tight"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg lg:text-xl text-charcoal/80 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Agri Experience is an African consulting firm focused on developing strong seed systems in sub-Saharan Africa. We look forward to hearing from you.
            </motion.p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-bold text-deep-forest mb-8">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-deep-forest mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-mist bg-mist/30 focus:border-primary-green focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-deep-forest mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-mist bg-mist/30 focus:border-primary-green focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-deep-forest mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-mist bg-mist/30 focus:border-primary-green focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-deep-forest mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-mist bg-mist/30 focus:border-primary-green focus:outline-none transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-8 py-4 bg-deep-forest text-white rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-deep-forest/20 transition-[background-color,border-color,box-shadow] duration-200"
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
                className="space-y-10"
              >
                <div>
                  <h2 className="text-3xl font-serif font-bold text-deep-forest mb-6">
                    Contact Information
                  </h2>
                  <p className="text-charcoal/80 font-light leading-relaxed mb-8">
                    Contact Agri Experience to learn more about our firm and how we can support seed sector development across sub-Saharan Africa.
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
                      className="p-8 rounded-3xl bg-mist border border-mist hover:border-primary-green/20 transition-[background-color,border-color,box-shadow] duration-200"
                    >
                      <p className="text-sm font-bold text-primary-green tracking-widest uppercase mb-3">{office.region}</p>
                      <h3 className="text-2xl font-serif font-bold text-deep-forest mb-6">{office.country}</h3>

                      <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                          <MapPin size={20} className="text-primary-green flex-shrink-0 mt-0.5" />
                          <p className="text-charcoal/80 font-light leading-relaxed">{office.address}</p>
                        </div>
                        <div className="flex gap-4 items-start">
                          <Mail size={20} className="text-primary-green flex-shrink-0 mt-0.5" />
                          <a
                            href={`mailto:${office.email}`}
                            className="text-charcoal/80 hover:text-primary-green font-light transition-colors"
                          >
                            {office.email}
                          </a>
                        </div>
                        <div className="flex gap-4 items-start">
                          <Phone size={20} className="text-primary-green flex-shrink-0 mt-0.5" />
                          <a
                            href={`tel:${office.phone}`}
                            className="text-charcoal/80 hover:text-primary-green font-light transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                        {office.mobile && (
                          <div className="flex gap-4 items-start">
                            <Phone size={20} className="text-primary-green flex-shrink-0 mt-0.5" />
                            <a
                              href={`tel:${office.mobile}`}
                              className="text-charcoal/80 hover:text-primary-green font-light transition-colors"
                            >
                              {office.mobile}
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full h-64 rounded-3xl overflow-hidden shadow-lg border border-mist mt-8"
                  >
                    <iframe
                      src="https://maps.google.com/maps?q=Watermark%20Business%20Park,%20Karen,%20Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>    </>
  )
}
