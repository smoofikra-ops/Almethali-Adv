# Al Mithali Advertising & Publicity - Project Blueprint

## 1. Project Analysis
**Objective:** Develop a premium, corporate landing page integrated with a personalized campaign management dashboard for Al Mithali Advertising & Publicity (المثالي للدعاية والإعلان). 
**Target Audience:** B2B clients including Government, Factories, Restaurants, Retail, Real Estate, Construction, Healthcare, Education, Startups.
**Key Features:**
- **Immersive UI Landing Page:** Trust-building, high-conversion B2B corporate landing page with "Immersive UI" aesthetic (dark mode, glassmorphism, glowing gradients, premium typography).
- **Campaign Management Dashboard:** Real-time analytics, user segmentation, A/B testing workflow for personalized messaging.
- **Security & Infrastructure:** Role-based access control (RBAC), Multi-factor authentication (MFA) considerations, CRM API Integration capabilities.
- **SEO & AI Search Optimization:** Deep technical SEO, Schema.org, AEO, GEO, and Core Web Vitals optimization.
- **Conversion Mechanisms:** Quotation form integrating with automated WhatsApp message generation.

## 2. Information Architecture
### Public Website (Landing & Corporate)
- **Home:** Hero (Immersive), Value Proposition, Services (Identity, AI Architecture, Digital Dominance), Trust Signals (Clients, Certifications), CTA.
- **Solutions:** Detailed service breakdowns.
- **Our Work (Portfolio):** Case studies with metrics.
- **Quotation/Contact:** Dynamic form leading to WhatsApp.

### Client/Admin Dashboard (Portal)
- **Authentication:** Login (RBAC, MFA-ready).
- **Overview:** Real-time campaign performance analytics.
- **Audience/Segmentation:** User grouping and targeting.
- **Campaigns:** A/B testing framework, automated messaging setup.
- **Settings:** API keys for CRM, user roles.

## 3. Folder Structure
```text
/src
  /assets         # Static assets, fonts, global CSS
  /components
    /ui           # Base immersive UI components (buttons, cards, inputs)
    /landing      # Public website specific components (Hero, Features, Trust)
    /dashboard    # Portal specific components (Charts, Tables, Settings)
    /forms        # Lead gen and quotation forms
  /config         # Centralized configuration (SEO, Navigation, Images)
  /hooks          # Reusable React hooks
  /layouts        # Page wrapper layouts (PublicLayout, DashboardLayout)
  /lib            # Utility functions (cn, API helpers, animations)
  /pages          # Route components (Home, Dashboard, Login)
  /types          # TypeScript interfaces (SEO, Analytics, User)
```

## 4. Design System (Immersive UI)
- **Theme:** Dark mode dominant with high-contrast glowing accents.
- **Backgrounds:** Deep charcoal/black (`#05070A`, `#1A1C20`), frosted glass (`bg-white/5 backdrop-blur-md`).
- **Typography:** `Inter` (Sans), `Space Grotesk` (Display), `JetBrains Mono` (Tech/Data).
- **Colors:**
  - Primary Accents: Blue (`#3b82f6`), Indigo (`#4f46e5`).
  - Text: White, Gray-300, Gray-400.
- **Interactions:** Subtle hover states, smooth fade-ins (Framer Motion / Motion React).

## 5. Component Tree
- `App`
  - `PublicLayout`
    - `ImmersiveNavbar`
    - `HeroSection`
    - `ServicesBentoGrid`
    - `TrustIndicators`
    - `QuotationForm` (Generates WhatsApp link)
    - `ImmersiveFooter`
  - `DashboardLayout` (Protected Route)
    - `SidebarNav`
    - `DashboardOverview` (Charts, KPIs)
    - `CampaignManager` (A/B Testing UI)
    - `AudienceSegmentation`

## 6. Content Strategy
- **Tone:** Professional, authoritative, conversion-oriented.
- **Copy:** Bilingual support readiness (English/Arabic).
- **CTAs:** "Get a Quote — طلب عرض سعر", "WhatsApp — تواصل عبر واتساب".
- **Focus:** Highlight technical mastery, precision branding, and AI-first architecture.

## 7. SEO & AI Search Strategy (SXO & GEO)
- **Semantic HTML:** Strict use of `<header>`, `<main>`, `<article>`, `<section>`, `<footer>`.
- **Schema.org:** `Organization`, `ProfessionalService`, `BreadcrumbList`, `FAQPage`.
- **Metadata:** Dynamic meta titles, OpenGraph, Twitter Cards.
- **AI Search Optimization (GEO):** Content structured in clear, direct Q&A formats where appropriate. High entity density (mentioning specific industries, technologies, and locations).
- **Performance:** Next.js-like chunking via Vite, lazy loaded components and images.

## 8. Development Methodology
- **Phase 1:** Setup and base Immersive UI components.
- **Phase 2:** Build the highly optimized public landing page.
- **Phase 3:** Build the dynamic quotation form with WhatsApp integration.
- **Phase 4:** Develop the dashboard UI (Analytics, Segmentation, A/B Testing).
- **Phase 5:** Implement simulated RBAC, API endpoints (Express), and SEO metadata.

---

**Please review this blueprint. Upon your approval, I will proceed with generating the codebase according to this plan.**
