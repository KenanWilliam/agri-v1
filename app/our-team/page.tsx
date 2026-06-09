'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, MapPin, ArrowRight, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  projects?: string[]
}

const WaveText = ({ text, delayOffset = 0 }: { text: string; delayOffset?: number }) => {
  return (
    <div className="flex flex-wrap overflow-hidden">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={{
            initial: { y: '100%', opacity: 0 },
            hover: { 
              y: 0, 
              opacity: 1, 
              transition: { 
                duration: 0.4, 
                delay: delayOffset + i * 0.02, 
                ease: [0.22, 1, 0.36, 1] 
              } 
            }
          }}
          className={char === ' ' ? 'w-2 inline-block' : 'inline-block'}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  )
}

export default function OurTeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const [maxIndex, setMaxIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const fullTeam: TeamMember[] = [
    {
      name: 'Mulemia Maina',
      role: 'Managing Director',
      bio: 'Two decades at the Rockefeller Foundation and AGRA, with a deep seed systems network across the continent. Managed over 350 seed-related grants and is fluent in English, French, and Kiswahili.',
      image: '/team/mulemia.png',
      projects: ['Seed Systems', 'AGRA Grants', 'Rockefeller Foundation']
    },
    {
      name: 'Jayne Ngugi',
      role: 'Director, Finance & Administration',
      bio: 'Leads finance, control, and administration services with a strong private sector background and a commitment to integrity and professionalism.',
      image: '/team/jayne.png',
      projects: ['Finance', 'Administration']
    },
    {
      name: 'Ronald Misigo',
      role: 'Senior Consultant',
      bio: 'Seed systems specialist leading ICT solutions for clients, with strong research and communication skills and a track record of seed-focused tools for stakeholders.',
      image: '/team/ronald.png',
      projects: ['ICT Solutions', 'Digital Agriculture', 'Research']
    },
    {
      name: 'Denis Langat',
      role: 'Client Assignment Assistant',
      bio: 'Supports client activities through research, documentation, record keeping, monitoring, data collection, and analysis.',
      image: '/team/denis.png',
      projects: ['Data Collection', 'Research', 'Monitoring']
    },
    {
      name: 'Moses Adundo',
      role: 'Data Entry Clerk',
      bio: 'Ensures data integrity and supports operational workflows with meticulous attention to detail.',
      image: '/team/placeholder.jpg',
      projects: ['Data Integrity', 'Operations']
    },
    {
      name: 'Claire Wanjiru',
      role: 'Executive Assistant',
      bio: 'Provides comprehensive administrative support to the executive team, ensuring smooth daily operations.',
      image: '/team/placeholder.jpg',
      projects: ['Executive Support', 'Operations']
    },
    {
      name: 'Nicholas Kilonzo',
      role: 'Valued Support Staff',
      bio: 'An integral part of the team, providing essential logistical and office support.',
      image: '/team/kilonzo.png',
      projects: ['Logistics', 'Office Support']
    },
  ]

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current && trackRef.current.children[0]) {
        const child = trackRef.current.children[0] as HTMLElement;
        const gap = window.innerWidth >= 1024 ? 48 : window.innerWidth >= 768 ? 32 : 16;
        const width = child.offsetWidth + gap;
        setCardWidth(width);
        
        // Calculate max index to prevent scrolling past the end
        const visibleWidth = window.innerWidth - (window.innerWidth >= 1024 ? 160 : 48); // accounting for px-6/px-20 padding
        const visibleCards = Math.max(1, Math.floor(visibleWidth / width));
        setMaxIndex(Math.max(0, fullTeam.length - visibleCards));
      }
    };
    
    setTimeout(updateWidth, 100); // Wait for initial render
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [fullTeam.length]);

  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      
      {/* Clean, minimalist Header Space matching the vibe */}
      <section className="pt-40 lg:pt-56 pb-20 px-6 max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-serif text-deep-forest font-bold tracking-tight leading-[0.9]">
            Our Team.
          </h1>
          <p className="text-xl lg:text-3xl text-charcoal/60 font-light max-w-2xl leading-relaxed">
            Dedicated experts. Shared vision. Cultivating sustainable seed systems across Africa.
          </p>
        </motion.div>
      </section>

      {/* Horizontal Scrolling Carousel with Secondary Navigation */}
      <section className="w-full pb-32 pt-16 relative group/section">
        {/* Navigation Buttons (Centered absolutely) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 right-4 md:right-8 z-30 flex justify-between pointer-events-none [@media(pointer:coarse)]:hidden">
          <button 
            onClick={() => setCurrentIndex(prev => Math.max(prev - 1, 0))}
            disabled={currentIndex === 0}
            className="w-16 h-16 md:w-20 md:h-20 pointer-events-auto bg-white/90 backdrop-blur rounded-full border border-charcoal/10 flex items-center justify-center hover:bg-white hover:scale-105 transition-all disabled:opacity-0 disabled:pointer-events-none shadow-xl"
            aria-label="Previous"
          >
            <ArrowLeft className="text-deep-forest w-8 h-8 md:w-10 md:h-10" />
          </button>
          <button 
            onClick={() => setCurrentIndex(prev => Math.min(prev + 1, maxIndex))}
            disabled={currentIndex >= maxIndex}
            className="w-16 h-16 md:w-20 md:h-20 pointer-events-auto bg-white/90 backdrop-blur rounded-full border border-charcoal/10 flex items-center justify-center hover:bg-white hover:scale-105 transition-all disabled:opacity-0 disabled:pointer-events-none shadow-xl"
            aria-label="Next"
          >
            <ArrowRight className="text-deep-forest w-8 h-8 md:w-10 md:h-10" />
          </button>
        </div>

        <div className="w-full overflow-hidden px-6 md:px-12 lg:px-20 py-24 flex items-center">
          <motion.div 
            ref={trackRef}
            className="flex gap-4 md:gap-6 lg:gap-8 w-max items-center cursor-grab active:cursor-grabbing touch-pan-y"
            drag="x"
            dragConstraints={{ left: -((maxIndex || 0) * (cardWidth || 0)), right: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x + velocity.x * 0.2;
              const threshold = cardWidth ? cardWidth / 4 : 50;
              const cardsToSwipe = cardWidth ? Math.max(1, Math.round(Math.abs(swipe) / cardWidth)) : 1;
              
              if (swipe < -threshold && currentIndex < maxIndex) {
                setCurrentIndex(prev => Math.min(prev + cardsToSwipe, maxIndex));
              } else if (swipe > threshold && currentIndex > 0) {
                setCurrentIndex(prev => Math.max(prev - cardsToSwipe, 0));
              }
            }}
            animate={{ x: -(currentIndex * cardWidth) }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          >
            {fullTeam.map((member, idx) => {
              // The magic switching logic: alternate heights based on absolute distance to currentIndex
              // (idx - currentIndex) % 2 !== 0 ensures the first card always starts in the downward position
              const isUp = Math.abs(idx - currentIndex) % 2 !== 0;
              return (
                <motion.div
                  key={idx}
                  initial="initial"
                  whileHover="hover"
                  animate={{ y: isUp ? -24 : 24 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                  className="shrink-0 cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[550px] lg:w-[450px] lg:h-[650px] rounded-[2rem] overflow-hidden group shadow-lg">
                    {/* Image */}
                    {member.image && member.image !== '/team/placeholder.jpg' ? (
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                        sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 450px"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#EFEFEF] flex items-center justify-center">
                        <span className="text-8xl font-serif text-charcoal/10 font-bold">{member.name.charAt(0)}</span>
                      </div>
                    )}

                    {/* Dark Overlay for Text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/90 via-deep-forest/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 [@media(pointer:coarse)]:hidden" />

                    {/* Hover Info (Wave Animation) */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10 pointer-events-none [@media(pointer:coarse)]:hidden">
                      <div className="text-white text-3xl md:text-4xl font-serif font-bold mb-2">
                        <WaveText text={member.name} delayOffset={0} />
                      </div>
                      <div className="text-primary-green/90 text-sm md:text-base font-bold uppercase tracking-[0.15em]">
                        <WaveText text={member.role} delayOffset={0.1} />
                      </div>
                    </div>
                  </div>

                  {/* Touch device label below card */}
                  <div className="hidden [@media(pointer:coarse)]:block mt-6 text-left px-2">
                    <h3 className="text-2xl font-serif font-bold text-deep-forest">{member.name}</h3>
                    <p className="text-sm font-bold uppercase tracking-[0.15em] text-charcoal/60 mt-1">{member.role}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
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
                    <p className="text-primary-green font-bold uppercase tracking-[0.2em] text-sm">
                      {selectedMember.role}
                    </p>
                    <p className="text-charcoal/70 text-lg lg:text-xl font-light leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </div>
                </div>

                {/* Tags / Projects area */}
                {selectedMember.projects && selectedMember.projects.length > 0 && (
                  <div className="mt-16 space-y-6">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal/40">
                      Expertise / Focus:
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
              <div className="hidden lg:block w-[45%] relative bg-[#F5F5F5] m-6 rounded-[2rem] overflow-hidden">
                {selectedMember.image && selectedMember.image !== '/team/placeholder.jpg' ? (
                  <Image 
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    fill 
                    className="object-cover object-top"
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

      {/* Curated Stats Section to match the minimalist vibe */}
      <section className="max-w-[1800px] mx-auto px-6 py-16 lg:py-24 border-t border-black/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-4">
            <div className="text-5xl lg:text-7xl font-serif font-normal text-deep-forest">85+</div>
            <div className="text-charcoal/60 text-sm font-bold uppercase tracking-[0.15em]">Years Combined<br/>Experience</div>
          </div>
          <div className="space-y-4">
            <div className="text-5xl lg:text-7xl font-serif font-normal text-deep-forest">350+</div>
            <div className="text-charcoal/60 text-sm font-bold uppercase tracking-[0.15em]">Grants<br/>Managed</div>
          </div>
          <div className="space-y-4">
            <div className="text-5xl lg:text-7xl font-serif font-normal text-deep-forest">15+</div>
            <div className="text-charcoal/60 text-sm font-bold uppercase tracking-[0.15em]">African<br/>Countries</div>
          </div>
          <div className="space-y-4">
            <div className="text-5xl lg:text-7xl font-serif font-normal text-deep-forest">100%</div>
            <div className="text-charcoal/60 text-sm font-bold uppercase tracking-[0.15em]">Commitment<br/>to Impact</div>
          </div>
        </div>
      </section>

      {/* Simplified Curated Extended Network Section */}
      <section className="w-full py-24 lg:py-32 bg-white relative">
        <div className="max-w-[1800px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-5xl lg:text-7xl font-serif font-normal text-deep-forest leading-[0.9]">
                Extended<br/>Network.
              </h2>
              <p className="text-charcoal/60 text-xl font-light leading-relaxed max-w-md">
                We work with a curated network of vetted consultants across Africa to deepen our ability to deliver.
              </p>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
              <div className="space-y-8">
                <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-black/5 flex items-center justify-center text-primary-green">
                  <Sparkles size={20} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-deep-forest">Consultants</h3>
                  <ul className="space-y-3 text-charcoal/60 font-light text-lg">
                    <li>Nicholas Kilonzo &mdash; Senior Consultant</li>
                    <li>Extensive network of local experts</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-black/5 flex items-center justify-center text-accent-gold">
                  <MapPin size={20} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-deep-forest">Our Journey</h3>
                  <ul className="space-y-3 text-charcoal/60 font-light text-lg">
                    <li><span className="font-medium text-deep-forest">1991</span> &mdash; Seed sector experience begins</li>
                    <li><span className="font-medium text-deep-forest">2007</span> &mdash; Work across Africa accelerates</li>
                    <li><span className="font-medium text-deep-forest">2012</span> &mdash; Agri Experience is founded</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

