"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, animate as framerAnimate } from "framer-motion";
import { interpolate } from "flubber";

import svgpath from "svgpath";
import Image from "next/image";

// The true, full concatenated path from loader-mask.svg (including internal holes and the detached dot)
const ICON_PATH_D =
  "M33.9,2.05C15.56,6.53,11.64,15.29,9.17,18.77V7.67H3.36v40.33h5.81v-23.44c1.84-.72,4.59-.52,8.39-3.15,4.08-2.83,9.16-6.93,15.81-11.49C40.77,4.84,48,.22,48,.22c-3.5.47-11.16,1.11-14.1,1.83ZM33.83,5.59c-.78.44-1.9,1.04-3.21,1.82-.66.39-1.37.8-2.13,1.24-.74.46-1.53.95-2.34,1.45-.82.49-1.63,1.05-2.47,1.59-.85.53-1.66,1.15-2.5,1.72-1.67,1.16-3.3,2.38-4.78,3.58-1.47,1.21-2.84,2.35-3.95,3.39-1.1,1.01-2.69,2.05-3.29,2.7v-.22c.55-.68,1.12-1.81,2.11-2.82,1.08-1.09,2.37-2.33,3.84-3.57,1.48-1.23,3.09-2.49,4.76-3.67.85-.57,1.68-1.17,2.54-1.7.86-.53,1.68-1.08,2.51-1.57,1.64-.99,3.23-1.83,4.59-2.53,1.35-.73,2.53-1.22,3.33-1.61.81-.37,3.54-1.26,3.54-1.26,0,0-1.78,1.01-2.56,1.45Z M6.27,6.49c.9,0,1.65-.32,2.27-.95.63-.63.95-1.4.95-2.29s-.32-1.65-.95-2.27C7.91.34,7.15.03,6.25.03s-1.64.32-2.27.95c-.63.63-.95,1.38-.95,2.25,0,.91.32,1.69.95,2.32.63.63,1.4.95,2.3.95Z";

const ICON_VIEWBOX_WIDTH = 51.36;
const ICON_VIEWBOX_HEIGHT = 48;

const MASK_SVG_ENCODED = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ICON_VIEWBOX_WIDTH} ${ICON_VIEWBOX_HEIGHT}"><path fill-rule="evenodd" clip-rule="evenodd" d="${ICON_PATH_D}"/></svg>`
);
const MASK_IMAGE_URL = `url("data:image/svg+xml;charset=utf-8,${MASK_SVG_ENCODED}")`;

const clipVariants = {
  initial: { clipPath: "inset(15vh 15vw)" },
  animate: {
    clipPath: [
      "inset(15vh 15vw)",
      "inset(15vh 15vw)",
      "inset(15vh 15vw)",
      "inset(15vh 15vw)",
      "inset(0vh 0vw)",
      "inset(0vh 0vw)",
    ],
    transition: {
      duration: 1.5,
      times: [0, 0.35, 0.55, 0.65, 0.80, 1],
      ease: ["linear", "linear", "linear", [0.76, 0, 0.24, 1], "linear"],
    },
  },
};

const opacityVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: [1, 0, 0, 0, 0, 0],
    transition: {
      duration: 1.5,
      times: [0, 0.20, 0.35, 0.55, 0.80, 1],
      ease: "linear",
    },
  },
};

let hasRunPreloader = false;

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(!hasRunPreloader);
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    hasRunPreloader = true;
  }, []);

  // When both the internal background and the page video are ready, begin animation
  useEffect(() => {
    if (bgLoaded && videoReady) {
      setStartAnimation(true);
    }
  }, [bgLoaded, videoReady]);

  // Safety fallback if something hangs
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDims({ w: window.innerWidth, h: window.innerHeight });
  }, []);

  // Wait for hero video readiness (or resolve immediately on non-video pages / mobile)
  useEffect(() => {
    let resolved = false;
    const resolve = () => {
      if (resolved) return;
      resolved = true;
      setVideoReady(true);
    };

    if ((window as any).__heroVideoReady) {
      resolve();
      return;
    }

    window.addEventListener('hero-video-ready', resolve);

    const checkTimer = setTimeout(() => {
      const video = document.querySelector('video');
      const isDesktop = window.innerWidth >= 768;
      if (!video || !isDesktop) {
        resolve();
      }
    }, 50);

    const maxTimer = setTimeout(resolve, 8000);

    return () => {
      window.removeEventListener('hero-video-ready', resolve);
      clearTimeout(checkTimer);
      clearTimeout(maxTimer);
    };
  }, []);

  // When animation starts, schedule the dismissal
  useEffect(() => {
    if (startAnimation) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1300); // 1300ms covers the visible parts of the 1.5s timeline
      return () => clearTimeout(timer);
    }
  }, [startAnimation]);

  useEffect(() => {
    if (!dims || !pathRef.current) return;

    const { w, h } = dims;

    // Target shape: full-viewport rectangle, in real pixel coordinates.
    const rectPath = `M0,0 L${w},0 L${w},${h} L0,${h} Z`;

    const iconTargetSize = Math.min(w, h) * 0.12;
    const maxDimension = Math.max(ICON_VIEWBOX_WIDTH, ICON_VIEWBOX_HEIGHT);
    const scaleFactor = iconTargetSize / maxDimension;
    
    const scaledWidth = ICON_VIEWBOX_WIDTH * scaleFactor;
    const scaledHeight = ICON_VIEWBOX_HEIGHT * scaleFactor;

    const normalizedIconPath = svgpath(ICON_PATH_D)
      .scale(scaleFactor)
      .translate(w / 2 - scaledWidth / 2, h / 2 - scaledHeight / 2)
      .toString();

    pathRef.current.setAttribute("d", normalizedIconPath);

    // Ensure the browser has fully parsed and painted the new SVG path beneath 
    // before we trigger the CSS fallback's fade out. The setTimeout guarantees a paint cycle.
    requestAnimationFrame(() => {
      setTimeout(() => setIsReady(true), 50);
    });

    if (!startAnimation) return;

    // Using flubber to interpolate between the true full icon and the fullscreen rectangle
    const interpolator = interpolate(normalizedIconPath, rectPath, {
      maxSegmentLength: 2,
    });

    const controls = framerAnimate(0, 1, {
      duration: 1.5 * 0.20,
      delay: 1.5 * 0.35,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (t) => {
        if (pathRef.current) pathRef.current.setAttribute("d", interpolator(t));
      },
    });

    return () => controls.stop();
  }, [dims, startAnimation]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-9999 bg-mist pointer-events-none"
        >
          <motion.div
            variants={clipVariants}
            initial="initial"
            animate={startAnimation ? "animate" : "initial"}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="loaderMorphClip" clipPathUnits="userSpaceOnUse">
                  {/* Added fillRule and clipRule so compound holes render perfectly */}
                  <path ref={pathRef} d="" clipRule="evenodd" fillRule="evenodd" />
                </clipPath>
              </defs>
            </svg>

            {/* DYNAMIC FLUBBER LAYER: Takes over the exact same pixel space once JS hydrates */}
            <div
              style={{
                clipPath: "url(#loaderMorphClip)",
                WebkitClipPath: "url(#loaderMorphClip)",
                opacity: dims ? 1 : 0,
              }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/pexels-equalstock-27722065.jpg"
                alt="Loading Background"
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 1400px, 1600px"
                quality={75}
                className="object-cover"
                priority fetchPriority="high"
                onLoad={() => setBgLoaded(true)}
              />

              <motion.div
                variants={opacityVariants}
                initial="initial"
                animate={startAnimation ? "animate" : "initial"}
                className="absolute inset-0 bg-[#3ab44a]"
              />
            </div>

            {/* STATIC CSS FALLBACK: Renders instantly on screen before JavaScript loads. 
                Sits on top of the flubber layer and fades out smoothly to reveal it. */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ease-out"
              style={{
                opacity: isReady ? 0 : 1,
                maskImage: MASK_IMAGE_URL,
                WebkitMaskImage: MASK_IMAGE_URL,
                maskPosition: "center",
                WebkitMaskPosition: "center",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskSize: "12vmin",
                WebkitMaskSize: "12vmin",
              }}
            >
              <Image
                src="/pexels-equalstock-27722065.jpg"
                alt="Loading Background"
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 1400px, 1600px"
                quality={75}
                className="object-cover"
                priority fetchPriority="high"
                onLoad={() => setBgLoaded(true)}
              />

              <motion.div
                variants={opacityVariants}
                initial="initial"
                animate={startAnimation ? "animate" : "initial"}
                className="absolute inset-0 bg-[#3ab44a]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}