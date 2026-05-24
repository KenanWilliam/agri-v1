'use client'

import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
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

type Region = 'East Africa' | 'West Africa' | 'Central Africa' | 'Southern Africa'

interface CountryProject {
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

interface CountryRecord {
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

interface DetailedCountryRecord extends CountryRecord {
  projectBlueprints?: CountryProject[]
}

const regionFill = (region: Region) => {
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

const formatFarmers = (engagement: number) => `${Math.round(engagement / 1000)}K+`

const cityCoordinates: Record<string, [number, number]> = {
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
  const svgRef = useRef<SVGSVGElement>(null)
  const detailSvgRef = useRef<SVGSVGElement>(null)
  const gRef = useRef<SVGGElement>(null)

  const [selectedCountry, setSelectedCountry] = useState<DetailedCountryRecord | null>(null)
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
  const [hoveredName, setHoveredName] = useState<string | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const [originRect, setOriginRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null)

  const selectedCountryRef = useRef<DetailedCountryRecord | null>(null)

  const activeProjects = selectedCountry ? buildCountryProjects(selectedCountry) : []
  const selectedProject = activeProjects[selectedProjectIndex] ?? activeProjects[0] ?? null

  useEffect(() => {
    selectedCountryRef.current = selectedCountry
  }, [selectedCountry])

  // EFFECT 1: Render the main Africa map
  useEffect(() => {
    if (!svgRef.current || !gRef.current) return

    const features = (africaGeoJson as any).features ?? []
    const width = 1200
    const height = 900
    const svg = d3.select(svgRef.current)
    const g = d3.select(gRef.current)

    g.selectAll('*').remove()

    // Reduced padding for a more expansive map feel
    const projection = d3.geoMercator().fitExtent([[10, 10], [width - 10, height - 10]], africaGeoJson as any)
    const pathGenerator = d3.geoPath().projection(projection)

    const countryLayer = g.append('g').attr('class', 'countries')

    countryLayer
      .selectAll('path')
      .data(features)
      .enter()
      .append('path')
      .attr('d', pathGenerator as any)
      .attr('class', (feature: any) => (countriesByGeoName[feature.properties.name] ? 'country-active' : 'country-base'))
      .style('fill', (feature: any) => {
        const country = countriesByGeoName[feature.properties.name]
        if (!country) return 'rgba(15, 61, 49, 0.04)'
        if (selectedCountry) {
          return country.name === selectedCountry.name ? 'rgba(15, 61, 49, 0.95)' : 'rgba(15, 61, 49, 0.08)'
        }
        return regionFill(country.region)
      })
      .style('stroke', (feature: any) => {
        const country = countriesByGeoName[feature.properties.name]
        return selectedCountry && country?.name === selectedCountry.name ? '#fff1c6' : 'rgba(255, 255, 255, 0.95)'
      })
      .style('stroke-width', (feature: any) => {
        const country = countriesByGeoName[feature.properties.name]
        return selectedCountry && country?.name === selectedCountry.name ? '1.8px' : '0.8px'
      })
      .style('transition', 'fill 0.4s ease, stroke 0.4s ease, opacity 0.4s ease')
      .style('cursor', (feature: any) => (countriesByGeoName[feature.properties.name] ? 'pointer' : 'default'))
      .on('mouseenter', function(event, feature: any) {
        const country = countriesByGeoName[feature.properties.name]
        if (country && !selectedCountryRef.current) {
          setHoveredName(country.name)
          d3.select(this)
            .style('fill', 'rgba(180, 83, 9, 0.5)')
            .style('stroke', '#B45309')
            .style('stroke-width', '1.2px')
            .style('filter', 'drop-shadow(0 0 12px rgba(180, 83, 9, 0.35))')
        }
      })
      .on('mousemove', (event) => {
        if (!selectedCountryRef.current) {
          setTooltipPos({ x: event.clientX, y: event.clientY })
        }
      })
      .on('mouseleave', function(event, feature: any) {
        setHoveredName(null)
        if (selectedCountryRef.current) return

        const country = countriesByGeoName[feature.properties.name]
        d3.select(this)
          .style('fill', country ? regionFill(country.region) : 'rgba(15, 61, 49, 0.04)')
          .style('stroke', 'rgba(255, 255, 255, 0.95)')
          .style('stroke-width', '0.8px')
          .style('filter', 'none')
      })
      .on('click', function (event, feature: any) {
        const country = countriesByGeoName[feature.properties.name]
        if (country) {
          if (containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect()
            const pathRect = (this as SVGPathElement).getBoundingClientRect()
            setOriginRect({
              top: pathRect.top - containerRect.top,
              left: pathRect.left - containerRect.left,
              width: pathRect.width,
              height: pathRect.height,
            })
          }
          setSelectedCountry(country)
          selectedCountryRef.current = country
          setSelectedProjectIndex(0)
          setHoveredName(null)
        } else {
          setSelectedCountry(null)
          selectedCountryRef.current = null
          setSelectedProjectIndex(0)
          setOriginRect(null)
        }
      })

    const labelLayer = g.append('g').attr('class', 'country-labels')

    labelLayer
      .selectAll('text')
      .data(features.filter((feature: any) => countriesByGeoName[feature.properties.name]))
      .enter()
      .append('text')
      .text((feature: any) => countriesByGeoName[feature.properties.name].name)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('transform', (feature: any) => {
        const [x, y] = pathGenerator.centroid(feature)
        return `translate(${x}, ${y})`
      })
      .style('pointer-events', 'none')
      .style('fill', '#0f3d31')
      .style('font-size', '12px')
      .style('font-weight', '800')
      .style('letter-spacing', '0.08em')
      .style('text-transform', 'uppercase')
      .style('paint-order', 'stroke')
      .style('stroke', 'rgba(255, 255, 255, 0.96)')
      .style('stroke-width', '5px')
      .style('opacity', selectedCountry ? 0.15 : 0.95)

    countryLayer
      .style('opacity', 0)
      .transition()
      .duration(900)
      .delay((_feature, index) => index * 8)
      .style('opacity', 1)

    svg.on('click', (event) => {
      if (event.target === svgRef.current) {
        setSelectedCountry(null)
        selectedCountryRef.current = null
        setSelectedProjectIndex(0)
        setHoveredName(null)
        setOriginRect(null)
      }
    })

    return () => {
      svg.on('click', null)
    }
  }, [selectedCountry])

  // EFFECT 2: Render base localized map architecture
  useEffect(() => {
    if (!detailSvgRef.current || !selectedCountry) return

    const svg = d3.select(detailSvgRef.current)
    svg.selectAll('*').remove()

    const feature = ((africaGeoJson as any).features ?? []).find((item: any) => item.properties.name === (selectedCountry.geoName ?? selectedCountry.name))
    if (!feature) return

    const width = 800
    const height = 600
    const projection = d3.geoMercator().fitExtent([[60, 60], [width - 60, height - 60]], feature)
    const pathGenerator = d3.geoPath().projection(projection)

    // Build the zoomable layer
    const zoomLayer = svg.append('g').attr('class', 'zoom-layer')

    // Add graticule for extreme mapping detail
    const graticule = d3.geoGraticule().step([1.5, 1.5])
    zoomLayer.append('path')
      .datum(graticule)
      .attr('d', pathGenerator as any)
      .style('fill', 'none')
      .style('stroke', 'rgba(15, 61, 49, 0.06)')
      .style('stroke-width', '1px')

    // Add the country path
    zoomLayer
      .append('path')
      .datum(feature)
      .attr('d', pathGenerator as any)
      .style('fill', regionFill(selectedCountry.region))
      .style('stroke', '#c8a44a')
      .style('stroke-width', '2px')
      .style('filter', 'drop-shadow(0 14px 24px rgba(15, 61, 49, 0.12))')

    // Store base data onto DOM node for Effect 3 to use easily
    svg.node()!.setAttribute('data-cx', String(pathGenerator.centroid(feature)[0]))
    svg.node()!.setAttribute('data-cy', String(pathGenerator.centroid(feature)[1]))

    const markers = buildCountryProjects(selectedCountry)

    // Draw markers inside the zoom layer
    const markerGroups = zoomLayer.selectAll('.marker-group')
      .data(markers)
      .enter()
      .append('g')
      .attr('class', 'marker-group')
      .style('cursor', 'pointer')
      .on('click', (event, d) => setSelectedProjectIndex(markers.indexOf(d)))

    markerGroups.each(function(d, i) {
      const g = d3.select(this)
      const cityKey = d.location.split(' / ')[0]
      const coords = cityCoordinates[cityKey]
      
      let [x, y] = [Number(svg.node()!.getAttribute('data-cx')), Number(svg.node()!.getAttribute('data-cy'))]
      if (coords) {
        const projected = projection(coords)
        if (projected) {
          x = projected[0]
          y = projected[1]
        }
      } else {
        x += (i * 25 - 25)
        y += (i * 20 - 20)
      }

      g.append('line')
        .attr('class', 'marker-line')
        .attr('x1', x)
        .attr('y1', y - 6)
        .attr('x2', x)
        .attr('y2', y - 18)
        .style('stroke', 'rgba(15, 61, 49, 0.4)')
        .style('stroke-width', '1.5px')
        .style('stroke-dasharray', '2,2')

      g.append('circle')
        .attr('class', 'marker-circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 5)
        .style('fill', '#0f3d31')
        .style('stroke', '#fff7e6')
        .style('stroke-width', '2px')
        .style('transition', 'fill 0.3s ease')

      g.append('text')
        .attr('class', 'marker-text')
        .attr('x', x)
        .attr('y', y - 22)
        .attr('text-anchor', 'middle')
        .text(cityKey)
        .style('fill', '#0f3d31')
        .style('font-size', '10px')
        .style('font-weight', '800')
        .style('letter-spacing', '0.05em')
        .style('paint-order', 'stroke')
        .style('stroke', 'rgba(255, 255, 255, 0.98)')
        .style('stroke-width', '4px')
    })
  }, [selectedCountry])

  // EFFECT 3: Animate D3 Zoom into the specific project
  useEffect(() => {
    if (!detailSvgRef.current || !selectedCountry) return

    const svg = d3.select(detailSvgRef.current)
    const zoomLayer = svg.select('.zoom-layer')
    if (zoomLayer.empty()) return

    const width = 800
    const height = 600
    const feature = ((africaGeoJson as any).features ?? []).find((item: any) => item.properties.name === (selectedCountry.geoName ?? selectedCountry.name))
    const projection = d3.geoMercator().fitExtent([[60, 60], [width - 60, height - 60]], feature)

    const project = activeProjects[selectedProjectIndex]
    const coords = cityCoordinates[project?.location.split(' / ')[0]]

    let k = 1
    let tx = 0
    let ty = 0

    if (coords) {
      k = 2.4 // deep zoom scale
      const projected = projection(coords)
      if (projected) {
        tx = width / 2 - projected[0] * k
        ty = height / 2 - projected[1] * k
      }
    }

    // Animate the pan & zoom
    zoomLayer.transition()
      .duration(900)
      .ease(d3.easeCubicInOut)
      .attr('transform', `translate(${tx},${ty}) scale(${k})`)

    // Update marker styles dynamically to combat scale distortion
    zoomLayer.selectAll('.marker-group').each(function(d, i) {
      const g = d3.select(this)
      const isActive = i === selectedProjectIndex

      g.select('.marker-circle')
        .transition().duration(600)
        .style('fill', isActive ? '#c8a44a' : '#0f3d31')
        .attr('r', isActive ? 8 / k : 5 / k)
        .style('stroke-width', `${2 / k}px`)

      g.select('.marker-line')
        .transition().duration(600)
        .style('stroke', isActive ? '#c8a44a' : 'rgba(15, 61, 49, 0.4)')
        .style('stroke-width', `${1.5 / k}px`)
        .attr('y1', (Number(g.select('.marker-circle').attr('cy')) - (isActive ? 9/k : 6/k)))
        .attr('y2', (Number(g.select('.marker-circle').attr('cy')) - (isActive ? 22/k : 18/k)))

      g.select('.marker-text')
        .transition().duration(600)
        .style('fill', isActive ? '#c8a44a' : '#0f3d31')
        .style('font-size', isActive ? `${12 / k}px` : `${10 / k}px`)
        .style('stroke-width', `${4 / k}px`)
        .attr('y', (Number(g.select('.marker-circle').attr('cy')) - (isActive ? 26/k : 22/k)))
    })

  }, [selectedCountry, selectedProjectIndex, activeProjects])

  const closeCountryOverlay = () => {
    setSelectedCountry(null)
    selectedCountryRef.current = null
    setSelectedProjectIndex(0)
    setHoveredName(null)
    setOriginRect(null)
  }

  return (
    <section className="w-full relative bg-primary-ivory min-h-[900px] flex flex-col pt-16 pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilterMap">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterMap)" />
        </svg>
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 relative z-10 flex-shrink-0 mb-8">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mist bg-mist/60 text-deep-forest text-xs font-bold uppercase tracking-[0.25em]">
            <Globe size={14} />
            Africa portfolio map
          </div>
          <h2 className="text-deep-forest">Our Footprint Across the Continent</h2>
          <p className="text-lg lg:text-xl text-charcoal/75 font-light leading-relaxed max-w-2xl">
            Click a highlighted country to explore its portfolio. The continent map acts as your expansive navigation canvas, while the dossier physically grows into focus—diving deep into specific regional impact and deliverables.
          </p>
        </div>
      </div>

      {/* Main Interactive Workspace */}
      <div className="relative flex-1 w-full max-w-6xl mx-auto px-6 z-10" ref={containerRef}>
        
        {/* The Giant Main Map */}
        <div className="w-full h-full min-h-[750px] bg-white/70 rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(15,61,49,0.06)] border border-mist relative">
          <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <filter id="noiseFilterMapCore">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilterMapCore)" />
            </svg>
          </div>

          <div className="absolute top-6 left-6 z-10 space-y-1">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal/40">Continent map</div>
            <div className="text-sm text-charcoal/65 max-w-sm">Select a country to expand the highly detailed dossier overlay.</div>
          </div>

          <svg ref={svgRef} viewBox="0 0 1200 900" className="w-full h-full drop-shadow-sm">
            <g ref={gRef} />
          </svg>

          <AnimatePresence>
            {hoveredName && !selectedCountry && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: -40 }}
                exit={{ opacity: 0, scale: 0.9 }}
                style={{ position: 'fixed', left: tooltipPos.x, top: tooltipPos.y, pointerEvents: 'none' }}
                className="bg-deep-forest text-white px-5 py-3 rounded-2xl shadow-2xl font-bold text-sm z-50 flex items-center gap-3"
              >
                <MapPin size={16} className="text-accent-gold" />
                {hoveredName}
                <span className="opacity-50 font-normal ml-2">Click to expand</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* The Growing Dossier Overlay */}
        <AnimatePresence>
          {selectedCountry && originRect && (
            <motion.div
              initial={{
                position: 'absolute',
                top: originRect.top,
                left: originRect.left,
                width: originRect.width,
                height: originRect.height,
                opacity: 0,
                scale: 0.8,
                borderRadius: '100px',
              }}
              animate={{
                top: 16,
                right: 16,
                left: 16, // take up full width
                width: 'calc(100% - 32px)', 
                height: 'calc(100% - 32px)',
                opacity: 1,
                scale: 1,
                borderRadius: '36px',
              }}
              exit={{
                top: originRect.top,
                left: originRect.left,
                width: originRect.width,
                height: originRect.height,
                opacity: 0,
                scale: 0.8,
                borderRadius: '100px',
              }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bg-white shadow-[0_40px_100px_rgba(15,61,49,0.18)] border border-mist flex flex-col z-30 overflow-hidden"
              style={{ minWidth: '550px' }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.65),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0))] pointer-events-none" />

              {/* Dossier Header */}
              <div className="flex-shrink-0 flex items-start justify-between gap-4 p-6 border-b border-mist/60 bg-white/50 backdrop-blur-md relative z-10">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-mist px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-deep-forest">
                    <Globe size={14} />
                    {selectedCountry.region}
                  </div>
                  <h3 className="text-deep-forest text-3xl">{selectedCountry.name}</h3>
                </div>
                <button
                  onClick={closeCountryOverlay}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-mist bg-white text-deep-forest transition-colors transition-shadow duration-300 ease-in-out hover:bg-mist hover:scale-105 shadow-sm"
                  aria-label="Close country dossier"
                >
                  <X size={24} />
                </button>
              </div>

              {/* 2-Column Layout */}
              <div className="flex-1 overflow-hidden relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr_1fr] h-full">
                  
                  {/* LEFT: Zoomed Country Map */}
                  <div className="relative h-[40vh] min-h-[300px] lg:h-full lg:min-h-0 border-b lg:border-b-0 lg:border-r border-mist/60 bg-[url('/noise.svg')] bg-repeat p-4 flex flex-col items-center justify-center overflow-hidden shrink-0">
                    <div className="absolute left-4 top-4 lg:left-6 lg:top-6 flex flex-wrap gap-2 z-10 pointer-events-none">
                      <div className="rounded-full bg-white/95 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-deep-forest shadow-sm flex items-center gap-2">
                        <Crosshair size={14} className="text-accent-gold" />
                        Interactive Local Map
                      </div>
                    </div>
                    <svg ref={detailSvgRef} viewBox="0 0 800 600" className="relative z-0 w-full h-full max-h-full drop-shadow-2xl" />
                  </div>

                  {/* RIGHT: Latent Details */}
                  <div className="flex-1 h-full overflow-y-auto p-6 lg:p-8 custom-scrollbar bg-white/40">
                    <div className="space-y-8">
                  
                      <p className="text-lg text-charcoal/80 font-light leading-relaxed">
                        {selectedCountry.overview}
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-[24px] bg-deep-forest p-5 text-white">
                          <Briefcase className="text-accent-gold" size={20} />
                          <div className="mt-4 text-4xl font-serif leading-none">{selectedCountry.projects}</div>
                          <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60 font-bold">Active projects</div>
                        </div>
                        <div className="rounded-[24px] bg-mist p-5 text-deep-forest border border-mist">
                          <Users className="text-deep-forest" size={20} />
                          <div className="mt-4 text-4xl font-serif leading-none">{formatFarmers(selectedCountry.engagement)}</div>
                          <div className="mt-2 text-xs uppercase tracking-[0.2em] text-charcoal/50 font-bold">Farmers / actors</div>
                        </div>
                      </div>

                      {/* Granular Project View */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal/40">Select a project to zoom map</div>
                          <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold bg-accent-gold/10 px-3 py-1.5 rounded-full">{activeProjects.length} available</div>
                        </div>
                        
                        <div className="grid gap-3">
                          {activeProjects.map((project, index) => {
                            const isActive = index === selectedProjectIndex

                            return (
                              <div key={index} className={`rounded-[24px] border transition-colors transition-shadow duration-300 ease-in-out duration-500 overflow-hidden ${isActive ? 'border-deep-forest shadow-[0_12px_40px_rgba(15,61,49,0.08)] bg-white' : 'border-mist bg-white/40 hover:border-deep-forest/30 hover:bg-white cursor-pointer'}`} onClick={() => !isActive && setSelectedProjectIndex(index)}>
                                
                                {/* Card Header (always visible) */}
                                <div className={`p-5 flex items-start justify-between gap-4 ${isActive ? 'bg-deep-forest text-white' : 'text-charcoal/80'}`}>
                                  <div className="space-y-1.5">
                                    <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] ${isActive ? 'text-accent-gold' : 'text-charcoal/40'}`}>
                                      <MapPin size={12} />
                                      {project.location}
                                    </div>
                                    <div className={`font-serif text-xl leading-tight ${isActive ? 'text-white' : 'text-deep-forest'}`}>{project.title}</div>
                                  </div>
                                  <div className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${isActive ? 'bg-white/10 text-white' : 'bg-mist text-deep-forest'}`}>
                                    {index + 1}
                                  </div>
                                </div>

                                {/* Granular Data Body (expanded when active) */}
                                <AnimatePresence>
                                  {isActive && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      className="overflow-hidden bg-white"
                                    >
                                      <div className="p-5 space-y-6">
                                        {/* Core Meta */}
                                        <div className="flex flex-wrap gap-4 pt-2">
                                          {project.timeline && (
                                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-deep-forest/60 bg-mist/50 px-3 py-2 rounded-lg">
                                              <Calendar size={14} /> {project.timeline}
                                            </div>
                                          )}
                                          {project.budget_scope && (
                                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-deep-forest/60 bg-mist/50 px-3 py-2 rounded-lg">
                                              <Layers3 size={14} /> {project.budget_scope}
                                            </div>
                                          )}
                                        </div>

                                        {/* Text Content */}
                                        <div className="space-y-4 text-sm text-charcoal/75 leading-relaxed">
                                          <p>{project.summary}</p>
                                          <div className="rounded-2xl border border-accent-gold/30 bg-accent-gold/5 p-4 text-deep-forest shadow-inner">
                                            <span className="font-bold uppercase tracking-widest text-[10px] opacity-50 block mb-2">Primary Outcome</span>
                                            {project.outcome}
                                          </div>
                                        </div>

                                        {/* Granular Details Grid */}
                                        <div className="grid gap-5 sm:grid-cols-2">
                                          {project.key_deliverables && (
                                            <div className="space-y-3">
                                              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal/40 border-b border-mist pb-2">Key Deliverables</div>
                                              <ul className="space-y-2">
                                                {project.key_deliverables.map((item) => (
                                                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal/80">
                                                    <Target size={14} className="mt-0.5 text-accent-gold shrink-0" />
                                                    {item}
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          )}

                                          <div className="space-y-3">
                                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal/40 border-b border-mist pb-2">Implementation Methods</div>
                                            <div className="flex flex-wrap gap-2">
                                              {project.methods.map((method) => (
                                                <span key={method} className="rounded-full bg-mist/70 px-3 py-1.5 text-[11px] font-bold tracking-wide text-deep-forest">
                                                  {method}
                                                </span>
                                              ))}
                                            </div>
                                          </div>
                                        </div>

                                        {/* Partners */}
                                        <div className="space-y-3 pt-2">
                                          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal/40">Executing Partners</div>
                                          <div className="flex flex-wrap gap-2">
                                            {project.partners.map((partner) => (
                                              <span key={partner} className="rounded-lg border border-mist bg-white px-3 py-1.5 text-xs font-semibold text-charcoal/80 shadow-sm">
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

                      {/* Open Full Report Call to Action */}
                      <div className="mt-8 flex items-center justify-between gap-4 rounded-[24px] bg-deep-forest p-6 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <filter id="noiseFilterMapFooter">
                              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                            </filter>
                            <rect width="100%" height="100%" filter="url(#noiseFilterMapFooter)" />
                          </svg>
                        </div>
                        <div className="relative z-10">
                          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-1">Deep Dive</div>
                          <div className="text-lg font-medium">Read the full {selectedCountry.name} results report</div>
                        </div>
                        <Link
                          href={`/our-results?country=${selectedCountry.code}`}
                          className="relative z-10 shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-deep-forest transition-transform hover:scale-105 shadow-md"
                        >
                          View Report
                          <ArrowRight size={16} />
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}