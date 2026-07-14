'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, MapPin, ArrowRight, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  projects?: string[]
}

const WaveText = ({ text, delayOffset = 0 }: { text: string; delayOffset?: number }) => {
  return (
    <div className="flex flex-wrap overflow-hidden pb-3 -mb-3">
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
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.documentElement.classList.add('snap-y', 'snap-mandatory')
    return () => {
      document.documentElement.classList.remove('snap-y', 'snap-mandatory')
    }
  }, [])

  useEffect(() => {
    if (!api) return

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentIndex(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrentIndex(api.selectedScrollSnap())
    })
  }, [api])

  const fullTeam: TeamMember[] = [
    {
      name: "Aline O'Connor",
      role: "Founding Director",
      bio: "Aline is an experienced seed company practitioner, teacher, writer, manager, strategist, and entrepreneur, who has worked on seed systems in Africa since 2007. Aline has worked in the crop seed industry in the US and Africa for close to 30 years, including nine years as the CEO of a large US crop seed company. As the Founding Director of Agri Experience, Aline is highly committed to building and supporting local teams to catalyze growth and opportunity in Africa, and remains available as an advisor to the company.",
      image: '/team/aline.png',
      projects: ['Seed Systems', 'Crop Seed Industry', 'Strategic Advising', 'Entrepreneurship']
    },
    {
      name: 'Mulemia Maina',
      role: 'Managing Director',
      bio: 'Mulemia Maina who leads the team, is a distinguished leader in Africa’s seed sector with over 25 years of expertise in the seed and agricultural sector, spanning public-private partnerships, enterprise development, strategic programming, and donor relations. She has managed over 350 projects across 22 countries, collaborating with governments, regional bodies, and over 100 seed companies to strengthen policy, capacity, and last-mile delivery. Passionate about empowering farmers, Mulemia champions improved technologies and transformative seed system initiatives to enhance livelihoods across sub-Saharan Africa. She is fluent in English, French, and Kiswahili.',
      image: '/team/mulemia.png',
      projects: ['Seed Systems', 'AGRA Grants', 'Rockefeller Foundation']
    },
    {
      name: 'Jayne Ngugi',
      role: 'Director, Finance & Administration',
      bio: 'Jayne leads the finance and administration portfolio, providing the finance, control, and administration services which underpin the team’s ability to serve clients efficiently and effectively. Jayne also has a strong private sector background and brings a deep level of integrity and professionalism to her role at Agri Experience.',
      image: '/team/jayne.png',
      projects: ['Finance', 'Administration']
    },
    {
      name: 'Ronald Misigo',
      role: 'Technical Lead',
      bio: 'Ronald serves as technical lead and is a dynamic seed systems and ICT specialist with over 13 years of experience in food systems, digital solutions, and data analytics. He leads the design and implementation of innovative ICT platforms that strengthen agricultural value chains, particularly in the seed sector across Africa. Skilled in project management, stakeholder engagement, and evidence-based policy support, he translates complex data into actionable insights. Ronald has developed impactful seed-focused tools and digital feedback systems that empower farmers, agrodealers, and regulators.',
      image: '/team/ronald.png',
      projects: ['System Architecture', 'Technical Design', 'Integration']
    },
    {
      name: 'Denis Langat',
      role: 'M+E Specialist',
      bio: 'Denis is a young and dynamic project monitoring specialist who supports client related activities with a focus on general research, documentation, record keeping, project monitoring, data collection and analysis.',
      image: '/team/denis.png',
      projects: ['PSTA-5 Indicators', 'Data Analysis', 'Dashboard Development']
    },
    {
      name: 'Moses Adundo',
      role: 'Data Analyst',
      bio: 'Moses supports digital tools quality assurance and testing processes, including functional, integration, performance, and user acceptance testing. He ensures the system meets defined requirements, is free of critical defects, and performs reliably before deployment.',
      image: '/team/placeholder.jpg',
      projects: ['Quality Assurance', 'Testing Processes', 'User Acceptance Testing']
    },
    /*
    {
      name: 'Kenan William',
      role: 'UI/UX Designer',
      bio: 'Responsible for user interface design, ensuring the platform is intuitive, user-friendly and accessible to diverse stakeholders',
      image: '/team/placeholder.jpg',
      projects: ['UI/UX Design', 'User Research', 'Accessibility']
    },
    */
    {
      name: 'Claire Wanjiru',
      role: 'Executive Assistant',
      bio: 'Claire provides high-level administrative and logistics support to ensure seamless company operations. She supports technical operations including asset management, budget coordination, process optimization and keeps operations well aligned by managing workflows and complex schedules. Her dedication to operational excellence and organizational effectiveness enables the team to focus on strategic priorities and ensures that company’s objectives are met with precision, supporting the broader mission and driving sustainable success.',
      image: '/team/placeholder.jpg',
      projects: ['Executive Support', 'Operations']
    },
    {
      name: 'Nicholas Kilonzo',
      role: 'General Assistant',
      bio: 'An integral part of the team, providing essential logistical and office support.',
      image: '/team/kilonzo.png',
      projects: ['Logistics', 'Office Support']
    },
  ]

  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      
      {/* Editorial Hero */}
      <section className="relative w-full pt-24 lg:pt-28 pb-10 overflow-hidden border-b border-mist snap-start scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--mist)_0%,transparent_50%)] opacity-50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-serif text-deep-forest font-bold tracking-tight">
              Our Team
            </h1>
            <p className="text-lg lg:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed font-light">
              Dedicated experts. Shared vision. Cultivating sustainable seed systems across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Scrolling Carousel with Secondary Navigation */}
      <section className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-center pt-16 lg:pt-20 pb-12 relative group/section snap-start scroll-mt-20">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            containScroll: 'trimSnaps',
            dragFree: false
          }}
          className="w-full flex flex-col justify-center"
        >
          <div className="w-full flex items-center">
            <CarouselContent className="-ml-4 md:-ml-6 lg:-ml-8 py-12">
              {fullTeam.map((member, idx) => {
                // The magic switching logic: alternate heights based on absolute distance to currentIndex
                // (idx - currentIndex) % 2 !== 0 ensures the first card always starts in the downward position
                const isUp = Math.abs(idx - currentIndex) % 2 !== 0;
                return (
                  <CarouselItem key={idx} className="pl-4 md:pl-6 lg:pl-8 basis-auto">
                    <div className={`${idx === 0 ? 'pl-6 md:pl-12 lg:pl-20' : ''} ${idx === fullTeam.length - 1 ? 'pr-6 md:pr-12 lg:pr-20' : ''}`}>
                      <motion.div
                        initial="initial"
                        whileHover="hover"
                        animate={{ y: isUp ? -24 : 24 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                        className="shrink-0 cursor-pointer"
                        onClick={() => setSelectedMember(member)}
                      >
                        <div className="relative w-[280px] h-[50vh] min-h-[400px] max-h-[500px] md:w-[350px] md:h-[55vh] md:max-h-[600px] lg:w-[400px] lg:h-[60vh] lg:max-h-[680px] xl:w-[450px] xl:h-[65vh] xl:max-h-[720px] rounded-[2rem] overflow-hidden group shadow-lg">
                          {/* Image */}
                          {member.image && member.image !== '/team/placeholder.jpg' ? (
                            <Image 
                              src={member.image} 
                              alt={member.name} 
                              fill 
                              className="object-cover transition-transform duration-700" 
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
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </div>

          {/* Navigation Buttons (Centered Below) */}
          <div className="flex justify-center gap-6 mt-8 z-30 pointer-events-auto min-h-[80px]">
            {mounted && (
              <>
                <button 
                  onClick={() => api?.scrollPrev()}
                  disabled={!api?.canScrollPrev()}
                  className="w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur rounded-full border border-charcoal/10 flex items-center justify-center hover:bg-white hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-xl"
                  aria-label="Previous"
                >
                  <ArrowLeft className="text-deep-forest w-8 h-8 md:w-10 md:h-10" />
                </button>
                <button 
                  onClick={() => api?.scrollNext()}
                  disabled={!api?.canScrollNext()}
                  className="w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur rounded-full border border-charcoal/10 flex items-center justify-center hover:bg-white hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-xl"
                  aria-label="Next"
                >
                  <ArrowRight className="text-deep-forest w-8 h-8 md:w-10 md:h-10" />
                </button>
              </>
            )}
          </div>
        </Carousel>
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

      {/* Simplified Curated Our Journey Section */}
      <section className="w-full py-16 lg:py-24 xl:py-32 bg-white relative snap-start scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-5xl lg:text-7xl font-serif font-normal text-deep-forest leading-[0.9]">
                Our<br/>Journey.
              </h2>
              <p className="text-charcoal/60 text-xl font-light leading-relaxed max-w-md">
                Over 30 years of seed sector experience, accelerating growth and sustainable seed systems across Africa.
              </p>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="space-y-8">
                <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-black/5 flex items-center justify-center text-accent-gold">
                  <MapPin size={20} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-deep-forest">Milestones</h3>
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

