---
name: Space Galaxy Design Guide
description: "Use when redesigning UI, editing frontend styles, or updating visual components for Bingo Mixer. Enforces the Space Galaxy Glow visual system, Tailwind v4 token usage, motion/accessibility rules, and mobile-first layout quality."
applyTo:
  - "src/components/**/*.tsx"
  - "src/index.css"
  - "index.html"
---

# Space Galaxy Glow Design Guide

## Visual Direction
- Keep the app in an elegant cosmic style: deep-space atmosphere, luminous accents, glass-like surfaces, and cinematic contrast.
- Avoid generic or default-looking UI choices (plain gray cards, neutral-only palettes, default system visual tone).
- Preserve a cohesive look across start screen, game screen, board, squares, and modal.

## Theme System (Tailwind v4)
- Use tokens in `src/index.css` `@theme` as the single source of truth for colors and typography.
- Reuse shared utility/component classes (for example, stage, panel, title, button, starfield, reveal) before adding one-off class strings.
- When adding new colors or effects, define tokenized variables first, then consume them in components.
- Keep Tailwind CSS-first conventions; do not introduce `tailwind.config.*` unless explicitly requested.

## Typography And Layout
- Keep display typography expressive and body text readable on mobile and desktop.
- Maintain clear hierarchy: mission/title, guidance text, primary action.
- Favor mobile-first spacing and scale with responsive adjustments (`sm:` and above) where needed.

## Motion And Interaction
- Target medium-intensity motion: meaningful reveals and glow transitions, not constant high-frequency animation.
- Every animated effect must degrade gracefully under `prefers-reduced-motion`.
- Keep interactions tactile and clear: hover/active/focus-visible states should be visually distinct.

## Accessibility And Legibility
- Preserve strong text/background contrast for small board text and status states.
- Keep keyboard-visible focus styles on interactive controls.
- Ensure board square states (idle, marked, winning, free space) remain easy to distinguish at a glance.

## Scope Boundaries
- This guide is visual-first: do not change game rules or state flow for design-only requests.
- Avoid moving business logic into UI components; keep gameplay logic in hooks/utils.

## Validation Checklist
- Run `npm run lint`.
- Run `npm run test`.
- Run `npm run build`.
- Verify the redesigned UI on narrow and wide viewports before finalizing.
