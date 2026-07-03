# SEED Poster Draft — Message Design & Tool Comparison

**Format:** Vertical roll-up banner · 80 cm × 200 cm  
**Audience:** AI Party Night visitors (youth delegates, entrepreneurs, researchers, partners)  
**Goal:** Understand SEED in under 60 seconds → scan QR → ask "Can you show me how this works?"

---

## 1. Narrative Spine (shared across all assets)

| Element | Copy |
|---------|------|
| **1-line product** | SEED is an open platform that turns fragmented school data into faster, fairer education-resource decisions. |
| **3-part feature model** | Dashboard · AI Reporting · Research API |
| **3 proof points** | Fairer allocation · Less reporting burden · Evidence-based action |
| **Call to action** | Scan to try the live demo — partner with us to scale equitable education infrastructure. |

---

## 2. Poster Message Architecture

### Top zone (0–25%) — Identity & hook

| Element | Copy | Notes |
|---------|------|-------|
| Logo | SEED mark | Navy `#1B3A6B`, green sprout `#2D6A4F` |
| Headline | **SEED** | Largest type on poster |
| Subhead | School Education Evaluation and Development | One line, grey |
| Tagline | *Planting the future of education.* | Italic, secondary |
| Hook line | **Where does school support go — and where is it needed most?** | Policy-tech tone; readable from 2 m |

### Middle zone (25–70%) — Problem → Solution → Product

**The Problem** (3 bullets max)

- Resources follow broad formulas, not real school conditions
- Reporting is fragmented and slow for schools and governments
- Decision-makers lack timely, actionable evidence

**Who It Serves**

- Governments & NGOs · Schools · Researchers · Partners

**How SEED Works** (3 modules — use same names everywhere)

1. **Decision Dashboard** — Natural-language queries for allocation priorities
2. **AI Reporting Toolkits** — Structured school profiles, classroom observations, funding briefs
3. **Research Dataset API** — Equity analytics for policy and intervention research

**How AI Helps** (one line)

> AI reduces reporting friction and turns complex school data into decisions people can act on — not decorative chatbots.

**Product visual**

- 1–2 demo screenshots or dashboard mock
- Simple flow diagram: Collect → Diagnose → Allocate

### Bottom zone (70–100%) — Impact, stage, CTA

**Why It Matters**

- Fairer funding for schools facing the highest barriers
- Less admin burden on educators
- Credible public-service infrastructure for education equity

**Prototype stage**

- Live hackathon prototype · Inspired by Thailand school-index research · Adaptable globally

**QR block**

- Label: **Try the live demo**
- URL: `https://37f7ba50441f48ff808dfbcadd92d0be.prod.enterapp.pro/`
- Event tags: `#ATOX #Tsinghua #TGYD` · AI for Public Services

**Footer**

- Team 3 · AI Collision Lab · Jimmy · Sim · Ken · Janis
- SDG 4 · SDG 16

---

## 3. Copy Density Rules

- **Max ~120 words** of body text on the poster (excluding labels)
- Headings: 5–7 words each
- Bullets: 6–10 words each
- No paragraph blocks longer than 2 lines
- Bottom 80–100 mm: keep light — roll-up base often hides this area

---

## 4. Visual Direction (preview of DESIGN.md)

| Token | Value |
|-------|-------|
| Primary | Navy `#1B3A6B` |
| Accent | Green `#2D6A4F` |
| Highlight | Warm gold `#C9A227` (sparingly) |
| Background | Off-white `#F7F8FA` or white |
| Personality | Credible · calm · data-informed · human-centered |
| Avoid | League-table framing · dense policy jargon · decorative AI imagery |

---

## 5. Tool Comparison — Poster Generation (2026)

Evaluated for **this specific job**: 80×200 cm roll-up, hackathon deadline, mixed design skill on team, need for QR + screenshots + credible policy-tech tone.

### Scoring matrix

| Tool | Speed | Roll-up sizing | Text control | Brand/QR | Collaboration | Print export | AI assist | **Fit for SEED** |
|------|-------|----------------|--------------|----------|---------------|--------------|-----------|------------------|
| **Canva** | ★★★★★ | Custom cm + resize | ★★★★ | ★★★★★ | ★★★★ | PDF Print | Magic Design, text-to-layout | **★★★★★ Best default** |
| **Figma** | ★★★ | Custom frame | ★★★★★ | ★★★★★ | ★★★★★ | PDF/SVG | Basic AI | **★★★★ Best for polish pass** |
| **Adobe Express** | ★★★★ | Custom resize | ★★★★ | ★★★★ | ★★★ | PDF/PNG | Firefly (commercial-safe) | ★★★★ |
| **Venngage** | ★★★★ | Custom + AI poster | ★★★★ | ★★★ | ★★★★ | PDF | AI poster generator | ★★★★ (info-heavy posters) |
| **PosterMyWall** | ★★★★ | Resize tool | ★★★ | ★★★ | ★★★ | Paid HD | AI design gen | ★★★ (marketing promos) |
| **HTML/CSS (local)** | ★★★★★ | Exact control | ★★★★★ | ★★★★ | ★★ | Browser print/PDF | None | ★★★★ (fast draft, dev-friendly) |
| **Python/Pillow** | ★★★ | Pixel-perfect | ★★★ | ★★★ | ★ | PNG/PDF | None | ★★★ (automated variants) |
| **AI image only** (DALL·E, Ideogram) | ★★★★★ | Poor | ★ (unreliable text) | ★★ | ★ | PNG | Full | ★★ (mood only, not final) |

### Top 3 recommended approaches for simultaneous comparison

| Rank | Approach | Why compare it |
|------|----------|----------------|
| **1** | **Canva** (85×200 cm custom) | Fastest path to submission-quality poster; organiser-recommended; Magic Resize; easy QR plugin |
| **2** | **Figma** (800×2000 mm frame) | Team already has FigJam board; pixel control for Ken's policy copy + Jimmy's design system |
| **3** | **HTML/CSS local draft** | Zero account friction; instant iteration; exact copy from this doc; screenshot → paste into Canva/Figma |

**Not recommended as primary:** AI image generators alone — they garble long text and can't place a scannable QR reliably.

### Print specs checklist (all tools)

- Canvas: **80 cm × 200 cm** (or 85×200 if using ATOX template)
- Bleed: **3 mm** per edge if printer requires
- Safe zone: key text **15 mm** inside trim; **80 mm clear at bottom** (roll-up cassette)
- Export: **PDF Print** or PNG at ≥150 DPI (~4725 × 11811 px)
- Color: RGB for screen proof; confirm CMYK with print vendor if physical print

### Canva quick-start prompt

```
Vertical roll-up banner 85x200cm for SEED education platform.
Style: clean policy-tech, navy blue and green, white background.
Sections top to bottom: logo, headline SEED, tagline Planting the future of education,
problem bullets, 3 feature cards (Dashboard, AI Reporting, Research API),
demo screenshot placeholder, QR code area, team footer.
Minimal text, large headings, credible not flashy.
```

### Figma quick-start

1. New frame: 800 × 2000 (mm units) or 800 × 2000 px at 1:10 scale
2. Import `docs/assets/seed-logo.png`
3. Paste copy blocks from Section 2 above
4. Add 12-column grid, 64 px margins, 48 px section gaps

---

## 6. Three Variants Generated Today

| Variant | Method | File | Best for |
|---------|--------|------|----------|
| **A** | AI concept image | `docs/showcase/posters/variant-a-ai-concept.png` | Mood, color direction, hero visual |
| **B** | HTML/CSS | `docs/showcase/posters/variant-b.html` | Copy-accurate draft; open in browser → Print to PDF |
| **C** | Python/Pillow | `docs/showcase/posters/variant-c-programmatic.png` | Structured layout reference; batch copy tweaks |

**Recommended workflow:** Pick the layout you like from B or C → rebuild in **Canva** for final submission → optional **Figma** polish before 7 July.

---

## 7. Open Decisions for Ken / Jimmy

- [ ] English only, or bilingual EN/TH for policy credibility?
- [ ] Include Thailand school-index mention explicitly, or keep global framing?
- [ ] Name all 3 toolkits on poster, or group as "AI Reporting Toolkits"?
- [ ] Use team photos from `docs/assets/team-session/` on poster?

---

*Draft v1 · 3 July 2026 · Jimmy / Ken*
