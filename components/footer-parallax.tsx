"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

export default function FooterParallax({ children }: { children?: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- SCROLL PHYSICS ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  
  // Buttery cinematic spring for effortless, momentum-driven scrolling
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.8, restDelta: 0.001 });

  // === SCROLL DEPTH (Z-Axis Zooming) ===
  const bgScale = useTransform(smoothScroll, [0, 1], [1, 1.10]);
  const landscapeScale = useTransform(smoothScroll, [0, 1], [1, 1.18]);
  const subjectScale = useTransform(smoothScroll, [0, 1], [1, 1.22]);
  // Reduced scale on plants to prevent blurriness and keep it tight to the bottom
  const plantsScale = useTransform(smoothScroll, [0, 1], [1, 1.05]);

  // === SCROLL Y-TRANSLATION (Vertical Parallax) ===
  const bgScrollY = useTransform(smoothScroll, [0, 1], ["0%", "18%"]);
  const landscapeScrollY = useTransform(smoothScroll, [0, 1], ["0%", "-10%"]);
  const subjectScrollY = useTransform(smoothScroll, [0, 1], ["0%", "-16%"]);
  // Locked Y translation to 0% so plants stick perfectly to the bottom of the viewport
  const plantsScrollY = useTransform(smoothScroll, [0, 1], ["0%", "0%"]);

  // === SCROLL X-TRANSLATION (Lateral drift) ===
  const bgScrollX = useTransform(smoothScroll, [0, 1], ["0%", "-4%"]);
  const landscapeScrollX = useTransform(smoothScroll, [0, 1], ["0%", "-9%"]);
  const subjectScrollX = useTransform(smoothScroll, [0, 1], ["0%", "-16%"]);
  const plantsScrollX = useTransform(smoothScroll, [0, 1], ["0%", "-11%"]);

  // === DEPTH-OF-FIELD BLUR & OPACITY ===
  const bgBlur = useTransform(smoothScroll, [0, 0.5, 1], [0, 0, 3.5]);
  const plantsBlur = useTransform(smoothScroll, [0, 0.6, 1], [0, 0, 1.5]);
  const bgOpacity = useTransform(smoothScroll, [0, 1], [1, 0.75]);

  // --- MOUSE PHYSICS ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Fluid, floaty mouse physics for satisfying airy sway without any bounce
  const smoothMouseX = useSpring(mouseX, { stiffness: 40, damping: 40, mass: 1 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 40, damping: 40, mass: 1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // === MOUSE SWAY MAPPINGS ===
  const bgMouseX = useTransform(smoothMouseX, [-1, 1], ["2%", "-2%"]);
  const bgMouseY = useTransform(smoothMouseY, [-1, 1], ["1.5%", "-1.5%"]);
  const landscapeMouseX = useTransform(smoothMouseX, [-1, 1], ["1.5%", "-1.5%"]);
  const landscapeMouseY = useTransform(smoothMouseY, [-1, 1], ["1%", "-1%"]);
  const subjectMouseX = useTransform(smoothMouseX, [-1, 1], ["-2.5%", "2.5%"]);
  const subjectMouseY = useTransform(smoothMouseY, [-1, 1], ["-1.5%", "1.5%"]);

  // Base numeric mouse sway for plants
  const plantsBaseSwayX = useTransform(smoothMouseX, [-1, 1], [-4, 4]);
  const plantsBaseSwayY = useTransform(smoothMouseY, [-1, 1], [-3, 3]);

  // Attenuated Mouse Sway: Fades mouse movement to 0% as the scroll reaches the bottom
  const attenuatedPlantsX = useTransform(() => {
    const progress = smoothScroll.get();
    const attenuation = progress > 0.8 ? Math.max(0, (1 - progress) * 5) : 1; 
    return `${plantsBaseSwayX.get() * attenuation}%`;
  });
  
  const attenuatedPlantsY = useTransform(() => {
    const progress = smoothScroll.get();
    const attenuation = progress > 0.8 ? Math.max(0, (1 - progress) * 5) : 1; 
    return `${plantsBaseSwayY.get() * attenuation}%`;
  });

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-[#1c3a13]">
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0">
        
        {/* Background Layer (z-0) */}
        <motion.div
          style={{ scale: bgScale, x: bgScrollX, y: bgScrollY, opacity: bgOpacity, filter: useTransform(bgBlur, (v) => `blur(${v}px)`) }}
          className="absolute inset-0 z-0 origin-center"
        >
          <motion.img
            src="/footer-parallax/background.png"
            alt="Background Sky"
            style={{ x: bgMouseX, y: bgMouseY }}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
        </motion.div>

        {/* Midground Layer (z-10) */}
        <motion.div
          style={{ scale: landscapeScale, x: landscapeScrollX, y: landscapeScrollY }}
          className="absolute inset-0 z-10 origin-center"
        >
          <motion.img
            src="/footer-parallax/midground.png"
            alt="Landscape Hills"
            style={{ x: landscapeMouseX, y: landscapeMouseY }}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
        </motion.div>

        {/* Footer content zone (z-20) — Scrolls up beneath the Lady and Plants */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <motion.div
            style={{
              y: useTransform(smoothScroll, [0.5, 0.8, 1], ["100%", "0%", "0%"]),
              opacity: useTransform(smoothScroll, [0.5, 0.7], [0, 1]),
            }}
            className="absolute bottom-0 left-0 right-0 pointer-events-auto"
          >
            {children}
          </motion.div>
        </div>

        {/* Cinematic gradient */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-[19] pointer-events-none" />

        {/* Subject Layer (z-30) — The Lady */}
        <motion.div
          style={{ scale: subjectScale, x: subjectScrollX, y: subjectScrollY }}
          className="absolute inset-0 z-30 origin-center translate-y-[calc(5%+30px)] pointer-events-none"
        >
          <motion.img
            src="/footer-parallax/lady.png"
            alt="Parallax Subject"
            style={{ x: subjectMouseX, y: subjectMouseY }}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
        </motion.div>

        {/* Foreground Layer (z-40) — Plants pushed down as low hedge, with horizontal bleed */}
        <motion.div
          style={{ scale: plantsScale, x: plantsScrollX, y: plantsScrollY, filter: useTransform(plantsBlur, (v) => `blur(${v}px)`) }}
          className="absolute bottom-0 -left-[5vw] w-[110vw] h-[120%] z-40 origin-bottom translate-y-[24%] pointer-events-none"
        >
          <motion.img
            src="/footer-parallax/foreground plants.png"
            alt="Foreground Plants"
            style={{ x: attenuatedPlantsX, y: attenuatedPlantsY }}
            className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
          />
        </motion.div>
        
      </div>
    </div>
  );
}