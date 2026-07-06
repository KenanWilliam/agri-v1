/**
 * download-pdfs.mjs
 * Downloads every PDF listed in lib/public-downloads.ts into public/resources/
 * Run with: node scripts/download-pdfs.mjs
 */

import { createWriteStream, mkdirSync, existsSync } from 'fs'
import { pipeline } from 'stream/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUT_DIR = path.join(ROOT, 'public', 'resources')

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })

// All PDF URLs from lib/public-downloads.ts
const pdfs = [
  'https://agri-experience.com/wp-content/uploads/2017/05/Empowering-Tanzanias-Farmers-to-Report-Low-Quality-or-Fake-Seed-to-the-Regulator.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Empowering-Kenyan-Farmers-to-Report-Low-Quality-or-Fake-Seed-to-the-Regulator.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Assessment-to-Support-the-Promotion-of-Regional-Seed-Trade-in-East-Africa.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Scoping-Study-Pasture-and-Fodder-Planting-Materials-in-Kenya.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Scoping-Study-Planting-Materials-for-Value-Chain-Crops-in-Kenya-banana-avocado-mango-pineapples-passion-fruit-sweet-potatoes-African-leafy-vegetables.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Scoping-Study-Horticulture-Seedling-Nurseries-as-a-Viable-Business-Model-in-Kenya.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Agro-Dealer-Mapping-in-Twelve-Counties-in-Kenya.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Scoping-Study-Agro-Dealer-Association-Development-in-Twelve-Counties-in-Kenya.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Seed-Company-Survey-and-Analysis-%E2%80%93-Sub-Saharan-Africa.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Case-Study-MbeguChoice-Seed-Variety-IT-Platform.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Case-Study-Revising-Kenya%E2%80%99s-Seed-Regulations.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Case-Study-County-Agrodealer-Association-Strengthening-in-Kenya.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Case-Study-Scratch-Off-Labels-for-Certified-Seed-in-Kenya.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Case-Study-Strengthening-a-Seed-Trade-Association-in-Kenya.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Case-Study-The-African-Seed-Access-Index-TASAI-Pilot.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Variety-Identification-Number-VIN-System-Summary-Report-of-Scoping-Study.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Reaching-More-Farmers-with-High-Quality-Seed-for-Drought-Tolerant-Crops.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Crop-Seed-Company-Proposition-for-Improving-Current-Seed-Regulation-in-Kenya.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Agrodealer-Baseline-Study.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Food-Security-Crop-Seed-in-Kenya-Part-2-Big-Payoffs-We-Cannot-Afford-to-Ignore.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Food-Security-Crop-Seed-in-Kenya-Part-1-Challenging-Trends-We-Cannot-Afford-to-Ignore.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/Kenya-Seed-Industry-Study.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/The-African-Seed-Company-Toolbox-52-Tools-Every-Seed-Company-Manager-Should-Know-How-to-Use-ENGLISH.pdf',
  'https://agri-experience.com/wp-content/uploads/2017/05/La-boite-a-outils-des-entreprises-semencieres-Africaines.pdf',
]

async function download(url) {
  const filename = decodeURIComponent(url.split('/').pop())
  const dest = path.join(OUT_DIR, filename)
  const localPath = `/resources/${filename}`

  if (existsSync(dest)) {
    console.log(`  [skip] ${filename} (already exists)`)
    return { url, localPath, ok: true }
  }

  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    await pipeline(res.body, createWriteStream(dest))
    console.log(`  [ok]   ${filename}`)
    return { url, localPath, ok: true }
  } catch (err) {
    console.error(`  [fail] ${filename} — ${err.message}`)
    return { url, localPath, ok: false }
  }
}

console.log(`\nDownloading ${pdfs.length} PDFs → public/resources/\n`)
const results = []
for (const url of pdfs) {
  results.push(await download(url))
}

const failed = results.filter(r => !r.ok)
console.log(`\n✓ ${results.length - failed.length} downloaded, ${failed.length} failed`)

if (failed.length) {
  console.log('\nFailed URLs:')
  failed.forEach(r => console.log(' ', r.url))
}

console.log('\n--- Local path mapping (for public-downloads.ts) ---')
results.filter(r => r.ok).forEach(r => {
  console.log(`  ${JSON.stringify(r.url)} → ${JSON.stringify(r.localPath)}`)
})
