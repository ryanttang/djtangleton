# DJ EPK - VHS/CRT Aesthetic Site

A single-stage VHS/CRT aesthetic DJ site built with Next.js 14+, featuring smooth scene transitions, CRT effects, and a persistent audio player.

## Features

- **VHS/CRT Aesthetic**: Scanlines, noise, chromatic aberration, and glitch effects
- **Single-Stage Navigation**: Smooth transitions between scenes without page reloads
- **Persistent Audio Player**: WaveSurfer.js integration with VHS-styled controls
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Canonical routes for search engines
- **Accessibility**: Respects prefers-reduced-motion and includes focus indicators

## Tech Stack

- **Framework**: Next.js 14+ (App Router, RSC)
- **Styling**: Tailwind CSS + shadcn/ui (Radix primitives)
- **Motion**: Framer Motion + Lenis (smooth scroll)
- **Media/UI**: WaveSurfer.js, Embla Carousel, LightGallery
- **Optional 3D FX**: @react-three/fiber + @react-three/postprocessing
- **Forms**: react-hook-form + zod
- **Analytics**: Ready for Plausible or PostHog

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add your assets**:
   - Replace placeholder images in `/public/images/`
   - Add grain texture to `/public/textures/grain.png`
   - Add scanlines texture to `/public/textures/scanlines.png`
   - Add sample audio to `/public/audio/sample.mp3`
   - Add one-sheet PDF to `/public/epk/one-sheet.pdf`

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── @scene/          # Intercepted routes for smooth transitions
│   ├── _filters/        # SVG filters for VHS effects
│   ├── layout.tsx       # Root layout with persistent shell
│   ├── page.tsx         # Home page (Stage)
│   ├── RouterView.tsx   # Motion wrapper for scene transitions
│   ├── globals.css      # Global styles with CRT effects
│   └── [routes]/        # Canonical SSR routes for SEO
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── buttons/         # Custom button components
│   ├── cards/           # CRT-styled card components
│   ├── media/           # Audio player, image components
│   └── nav/             # Navigation components
├── scenes/              # Scene components (Home, Press, Gigs, etc.)
└── lib/                 # Utilities and helpers
```

## Customization

### Colors and Fonts
Edit `tailwind.config.ts` to customize:
- Accent colors (cyan, magenta, green)
- Font families (Inter, Archivo Narrow, IBM Plex Mono)
- CRT shadow effects

### CRT Effects
Modify `src/app/globals.css` to adjust:
- Scanline opacity and frequency
- Noise intensity and animation
- Chromatic aberration strength
- Glitch effects and timing

### Content
Update scene components in `src/scenes/` to customize:
- DJ name and bio
- Gigs and events
- Press quotes and images
- Contact form fields

## Deployment

The project is ready for deployment on Vercel, Netlify, or any platform that supports Next.js.

```bash
npm run build
npm start
```

## Environment Variables

Create `.env.local` for optional integrations:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Performance Notes

- Images are optimized with Next.js Image component
- CRT effects are CSS-based for optimal performance
- Audio player uses WaveSurfer.js for efficient waveform rendering
- Respects user's motion preferences for accessibility

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Web Audio API for audio player
- CSS Custom Properties for theming

## License

MIT License - feel free to use this template for your DJ site!# djtangleton
