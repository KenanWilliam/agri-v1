"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from '@/i18n/routing';
import { useRef, useState } from "react";

function MagneticButton({ children, href, className = "" }: { children: React.ReactNode, href: string, className?: string }) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={{ position: "relative" }}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Link
        href={href}
        ref={buttonRef}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        className={`relative inline-flex items-center justify-center overflow-hidden group ${className}`}
      >
        <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
          {children}
        </span>
        {/* Background circle that expands on hover */}
        <span className="absolute inset-0 bg-[#E3A335] rounded-full scale-0 group-hover:scale-[1.1] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-center"></span>
      </Link>
    </motion.div>
  );
}

export default function CtaSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  });

  // Organic blooming motion rather than harsh studio slides
  const y1 = useTransform(smoothProgress, [0, 1], [80, 0]);
  const y2 = useTransform(smoothProgress, [0, 1], [120, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.8], [0, 1]);
  const scale = useTransform(smoothProgress, [0, 1], [0.9, 1]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-[90vh] bg-[#1A4D2E] text-white overflow-hidden flex flex-col items-center justify-center py-32"
    >
      {/* Organic Sun/Glow Background */}
      <motion.div 
        className="absolute top-0 right-0 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] bg-[#E3A335]/10 blur-[140px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] bg-[#669933]/15 blur-[140px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center">
        
        {/* Elegant Brand Typography */}
        <div className="flex flex-col items-center text-center mb-16 overflow-hidden">
          <motion.div style={{ y: y1, opacity }} className="origin-bottom">
            <h2 className="text-[12vw] sm:text-[10vw] md:text-[8vw] leading-[1.1] tracking-tight font-serif font-medium text-white m-0">
              Ready to Grow
            </h2>
          </motion.div>
          <motion.div style={{ y: y2, opacity }} className="flex items-center gap-4 sm:gap-8 -mt-2 sm:-mt-6">
            <h2 className="text-[13vw] sm:text-[11vw] md:text-[9vw] leading-[1.1] tracking-tight font-serif font-medium text-[#E3A335] m-0 italic pr-4">
              Together?
            </h2>
          </motion.div>
        </div>

        <motion.p 
          style={{ scale, opacity }} 
          className="text-lg md:text-2xl text-white/90 font-light max-w-2xl text-center mb-16 leading-relaxed"
        >
          Join our network of transformative agricultural projects across Africa. We cultivate sustainable systems that last for generations.
        </motion.p>

        {/* Dynamic Buttons */}
        <motion.div style={{ opacity }} className="flex flex-col sm:flex-row items-center gap-8 z-20">
          <MagneticButton 
            href="/contact" 
            className="px-12 py-6 bg-white text-[#1A4D2E] rounded-full text-xl font-bold tracking-wide shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-shadow duration-500"
          >
            Start a Project
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </MagneticButton>

          <Link
            href="/our-work"
            className="group relative px-10 py-5 text-lg font-bold tracking-wide text-white overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Case Studies
              <span className="w-0 h-[2px] bg-[#E3A335] absolute -bottom-1 left-0 group-hover:w-full transition-all duration-300 ease-out"></span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
