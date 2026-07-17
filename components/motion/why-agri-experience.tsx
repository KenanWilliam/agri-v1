'use client'

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Globe, Users, Handshake, TrendingUp } from 'lucide-react';

export default function WhyAgriExperience() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Different parallax speeds for each card (moving slightly upwards as we scroll down)
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y4 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const y5 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const cards = [
    {
      icon: <BookOpen className="text-primary-green" size={32} />,
      text: 'We carefully develop recommendations that are grounded in behavioural patterns and evidence.',
      y: y1,
      delay: 0.1
    },
    {
      icon: <Globe className="text-primary-green" size={32} />,
      text: 'We bring deep, based-in-Africa, experience and expertise to our assignments.',
      y: y2,
      delay: 0.2
    },
    {
      icon: <Users className="text-primary-green" size={32} />,
      text: 'We understand that farmer empowerment is a major force for positive change.',
      y: y3,
      delay: 0.3
    },
    {
      icon: <Handshake className="text-primary-green" size={32} />,
      text: 'We are passionate about embedding our work and recommendations with permanent stakeholders through a collaborative, public/private approach.',
      y: y4,
      delay: 0.4
    },
    {
      icon: <TrendingUp className="text-primary-green" size={32} />,
      text: 'We have first-hand knowledge of systemic change, and what is required to achieve it.',
      y: y5,
      delay: 0.5
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-24 lg:py-40 bg-mist relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-150, 150]) }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,var(--warm-earth)_0%,transparent_60%)] opacity-20 blur-3xl pointer-events-none rounded-full"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [150, -150]) }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,var(--primary-green)_0%,transparent_60%)] opacity-[0.05] blur-3xl pointer-events-none rounded-full"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block text-sm font-bold uppercase tracking-widest text-primary-green mb-2"
          >
            Our Advantage
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-serif text-deep-forest font-bold tracking-tight"
          >
            Why Agri Experience
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-primary-green to-transparent mx-auto rounded-full mt-6"
          />
        </div>

        {/* Adjusting top/bottom padding so parallax items don't get clipped */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pb-24 pt-12">
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              style={{ y: item.y }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                opacity: { duration: 0.6, delay: item.delay },
                y: { type: "spring", stiffness: 50, damping: 20 }
              }}
              className="bg-white/80 backdrop-blur-xl p-10 rounded-[2rem] border border-white/40 shadow-xl hover:shadow-2xl hover:bg-white transition-colors duration-500 group relative overflow-hidden"
            >
              {/* Card Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-mist flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  {item.icon}
                </div>
                <p className="text-xl text-charcoal/80 font-medium leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
