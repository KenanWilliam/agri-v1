# Agri Experience - Official Website

Professional consulting website for Agri Experience, transforming agricultural value chains across 21 African countries through expert seed systems development and market intervention strategies.

**Live Site:** [agri-experience.com](https://agri-experience.com)

## Project Overview

Agri Experience is a Nairobi-based consulting firm specializing in developing the crop seed sector throughout sub-Saharan Africa. This website showcases their work, impact, and expertise across East, West, Central, and Southern Africa.

### Key Features

- **Interactive Africa Map**: Drill-down map with 21 countries showing active projects, regional impact, and farmer engagement
- **Professional Design**: Modern, clean aesthetic appropriate for serious consulting clients with solid colors and professional branding
- **Full Service Pages**: About, Our Work, Our Results, Our Impact, Resources, Insights, Contact, Newsletter
- **Testimonial Showcase**: GitHub-style modal featuring partner organization testimonials
- **Responsive Design**: Mobile, tablet, and desktop optimized layouts
- **Modern Animations**: Fluid, seamless transitions powered by Framer Motion (no AI gradients)
- **Comprehensive Design System**: Color palette, typography, and components for professional appearance

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19 with Framer Motion animations
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Components**: Shadcn UI components
- **Typography**: Playfair Display (headings), DM Sans (body), Bebas Neue & Space Grotesk (data/numbers)

## Design System

### Color Palette
- **Primary Green**: #3ab44a
- **Primary Blue**: #2484c6
- **Dark Green**: #0f3d1e
- **Cream**: #f5efe0
- **Dark Gray**: #1c2b22
- **Mint**: #eef5f1
- **Gold Accent**: #c8a44a

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: DM Sans (sans-serif)
- **Data/Numbers**: Bebas Neue (display)
- **Alternative**: Space Grotesk (mono/accent)

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── layout.tsx              # Root layout with fonts and global setup
├── globals.css             # Design tokens and theme configuration
├── page.tsx                # Home page with hero, services, map, testimonials
├── about/page.tsx          # Company mission, vision, values, team
├── our-work/page.tsx       # Core services and featured projects
├── our-results/page.tsx    # Key metrics, outcomes, and impact stories
├── our-impact/page.tsx     # Impact areas by category, SDG alignment
├── resources/page.tsx      # Downloadable guides, manuals, case studies
├── insights/page.tsx       # Blog/articles with categories and filtering
├── contact/page.tsx        # Contact form, regional offices, social links
└── newsletter/page.tsx     # Newsletter signup with interests and frequency

components/
├── header.tsx              # Sticky navigation with mobile menu
├── footer.tsx              # Footer with links and company info
├── interactive-map.tsx     # 21-country map with drill-down functionality
├── testimonial-modal.tsx   # Carousel of partner testimonials
└── ui/                     # Shadcn UI components library
```

## Features

### Interactive Map
- **Region Filtering**: Filter countries by East, West, Central, or Southern Africa
- **Country Selection**: Click any country to see:
  - Number of active projects
  - Farmers engaged
  - Focus areas and impact zones
  - Regional statistics
- **Smooth Animations**: Framer Motion transitions
- **Responsive Grid**: Works on mobile, tablet, and desktop

### Navigation
- **Desktop**: Full horizontal navigation menu with hover effects
- **Mobile**: Hamburger menu with smooth drawer animation
- **Active States**: Clear visual feedback on current page
- **Sticky Header**: Always accessible at the top of the page

### Pages
1. **Home**: Hero section with stats, services grid, interactive map, testimonials, CTAs
2. **About**: Mission/vision/values, leadership team, company journey timeline
3. **Our Work**: Four core service offerings with detailed descriptions and methodology
4. **Our Results**: Key metrics (500K+ farmers, 21 countries, 150+ projects, 20+ years)
5. **Our Impact**: Impact areas with highlights, SDG alignment, success metrics
6. **Resources**: Downloadable guides, manuals, frameworks, case studies
7. **Insights**: Blog/articles grid with category filtering
8. **Contact**: Contact form, regional office information, social links
9. **Newsletter**: Multi-option newsletter signup with interests and frequency

## Animations & Interactions

- Scroll-triggered fade-in animations for all sections
- Hover effects on buttons and cards with smooth transitions
- Modal animations for testimonials and dialogs
- Page transitions with Framer Motion
- Smooth mobile menu slide-out animation
- Responsive animations that adapt to viewport

## Mobile Optimization

- Mobile-first responsive design using Tailwind breakpoints (sm, md, lg)
- Touch-friendly buttons and interactive elements
- Optimized layouts for small screens
- Hamburger menu for navigation on mobile
- Proper spacing and typography scaling

## Performance

- Static page generation for all routes
- Optimized images with next/image
- CSS-in-JS for efficient theming
- Lazy-loaded components
- Minimal JavaScript bundle with Next.js 16

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Development Guidelines

### Adding New Pages
1. Create new directory in `app/`
2. Add `page.tsx` file with proper imports (Header, Footer, Layout)
3. Use consistent motion animations with Framer Motion
4. Follow color and typography system
5. Ensure mobile responsiveness

### Modifying Components
- Keep components focused and reusable
- Use Tailwind classes consistently
- Test animations on various devices
- Maintain accessibility standards

### Styling
- Use Tailwind CSS for all styling
- Reference design tokens from `globals.css`
- Avoid inline styles
- Use CSS Grid and Flexbox for layouts

## Content Management

Currently, all content is hardcoded in components. For future scalability, consider:
- CMS integration (Contentful, Sanity, Strapi)
- Markdown for blog posts
- Environment variables for configuration
- API endpoints for dynamic content

## Deployment

Ready to deploy to Vercel with zero configuration:

```bash
npm run build
```

Then deploy to Vercel or any Node.js hosting platform.

## License

All rights reserved - Agri Experience

## Support

For questions or issues, contact the development team.

---

**Built with Next.js 16, React 19, and Tailwind CSS 4**