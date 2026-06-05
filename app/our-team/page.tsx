'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function OurTeamPage() {
  const team = [
    {
      name: 'Mulemia Maina',
      role: 'Managing Director',
      bio:
        'Two decades at the Rockefeller Foundation and AGRA, with a deep seed systems network across the continent. Managed over 350 seed-related grants and is fluent in English, French, and Kiswahili.',
      image: '/team/mulemia.png',
    },
    {
      name: 'Jayne Ngugi',
      role: 'Director, Finance & Administration',
      bio:
        'Leads finance, control, and administration services with a strong private sector background and a commitment to integrity and professionalism.',
      image: '/team/jayne.png',
    },
    {
      name: 'Ronald Misigo',
      role: 'Senior Consultant - Seed Systems & Digital Agriculture',
      bio:
        'Seed systems specialist leading ICT solutions for clients, with strong research and communication skills and a track record of seed-focused tools for stakeholders.',
      image: '/team/ronald.png',
    },
    {
      name: 'Denis Langat',
      role: 'Client Assignment  Assistant',
      bio:
        'Supports client activities through research, documentation, record keeping, monitoring, data collection, and analysis.',
      image: '/team/denis.png',
    },
    {
      name: 'Nicholas Kilonzo',
      role: 'Valued Support Staff',
      bio: '',
      image: '/team/kilonzo.png',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <>      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full pt-32 lg:pt-48 pb-24 overflow-hidden bg-deep-forest text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent-gold)_0%,transparent_50%)] opacity-20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--primary-green)_0%,transparent_50%)] opacity-10"></div>
          
          <div className="relative z-10 max-w-[1400px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center"
            >
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent-gold/20 rounded-full mb-4 mx-auto">
                <Sparkles className="text-accent-gold" size={16} />
                <span className="text-sm font-bold text-accent-gold uppercase tracking-widest">Our Team</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif text-white font-bold tracking-tight">
                Dedicated Experts, <br />Shared Vision
              </h1>
              
              <p className="text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                Our core team brings decades of combined experience in seed systems development, technical innovation, and strategic implementation across Africa and beyond.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Members Grid Section */}
        <section className="w-full py-24 lg:py-32 bg-white relative overflow-hidden">
          <div className="max-w-[1800px] mx-auto px-6 relative z-10">
            <div className="text-center mb-24 space-y-4">
              <h2 className="text-deep-forest text-4xl lg:text-5xl font-serif font-bold">Meet Our Team</h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto text-lg font-light">
                Each member brings unique expertise and a profound commitment to advancing agricultural development across Africa.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {team.map((member, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative h-full"
                >
                  <div className="relative bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    {/* Image Container - Larger and more prominent */}
                    <div className="relative w-full h-80 lg:h-96 bg-gradient-to-br from-primary-green/20 via-accent-gold/10 to-mist overflow-hidden">
                      {/* Fallback gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-b from-accent-gold/40 via-primary-green/20 to-mist/80 z-0"></div>
                      
                      {/* Image with fallback */}
                      {member.image && member.image !== '/team/placeholder.jpg' ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300 z-10"
                          priority={idx === 0}
                          onError={() => {
                            // Fallback if image fails to load
                          }}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="text-center space-y-6">
                            <div className="w-32 h-32 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center mx-auto shadow-lg border border-white/20">
                              <span className="text-7xl font-serif text-white/50 font-bold">{member.name.charAt(0)}</span>
                            </div>
                            <p className="text-sm text-white/70 font-medium px-4">{member.name}</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 space-y-3 flex-grow flex flex-col justify-between">
                      <div className="space-y-3">
                        <h3 className="text-xl lg:text-2xl text-deep-forest font-serif font-bold">{member.name}</h3>
                        <p className="text-sm font-bold text-primary-green uppercase tracking-widest">{member.role}</p>
                      </div>
                      
                      {member.bio && (
                        <p className="text-sm text-charcoal/70 font-light leading-relaxed">
                          {member.bio}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Supporting Consultants Section */}
        <section className="w-full py-20 lg:py-28 bg-white border-t border-mist relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
          
          <div className="max-w-[1800px] mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center space-y-4">
                <h2 className="text-deep-forest text-4xl lg:text-5xl font-serif font-bold">Our Extended Network</h2>
                <p className="text-charcoal/70 max-w-2xl mx-auto text-lg font-light">
                  We work with a carefully curated network of vetted consultants and partners across Africa and beyond.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-br from-primary-green/5 to-accent-gold/5 border border-primary-green/10 rounded-[28px] p-10 lg:p-12 space-y-6"
                >
                  <div className="w-14 h-14 rounded-full bg-primary-green/20 flex items-center justify-center">
                    <Sparkles className="text-primary-green" size={28} />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-deep-forest">Supporting Consultants</h3>
                  
                  <p className="text-charcoal/80 font-light leading-relaxed">
                    Our long-standing relationships with experienced seed system experts across sub-Saharan Africa deepen our ability to deliver
                    successful results to our clients.
                  </p>
                  
                  <ul className="space-y-3 pt-4 border-t border-primary-green/10">
                    <li className="text-charcoal/90 font-light">
                      <span className="text-primary-green font-bold">•</span> Nicholas Kilonzo — Senior Consultant
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-br from-accent-gold/5 to-primary-green/5 border border-accent-gold/10 rounded-[28px] p-10 lg:p-12 space-y-6"
                >
                  <div className="w-14 h-14 rounded-full bg-accent-gold/20 flex items-center justify-center">
                    <Sparkles className="text-accent-gold" size={28} />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-deep-forest">Our Journey</h3>
                  
                  <ul className="space-y-4 text-charcoal/90 font-light">
                    <li><span className="text-accent-gold font-bold">1991</span> — Principals' seed sector experience begins.</li>
                    <li><span className="text-accent-gold font-bold">2007</span> — Seed systems work across Africa accelerates.</li>
                    <li><span className="text-accent-gold font-bold">2012</span> — Agri Experience, Ltd. is founded.</li>
                    <li><span className="text-accent-gold font-bold">Today</span> — Over 85 years of combined seed sector experience.</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24 lg:py-32 bg-deep-forest text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent-gold)_0%,transparent_60%)] opacity-15"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-white text-4xl lg:text-5xl font-serif font-bold">Ready to Collaborate?</h2>
              <p className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed">
                Let's work together to transform agricultural systems and create sustainable impact across Africa.
              </p>
              
              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-gold text-deep-forest rounded-lg font-bold transition-all duration-300 hover:shadow-xl hover:shadow-accent-gold/30 hover:scale-105">
                  Get In Touch
                  <ArrowRight size={20} />
                </Link>
                
                <Link href="/about" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent-gold text-accent-gold rounded-lg font-bold transition-all duration-300 hover:bg-accent-gold hover:text-deep-forest">
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>    </>
  )
}
