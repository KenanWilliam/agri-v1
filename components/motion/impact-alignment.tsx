"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Globe, Target } from "lucide-react";

// ────────────────────────────────────────────
// Data
// ────────────────────────────────────────────

interface ImpactCard {
  id: string;
  shortTitle: string;
  title: string;
  aspect: string;
  examples: string;
  image?: string;
  color?: string;
}

const sdgData: ImpactCard[] = [
  { id: "sdg-1", shortTitle: "No Poverty", title: "SDG 1: No Poverty", aspect: "Improved farmer productivity, seed enterprise growth, and rural income opportunities.", examples: "Training seed companies, agrodealers, outgrowers and CBOs to improve seed production, marketing, business management and access to quality seed.", image: "/sdgs/SDG-1.svg", color: "#E5243B" },
  { id: "sdg-2", shortTitle: "Zero Hunger", title: "SDG 2: Zero Hunger", aspect: "Strengthened food security through wider access to quality seed and improved crop varieties.", examples: "MbeguChoice, Seed Sector Platform Kenya, standard certified seed class, farmer demos, and training on variety selection and certified seed use.", image: "/sdgs/SDG-2.svg", color: "#DDA63A" },
  { id: "sdg-3", shortTitle: "Good Health", title: "SDG 3: Good Health and Well-being", aspect: "Indirect contribution to household nutrition and well-being through improved agricultural productivity and food availability.", examples: "Support for improved varieties, farmer awareness, and production of diverse crops under standard certified seed arrangements.", image: "/sdgs/SDG-3.svg", color: "#4C9F38" },
  { id: "sdg-4", shortTitle: "Education", title: "SDG 4: Quality Education", aspect: "Expanded practical learning and technical skills in the seed sector.", examples: "Training for seed companies, agrodealers, extension officers, seed outgrowers, CBOs, and association leaders.", image: "/sdgs/SDG-4.svg", color: "#C5192D" },
  { id: "sdg-5", shortTitle: "Gender Equality", title: "SDG 5: Gender Equality", aspect: "Supported more inclusive access to training, seed information, and market opportunities.", examples: "Digital tools and county-level agrodealer networks reduce information barriers for women farmers, youth and small enterprises.", image: "/sdgs/SDG-5.svg", color: "#FF3A21" },
  { id: "sdg-6", shortTitle: "Clean Water", title: "SDG 6: Clean Water and Sanitation", aspect: "Indirect contribution through promotion of better agronomic practices and climate-smart production.", examples: "Farmer demonstrations and extension training promote efficient crop management and responsible input use.", image: "/sdgs/SDG-6.svg", color: "#26BDE2" },
  { id: "sdg-7", shortTitle: "Clean Energy", title: "SDG 7: Affordable and Clean Energy", aspect: "Limited direct contribution; indirect support through digital platforms that reduce travel and paper-based processes.", examples: "Use of online platforms and digital information systems to improve access to agricultural information.", image: "/sdgs/SDG-7.svg", color: "#FCC30B" },
  { id: "sdg-8", shortTitle: "Economic Growth", title: "SDG 8: Decent Work and Economic Growth", aspect: "Strengthened seed-sector businesses, agrodealer enterprises, associations and local employment opportunities.", examples: "Business development services for seed companies, training of over 3,000 agrodealers, and formation of 16 county agrodealer associations.", image: "/sdgs/SDG-8.svg", color: "#A21942" },
  { id: "sdg-9", shortTitle: "Innovation", title: "SDG 9: Industry, Innovation and Infrastructure", aspect: "Advanced innovation in seed systems through digital tools, traceability and information infrastructure.", examples: "Seed Sector Platform Kenya, MbeguChoice, scratch-off labels, and digital farmer feedback tools such as Mulika Mbegu Mbovu.", image: "/sdgs/SDG-9.svg", color: "#FD6925" },
  { id: "sdg-10", shortTitle: "Reduced Inequality", title: "SDG 10: Reduced Inequalities", aspect: "Improved access to seed information and quality seed for smallholder farmers and underserved counties.", examples: "Support for decentralized seed production in Kitui and Tharaka Nithi and county-based agrodealer-led farmer outreach.", image: "/sdgs/SDG-10.svg", color: "#DD1367" },
  { id: "sdg-11", shortTitle: "Communities", title: "SDG 11: Sustainable Cities and Communities", aspect: "Strengthened county-level institutions and local agricultural services.", examples: "County agrodealer associations, county extension officer training, farmer field days and local advocacy platforms.", image: "/sdgs/SDG-11.svg", color: "#FD9D24" },
  { id: "sdg-12", shortTitle: "Responsible Production", title: "SDG 12: Responsible Consumption and Production", aspect: "Promoted responsible seed production, quality assurance, traceability and market transparency.", examples: "Standard certified seed production, record keeping, packaging, traceability systems, and anti-counterfeit seed awareness.", image: "/sdgs/SDG-12.svg", color: "#BF8B2E" },
  { id: "sdg-13", shortTitle: "Climate Action", title: "SDG 13: Climate Action", aspect: "Improved resilience through climate-smart agriculture, variety choice, and locally adapted seed systems.", examples: "Climate-smart agrodealer-led demos, variety positioning, farmer field days, and promotion of locally suitable improved varieties.", image: "/sdgs/SDG-13.svg", color: "#3F7E44" },
  { id: "sdg-14", shortTitle: "Life Below Water", title: "SDG 14: Life Below Water", aspect: "Limited direct contribution; indirect support through responsible input use and sustainable production practices.", examples: "Training on good agronomic practices and responsible input management can reduce environmental pressure from agricultural runoff.", image: "/sdgs/SDG-14.svg", color: "#0A97D9" },
  { id: "sdg-15", shortTitle: "Life on Land", title: "SDG 15: Life on Land", aspect: "Supported sustainable land use, crop diversity and production systems.", examples: "Promotion of diverse crop seed classes, localized seed production, and farmer training on good agronomic practices.", image: "/sdgs/SDG-15.svg", color: "#56C02B" },
  { id: "sdg-16", shortTitle: "Strong Institutions", title: "SDG 16: Peace, Justice and Strong Institutions", aspect: "Strengthened transparent, accountable and inclusive seed-sector institutions.", examples: "Support to MoA, KEPHIS, STAK, policy reform, private inspector authorization, seed regulations and stakeholder dialogue.", image: "/sdgs/SDG-16.svg", color: "#00689D" },
  { id: "sdg-17", shortTitle: "Partnerships", title: "SDG 17: Partnerships for the Goals", aspect: "Built partnerships across government, private sector, associations, donors, research bodies and farmers.", examples: "Collaboration with MoA, KEPHIS, STAK, KALRO, seed companies, agrodealers, county officers, AGRA, CRS, Gatsby Africa and other partners.", image: "/sdgs/SDG-17.svg", color: "#19486A" },
];

const sdgRow1 = sdgData.slice(0, 9);  // SDG 1–9
const sdgRow2 = sdgData.slice(9);     // SDG 10–17

const visionData: ImpactCard[] = [
  { id: "v-1", shortTitle: "Agriculture", title: "Agriculture and Livestock", aspect: "Improved productivity, commercialization and competitiveness of the formal seed sector.", examples: "Seed policy reform, standard certified seed class, business development services for seed companies, and training for seed producers and outgrowers.", color: "#2E7D32" },
  { id: "v-2", shortTitle: "Trade", title: "Wholesale and Retail Trade", aspect: "Strengthened last-mile input distribution, rural enterprise development and market linkages.", examples: "Training of over 3,000 agrodealers, formation of 16 county agrodealer associations, Mazao Forums, shop renovation pilots and agrodealer-led demos.", color: "#1565C0" },
  { id: "v-3", shortTitle: "Manufacturing", title: "Manufacturing and Value Addition", aspect: "Supported agro-processing readiness through stronger seed enterprises, quality seed supply and market-oriented production.", examples: "Seed company coaching, production planning, seed processing, packaging, inventory management and linkages with breeding institutions.", color: "#6A1B9A" },
  { id: "v-4", shortTitle: "Food Security", title: "Food Security and Nutrition", aspect: "Expanded access to quality seed, locally adapted varieties and farmer knowledge for improved food production.", examples: "MbeguChoice, Seed Sector Platform Kenya, farmer field days, climate-smart agrodealer-led demos and variety-positioning support.", color: "#E65100" },
  { id: "v-5", shortTitle: "Education", title: "Education and Training", aspect: "Built technical, business and institutional capacity across the seed system.", examples: "Training seed companies, agrodealers, extension officers, seed outgrowers, CBOs and association leaders on quality assurance, business management and agronomy.", color: "#00838F" },
  { id: "v-6", shortTitle: "Gender & Youth", title: "Gender, Youth and Vulnerable Groups", aspect: "Improved inclusive access to seed information, local training and rural enterprise opportunities.", examples: "County-based agrodealer networks, digital tools and local demonstrations reduce information barriers for women, youth and smallholder farmers.", color: "#AD1457" },
  { id: "v-7", shortTitle: "Environment", title: "Environment, Water and Sanitation", aspect: "Promoted sustainable production, climate resilience and responsible input use.", examples: "Climate-smart demos, good agronomic practices, locally adapted varieties and farmer training on efficient crop management.", color: "#1B5E20" },
  { id: "v-8", shortTitle: "Governance", title: "Governance and Institutional Reform", aspect: "Strengthened transparent, accountable and participatory seed-sector governance.", examples: "Support to MoA, KEPHIS, STAK, policy reform, private inspector authorization, seed regulations and stakeholder dialogue.", color: "#283593" },
  { id: "v-9", shortTitle: "Innovation", title: "Science, Technology and Innovation", aspect: "Advanced digital agriculture, transparency and data-driven decision-making.", examples: "Seed Sector Platform Kenya, MbeguChoice, scratch-off labels, Mulika Mbegu Mbovu and seed sector benchmarking tools.", color: "#4527A0" },
  { id: "v-10", shortTitle: "HR Development", title: "Human Resource Development", aspect: "Developed local expertise for sustainable seed-sector growth.", examples: "Practical training, coaching, learning trips and mentorship for public officers, seed company staff, agrodealers and farmer-facing actors.", color: "#00695C" },
  { id: "v-11", shortTitle: "Public Reforms", title: "Public Sector Reforms", aspect: "Improved regulatory efficiency, service responsiveness and farmer protection.", examples: "Regulatory implementation support, standard certified seed operationalization, quality assurance systems and anti-counterfeit seed awareness.", color: "#37474F" },
  { id: "v-12", shortTitle: "Market Trust", title: "Security, Trust and Market Confidence", aspect: "Improved farmer trust in seed markets and reduced risks from counterfeit or low-quality seed.", examples: "Scratch-off labels, Mulika Mbegu Mbovu, extension officer training and awareness on certified seed verification.", color: "#BF360C" },
  { id: "v-13", shortTitle: "Partnerships", title: "Partnerships and Coordination", aspect: "Enabled multi-stakeholder collaboration to implement seed-sector reforms and programmes.", examples: "Collaboration with MoA, KEPHIS, STAK, KALRO, seed companies, agrodealers, county officers, AGRA, CRS, Gatsby Africa and other partners.", color: "#0277BD" },
];

const visionRow1 = visionData.slice(0, 7);
const visionRow2 = visionData.slice(7);



// ────────────────────────────────────────────
// Accordion Slice
// ────────────────────────────────────────────

function AccordionSlice({
  card,
  isActive,
  onHover,
  onClick,
  activeTab,
}: {
  card: ImpactCard;
  isActive: boolean;
  onHover: () => void;
  onClick: () => void;
  activeTab: string;
}) {
  return (
    <div
      onMouseEnter={onHover}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]`}
      style={{
        flexGrow: isActive ? 6 : 1,
        flexShrink: isActive ? 0 : 1,
        flexBasis: 0,
      }}
    >
      {/* ─── Background image placeholder ─── */}
      <div className="absolute inset-0 bg-mist">
        {/* Placeholder: replace with real images later */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, ${card.color || "#1A4D2E"} 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* ─── SDG/Vision Logo: Dynamic Bookmark ─── */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <motion.div
          layout
          initial={false}
          className={`absolute overflow-hidden flex items-center justify-center ${
            isActive
              ? "top-0 left-5 lg:left-8 w-24 h-40 lg:w-32 lg:h-48 rounded-b-2xl items-end pb-4 lg:pb-6"
              : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square rounded-none pb-0"
          }`}
          style={{
            backgroundColor: isActive ? card.color || "#1A4D2E" : "transparent"
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div layout="position" className="w-full flex items-center justify-center">
            {card.image ? (
              <Image
                src={card.image}
                alt={card.title}
                width={120}
                height={120}
                className="w-full h-auto object-contain"
              />
            ) : (
              <div
                className="w-full aspect-square flex items-center justify-center"
                style={{ backgroundColor: card.color || "#1A4D2E" }}
              >
                <Target className="text-white w-1/2 h-1/2" />
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Expanded: text content ─── */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 z-20 pointer-events-none"
          >
            {/* Bottom gradient for readability */}
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.25) 50%, transparent 65%)",
            }} />

            {/* Content pinned to bottom */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="absolute bottom-0 left-0 right-0 p-5 lg:p-7"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 mb-1 block">
                {activeTab === "sdgs" ? "UN Sustainable Development Goal" : "Kenya Vision 2030"}
              </span>
              <h3 className="text-lg lg:text-xl font-serif font-bold text-white leading-snug mb-2">
                {card.title}
              </h3>
              <p className="text-[13px] text-white/75 leading-relaxed font-light line-clamp-2 mb-1">
                {card.aspect}
              </p>
              <p className="text-[13px] text-white/50 leading-relaxed font-light line-clamp-2">
                {card.examples}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ────────────────────────────────────────────
// Single Accordion Row
// ────────────────────────────────────────────

function AccordionRow({
  items,
  activeId,
  setActiveId,
  defaultId,
  activeTab,
}: {
  items: ImpactCard[];
  activeId: string;
  setActiveId: (id: string) => void;
  defaultId: string;
  activeTab: string;
}) {
  return (
    <div
      className="flex flex-col lg:flex-row w-full lg:h-[520px] gap-1.5"
      onMouseLeave={() => setActiveId(defaultId)}
    >
      {items.map((card) => (
        <AccordionSlice
          key={card.id}
          card={card}
          isActive={activeId === card.id}
          onHover={() => setActiveId(card.id)}
          onClick={() => setActiveId(card.id)}
          activeTab={activeTab}
        />
      ))}
    </div>
  );
}

// ────────────────────────────────────────────
// Main Export
// ────────────────────────────────────────────

export default function ImpactAlignment() {
  const [activeTab, setActiveTab] = useState<"sdgs" | "vision">("sdgs");

  // SDG: independent active state per row
  const [sdgRow1Active, setSdgRow1Active] = useState("");
  const [sdgRow2Active, setSdgRow2Active] = useState("");

  // Vision: independent active state per row
  const [visionRow1Active, setVisionRow1Active] = useState("");
  const [visionRow2Active, setVisionRow2Active] = useState("");

  return (
    <section className="w-full py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #1A4D2E 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold uppercase tracking-widest text-primary-green mb-3"
          >
            Strategic Alignment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-serif font-bold text-deep-forest mb-4"
          >
            Our Global & National Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Our work directly aligns with both the UN Sustainable Development Goals and
            Kenya Vision 2030. Hover over a goal to explore our contribution.
          </motion.p>
        </div>

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={(v) => setActiveTab(v as "sdgs" | "vision")}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="h-12 bg-mist p-1 rounded-xl">
              <TabsTrigger
                value="sdgs"
                className="h-full rounded-lg text-sm font-semibold gap-2 px-6 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-deep-forest"
              >
                <Globe size={16} />
                UN SDGs
              </TabsTrigger>
              <TabsTrigger
                value="vision"
                className="h-full rounded-lg text-sm font-semibold gap-2 px-6 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-deep-forest"
              >
                <Target size={16} />
                Vision 2030
              </TabsTrigger>
            </TabsList>
          </div>

          {/* ─── SDG: 2 rows (9 + 8) ─── */}
          <TabsContent value="sdgs" className="mt-0 space-y-1.5">
            <AccordionRow
              items={sdgRow1}
              activeId={sdgRow1Active}
              setActiveId={setSdgRow1Active}
              defaultId={""}
              activeTab="sdgs"
            />
            <AccordionRow
              items={sdgRow2}
              activeId={sdgRow2Active}
              setActiveId={setSdgRow2Active}
              defaultId={""}
              activeTab="sdgs"
            />
          </TabsContent>

          {/* ─── Vision 2030: 2 rows (7 + 6) ─── */}
          <TabsContent value="vision" className="mt-0 space-y-1.5">
            <AccordionRow
              items={visionRow1}
              activeId={visionRow1Active}
              setActiveId={setVisionRow1Active}
              defaultId={""}
              activeTab="vision"
            />
            <AccordionRow
              items={visionRow2}
              activeId={visionRow2Active}
              setActiveId={setVisionRow2Active}
              defaultId={""}
              activeTab="vision"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
