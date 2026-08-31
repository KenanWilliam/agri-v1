"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

// Types
export interface ServicePillar {
  key: string;
  title: string;
  desc: string;
  impactTag?: string;
  theme: "dark" | "light";
  colSpanMd: string;
  colSpanLg: string;
  actionLabel?: string;
  route?: string;
}

// Bento Card Component with Mouse Glow Effect & Kinetic Micro-Interactions
interface BentoCardProps {
  pillar: ServicePillar;
  index: number;
}

function BentoCard({ pillar }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(-1000);
    mouseY.set(-1000);
    setIsHovered(false);
  }

  const isDark = pillar.theme === "dark";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-[28px] sm:rounded-[32px] overflow-hidden flex flex-col justify-between p-6 sm:p-8 lg:p-9 bg-white border border-stone-200/80 text-deep-forest shadow-sm hover:shadow-xl hover:border-primary-green/30 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 ${
        pillar.colSpanMd
      } ${pillar.colSpanLg}`}
    >
      {/* Interactive Cursor Ambient Glow (Hardware accelerated) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(58, 180, 74, 0.10),
              transparent 80%
            )
          `,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 space-y-4">
        <h3
          className="font-serif tracking-tight font-bold text-xl sm:text-2xl lg:text-[1.65rem] 2xl:text-[1.85rem] leading-[1.2] text-deep-forest group-hover:text-primary-green transition-colors duration-200"
        >
          {pillar.title}
        </h3>
        <p
          className="font-sans font-light text-sm sm:text-base leading-relaxed text-charcoal/80"
        >
          {pillar.desc}
        </p>
      </div>

      {/* Bottom Footer: Impact Tag & Action Link with Spring Motion */}
      <div
        className="relative z-10 pt-6 mt-8 flex items-center justify-between border-t border-stone-100"
      >
        {pillar.impactTag ? (
          <span
            className="text-xs font-semibold tracking-wide text-stone-500"
          >
            {pillar.impactTag}
          </span>
        ) : (
          <span />
        )}

        <Link
          href={pillar.route || "/our-work"}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary-green group-hover:text-deep-forest transition-colors duration-200"
        >
          <span>{pillar.actionLabel || "Explore Domain"}</span>
          <motion.div
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <ArrowRight size={15} />
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

// Main Editorial Bento Grid Component
export default function ServicesBentoGrid() {
  const t = useTranslations("About");

  // 7 Strategic Pillars Definition
  const pillars: ServicePillar[] = [
    {
      key: "0",
      title: t("expertise_cards.0.title"),
      desc: t("expertise_cards.0.desc"),
      impactTag: "Value Chains & Market Access",
      theme: "dark",
      colSpanMd: "md:col-span-2",
      colSpanLg: "lg:col-span-7",
      route: "/our-work/project-implementation",
    },
    {
      key: "1",
      title: t("expertise_cards.1.title"),
      desc: t("expertise_cards.1.desc"),
      impactTag: "Evidence-Based Decision Support",
      theme: "light",
      colSpanMd: "md:col-span-1",
      colSpanLg: "lg:col-span-5",
      route: "/our-work/technical-studies",
    },
    {
      key: "2",
      title: t("expertise_cards.2.title"),
      desc: t("expertise_cards.2.desc"),
      impactTag: "Regulatory Harmonization",
      theme: "light",
      colSpanMd: "md:col-span-1",
      colSpanLg: "lg:col-span-4",
      route: "/our-work/client-advisory",
    },
    {
      key: "3",
      title: t("expertise_cards.3.title"),
      desc: t("expertise_cards.3.desc"),
      impactTag: "Agrodealer & Institutional Training",
      theme: "light",
      colSpanMd: "md:col-span-1",
      colSpanLg: "lg:col-span-4",
      route: "/our-work/capacity-building",
    },
    {
      key: "4",
      title: t("expertise_cards.4.title"),
      desc: t("expertise_cards.4.desc"),
      impactTag: "Feasibility & Program Diagnostics",
      theme: "light",
      colSpanMd: "md:col-span-1",
      colSpanLg: "lg:col-span-4",
      route: "/our-work/client-advisory",
    },
    {
      key: "5",
      title: t("expertise_cards.5.title"),
      desc: t("expertise_cards.5.desc"),
      impactTag: "Web, Mobile & SMS Architectures",
      theme: "light",
      colSpanMd: "md:col-span-1",
      colSpanLg: "lg:col-span-6",
      route: "/our-work/digital-platforms",
    },
    {
      key: "6",
      title: t("expertise_cards.6.title"),
      desc: t("expertise_cards.6.desc"),
      impactTag: "Results Measurement & Learning",
      theme: "dark",
      colSpanMd: "md:col-span-1",
      colSpanLg: "lg:col-span-6",
      route: "/our-work/technical-studies",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 2xl:py-24 bg-[#F8F6F0] relative border-t border-stone-200/60 overflow-hidden">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#3ab44a]/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#2484c6]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header (No Eyebrow Pill) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-6 md:gap-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F1A15] tracking-tight pb-1 leading-tight">
              {t("expertise_title")}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-light leading-relaxed">
              {t("expertise_desc")}
            </p>
          </div>

          <Link
            href="/our-work"
            className="group shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0F1A15] hover:bg-[#1A4D2E] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            <span>{t("view_services")}</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid (Responsive: 1 col on mobile, 2 cols on tablet, 12-col Bento on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6">
          {pillars.map((pillar, idx) => (
            <BentoCard
              key={pillar.key}
              pillar={pillar}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
