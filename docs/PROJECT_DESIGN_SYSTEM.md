# Al Mithali Advertising & Publicity - Immersive UI Design System

## 1. Color Palette

**Base Theme:** Dark Mode Dominant
- **Background Deep:** `#05070A` (Used as the primary app background)
- **Border Heavy:** `#1A1C20` (Used for thick layout borders)
- **Glass Surface:** `rgba(255, 255, 255, 0.05)` or `bg-white/5`
- **Glass Border:** `rgba(255, 255, 255, 0.1)` or `border-white/10`

**Accents & Gradients:**
- **Primary Glows:** `bg-blue-600` and `bg-indigo-900` with high blur (e.g. `blur-[160px]`).
- **Text Gradients:** `bg-gradient-to-r from-blue-400 to-indigo-300` (Used for key highlight texts like "for Global Entities").
- **Secondary Highlights:** Green (`text-green-500` for WhatsApp icons).

**Text Colors:**
- **Primary Text:** `white` (Headings, primary body).
- **Secondary Text:** `text-gray-300` and `text-gray-400` (Descriptions, subtle labels).
- **Tertiary/Muted:** `text-gray-500` (Microcopy, locations).

## 2. Typography System

**Primary Font (Sans):** `Inter`
- **Usage:** General body text, navigation, standard buttons.
- **Weights:** 300, 400, 500, 600, 700.

**Display Font (Headings):** `Space Grotesk`
- **Usage:** Hero headings, section titles, large numerical indicators (e.g., "01", "02").
- **Styling:** Highly tracked tight (`tracking-tight` or `tracking-tighter`), leading tight (`leading-[0.95]`).

**Monospace Font (Data/Tech):** `JetBrains Mono`
- **Usage:** Technical labels, certifications, data points.
- **Styling:** Uppercase, wide tracking (`tracking-widest` or `tracking-[0.3em]`), text small or extra small.

## 3. Glassmorphism & UI Tokens

**Core Glass Tokens:**
- **Navigation/Header:** `bg-white/5 backdrop-blur-md border-b border-white/10`
- **Cards (Default):** `bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm relative overflow-hidden`
- **Cards (Highlight):** `bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-500/30 rounded-3xl backdrop-blur-sm relative overflow-hidden`

**Shadows & Glows:**
- **Button Glow:** `shadow-[0_0_30px_rgba(255,255,255,0.1)]` for primary white buttons.
- **Ambient Glows:** Large div elements with absolute positioning, full rounding, and high blur (e.g., `blur-[160px]`) for atmospheric lighting.

## 4. Component Design Patterns

### Typography Elements
- **Hero Title:** `text-7xl font-bold leading-[0.95] tracking-tight`
- **Eyebrow Label:** `text-[10px] uppercase tracking-[0.2em] font-semibold`
- **Micro-labels:** `text-[10px] uppercase tracking-widest text-gray-500`

### Buttons
- **Primary CTA (Solid White):** 
  - `bg-white text-black px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]`
- **Secondary CTA (Outline/Glass):**
  - `flex items-center gap-2 text-white px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-widest border border-white/20 hover:bg-white/5 transition-all`
- **Tertiary/Ghost (Portal Link):**
  - `text-[11px] font-bold text-blue-400 uppercase tracking-tighter border border-blue-400/30 px-4 py-2 rounded-full hover:bg-blue-400/10 transition-all`

### Structural Layout
- **Containers:** Max width centered or full width with padding (`px-10 py-12`).
- **Grids:** 12-column grids (e.g. `grid grid-cols-12 gap-8`) for complex desktop layouts.
- **Spacing:** Generous padding (`py-24`, `gap-8`) to maintain a premium, uncluttered aesthetic.

## 5. Animation (Motion React)
- **Fade Ins:** Elements should fade in gently on mount (`initial={{ opacity: 0 }} animate={{ opacity: 1 }}`).
- **Staggered Lists:** Navigation items and cards should stagger in sequentially.
- **Hover Micro-interactions:** Subtle scale-ups or color transitions on interactive elements.
