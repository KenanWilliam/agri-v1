'use client'

import { useRef } from 'react'
import ClientLogos from '@/components/client-logos'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Earth, Globe, Zap, Leaf, Shield, Award, BarChart , BookOpen , Handshake , Target, Briefcase, Building2 } from 'lucide-react'
import { Link } from '@/i18n/routing'
import WhyAgriExperience from '@/components/motion/why-agri-experience'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { RollingText } from '@/components/ui/rolling-text'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function Home() {
  const t = useTranslations('Home')
  const tAgri = useTranslations('WhyAgriExperience')
  const locale = useLocale()

  const heroRef = useRef<HTMLElement>(null)
  const heroBgRef = useRef<HTMLDivElement>(null)
  const sequenceWrapperRef = useRef<HTMLDivElement>(null)
  const track1Ref = useRef<HTMLDivElement>(null)
  const track1InnerRef = useRef<HTMLDivElement>(null)
  const track2Ref = useRef<HTMLDivElement>(null)
  const track2InnerRef = useRef<HTMLDivElement>(null)

  // Effect 1: Hero Parallax
  useGSAP(() => {
    if (!heroRef.current || !heroBgRef.current) return;

    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      // Parallax the background (slides down up to 20vh) and slight zoom
      gsap.to(heroBgRef.current, {
        y: () => window.innerHeight * 0.2,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: 0,
          end: "bottom top",
          scrub: 1.5,
          invalidateOnRefresh: true,
        }
      });
    });

    return () => mm.revert();
  }, [])

  // Effect 2: Multi-step Pinned Horizontal Scroll with Parallax Overlap
  useGSAP(() => {
    if (!sequenceWrapperRef.current || !track1Ref.current || !track1InnerRef.current || !track2Ref.current || !track2InnerRef.current) return;

    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const container = sequenceWrapperRef.current;
      
      const getScroll1 = () => {
        // Safely access scrollWidth, returning 0 if the ref is unmounted during mobile view
        if (!track1InnerRef.current) return 0;
        return Math.max(0, track1InnerRef.current.scrollWidth - window.innerWidth);
      };
      const getScroll2 = () => {
        if (!track2InnerRef.current) return 0;
        return Math.max(0, track2InnerRef.current.scrollWidth - window.innerWidth);
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${getScroll1() + getScroll2() + window.innerWidth}`, 
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      const scroll1 = getScroll1();
      const scroll2 = getScroll2();
      const ratio1 = scroll1 > 0 ? scroll1 / window.innerWidth : 0.1;
      const ratio2 = scroll2 > 0 ? scroll2 / window.innerWidth : 0.1;

      tl.to(track1InnerRef.current, {
        x: () => -getScroll1(),
        ease: "none",
        duration: ratio1
      });

      tl.to(track1Ref.current, {
        x: () => -window.innerWidth * 0.3,
        ease: "power2.inOut",
        duration: 0.8
      }, "cover");

      tl.fromTo(track2Ref.current, {
        x: "100%"
      }, {
        x: "0%",
        ease: "power2.inOut",
        duration: 0.8
      }, "cover");

      tl.to(track2InnerRef.current, {
        x: () => -getScroll2(),
        ease: "none",
        duration: ratio2
      });

      const handleRefresh = () => ScrollTrigger.refresh();
      window.addEventListener('resize', handleRefresh);
      
      return () => {
        window.removeEventListener('resize', handleRefresh);
        tl.kill();
      }
    });

    return () => mm.revert();
  }, [])

  const beliefs = [
    {
      icon: <Users className="text-primary-green" size={24} />,
      title: t('belief_4_title'),
      text: t('belief_4_text'),
      width: "w-[300px] lg:w-[360px]"
    },
    {
      icon: <Shield className="text-primary-green" size={24} />,
      title: t('belief_3_title'),
      text: t('belief_3_text'),
      width: "w-[300px] lg:w-[360px]"
    },
    {
      icon: <Leaf className="text-primary-green" size={24} />,
      title: t('belief_1_title'),
      text: t('belief_1_text'),
      width: "w-[350px] lg:w-[480px]"
    },
    {
      icon: <Target className="text-primary-green" size={24} />,
      title: t('belief_2_title'),
      text: t('belief_2_text'),
      width: "w-[350px] lg:w-[480px]"
    }
  ]

  const agriCards = [
    { icon: <Users className="text-primary-green" size={32} />, text: tAgri('card_3'), width: "w-[300px] lg:w-[320px]" },
    { icon: <Globe className="text-primary-green" size={32} />, text: tAgri('card_2'), width: "w-[300px] lg:w-[320px]" },
    { icon: <TrendingUp className="text-primary-green" size={32} />, text: tAgri('card_5'), width: "w-[320px] lg:w-[360px]" },
    { icon: <BookOpen className="text-primary-green" size={32} />, text: tAgri('card_1'), width: "w-[320px] lg:w-[360px]" },
    { icon: <Handshake className="text-primary-green" size={32} />, text: tAgri('card_4'), width: "w-[400px] lg:w-[500px]" }
  ]

  return (
    <>
      <main className="-mt-[72px] lg:-mt-[88px] bg-background overflow-x-clip">
        
        {/* Premium Hero Section */}
        <section ref={heroRef} className="relative w-full min-h-[85vh] md:min-h-[100vh] flex flex-col justify-center items-center overflow-hidden pt-[104px] pb-10 bg-white z-0">
          
          {/* Taller background to prevent revealing white space when translating down */}
          <div ref={heroBgRef} className="absolute -top-[20vh] left-0 w-full h-[120vh] z-0 origin-center bg-black">
            <div className="absolute inset-0 w-full h-full bg-mist">
                <video
                  src="/Videos/wheat swaying in the wind.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onCanPlay={() => {
                    if (!(window as any).__heroVideoReady) {
                      (window as any).__heroVideoReady = true;
                      window.dispatchEvent(new Event('hero-video-ready'));
                    }
                  }}
                  className="hidden md:block absolute inset-0 w-full h-full object-cover object-center lg:object-[center_30%] 3xl:object-[center_40%]"
                />
                <Image 
                  src="/hero-bg.png"
                  alt="Agricultural landscape"
                  fill
                  sizes="100vw"
                  loading="eager"
                  className="md:hidden object-cover object-center"
                />
            </div>
          </div>
          
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/90 via-white/60 to-transparent md:bg-gradient-to-r md:from-white md:from-[10%] md:via-white/80 md:via-[40%] md:to-transparent md:to-[75%] md:w-[80%] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 w-full flex-1 flex flex-col justify-center">
            <div className="max-w-2xl xl:max-w-3xl 3xl:max-w-4xl space-y-6 lg:space-y-8 xl:space-y-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="font-serif tracking-tight text-[#1A4D2E] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1]"
              >
                {t('hero_title_1')} <br />
                {t('hero_title_2')} <br />
                {t('hero_title_3')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-800 leading-relaxed font-medium max-w-xl xl:max-w-2xl text-sm md:text-base lg:text-lg"
              >
                {t('hero_desc')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-2"
              >
                <Link href="/our-impact" className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-6 py-3 lg:px-8 lg:py-4 bg-[#1A4D2E] text-white rounded-full font-bold transition duration-200 hover:bg-[#1A4D2E]/90 text-sm lg:text-base">
                  <RollingText className="gap-3">
                    {t('explore_impact')}
                    <ArrowRight size={18} />
                  </RollingText>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="pt-4 lg:pt-6"
              >
                <div className="flex flex-wrap justify-start items-center gap-4 sm:gap-6 lg:gap-10 xl:gap-12">
                  {[
                    { value: t('stat_1_val'), label: t('stat_1_lbl'), icon: Earth },
                    { value: t('stat_2_val'), label: t('stat_2_lbl'), icon: Briefcase },
                    { value: t('stat_3_val'), label: t('stat_3_lbl'), icon: Building2 },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-primary-green/20 flex items-center justify-center text-[#1A4D2E] bg-white shadow-sm shrink-0">
                        <stat.icon size={18} className="lg:w-5 lg:h-5" />
                      </div>
                      <div className="flex flex-col text-left">
                        <div className="text-lg lg:text-xl font-bold text-[#1A4D2E] leading-none">{stat.value}</div>
                        <div className="text-[10px] lg:text-[11px] font-bold tracking-[0.15em] text-gray-500 mt-1.5 whitespace-nowrap">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="hidden md:motion-safe:block">
          {/* Pinned Horizontal Sequence Wrapper */}
          <div ref={sequenceWrapperRef} className="relative z-20 bg-mist">
            <div className="relative h-[100vh] w-full overflow-hidden">
                
                {/* Track 1: Why Agri Experience Layer */}
                <div ref={track1Ref} className="absolute inset-0 w-full h-full bg-mist z-0">
                  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,var(--warm-earth)_0%,transparent_60%)] opacity-20 blur-3xl pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,var(--primary-green)_0%,transparent_60%)] opacity-[0.05] blur-3xl pointer-events-none rounded-full -translate-x-1/4 translate-y-1/4" />

                  <div ref={track1InnerRef} className="flex h-full items-center pt-[72px] lg:pt-[88px] px-12 md:px-24 gap-12 lg:gap-20 relative z-10 w-max pr-12 lg:pr-24">
                    <div className="w-[300px] lg:w-[400px] shrink-0 space-y-6">
                      <motion.div>
                        <h2 className="text-5xl lg:text-6xl font-serif text-deep-forest font-bold tracking-tight mb-6">
                          {tAgri('title')}
                        </h2>
                        <div className="w-20 h-1 bg-primary-green rounded-full"></div>
                      </motion.div>
                    </div>
                    
                    <div className="grid grid-rows-2 grid-flow-col gap-6 lg:gap-8 shrink-0 py-8">
                      {agriCards.map((item, idx) => (
                        <div
                          key={idx}
                          className={`${item.width} h-full shrink-0 bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/40 hover:bg-white transition-colors duration-500 group relative overflow-hidden flex flex-col`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative z-10 flex flex-col">
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white shadow-sm border border-mist flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                              {item.icon}
                            </div>
                            <p className="text-lg lg:text-xl text-charcoal/80 font-medium leading-relaxed">{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Track 2: What We Believe Layer */}
                <div ref={track2Ref} className="absolute inset-0 w-full h-full bg-deep-forest z-10 translate-x-full">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--primary-green)_0%,transparent_50%)] opacity-20 pointer-events-none"></div>
                  
                  <div ref={track2InnerRef} className="flex h-full items-center pt-[72px] lg:pt-[88px] px-12 md:px-24 gap-12 lg:gap-20 relative z-10 w-max pr-12 lg:pr-[10vw]">
                    <div className="w-[300px] lg:w-[400px] shrink-0 space-y-6">
                      <motion.div>
                        <h2 className="text-4xl lg:text-5xl font-serif text-white font-bold tracking-tight mb-6">{t('what_we_believe')}</h2>
                        <div className="w-20 h-1 bg-primary-green rounded-full"></div>
                      </motion.div>
                    </div>
                    
                    <div className="grid grid-rows-2 grid-flow-col gap-6 lg:gap-8 shrink-0 py-8">
                      {beliefs.map((belief, idx) => (
                        <div
                          key={idx}
                          className={`${belief.width} h-full shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors flex flex-col`}
                        >
                          <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                            {belief.icon}
                          </div>
                          <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-serif text-white">{belief.title}</h3>
                            <p className="text-white/70 font-light leading-relaxed text-sm lg:text-base">{belief.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
            </div>
          </div>
        </div>

        <div className="block md:motion-safe:hidden">
          {/* Vertical Fallback for Mobile / Reduced Motion */}
          <div className="relative z-20 bg-mist">
            <WhyAgriExperience />
            
            {/* What We Believe Section */}
            <section className="w-full py-16 lg:py-20 bg-deep-forest relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--primary-green)_0%,transparent_50%)] opacity-20"></div>
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                  <div className="lg:w-1/3 space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-4xl lg:text-5xl font-serif text-white font-bold tracking-tight mb-6">{t('what_we_believe')}</h2>
                      <div className="w-20 h-1 bg-primary-green rounded-full"></div>
                    </motion.div>
                  </div>

                  <div className="w-full lg:w-2/3 flex flex-col sm:grid sm:grid-cols-2 gap-4 md:gap-6">
                    {beliefs.map((belief, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-5"
                      >
                        <div className="w-12 h-12 shrink-0 rounded-full bg-white/10 flex items-center justify-center mt-1">
                          {belief.icon}
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-xl font-serif text-white mb-2">{belief.title}</h3>
                          <p className="text-white/70 font-light text-sm leading-relaxed">{belief.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Testimonials (Normal Vertical Flow) */}
        <section className="w-full py-16 lg:py-16 bg-mist relative z-20">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-16 space-y-4">
              <h2 className="text-deep-forest text-2xl sm:text-3xl lg:text-5xl font-serif font-bold tracking-tight">{t('trusted_leaders')}</h2>
              <p className="text-base sm:text-lg lg:text-xl text-charcoal/70 font-light max-w-2xl mx-auto">
                {t('trusted_leaders_desc')}
              </p>
            </div>
            <ClientLogos />
          </div>
        </section>

        {/* Premium CTA Section */}
        <section className="relative w-full py-10 sm:py-20 lg:py-32 bg-deep-forest text-white overflow-hidden z-20">
          {/* Decorative Texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--accent-gold)_0%,transparent_70%)]"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
            <div className="flex flex-col items-center gap-4 lg:gap-8">
              <div className="overflow-hidden">
                <motion.h2 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-bold tracking-tight"
                >
                  {t('cta_title')}
                </motion.h2>
              </div>
              
              <div className="overflow-hidden">
                <motion.p 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-base sm:text-lg lg:text-2xl text-white/80 font-light leading-relaxed"
                >
                  {t('cta_desc')}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-row flex-wrap gap-3 sm:gap-6 justify-center mt-2 lg:mt-4"
              >
                <Link
                  href="/contact"
                  className="group relative overflow-hidden inline-flex items-center justify-center px-4 py-3 sm:px-10 sm:py-5 bg-primary-green text-white rounded-full font-bold text-xs sm:text-lg transition duration-200 shadow-2xl shadow-primary-green/20"
                >
                  <RollingText>
                    {t('cta_btn_1')}
                  </RollingText>
                </Link>
                <Link
                  href="/contact"
                  className="group relative overflow-hidden inline-flex items-center justify-center px-4 py-3 sm:px-10 sm:py-5 border-2 border-white/30 text-white rounded-full font-bold text-xs sm:text-lg hover:bg-white/10 transition duration-200 backdrop-blur-sm"
                >
                  <RollingText>
                    {t('cta_btn_2')}
                  </RollingText>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>    
    </>
  )
}
