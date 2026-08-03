const fs = require('fs');

let content = fs.readFileSync('components/interactive-map.tsx', 'utf8');

// 1. Add useLocale to next-intl import
content = content.replace(
  "import { useTranslations } from 'next-intl'",
  "import { useTranslations, useLocale } from 'next-intl'\nimport { getCountrySeeds, createGenericProjects } from './country-data'"
);

// 2. Remove countrySeeds, countriesData, countriesByGeoName, createGenericProjects, buildCountryProjects
const startStr = "const countrySeeds: DetailedCountryRecord[] = [";
const endStr = "const buildCountryProjects = (country: DetailedCountryRecord): CountryProject[] => country.projectBlueprints ?? createGenericProjects(country)";

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr) + endStr.length;

if (startIndex === -1 || endIndex < startIndex) {
  console.log("Could not find chunk to remove");
  process.exit(1);
}

const before = content.slice(0, startIndex);
const after = content.slice(endIndex);

content = before + after;

// 3. Inside InteractiveMap component, add locale, variables, and update useMemo
const newCompStart = `export default function InteractiveMap() {
  const t = useTranslations('InteractiveMap')
  const locale = useLocale()
  
  const countrySeeds = useMemo(() => getCountrySeeds(locale), [locale])
  const countriesData = useMemo(() => Object.fromEntries(countrySeeds.map((c) => [c.name, c])) as Record<string, DetailedCountryRecord>, [countrySeeds])
  const countriesByGeoName = useMemo(() => Object.fromEntries(countrySeeds.map((c) => [c.geoName ?? c.name, c])) as Record<string, DetailedCountryRecord>, [countrySeeds])
  
  const buildCountryProjects = useCallback((country: DetailedCountryRecord): CountryProject[] => country.projectBlueprints ?? createGenericProjects(country, locale), [locale])
`;

content = content.replace(
  "export default function InteractiveMap() {\n  const t = useTranslations('InteractiveMap')",
  newCompStart
);

content = content.replace(
  "[selectedCountry]",
  "[selectedCountry, buildCountryProjects]"
);

fs.writeFileSync('components/interactive-map.tsx', content, 'utf8');
console.log("Done");
