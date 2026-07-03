# SEED DESIGN.md

## Purpose
This file defines the visual, structural, and interaction rules for SEED presentation surfaces built by humans or AI agents.

The immediate target is a public-facing hackathon demo page that must:

- look credible in front of policymakers, NGOs, researchers, and judges
- feel polished enough to create a "wow" moment in a live presentation
- explain the project quickly without reading like a generic startup landing page
- leave room for later insertion of three Thailand education stock images in the landing section

## Subject
SEED is a public-interest intelligence platform for education equity.

It turns fragmented school data into decision support for fairer resource allocation, better reporting, and stronger research access.

## Audience
- Government and local education authorities
- NGOs and education-sector partners
- School administrators and reporting teams
- Researchers and policy analysts
- Hackathon judges and showcase visitors

## Single Job
The page's single job is to make SEED feel like a real, trustworthy education-infrastructure product that is already credible enough to deserve attention, support, and a live click-through.

## Positioning
Design SEED as modern civic technology, not consumer AI hype.

The visual tone should feel:

- evidence-based
- calm but ambitious
- globally legible
- editorial rather than noisy
- optimistic without becoming playful

Avoid anything that makes the page feel like:

- a generic SaaS template
- a crypto dashboard
- an AI chatbot clone
- a hackathon mockup assembled from random gradients

## Core Design Thesis
The hero is a thesis: education equity becomes visible when scattered evidence is gathered into one coherent view.

The page should feel like fragmented realities are being aligned into a clear national picture. Structure, cards, dividers, and image framing should reinforce this theme of order emerging from distributed school conditions.

## Signature Element
Use one memorable structural move:

**The Equity Horizon**

A horizontal hero composition that pairs:

- a large editorial text block
- a three-panel image placeholder band for Thailand education imagery
- a disciplined "signal line" or gradient rule that visually connects story, evidence, and action

This line can reappear subtly across sections as the page's unifying motif.

## Design Plan

### Color
Use a trust-forward palette derived from existing SEED materials, but push it into a more premium product-page system.

- `ink` `#162331` - primary text, dark anchors, high-trust headings
- `forest` `#2E6142` - education growth, secondary accent, positive states
- `clay` `#9A4B4B` - restrained contrast accent for problems, pressure points, and emphasis
- `cream` `#F6F3EC` - page background and soft sections
- `paper` `#FFFDFC` - card surfaces and elevated panels
- `mist` `#D8E0DA` - borders, separators, quiet chrome

### Typography
Typography must carry authority and warmth together.

- Display: `"Libre Baskerville", Georgia, serif`
  - Used selectively for hero statements, section statements, and emotionally resonant lines
- Body/UI: `"Manrope", system-ui, sans-serif`
  - Used for navigation, descriptions, cards, labels, and buttons
- Data/utility: `"IBM Plex Mono", "SFMono-Regular", Consolas, monospace`
  - Used for metadata, AI query examples, and compact evidence labels

### Type Scale
- Hero display: `clamp(3.6rem, 8vw, 7rem)`
- Section headline: `clamp(1.75rem, 3vw, 2.8rem)`
- Lead paragraph: `1.1rem` to `1.3rem`
- Body text: `1rem`
- Utility labels: `0.78rem` to `0.9rem`

### Layout
Use a long-form landing page with disciplined editorial spacing and strong section contrast.

- Max content width: `1200px`
- Standard horizontal padding: `24px` mobile, `40px` tablet, `64px` desktop
- Section spacing: generous, with visual breathing room
- Cards: rounded but not soft; radius should feel precise, not playful

ASCII wireframe:

```text
+------------------------------------------------------------+
| Hero copy          | 3-image placeholder band             |
| headline           | [ Image 01 ][ Image 02 ][ Image 03 ]|
| thesis             |                                       |
| CTA                | signal line / subtle metric note      |
+------------------------------------------------------------+
| Problem statement / why allocation fails                   |
+------------------------------------------------------------+
| Three capability cards                                     |
+------------------------------------------------------------+
| Evidence / AI query / impact framing                       |
+------------------------------------------------------------+
| Final CTA                                                   |
+------------------------------------------------------------+
```

## Narrative Order
Every implementation should preserve this order unless a human explicitly overrides it.

1. Introduce SEED with confidence
2. Show the education-allocation problem in plain language
3. Explain how SEED turns fragmented school data into action
4. Make the AI role visible and meaningful
5. Show why this matters for real communities
6. Invite the audience to enter the live demo

## Content Rules

### Headline Style
Headlines should sound like institutional product language, not ad copy.

Good:
- "Planting the future of education."
- "From fragmented reporting to fairer decisions."
- "See where support is needed, and why."

Avoid:
- "Revolutionize education with AI"
- "Supercharge your workflow"
- "The future is here"

### Body Copy
- Use short paragraphs
- Prefer concrete nouns over buzzwords
- Keep claims credible
- Let impact come from specificity, not exaggeration

### Labels
Use labels only when they encode real structure.

Good label examples:
- `The Problem`
- `How SEED Works`
- `AI in the Loop`
- `Why It Matters`

Avoid decorative numbering unless the content is genuinely sequential.

## Components

### Hero
Must include:

- SEED wordmark or name
- one strong thesis headline
- one supporting paragraph
- primary CTA linking to the Enter demo
- secondary supporting note or micro-copy
- a three-slot image placeholder band clearly labeled for later replacement

The hero should not rely on final images being present. The placeholder state must still look intentional and elegant.

### Image Placeholder Band
The landing page begins with a dedicated area for three Thailand education stock images.

Requirements:
- exactly three visible slots
- obvious labels such as `Thailand Education Image 01`
- graceful empty state with border, subtle pattern, or soft background
- easy to replace later by swapping image sources only

### Section Card
Used for features, value pillars, and supporting content.

- background: `paper`
- border: 1px `mist`
- radius: `18px`
- padding: roomy and clean
- shadow: very soft; enough for separation, not enough to feel glossy

### CTA Button
Primary CTA should feel decisive and stage-ready.

- background: `ink`
- text: `paper`
- hover: lift slightly and brighten
- focus: visible high-contrast outline
- radius: pill or large rounded rectangle

Secondary CTAs should be restrained and never compete with the primary link to the live demo.

### AI Query Panel
If included, style it like a product artifact rather than a chat bubble wall.

- utility label in monospace
- concise prompt example
- one clean outcome line or short bullet list

### Metrics / Signals
Use sparingly.

Avoid dashboard clutter.

If metrics appear, they should clarify:
- need
- allocation logic
- outcome potential

## Motion
Motion should be quiet and purposeful.

Allowed:
- subtle reveal on load
- small hover lift on cards and buttons
- slight background drift or gradient movement in hero only

Avoid:
- constant floating animations
- parallax gimmicks
- flashy counters
- anything that distracts from reading

Respect `prefers-reduced-motion`.

## Accessibility And Production Constraints

### Structure
- Use semantic HTML: `header`, `main`, `section`, `footer`, `article` where appropriate
- Use one page-level `h1`
- Do not skip heading levels
- Maintain source order that matches reading order

### Text And Contrast
- Body text must meet WCAG AA contrast
- Do not place essential text directly on busy images without an overlay
- Keep labels and links clear out of context

### Inputs And Interaction
- All interactive controls must be keyboard reachable
- Visible focus states are required
- Link text should describe the destination or action

### Images
- Real images need meaningful `alt` text
- Decorative graphics should use empty alt text or be background-only
- Placeholder state should still include accessible labeling

### Responsive Behavior
- Hero must collapse elegantly on mobile
- Image placeholders should stack without losing hierarchy
- No horizontal scrolling at standard mobile widths

## HTML Build Rules For Agents
When building from this file:

1. Start with a static HTML/CSS implementation before adding JavaScript.
2. Build the landing page first; it carries the presentation burden.
3. Keep the code easy to edit by hand.
4. Use variables for colors, spacing, and radius.
5. Treat the three-image placeholder area as a first-class hero asset.
6. Make the Enter demo CTA prominent and immediately clickable.

## Review Standard
Before calling the page done, ask:

- Does this feel like education infrastructure, not AI theater?
- Does the hero still look strong without final photography?
- Is the page memorable because of composition and type, not visual noise?
- Would this look convincing on a projector during a live demo?

If any answer is no, refine the layout before adding more decoration.
