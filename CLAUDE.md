# Stella Portfolio — Project Brief

## About
Personal UX design portfolio for Estelle. Built in plain HTML, CSS, 
vanilla JS. No frameworks.

## Design System
- Background: #F8F8F4
- Text: #1A1A16
- Accent: #4A7C59
- Surface: #E8EBE4
- Headlines: Cormorant Garamond, font-weight 600 (loaded from Google Fonts)
- Body: system-ui, sans-serif
- Border-radius cards: 12px
- Border-radius buttons: 24px
- Section padding: 120px vertical
- Max content width: 1100px
- Page margin: 48px horizontal

## Design Principles
- Lots of whitespace — never cramped
- Clear visual hierarchy — one thing at a time
- Minimalist but warm — not cold or corporate
- Images always sharp — use 2x exports from Figma
- No decorative elements unless intentional

## Accessibility
- WCAG 2.2 Level AA always
- Semantic HTML — correct heading hierarchy
- All images need descriptive alt text
- Keyboard navigation must work
- prefers-reduced-motion always respected
- Visible focus indicators always on

## File Conventions
- Case study pages live in /cases/
- Each case has its own assets folder e.g. assets/xing/
- Each case has a Figma reference PNG in its assets folder
- naming: Figma-reference-[CASENAME]-V[number].png

## Portfolio Strategy

### Target Audience
- Primary: Hiring managers, Product Directors, UX Directors, 
  and Team Leads
- Secondary: UX leads reviewing portfolio before interviews
- Industries: B2B, SaaS, startups, and agencies
- They spend 2-3 minutes max per portfolio — scannability is critical

### Communication Goals
- Show range: B2B, accessibility, AI, international background,
  creative solutions and design thinking ability
- Show process: not just outcomes but thinking and decisions
- Show seniority: strategic framing, stakeholder awareness,
  data-informed decisions
- Build trust: real projects, honest reflections, no fluff

### UX Principles for this Portfolio
- Every case study answers: What was the problem?
  What did I do? What was the result?
- Lead with impact, follow with process
- Short texts — recruiters scan, they don't read
- Visuals carry the story — text supports, not repeats
- No vague or generic language — every sentence should feel
  human, specific, and emotionally convincing
- Accessibility is demonstrated, not just mentioned

### Tone of Voice
- Warm but professional
- Honest — including what didn't work or wasn't measured
- Confident without being boastful
- English throughout

## Interaction Patterns
- Work cards on hover: box-shadow + border-color + image scale(1.05) with 0.4s ease transition

## Image Handling
- Images must always use `object-fit: cover` with an explicit, fixed container height
- Never let images define or resize their parent card/container
- Image containers must always have `overflow: hidden`
- Always use this pattern for image containers:
  .container { height: [fixed value]px; overflow: hidden; }
  img { width: 100%; height: 100%; object-fit: cover; display: block; }

## Rules — always follow these
- Never change text content unless explicitly asked
- Always follow the design system above
- Always save files after making changes
- Build one section at a time
- After changes: confirm what was changed and what file was saved
- If unsure about design intent: ask before building
