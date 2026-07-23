'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  hoverImage?: string
  imagePosition?: string
  hoverImagePosition?: string
  projects?: string[]
}

export default function OurTeamPage() {
  const t = useTranslations('OurTeam')
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const fullTeam: TeamMember[] = [
    {
      name: t('aline_name'),
      role: t('aline_role'),
      bio: t('aline_bio'),
      image: '/team/aline.png',
      imagePosition: '50% 35%',
      projects: t('aline_projects').split(', ')
    },
    {
      name: t('mulemia_name'),
      role: t('mulemia_role'),
      bio: t('mulemia_bio'),
      image: '/team/mulemia2.jpg',
      hoverImage: '/team/mulemia.jpg',
      imagePosition: '54% 27%',
      hoverImagePosition: '55% 21%',
      projects: t('mulemia_projects').split(', ')
    },
    {
      name: t('jayne_name'),
      role: t('jayne_role'),
      bio: t('jayne_bio'),
      image: '/team/jayne2.jpg',
      hoverImage: '/team/jayne.jpg',
      imagePosition: '51% 27%',
      hoverImagePosition: '55% 30%',
      projects: t('jayne_projects').split(', ')
    },
    {
      name: t('ronald_name'),
      role: t('ronald_role'),
      bio: t('ronald_bio'),
      image: '/team/ronald2.jpg',
      hoverImage: '/team/ronald.jpg',
      imagePosition: '52% 27%',
      hoverImagePosition: '55% 27%',
      projects: t('ronald_projects').split(', ')
    },
    {
      name: t('denis_name'),
      role: t('denis_role'),
      bio: t('denis_bio'),
      image: '/team/denis2.jpg',
      hoverImage: '/team/denis.jpg',
      imagePosition: '50% 27%',
      hoverImagePosition: '50% 25%',
      projects: t('denis_projects').split(', ')
    },
    {
      name: t('moses_name'),
      role: t('moses_role'),
      bio: t('moses_bio'),
      image: '/team/moses2.jpg',
      hoverImage: '/team/moses.jpg',
      imagePosition: '50% 26%',
      hoverImagePosition: '50% 26%',
      projects: t('moses_projects').split(', ')
    },
    {
      name: t('claire_name'),
      role: t('claire_role'),
      bio: t('claire_bio'),
      image: '/team/claire2.jpg',
      hoverImage: '/team/claire.jpg',
      imagePosition: '54% 31%',
      hoverImagePosition: '57% 24%',
      projects: t('claire_projects').split(', ')
    },
    {
      name: t('nicholas_name'),
      role: t('nicholas_role'),
      bio: t('nicholas_bio'),
      image: '/team/kilonzo2.jpg',
      hoverImage: '/team/kilonzo.jpg',
      imagePosition: '48% 36%',
      hoverImagePosition: '52% 24%',
      projects: t('nicholas_projects').split(', ')
    },
  ]

  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      
      {/* Editorial Hero */}
      <section className="relative w-full pt-16 lg:pt-28 pb-10 overflow-hidden border-b border-mist snap-start scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--mist)_0%,transparent_50%)] opacity-50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-serif text-deep-forest font-bold tracking-tight">
              {t('title')}
            </h1>
            <p className="text-lg lg:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed font-light">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Layout */}
      <section className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-16 snap-start scroll-mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-12 lg:gap-x-3 lg:gap-y-16">
          {fullTeam.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col"
              onClick={() => setSelectedMember(member)}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-none group-hover:rounded-xl transition-all duration-[800ms] ease-out overflow-hidden shadow-lg mb-6 bg-[#EFEFEF]">
                {member.image && member.image !== '/team/placeholder.jpg' ? (
                  <>
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className={`object-cover transition-all duration-[800ms] ease-out group-hover:scale-110 ${member.hoverImage ? 'group-hover:opacity-0' : ''}`}
                      style={{ objectPosition: member.imagePosition || 'center 25%' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {member.hoverImage && (
                      <Image 
                        src={member.hoverImage} 
                        alt={`${member.name} alternate`} 
                        fill 
                        className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-out"
                        style={{ objectPosition: member.hoverImagePosition || 'center 25%' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-[800ms] ease-out group-hover:scale-110">
                    <span className="text-7xl font-serif text-charcoal/10 font-bold">{member.name.charAt(0)}</span>
                  </div>
                )}
              </div>

              {/* Text Information */}
              <div className="text-left px-2">
                <h3 className="text-2xl font-serif font-bold text-deep-forest group-hover:text-primary-green transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-charcoal/60 mt-2">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal Overlay (Yemanja 2 Style) */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 lg:p-12">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
              onClick={() => setSelectedMember(null)}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[1600px] h-[90vh] bg-white rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 lg:top-10 lg:right-10 z-20 w-16 h-16 rounded-full bg-[#FAFAFA] hover:bg-[#F0F0F0] flex items-center justify-center transition-colors border border-black/5"
                aria-label="Close modal"
              >
                <X className="text-deep-forest" size={32} strokeWidth={1} />
              </button>

              {/* Left Side: Typography & Content */}
              <div className="flex-1 p-10 lg:p-20 flex flex-col justify-between overflow-y-auto hide-scrollbar">
                <div>
                  <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-serif text-deep-forest font-normal leading-[0.9] tracking-tight mb-12">
                    {selectedMember.name.split(' ')[0]}
                    <br />
                    {selectedMember.name.split(' ').slice(1).join(' ')}
                  </h2>

                  <div className="space-y-6 max-w-xl">
                    <p className="text-charcoal/70 text-lg lg:text-xl font-light leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </div>
                </div>

                {/* Tags / Projects area */}
                {selectedMember.projects && selectedMember.projects.length > 0 && (
                  <div className="mt-16 space-y-6">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal/40">
                      {t('expertise_label')}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedMember.projects.map((project, i) => (
                        <span 
                          key={i} 
                          className="px-6 py-3 rounded-full border border-black/10 text-charcoal/70 text-sm hover:border-primary-green hover:text-primary-green transition-colors cursor-default"
                        >
                          {project} ↗
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side: Large Portrait */}
              <div className="hidden lg:block w-[45%] relative bg-[#F5F5F5] m-6 overflow-hidden">
                {selectedMember.image && selectedMember.image !== '/team/placeholder.jpg' ? (
                  <Image 
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    fill 
                    className="object-cover"
                    style={{ objectPosition: selectedMember.imagePosition || 'center 25%' }}
                    sizes="(max-width: 1600px) 45vw, 700px"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[15rem] font-serif text-charcoal/5 font-bold">
                      {selectedMember.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


    </main>
  )
}

