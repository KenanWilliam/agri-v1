'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calendar,
  Crosshair,
  Globe,
  Info,
  Layers3,
  MapPin,
  Sparkles,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'
import Link from 'next/link'
import africaGeoJson from '@/africa.json'

import { InteractiveMapbox } from './map/interactive-mapbox'
import { MaplibreInteractiveMapbox } from './maplibre-interactive-map'
import { MapSearch } from './map/map-search'

type Region = 'East Africa' | 'West Africa' | 'Central Africa' | 'Southern Africa'

export interface CountryProject {
  title: string
  location: string
  summary: string
  outcome: string
  partners: string[]
  evidence: string[]
  methods: string[]
  timeline?: string
  budget_scope?: string
  key_deliverables?: string[]
}

export interface CountryRecord {
  name: string
  geoName?: string
  code: string
  region: Region
  projects: number
  engagement: number
  overview: string
  focus: string[]
  impact: string[]
  locations: string[]
  stats: Array<{ label: string; value: string }>
}

export interface DetailedCountryRecord extends CountryRecord {
  projectBlueprints?: CountryProject[]
}

export const regionFill = (region: Region) => {
  switch (region) {
    case 'West Africa':
      return 'rgba(180, 83, 9, 0.30)'
    case 'Central Africa':
      return 'rgba(22, 101, 52, 0.28)'
    case 'Southern Africa':
      return 'rgba(22, 163, 74, 0.24)'
    default:
      return 'rgba(15, 61, 49, 0.34)'
  }
}

export const formatFarmers = (engagement: number) => `${Math.round(engagement / 1000)}K+`

export const cityCoordinates: Record<string, [number, number]> = {
  'Nairobi': [36.8219, -1.2921],
  'Kisumu': [34.7617, -0.0917],
  'Nakuru': [36.0800, -0.3031],
  'Kitui': [38.0106, -1.3694],
  'Tharaka Nithi': [37.9833, -0.2500],
  'Kampala': [32.5825, 0.3476],
  'Gulu': [32.2989, 2.7667],
  'Mbarara': [30.6545, -0.6105],
  'Dar es Salaam': [39.2622, -6.7924],
  'Dodoma': [35.7516, -6.1630],
  'Morogoro': [37.6668, -8.3685],
  'Njombe': [34.7667, -9.3333],
  'Arusha': [36.6833, -3.3667],
  'Msimba Farm': [37.2833, -7.0333],
  'Kigali': [30.0619, -1.9441],
  'Musanze': [29.6349, -1.4998],
  'Huye': [29.7434, -2.5966],
  'Addis Ababa': [38.7469, 9.0227],
  'Hawassa': [38.4805, 7.0504],
  'Bahir Dar': [37.3939, 11.5936],
  'Lusaka': [28.2833, -15.4167],
  'Chipata': [32.6500, -13.6333],
  'Ndola': [28.6366, -12.9587],
  'Accra': [-0.1870, 5.6037],
  'Kumasi': [-1.6244, 6.6884],
  'Tamale': [-0.8393, 9.4008],
  'Kinshasa': [15.3150, -4.3317],
  'Goma': [29.2215, -1.6585],
  'Lubumbashi': [27.4794, -11.6609],
  'Bukavu': [28.8628, -2.5083],
  'Abuja': [7.3986, 9.0765],
  'Kano': [8.5167, 11.9964],
  'Ibadan': [3.8996, 7.3775],
  'Bujumbura': [29.3561, -3.3822],
  'Gitega': [29.9246, -3.4270],
  'Ngozi': [29.8306, -2.8797],
  'East Africa corridor': [34.0, 0.0],
  'Eastern and Southern DRC': [27.0, -6.0],
  'West Africa': [2.0, 9.0],
  'Southern Africa corridor': [29.0, -16.0],
  'Nigeria': [8.0, 10.0],
  'Ghana / regional': [-1.0, 8.0],
}

const countrySeeds: DetailedCountryRecord[] = [
  {
    name: 'Kenya',
    code: 'KE',
    region: 'East Africa',
    projects: 8,
    engagement: 124000,
    overview: 'Seed regulation reform, MbeguChoice, and county agrodealer systems made Kenya the strongest public-facing portfolio.',
    focus: ['Seed certification', 'Market linkages', 'Traceability'],
    impact: ['Updated seed rules', 'Better market trust', 'Stronger last-mile distribution'],
    locations: ['Nairobi', 'Kisumu', 'Nakuru'],
    stats: [
      { label: 'Active projects', value: '8' },
      { label: 'Farmers reached', value: '124K+' },
      { label: 'County hubs', value: '16' },
    ],
    projectBlueprints: [
      {
        title: 'Seed Policy and Regulatory Reform',
        location: 'Nairobi',
        summary: 'Supported the drafting and release of updated seed regulations in 2016 to facilitate private sector involvement and self-regulation.',
        outcome: 'Introduced standard seed as a new certified class and authorized private inspectors and seed labs.',
        partners: ['MoA', 'KEPHIS', 'STAK', 'TASAI'],
        evidence: ['Updated regulations', 'Private inspector authorization', 'Standard seed classification'],
        methods: ['Policy dialogue', 'Benchmarking trips', 'Advocacy'],
        timeline: '2013-2018',
        budget_scope: 'National Policy Tier',
        key_deliverables: ['Authorized standard seed class', 'Allowed private certification labs', 'Published gazetted rules'],
      },
      {
        title: 'MbeguChoice and Seed Sector Platform',
        location: 'Nairobi',
        summary: 'A variety decision tool and open information platform helped farmers, companies, and regulators use seed data more effectively.',
        outcome: 'Supported traceability, variety lookup, and better access to recommended crop choices through scratch-off labels.',
        partners: ['STAK', 'KALRO', 'mPedigree'],
        evidence: ['Scratch-off labels', 'Open platform', 'Variety selection tool'],
        methods: ['Digital design', 'Data curation', 'Farmer-facing UX'],
        timeline: '2016-2021',
        budget_scope: 'Digital Innovation Tier',
        key_deliverables: ['SMS verification integration', 'Variety database app', 'Label roll-out program'],
      },
      {
        title: 'Agrodealer Capacity Building',
        location: 'Nakuru',
        summary: 'Trained over 3,000 agrodealers across 20 counties and formed 16 county-based associations to strengthen the last-mile link.',
        outcome: 'Transformed agrodealers into informed actors providing technical advice via demonstration plots and field days.',
        partners: ['County associations', 'Extension officers', 'Seed companies'],
        evidence: ['3,000+ agrodealers trained', '16 associations formed', 'Demo plots'],
        methods: ['Training', 'Institutional development', 'Field days'],
        timeline: '2017-2023',
        budget_scope: 'Regional Extension Tier',
        key_deliverables: ['County networks established', 'Curriculum deployment', 'Annual field days'],
      },
      {
        title: 'Seed Outgrower Training',
        location: 'Tharaka Nithi',
        summary: 'Delivered field-based training for seed outgrowers and CBOs engaged in Standard Certified Seed production.',
        outcome: 'Decentralized seed production, improving local availability of improved varieties in marginalized regions.',
        partners: ['CBOs', 'Local seed companies'],
        evidence: ['Decentralized production', 'Trained outgrowers', 'Improved yields'],
        methods: ['Field-based training', 'Capacity building', 'Quality control'],
        timeline: '2019-2023',
        budget_scope: 'Community Tier',
        key_deliverables: ['SOP manuals created', 'Demonstration yields tracking', 'CBO integration'],
      }
    ],
  },
  {
    name: 'Uganda',
    code: 'UG',
    region: 'East Africa',
    projects: 6,
    engagement: 92000,
    overview: 'Virtual training and practical seed company support keep the Ugandan portfolio field-ready and exportable.',
    focus: ['Seed company management', 'Certification', 'Training'],
    impact: ['Improved technical capacity', 'Better quality assurance', 'Wider training access'],
    locations: ['Kampala', 'Gulu', 'Mbarara'],
    stats: [
      { label: 'Active projects', value: '6' },
      { label: 'People trained', value: '92K+' },
      { label: 'Learning modes', value: 'Hybrid' },
    ],
    projectBlueprints: [
      {
        title: 'Virtual seed company and inspector training',
        location: 'Kampala',
        summary: 'A five-day online training model brought seed company staff and inspectors into one learning track during COVID-19.',
        outcome: 'Expanded access to technical training without losing content quality or engagement.',
        partners: ['USTA', 'National Seed Certification Unit', 'Subject matter experts'],
        evidence: ['70+ company staff', '15 inspectors', 'Online delivery model'],
        methods: ['Remote facilitation', 'Technical curriculum', 'Interactive case work'],
        timeline: '2020',
        budget_scope: 'Emergency Response Tier',
        key_deliverables: ['Virtual curriculum', 'Cross-sector integration', 'Post-training audits'],
      },
      {
        title: 'Seed company management coaching',
        location: 'Kampala',
        summary: 'Business development support helped firms strengthen planning, finance, and customer-facing operations.',
        outcome: 'Companies gained more practical tools for production, marketing, and bookkeeping.',
        partners: ['Seed companies', 'Business mentors', 'Training partners'],
        evidence: ['Group training', 'One-on-one coaching', 'Business tools'],
        methods: ['Coaching', 'Workshops', 'Enterprise support'],
        timeline: '2021-2023',
        budget_scope: 'Enterprise Tier',
        key_deliverables: ['Business plan templates', 'Financial modeling tools', 'Market strategy workshops'],
      },
    ],
  },
  {
    name: 'Tanzania',
    code: 'TZ',
    region: 'East Africa',
    projects: 9,
    engagement: 109000,
    overview: 'Digital certification, input transparency, and anti-counterfeit reporting anchor the Tanzania portfolio under the ESSETA program.',
    focus: ['Digital systems', 'Seed certification', 'Quality control'],
    impact: ['More transparent seed data', 'Better lab efficiency', 'Stronger regulator tools'],
    locations: ['Dar es Salaam', 'Dodoma', 'Morogoro'],
    stats: [
      { label: 'Active projects', value: '9' },
      { label: 'Stakeholders consulted', value: '2,000+' },
      { label: 'Priority crops', value: '13' },
    ],
    projectBlueprints: [
      {
        title: 'Tanzania Agri-Inputs Platform & SDF',
        location: 'Dar es Salaam',
        summary: 'A public platform with searchable crop varieties, agrodealer contacts, and agro-chemicals. Supported MoA in Seed Demand Forecasting (SDF).',
        outcome: 'The Ministry migrated the platform to its server. SDF was completed for 10 priority crops.',
        partners: ['MoA', 'TOSCI', 'Agricultural Seed Agency'],
        evidence: ['Searchable variety lists', 'Seed demand forecast reports', 'Agrodealer mapping'],
        methods: ['Platform design', 'Stakeholder consulting', 'SDF Training'],
        timeline: '2018-2024 (ESSETA)',
        budget_scope: 'National System Tier',
        key_deliverables: ['Platform handover to MoA', 'Published 10 crop forecasts', 'Mapped 2,000+ stakeholders'],
      },
      {
        title: 'Tanzania Online Application System (TOAS)',
        location: 'Dodoma',
        summary: 'Digitized the seed certification system, moving from paper-based to an end-to-end online platform for field inspections, lab analysis, and permit issuance.',
        outcome: 'TOAS went live in December 2022. All certification services are now online, significantly improving turnaround times.',
        partners: ['TOSCI', 'MoA'],
        evidence: ['TOAS platform', 'Instant certificate printing', 'Digital receipts'],
        methods: ['System digitization', 'User training', 'Process optimization'],
        timeline: '2020-2022',
        budget_scope: 'Digital Innovation Tier',
        key_deliverables: ['E-certification launch', 'Payment gateway integration', 'Legacy data migration'],
      },
      {
        title: 'Laboratory and certification modernization',
        location: 'Njombe',
        summary: 'Upgraded three key laboratories (Arusha, Morogoro, Njombe) to ISTA standards and trained staff to handle new equipment.',
        outcome: 'Lab turnaround improved dramatically (e.g., maize germination results reduced from 14-21 days to 4-7 days).',
        partners: ['TOSCI', 'ISTA Consultants'],
        evidence: ['Cold storage lab built', 'Equipment procured', 'SOPs implemented'],
        methods: ['Lab rehabilitation', 'Technical training', 'Quality Assurance (QA)'],
        timeline: '2021-2023',
        budget_scope: 'Infrastructure Tier',
        key_deliverables: ['ISTA compliant upgrades', 'Cold storage integration', 'Staff certification programs'],
      },
      {
        title: 'Agricultural Seed Agency (ASA) Enhancement',
        location: 'Msimba Farm',
        summary: 'Upgraded seed processing plant and warehouse at Msimba Farm and implemented soil health interventions.',
        outcome: 'Procured a 3.0 tons/hour processing plant and trained ASA staff on operations and maintenance.',
        partners: ['ASA', 'SeedCo Kenya'],
        evidence: ['Processing plant installed', 'Soil kits used', 'Warehouse rebuilt'],
        methods: ['Infrastructure upgrade', 'Agronomic training', 'Exchange visits'],
        timeline: '2022-2024',
        budget_scope: 'Capital Equipment Tier',
        key_deliverables: ['3.0 ton/hour plant', 'Warehouse rehabilitation', 'Soil remediation protocol'],
      }
    ],
  },
  {
    name: 'Rwanda',
    code: 'RW',
    region: 'East Africa',
    projects: 5,
    engagement: 61000,
    overview: 'Rwanda is treated as a coordination and exchange market, with practical support for associations and learning visits.',
    focus: ['Association development', 'Peer learning', 'Capacity building'],
    impact: ['Stronger sector coordination', 'Better regional links', 'Practical training support'],
    locations: ['Kigali', 'Musanze', 'Huye'],
    stats: [
      { label: 'Active projects', value: '5' },
      { label: 'Engagement', value: '61K+' },
      { label: 'Learning visits', value: '4' },
    ],
  },
  {
    name: 'Ethiopia',
    code: 'ET',
    region: 'East Africa',
    projects: 6,
    engagement: 70000,
    overview: 'Evidence-led maize seed research and policy support anchor the Ethiopian portfolio.',
    focus: ['Maize seed systems', 'Policy', 'Field evidence'],
    impact: ['Stronger research base', 'Better market understanding', 'Regional insight'],
    locations: ['Addis Ababa', 'Hawassa', 'Bahir Dar'],
    stats: [
      { label: 'Active projects', value: '6' },
      { label: 'Engagement', value: '70K+' },
      { label: 'Research streams', value: '3' },
    ],
  },
  {
    name: 'Malawi',
    code: 'MW',
    region: 'Southern Africa',
    projects: 4,
    engagement: 47000,
    overview: 'Malawi is represented as a strong Southern Africa partner market with practical seed system learning.',
    focus: ['Seed logistics', 'Training', 'Regional links'],
    impact: ['Better cross-border learning', 'Practical market access', 'Training support'],
    locations: ['Lilongwe', 'Blantyre', 'Mzuzu'],
    stats: [
      { label: 'Active projects', value: '4' },
      { label: 'Engagement', value: '47K+' },
      { label: 'Partner links', value: 'Regional' },
    ],
  },
  {
    name: 'Zambia',
    code: 'ZM',
    region: 'Southern Africa',
    projects: 7,
    engagement: 76000,
    overview: 'Hybrid training and certification work in Zambia made the system more scalable and accessible.',
    focus: ['Certification', 'Digital training', 'Quality assurance'],
    impact: ['Tripled enrollment', 'Lower travel burden', 'Cross-border participation'],
    locations: ['Lusaka', 'Chipata', 'Ndola'],
    stats: [
      { label: 'Active projects', value: '7' },
      { label: 'People trained', value: '76K+' },
      { label: 'Training mode', value: 'Hybrid' },
    ],
    projectBlueprints: [
      {
        title: 'Hybrid seed inspector training',
        location: 'Lusaka',
        summary: 'Transitioned the annual in-person seed inspector training to a hybrid digital model during the COVID-19 pandemic.',
        outcome: 'Tripled annual enrollment and reduced costs, enabling cross-border participation from Malawi and Mozambique.',
        partners: ['SCCI', 'CRS'],
        evidence: ['Digital curriculum', 'Tripled enrollment', 'Cross-border trainees'],
        methods: ['Digital facilitation', 'Instructional design', 'Remote learning'],
        timeline: '2020-2021',
        budget_scope: 'Digital Transition Tier',
        key_deliverables: ['LMS configuration', 'Blended module rollout', 'Regional onboarding'],
      },
    ],
  },
  {
    name: 'Zimbabwe',
    code: 'ZW',
    region: 'Southern Africa',
    projects: 5,
    engagement: 53000,
    overview: 'Zimbabwe sits in the southern portfolio with a mix of market learning, seed access, and practical coordination work.',
    focus: ['Market access', 'Training', 'Regional learning'],
    impact: ['Shared regional methods', 'Practical advisory support', 'Better network building'],
    locations: ['Harare', 'Bulawayo', 'Masvingo'],
    stats: [
      { label: 'Active projects', value: '5' },
      { label: 'Engagement', value: '53K+' },
      { label: 'Regional links', value: 'Strong' },
    ],
  },
  {
    name: 'Mozambique',
    code: 'MZ',
    region: 'Southern Africa',
    projects: 5,
    engagement: 44000,
    overview: 'Mozambique is framed as a logistics and market-access market where cross-border learning matters.',
    focus: ['Supply chain', 'Market access', 'Regional learning'],
    impact: ['Better logistics thinking', 'Field learning', 'Distribution support'],
    locations: ['Maputo', 'Beira', 'Nampula'],
    stats: [
      { label: 'Active projects', value: '5' },
      { label: 'Engagement', value: '44K+' },
      { label: 'Corridors', value: '3' },
    ],
  },
  {
    name: 'Senegal',
    code: 'SN',
    region: 'West Africa',
    projects: 5,
    engagement: 50000,
    overview: 'Senegal supports market analysis and youth-focused learning inside the West Africa portfolio.',
    focus: ['Youth engagement', 'Markets', 'Association support'],
    impact: ['Better market visibility', 'Youth-centered learning', 'More practical programming'],
    locations: ['Dakar', 'Thiès', 'Saint-Louis'],
    stats: [
      { label: 'Active projects', value: '5' },
      { label: 'Engagement', value: '50K+' },
      { label: 'Market studies', value: '2' },
    ],
  },
  {
    name: 'Burkina Faso',
    code: 'BF',
    region: 'West Africa',
    projects: 4,
    engagement: 42000,
    overview: 'Burkina Faso is used as a West African reference market for production and farmer-school style support.',
    focus: ['Production systems', 'Education', 'Resilience'],
    impact: ['Better local learning', 'Improved seed multiplication', 'Strong farmer linkages'],
    locations: ['Ouagadougou', 'Bobo-Dioulasso', 'Koudougou'],
    stats: [
      { label: 'Active projects', value: '4' },
      { label: 'Engagement', value: '42K+' },
      { label: 'Learning sites', value: '3' },
    ],
  },
  {
    name: 'Mali',
    code: 'ML',
    region: 'West Africa',
    projects: 4,
    engagement: 36000,
    overview: 'Mali reflects the portfolio’s attention to regional trade, nutrition, and practical seed support.',
    focus: ['Trade', 'Nutrition', 'Food security'],
    impact: ['Regional coordination', 'Practical systems thinking', 'Food-security framing'],
    locations: ['Bamako', 'Sikasso', 'Ségou'],
    stats: [
      { label: 'Active projects', value: '4' },
      { label: 'Engagement', value: '36K+' },
      { label: 'Markets', value: 'Regional' },
    ],
  },
  {
    name: 'Ghana',
    code: 'GH',
    region: 'West Africa',
    projects: 6,
    engagement: 73000,
    overview: 'Ghana connects university training, seed business management, and association support.',
    focus: ['Digital support', 'Training', 'Business management'],
    impact: ['Stronger graduate capacity', 'Practical sector links', 'Better business tools'],
    locations: ['Accra', 'Kumasi', 'Tamale'],
    stats: [
      { label: 'Active projects', value: '6' },
      { label: 'Engagement', value: '73K+' },
      { label: 'Training cohorts', value: 'Multiple' },
    ],
  },
  {
    name: 'Cameroon',
    code: 'CM',
    region: 'Central Africa',
    projects: 4,
    engagement: 51000,
    overview: 'Cameroon is represented as a central hub for value-addition, processing, and business support.',
    focus: ['Value addition', 'Processing', 'Business support'],
    impact: ['Broader regional insight', 'Practical enterprise learning', 'Central Africa visibility'],
    locations: ['Yaoundé', 'Douala', 'Bamenda'],
    stats: [
      { label: 'Active projects', value: '4' },
      { label: 'Engagement', value: '51K+' },
      { label: 'Hub cities', value: '3' },
    ],
  },
  {
    name: 'Congo',
    geoName: 'Dem. Rep. Congo',
    code: 'CD',
    region: 'Central Africa',
    projects: 6,
    engagement: 66000,
    overview: 'The DRC portfolio combines formal seed sector research with bilingual company support.',
    focus: ['Research', 'Logistics', 'Quality assurance'],
    impact: ['Better seed sector visibility', 'Practical bilingual support', 'Regional market insight'],
    locations: ['Kinshasa', 'Goma', 'Lubumbashi'],
    stats: [
      { label: 'Active projects', value: '6' },
      { label: 'Engagement', value: '66K+' },
      { label: 'Languages', value: '2' },
    ],
    projectBlueprints: [
      {
        title: 'Formal seed sector status study',
        location: 'Eastern and Southern DRC',
        summary: 'Profiled the status of the formal seed sector in Eastern and Southern DRC to identify systemic bottlenecks.',
        outcome: 'Provided strong recommendations to improve the system and created a practical base for reform discussions.',
        partners: ['Seed sector actors', 'Researchers'],
        evidence: ['Status report', 'Gap analysis', 'Policy recommendations'],
        methods: ['Field research', 'Stakeholder interviews', 'Evidence synthesis'],
        timeline: '2021-2022',
        budget_scope: 'Research Tier',
        key_deliverables: ['Comprehensive bottleneck report', 'Policy roadmap', 'Stakeholder alignment brief'],
      },
      {
        title: 'Bilingual Seed Enterprise Training',
        location: 'Goma',
        summary: 'Delivered bilingual (English and French) training to 15 seed companies and agrodealers focusing on business development and quality assurance.',
        outcome: 'Equipped emerging companies with practical tools adapted to the Eastern and Southern DRC market context.',
        partners: ['Seed companies', 'Agrodealers'],
        evidence: ['Bilingual training materials', 'Case studies', 'Participant action plans'],
        methods: ['Enterprise coaching', 'Quality assurance training', 'Case-based learning'],
        timeline: '2022-2023',
        budget_scope: 'Enterprise Tier',
        key_deliverables: ['Translated SOPs', 'Field coaching logs', 'Enterprise health checks'],
      },
    ],
  },
  {
    name: 'Nigeria',
    code: 'NG',
    region: 'West Africa',
    projects: 6,
    engagement: 98000,
    overview: 'Nigeria is used as a large-scale West African market for enterprise support and association building.',
    focus: ['Enterprise strengthening', 'Association growth', 'Regional scale'],
    impact: ['Broader enterprise learning', 'Stronger professional networks', 'Regional exchange'],
    locations: ['Abuja', 'Kano', 'Ibadan'],
    stats: [
      { label: 'Active projects', value: '6' },
      { label: 'Engagement', value: '98K+' },
      { label: 'Scale', value: 'Large' },
    ],
  },
  {
    name: 'South Sudan',
    geoName: 'S. Sudan',
    code: 'SS',
    region: 'East Africa',
    projects: 3,
    engagement: 28000,
    overview: 'South Sudan reflects recovery-oriented seed support and resilience programming.',
    focus: ['Recovery', 'Food security', 'Resilience'],
    impact: ['Emergency-aware programming', 'Practical support', 'Regional visibility'],
    locations: ['Juba', 'Wau', 'Malakal'],
    stats: [
      { label: 'Active projects', value: '3' },
      { label: 'Engagement', value: '28K+' },
      { label: 'Focus', value: 'Recovery' },
    ],
  },
  {
    name: 'Burundi',
    code: 'BI',
    region: 'East Africa',
    projects: 4,
    engagement: 30000,
    overview: 'Burundi gets targeted training and business development support for emerging seed firms.',
    focus: ['Emerging companies', 'Training', 'Business development'],
    impact: ['Stronger technical capacity', 'French and English support', 'Practical coaching'],
    locations: ['Bujumbura', 'Gitega', 'Ngozi'],
    stats: [
      { label: 'Active projects', value: '4' },
      { label: 'Engagement', value: '30K+' },
      { label: 'Languages', value: '2' },
    ],
    projectBlueprints: [
      {
        title: 'Emerging Enterprise Training',
        location: 'Bujumbura',
        summary: 'Delivered targeted training and business development support to emerging seed companies in both English and French.',
        outcome: 'Strengthened technical capacity and operational sustainability for seed enterprises.',
        partners: ['Emerging seed companies', 'Technical trainers'],
        evidence: ['Bilingual training materials', 'Business plans', 'Agronomic protocols'],
        methods: ['Training', 'Coaching', 'Peer learning'],
        timeline: '2021-2023',
        budget_scope: 'Enterprise Tier',
        key_deliverables: ['Custom enterprise blueprints', 'Quality assurance workshops'],
      },
      {
        title: 'Seed Association Learning Trip',
        location: 'Bujumbura',
        summary: 'Facilitated a learning trip for members of the Burundi seed association to Kenya to observe mature industry practices.',
        outcome: 'Exposed association leaders to advanced governance, advocacy, and quality assurance methods.',
        partners: ['Burundi Seed Association', 'STAK (Kenya)'],
        evidence: ['Exchange visit report', 'Shared governance tools', 'Action plans'],
        methods: ['Learning trip', 'Benchmarking', 'Convening'],
        timeline: '2022',
        budget_scope: 'Regional Integration Tier',
        key_deliverables: ['Post-trip implementation roadmap', 'Governance restructuring protocol'],
      }
    ],
  },
  {
    name: 'Liberia',
    code: 'LR',
    region: 'West Africa',
    projects: 3,
    engagement: 26000,
    overview: 'Liberia is represented as an early-stage market where partner mapping and seed system learning matter.',
    focus: ['Market mapping', 'Learning', 'Partnerships'],
    impact: ['Early-stage system insight', 'Practical partner support', 'Regional learning'],
    locations: ['Monrovia', 'Gbarnga', 'Harper'],
    stats: [
      { label: 'Active projects', value: '3' },
      { label: 'Engagement', value: '26K+' },
      { label: 'Market maturity', value: 'Emerging' },
    ],
  },
  {
    name: 'South Africa',
    code: 'ZA',
    region: 'Southern Africa',
    projects: 4,
    engagement: 41000,
    overview: 'South Africa is used as a southern benchmark market for learning, convening, and evidence exchange.',
    focus: ['Benchmarking', 'Learning trips', 'Regional coordination'],
    impact: ['Southern Africa perspective', 'Practical comparisons', 'Partner convening'],
    locations: ['Pretoria', 'Johannesburg', 'Cape Town'],
    stats: [
      { label: 'Active projects', value: '4' },
      { label: 'Engagement', value: '41K+' },
      { label: 'Benchmarks', value: 'Regional' },
    ],
  },
  {
    name: 'Sierra Leone',
    code: 'SL',
    region: 'West Africa',
    projects: 3,
    engagement: 25000,
    overview: 'Sierra Leone is treated as an emerging seed market for practical coaching and field learning.',
    focus: ['Coaching', 'Field learning', 'Market growth'],
    impact: ['Practical support', 'Emerging market visibility', 'Regional knowledge transfer'],
    locations: ['Freetown', 'Bo', 'Kenema'],
    stats: [
      { label: 'Active projects', value: '3' },
      { label: 'Engagement', value: '25K+' },
      { label: 'Market stage', value: 'Emerging' },
    ],
  },
]

const countriesData = Object.fromEntries(countrySeeds.map((country) => [country.name, country])) as Record<string, DetailedCountryRecord>
const countriesByGeoName = Object.fromEntries(countrySeeds.map((country) => [country.geoName ?? country.name, country])) as Record<string, DetailedCountryRecord>

const createGenericProjects = (country: DetailedCountryRecord): CountryProject[] => {
  const firstLocation = country.locations[0] ?? country.name
  const secondLocation = country.locations[1] ?? firstLocation
  const thirdLocation = country.locations[2] ?? country.region
  const focusA = country.focus[0] ?? country.region
  const focusB = country.focus[1] ?? focusA

  return [
    {
      title: `${country.name} portfolio review`,
      location: firstLocation,
      summary: country.overview,
      outcome: `${country.projects} initiatives coordinated around ${focusA.toLowerCase()}.`,
      partners: ['Local ministries', 'Seed associations', 'Private partners'],
      evidence: ['Country brief', 'Field notes', 'Stakeholder map'],
      methods: ['Desk review', 'Field visits', 'Stakeholder interviews'],
      timeline: 'Ongoing',
      budget_scope: 'Review Phase',
      key_deliverables: ['Annual system health report', 'Stakeholder map']
    },
    {
      title: `${country.name} implementation support`,
      location: secondLocation,
      summary: `Operational support focused on ${focusB.toLowerCase()} and practical delivery in ${secondLocation}.`,
      outcome: `Built on ${formatFarmers(country.engagement)} farmer-level and partner engagement touchpoints.`,
      partners: ['Implementing partners', 'Extension officers', 'Private sector'],
      evidence: ['Partner sessions', 'Training notes', 'Delivery checklists'],
      methods: ['Coaching', 'Work planning', 'Technical support'],
      timeline: '2020-Present',
      budget_scope: 'Execution Phase',
      key_deliverables: ['Quarterly training sprints', 'Local partner integration']
    },
    {
      title: `${country.name} learning and market support`,
      location: thirdLocation,
      summary: `Market access, regulatory learning, and field feedback shaped the ${country.region} program.`,
      outcome: `Reinforced sector coordination across the wider ${country.region.toLowerCase()} network.`,
      partners: ['Sector actors', 'Development partners', 'Regional peers'],
      evidence: ['Learning exchange', 'Workshop outputs', 'Action logs'],
      methods: ['Convening', 'Benchmarking', 'Advisory support'],
      timeline: '2022-2024',
      budget_scope: 'Advisory Phase',
      key_deliverables: ['Regional synthesis document', 'Shared toolkit deployment']
    },
  ]
}

const buildCountryProjects = (country: DetailedCountryRecord): CountryProject[] => country.projectBlueprints ?? createGenericProjects(country)

export default function InteractiveMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [selectedCountry, setSelectedCountry] = useState<DetailedCountryRecord | null>(null)
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null)
  const [hoveredName, setHoveredName] = useState<string | null>(null)

  const mapboxMapRef = useRef<any>(null)

  const updateTooltipPos = useCallback((pos: { x: number; y: number }) => {
    if (tooltipRef.current) {
      tooltipRef.current.style.left = `${pos.x}px`
      tooltipRef.current.style.top = `${pos.y}px`
    }
  }, [])

  const activeProjects = useMemo(
    () => (selectedCountry ? buildCountryProjects(selectedCountry) : []),
    [selectedCountry]
  )
  
  const closeCountryOverlay = () => {
    setSelectedCountry(null)
    setSelectedProjectIndex(null)
    setHoveredName(null)
    if (mapboxMapRef.current) {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
      mapboxMapRef.current.fitBounds([[-20, -35], [55, 38]], {
        padding: isMobile 
          ? { top: 20, bottom: 20, left: 20, right: 20 }
          : { top: 60, bottom: 60, left: 60, right: 60 },
        pitch: 0,
        duration: 1800,
        essential: true
      });
    }
  }

  const handleCountryClickWrapper = (countryName: string) => {
    const country = countriesByGeoName[countryName] || countriesData[countryName]
    if (country) {
      setSelectedCountry(country)
      setSelectedProjectIndex(null)
      setHoveredName(null)
    }
  }

  return (
    <section className="w-full relative bg-primary-ivory h-[100dvh] flex flex-col pt-[104px] overflow-hidden">
      {/* Main Interactive Workspace */}
      <div className="relative flex-1 flex flex-col w-full max-w-[1800px] mx-auto h-full overflow-hidden" ref={containerRef}>
        
        {/* Mobile Header / Desktop Overlay */}
        <AnimatePresence>
          {!selectedCountry && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full lg:absolute lg:top-20 lg:left-12 z-20 lg:max-w-sm shrink-0 bg-white/60 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border-b border-mist lg:border-none p-6 lg:p-0"
            >
              <div className="space-y-6">
                <div className="lg:bg-white/75 lg:p-6 lg:-ml-4 lg:rounded-2xl lg:backdrop-blur-md lg:shadow-xl lg:border lg:border-white/60 space-y-5 lg:max-w-sm">
                  <h2 className="text-deep-forest text-3xl lg:text-4xl font-serif tracking-tight leading-tight font-bold text-center lg:text-left">Our Footprint<br className="hidden lg:block" />Across the Continent</h2>
                  <p className="text-xs lg:text-sm text-charcoal/75 font-light leading-relaxed hidden sm:block text-center lg:text-left">
                    Click a highlighted country to explore its portfolio. The continent map acts as your expansive navigation canvas, while the dossier dynamically slides out to focus on regional impact and deliverables.
                  </p>
                  
                  {/* Premium Search Box */}
                  <div className="w-full pointer-events-auto">
                    <MapSearch onCountrySelect={handleCountryClickWrapper} countries={countrySeeds} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Map Canvas - scales with flex-1 */}
        <div className="flex-1 relative h-full w-full transition-all duration-500 ease-in-out">
          <div className="absolute inset-0 z-0">
            <InteractiveMapbox 
              onMapReady={(m) => mapboxMapRef.current = m}
              onCountryClick={handleCountryClickWrapper}
              setHoveredName={setHoveredName}
              setTooltipPos={updateTooltipPos}
              selectedCountryName={selectedCountry?.name}
              activeProjects={activeProjects}
              selectedProjectIndex={selectedProjectIndex}
              setSelectedProjectIndex={setSelectedProjectIndex}
              cityCoordinates={cityCoordinates}
            />
          </div>

          <div
            ref={tooltipRef}
            style={{ 
              position: 'fixed', 
              left: 0, 
              top: 0, 
              pointerEvents: 'none',
              opacity: hoveredName && hoveredName !== selectedCountry?.name ? 1 : 0,
              transform: hoveredName && hoveredName !== selectedCountry?.name ? 'scale(1) translate(-50%, 24px)' : 'scale(0.95) translate(-50%, 14px)',
              transition: 'opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: 50
            }}
            className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full backdrop-blur-md border border-white/10 bg-deep-forest/40 text-white shadow-md flex items-center justify-center"
          >
            {hoveredName || ''}
          </div>
        </div>

        {/* Dossier — Bottom Sheet on Mobile, Floating Overlay on Desktop */}
        <AnimatePresence mode="wait">
          {selectedCountry && (
            <motion.div
              key={selectedCountry.name}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={[
                // Mobile: bottom sheet
                'absolute bottom-0 left-0 right-0 h-[50vh] z-30',
                'rounded-t-3xl',
                // Desktop: floating overlay card anchored right
                'lg:bottom-auto lg:left-auto lg:right-8 lg:top-8',
                'lg:w-[420px] lg:max-h-[calc(100%-64px)] lg:h-auto',
                'lg:rounded-2xl',
                // Shared glass styling
                'bg-white/80 lg:bg-white/70 backdrop-blur-2xl',
                'border border-white/40 lg:border-white/30',
                'shadow-[0_-8px_40px_rgba(15,61,49,0.08)] lg:shadow-[0_20px_60px_-12px_rgba(15,61,49,0.25),0_0_0_1px_rgba(15,61,49,0.04)]',
                'flex flex-col overflow-hidden',
              ].join(' ')}
            >
              {/* Drag indicator — mobile only */}
              <div className="lg:hidden flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-charcoal/15" />
              </div>

              {/* Header */}
              <div className="flex-shrink-0 flex items-start justify-between gap-3 px-6 pt-4 lg:pt-6 pb-4 relative">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-deep-forest/8 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-deep-forest/70">
                    <Globe size={11} className="opacity-60" />
                    {selectedCountry.region}
                  </div>
                  <h3 className="text-deep-forest text-2xl lg:text-[28px] font-serif tracking-tight leading-none font-bold">{selectedCountry.name}</h3>
                </div>
                <button
                  onClick={closeCountryOverlay}
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-charcoal/5 text-charcoal/50 transition-all duration-200 hover:bg-charcoal/10 hover:text-charcoal hover:scale-110"
                  aria-label="Close country dossier"
                >
                  <X size={16} strokeWidth={2.5} />
                </button>
              </div>

              {/* Subtle separator */}
              <div className="mx-6 h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent" />

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 py-5 custom-scrollbar">
                <div className="space-y-6">

                  {/* Overview */}
                  <p className="text-[13px] lg:text-sm text-charcoal/70 font-light leading-relaxed">
                    {selectedCountry.overview}
                  </p>

                  {/* Stats row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-deep-forest p-4 text-white relative overflow-hidden">
                      <div className="absolute -right-3 -top-3 w-16 h-16 rounded-full bg-white/[0.04]" />
                      <Briefcase className="text-accent-gold/80" size={16} />
                      <div className="mt-2.5 text-2xl font-mono tracking-tight font-bold leading-none">{selectedCountry.projects}</div>
                      <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/50 font-bold">Projects</div>
                    </div>
                    <div className="rounded-xl bg-deep-forest/[0.04] p-4 text-deep-forest border border-deep-forest/[0.06] relative overflow-hidden">
                      <div className="absolute -right-3 -top-3 w-16 h-16 rounded-full bg-deep-forest/[0.03]" />
                      <Users className="text-deep-forest/60" size={16} />
                      <div className="mt-2.5 text-2xl font-mono tracking-tight font-bold leading-none">{formatFarmers(selectedCountry.engagement)}</div>
                      <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-charcoal/40 font-bold">Engagement</div>
                    </div>
                  </div>

                  {/* Project cards */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-charcoal/35">Projects</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-gold/80 bg-accent-gold/8 px-2 py-0.5 rounded-full">{activeProjects.length}</div>
                    </div>
                    
                    <div className="grid gap-2.5">
                      {activeProjects.map((project, index) => {
                        const isActive = index === selectedProjectIndex

                        return (
                          <div
                            key={index}
                            className={[
                              'rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer',
                              isActive
                                ? 'border-deep-forest/15 bg-white shadow-[0_4px_16px_rgba(15,61,49,0.06)]'
                                : 'border-charcoal/[0.06] bg-white/50 hover:bg-white/80 hover:border-charcoal/10 hover:shadow-sm',
                            ].join(' ')}
                            onClick={() => setSelectedProjectIndex(isActive ? null : index)}
                          >
                            {/* Card header */}
                            <div className={[
                              'p-3.5 flex items-start justify-between gap-3 transition-colors duration-300',
                              isActive ? 'bg-deep-forest text-white' : ''
                            ].join(' ')}>
                              <div className="space-y-0.5 min-w-0">
                                <div className={[
                                  'flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.18em]',
                                  isActive ? 'text-accent-gold/80' : 'text-charcoal/30'
                                ].join(' ')}>
                                  <MapPin size={9} />
                                  <span className="truncate">{project.location}</span>
                                </div>
                                <div className={[
                                  'font-serif text-base leading-snug',
                                  isActive ? 'text-white' : 'text-deep-forest'
                                ].join(' ')}>
                                  {project.title}
                                </div>
                              </div>
                              <div className={[
                                'shrink-0 flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-mono font-bold',
                                isActive ? 'bg-white/10 text-white/70' : 'bg-charcoal/[0.05] text-charcoal/30'
                              ].join(' ')}>
                                {index + 1}
                              </div>
                            </div>

                            {/* Expanded content */}
                            <AnimatePresence>
                              {isActive && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                  className="overflow-hidden"
                                >
                                  <div className="p-3.5 space-y-4 bg-white">
                                    {/* Meta tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                      {project.timeline && (
                                        <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.15em] text-charcoal/45 bg-charcoal/[0.04] px-2 py-0.5 rounded-md">
                                          <Calendar size={10} /> {project.timeline}
                                        </div>
                                      )}
                                      {project.budget_scope && (
                                        <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.15em] text-charcoal/45 bg-charcoal/[0.04] px-2 py-0.5 rounded-md">
                                          <Layers3 size={10} /> {project.budget_scope}
                                        </div>
                                      )}
                                    </div>

                                    {/* Summary + Outcome */}
                                    <div className="space-y-2.5 text-[12px] text-charcoal/65 leading-relaxed">
                                      <p>{project.summary}</p>
                                      <div className="rounded-lg border border-accent-gold/20 bg-accent-gold/[0.04] p-2.5 text-deep-forest">
                                        <span className="font-bold uppercase tracking-widest text-[8px] text-charcoal/30 block mb-1">Outcome</span>
                                        <span className="text-[12px]">{project.outcome}</span>
                                      </div>
                                    </div>

                                    {/* Deliverables */}
                                    {project.key_deliverables && (
                                      <div className="space-y-1.5">
                                        <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-charcoal/30">Deliverables</div>
                                        <ul className="space-y-1">
                                          {project.key_deliverables.map((item) => (
                                            <li key={item} className="flex items-start gap-1.5 text-[12px] text-charcoal/65">
                                              <Target size={10} className="mt-0.5 text-accent-gold/60 shrink-0" />
                                              {item}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {/* Methods */}
                                    <div className="space-y-1.5">
                                      <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-charcoal/30">Methods</div>
                                      <div className="flex flex-wrap gap-1">
                                        {project.methods.map((method) => (
                                          <span key={method} className="rounded-full bg-charcoal/[0.04] px-2 py-0.5 text-[10px] font-medium text-charcoal/50">
                                            {method}
                                          </span>
                                        ))}
                                      </div>
                                    </div>

                                    {/* Partners */}
                                    <div className="space-y-1.5">
                                      <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-charcoal/30">Partners</div>
                                      <div className="flex flex-wrap gap-1">
                                        {project.partners.map((partner) => (
                                          <span key={partner} className="rounded-md border border-charcoal/[0.06] bg-white px-1.5 py-0.5 text-[10px] font-medium text-charcoal/55">
                                            {partner}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/our-results?country=${selectedCountry.code}`}
                    className="group flex items-center justify-between w-full rounded-xl bg-deep-forest p-4 text-white transition-all duration-300 hover:shadow-lg hover:shadow-deep-forest/20 hover:scale-[1.01]"
                  >
                    <div className="space-y-0.5">
                      <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">Deep Dive</div>
                      <div className="text-sm font-medium">Full {selectedCountry.name} report</div>
                    </div>
                    <ArrowRight size={16} className="text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                  </Link>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
