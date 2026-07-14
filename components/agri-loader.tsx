"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";

export default function AgriLoader() {
  const { progress } = useProgress();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatches by ensuring client-side only rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#F8F9FA]"
          exit={{ 
            y: "-100%", 
            opacity: 0, 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Animated Agricultural SVG */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            className="mb-8 text-[#1A4D2E]"
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Minimalist Sprouting Leaf Path */}
              <path d="M12 22v-7" />
              <path d="M12 15C7 15 2 10 2 5c5 0 10 5 10 10z" />
              <path d="M12 15c5 0 10-5 10-10-5 0-10 5-10 10z" />
            </svg>
          </motion.div>

          {/* Progress Indicator */}
          <div className="text-sm font-medium tracking-widest uppercase text-black/40">
            LOADING ASSETS [ {Math.round(progress)}% ]
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
