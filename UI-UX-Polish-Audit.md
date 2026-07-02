# Students Choice — UI/UX Polish & QA Audit

**Scope:** Refine & polish the existing site only. No redesigns, no new sections/pages/components.
**Primary brand color:** `#6E00E0` (standardized site-wide).
**Date:** June 2026 · Branch: `pankaj`

---

## ✅ Global fixes ALREADY APPLIED in this pass

| # | Fix | Where | Detail |
|---|-----|-------|--------|
| 1 | **Brand color standardized** | All `src` (74 files, 676 instances) | Every `#8424e8` → `#6E00E0`, incl. `--brand` / `--brand-soft` CSS vars |
| 2 | **Shadow tint consistency** | 26 instances | `rgba(132,36,232,…)` → `rgba(110,0,224,…)` so glow shadows match the new brand color |
| 3 | **Font antialiasing** | `globals.css` body | `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;` for crisper text |
| 4 | **Heading tracking** | `globals.css` | `h1,h2,h3 { letter-spacing: -0.01em; }` for a tighter, premium feel |
| 5 | **Broken footer links** | `Footer.tsx` | `/about` → `/about-us`, `/contact` → `/contact-us` (were 404s) |

The base layer is already strong: `scroll-behavior: smooth`, `prefers-reduced-motion` handling, `:focus-visible` ring, `::selection` brand tint, and `--font-outfit` sans stack are all in place.

---

## Output legend
Each item: **Issue → Priority → Exact Fix → Tailwind/CSS → Reason → Expected improvement.**

---

## 1. Header (`components/layout/Header.tsx`)
**Status: already clean & consistent.** Sticky, scroll-aware shadow, mega-menu, mobile drawer all solid.

- **Issue:** Nav `gap-8` is generous; on mid-width laptops (1024–1100px) items + Login can crowd.
  **Priority:** Low · **Fix:** `gap-8` → `gap-6 lg:gap-8` · **Reason:** avoids crowding at the md breakpoint · **Improvement:** cleaner nav on smaller laptops.
- **Issue:** Logo height jumps `h-16 md:h-20`; header is fixed `h-20`, leaving tight vertical rhythm.
  **Priority:** Low · **Fix:** keep `h-20`, set logo `h-12 md:h-14` · **Reason:** balanced padding around logo · **Improvement:** more breathing room, premium balance.

## 2. Footer (`components/layout/Footer.tsx`)
- **Issue (FIXED):** Education Loan column had invalid class `lg:col-span-2ca` → collapsed, words wrapped 1-per-line. **Now `lg:col-span-3`.** ✅
- **Issue (FIXED):** `/about`, `/contact` 404 links. ✅
- **Issue:** Remaining links `/faqs /media /team /terms /privacy` have **no page** (404).
  **Priority:** High · **Fix:** point to real routes or remove until pages exist · **Reason:** dead links hurt trust & SEO · **Improvement:** no broken navigation.
- **Issue:** Column grid totals 4+2+2+3 = 11/12; slight right gap.
  **Priority:** Low · **Fix:** brand col `lg:col-span-3`, others `lg:col-span-3 / 3 / 3` OR keep and add `gap-x-8` · **Reason:** even column rhythm · **Improvement:** balanced footer.

## 3. Home — Hero (`components/home/HeroSection.tsx`)
- **Issue:** Confirm single `<h1>` per page for SEO; hero headline should be the only h1 on `/`.
  **Priority:** Medium · **Fix:** ensure hero uses `<h1>`, all section titles `<h2>` · **Reason:** heading hierarchy · **Improvement:** better accessibility & SEO.
- **Issue:** Verify hero CTA uses brand fill `bg-[#6E00E0]` and matching focus ring.
  **Priority:** Low · **Fix:** align with Header Login button styles · **Reason:** button consistency · **Improvement:** unified CTA language.

## 4. Home — WhyTrust (`components/home/WhyTrustSection.tsx`)
**Status: polished this session** (dotted line removed, `py-10`).
- **Issue:** Body copy uses `text-[#6E00E0]/80` (purple paragraph) — lowers readability vs neutral text.
  **Priority:** Medium · **Fix:** `text-[#6E00E0]/80` → `text-gray-600` (keep heading purple) · **Reason:** long-form body should be neutral for legibility · **Improvement:** easier reading, stronger heading contrast.

## 5. Home — LoanOptions (`components/home/LoanOptionsSection.tsx`)
**Status: rebuilt & polished this session** (radial gradient, world map, scrolling logos, trimmed logos).
- **Issue:** On mobile both logo columns are static stacks (12 cards) → long scroll.
  **Priority:** Low · **Fix:** wrap mobile lists `grid grid-cols-2 gap-4` · **Reason:** shorter, scannable mobile block · **Improvement:** less vertical scrolling on phones.

## 6. Home — Destinations (`components/home/DestinationsSection.tsx`)
- **Issue:** Section padding `pt-20 pb-16` heavier than sibling sections (`py-10/16`).
  **Priority:** Medium · **Fix:** `pt-20 pb-16` → `py-14` · **Reason:** consistent vertical rhythm between sections · **Improvement:** even spacing down the page.
- **Issue:** Marquee card labels `text-[14px] md:text-[16px]` bold — fine; ensure `hover` color is brand.
  **Priority:** Low · **Fix:** verify `hover:text-[#6E00E0]` · **Reason:** color consistency · **Improvement:** unified hover states.

## 7. Home — Journey (`components/home/JourneySection.tsx`)
**Status: rebuilt & polished this session** (3 cards, check-lists, gradient overlay removed).
- **Issue:** Card image box `h-52` with `object-cover` on SVG illustrations can crop edges.
  **Priority:** Medium · **Fix:** for SVG art use `object-contain bg-[#faf7ff]` instead of `object-cover` · **Reason:** prevents awkward crop · **Improvement:** full artwork visible.

## 8. Home — other sections (PlatformTabs, LoanSupport, Testimonials, FAQ)
- **Issue:** Section vertical padding varies (`py-16`, `py-20`, `py-24`).
  **Priority:** Medium · **Fix:** standardize content sections to `py-16 md:py-20` · **Reason:** consistent rhythm · **Improvement:** professional, even cadence.
- **Issue:** Card radii vary (`rounded-2xl`, `rounded-3xl`, `rounded-[40px]`).
  **Priority:** Medium · **Fix:** pick a scale — small cards `rounded-2xl`, large panels `rounded-[32px]` · **Reason:** consistent corner language · **Improvement:** cohesive card system.

## 9. Loan Approval Banner (`components/layout/LoanApprovalBanner.tsx`)
**Status: created & polished this session** (heavy bottom shadow removed).
- **Issue:** Appears on every PageShell page right before footer; on short pages it can sit close to other CTAs.
  **Priority:** Low · **Fix:** keep `pt-16 pb-12`; ensure preceding section closes with adequate `pb` · **Reason:** breathing room · **Improvement:** no cramped CTA stacking.

## 10. Contact Us (`app/contact-us/page.tsx`)
- **Issue:** Form inputs `py-3` (~44px) — acceptable; labels `text-[13px]`.
  **Priority:** Low · **Fix:** inputs `py-3.5` for 48px touch targets; labels `text-[13px] font-semibold` (consistent) · **Reason:** mobile usability / a11y tap size · **Improvement:** easier mobile form completion.
- **Issue:** No visible error/validation state styling.
  **Priority:** High · **Fix:** add `aria-invalid` + `border-red-400 focus:border-red-500` on invalid; helper text `text-red-500 text-xs` · **Reason:** users need clear error feedback · **Improvement:** fewer failed submissions, higher conversion.
- **Issue:** Contact pills bar `divide-x` can look tight on mobile (stacked).
  **Priority:** Low · **Fix:** `divide-y sm:divide-y-0 sm:divide-x` (already) — verify padding `px-6 py-5` even · **Reason:** alignment · **Improvement:** tidy mobile stack.

## 11. Education Loan (`app/education-loan/page.tsx` + `components/education-loan/*`)
- **Issue (FIXED):** Duplicate blue CTA banner removed; purple LoanApprovalBanner via PageShell. ✅
- **Issue:** Many sub-components (Hero, Eligibility, FAQ, Process, Types…) — verify consistent section `py` and heading sizes.
  **Priority:** Medium · **Fix:** headings `text-3xl md:text-4xl font-extrabold`, sections `py-16 md:py-20` · **Reason:** internal consistency · **Improvement:** unified page rhythm.
- **Issue:** Bank marquee logos — apply the same whitespace-trim treatment used on LoanOptions logos.
  **Priority:** Medium · **Fix:** trim source PNG margins; cards `px-6 py-4` · **Reason:** logos render too small otherwise · **Improvement:** crisp, legible logos.

## 12. Study Abroad — USA (`components/study-abroad/StudyUSAPage.tsx`)
**Status: hero updated this session** (USA Banner.svg bg + text overlay).
- **Issue:** Quick-Insights table, highlights grid, universities grid use mixed purples (`#6c47ff`, `#7c3aed`, `#a855f7`) as gradient partners.
  **Priority:** Low · **Fix:** keep gradients but anchor the primary stop at `#6E00E0` (done) · **Reason:** brand anchor · **Improvement:** consistent brand gradient.
- **Issue:** Hero CTA links `/usa-universities` (no page) and side CTA `/contact` (→ `/contact-us`).
  **Priority:** High · **Fix:** `/contact` → `/contact-us`; point `/usa-universities` to a real route · **Reason:** dead links · **Improvement:** working CTAs.

## 13. Study Abroad — all other countries (UK, Canada, Australia, Germany, France, Ireland, Italy, Spain, Switzerland, Singapore, UAE, New Zealand, India)
These share `StudyCountryPage` / per-country wrappers + `CountryPage`, `RequirementsSection`, `…PopularUniversitiesSection`, `Why…TopChoiceSection`.
- **Issue:** Same `/contact` vs `/contact-us` link pattern likely repeats.
  **Priority:** High · **Fix:** global search `href="/contact"` → `/contact-us`, `href="/about"` → `/about-us` · **Reason:** dead links · **Improvement:** consistent working nav across 14 pages.
- **Issue:** Hero overlay text contrast depends on photo; some country photos are bright.
  **Priority:** Medium · **Fix:** ensure overlay `bg-black/30` (or gradient) on all country heroes for legibility · **Reason:** WCAG contrast · **Improvement:** readable headings on every hero.
- **Issue:** Section padding consistency across country pages.
  **Priority:** Medium · **Fix:** standardize `py-16 md:py-20` · **Reason:** uniform rhythm · **Improvement:** every country page feels identical in quality.

## 14. Tools (EMI, INR-USD, Loan Eligibility, Currency Converter, Student Loan Calculator)
- **Issue:** Calculator inputs & result cards — verify input height/label consistency with Contact form.
  **Priority:** Medium · **Fix:** inputs `h-12 rounded-xl border border-[#ece5f9] focus:border-[#6E00E0]`; result card `rounded-2xl p-6 shadow-[0_8px_24px_rgba(110,0,224,0.10)]` · **Reason:** unified form/card system · **Improvement:** tools feel native to the brand.
- **Issue:** Numeric output emphasis.
  **Priority:** Low · **Fix:** result figures `text-3xl font-extrabold text-[#6E00E0]` · **Reason:** visual hierarchy on the key number · **Improvement:** users grasp results instantly.
- **Issue:** Mobile: side-by-side input/result may overflow.
  **Priority:** High · **Fix:** `grid grid-cols-1 lg:grid-cols-2 gap-6` · **Reason:** prevent overflow on phones · **Improvement:** no horizontal scroll.

## 15. About Us / Partner / Beyond Rejection
- **Issue:** Verify heading hierarchy (single h1), consistent section `py`, and CTA buttons use brand fill.
  **Priority:** Medium · **Fix:** `py-16 md:py-20`, primary CTAs `bg-[#6E00E0] text-white rounded-full px-8 py-3.5 font-semibold` · **Reason:** consistency with rest of site · **Improvement:** cohesive feel across secondary pages.
- **Issue:** Partner page forms (if any) — same validation/error treatment as Contact.
  **Priority:** Medium · **Fix:** mirror Contact form input + error classes · **Reason:** consistent forms · **Improvement:** predictable UX.

---

## Cross-cutting recommendations (consistency system)

| Token | Recommended value | Apply to |
|-------|-------------------|----------|
| Section padding | `py-16 md:py-20` | all content sections |
| Container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` | all sections |
| Primary button | `bg-[#6E00E0] text-white rounded-full px-8 py-3.5 font-semibold shadow-[0_6px_20px_rgba(110,0,224,0.28)] hover:-translate-y-0.5 transition-all` | all primary CTAs |
| Secondary button | `bg-white text-[#6E00E0] border border-[#d9c3f5] rounded-full px-8 py-3.5 font-bold hover:bg-[#f6efff]` | all secondary CTAs |
| Card (small) | `rounded-2xl p-6 shadow-[0_8px_24px_rgba(110,0,224,0.10)] border border-[#ede8f7]` | feature/info cards |
| Card (large panel) | `rounded-[32px] p-8 md:p-12` | hero/banner panels |
| Heading H2 | `text-3xl md:text-4xl font-extrabold text-gray-900` | section titles |
| Body | `text-gray-600 text-base md:text-lg leading-relaxed` | paragraphs |

**Highest-impact remaining items (do next):**
1. **High** — Fix all dead links site-wide (`/contact`→`/contact-us`, `/about`→`/about-us`, `/usa-universities`, footer legal links).
2. **High** — Add form validation/error states (Contact + any Partner/tools forms).
3. **High** — Tools: ensure responsive `grid-cols-1 lg:grid-cols-2` to kill mobile overflow.
4. **Medium** — Standardize section padding & card radii using the token table above.
5. **Medium** — Neutralize purple body paragraphs (WhyTrust) for readability.
