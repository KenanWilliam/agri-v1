"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function MagneticCursor({ children }: { children?: React.ReactNode }) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configuration for smooth follow
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Hide native cursor when this mounts
    document.body.style.cursor = 'none';

    const moveCursor = (e: MouseEvent) => {
      // Offset by half of the default w-6 h-6 (24px -> 12px)
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };
    
    // Magnetic/hover effect for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button') ||
        target.hasAttribute('data-magnetic') ||
        target.closest('[data-magnetic]');

      setIsHovered(!!isInteractive);
    };
    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          filter: "drop-shadow(0 0 4px rgba(255,255,255,0.3))", // Subtle white distortion/trail
        }}
        animate={{
          scale: isHovered ? 1.66 : 1, // scales w-6 to roughly w-10
          rotate: isHovered ? 15 : 0,
          opacity: isHovered ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {children}
    </>
  );
}
