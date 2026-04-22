---
name: dogfooding
description: 'Critically test the running app like a real user and report how fun it is. Use for: dogfooding, UX playtest, gameplay feedback, engagement review, critical fun assessment, replayability feedback.'
argument-hint: 'Optional focus, e.g. onboarding, retention, mobile feel, social gameplay'
user-invocable: true
---

# Dogfooding Playtest

## Outcome
Produce a critical, evidence-based playtest report focused on fun, engagement, and replayability, with prioritized fixes.

## When To Use
- You want hands-on UX feedback, not just code review
- You want to evaluate whether gameplay is actually fun
- You need concrete product improvements ordered by impact

## Procedure
1. Confirm runtime readiness.
- Check whether the dev server is already running.
- If not running, install dependencies if needed and start the dev server.
- Capture the live URL and ensure the app is reachable.

2. Interact with the product as a real player.
- Start from first-load onboarding.
- Complete the primary loop end-to-end: start game, mark squares, trigger win state, dismiss modal, continue/reset.
- Exercise at least one edge interaction (rapid taps, back/reset flow, repeat win flow).

3. Score the fun experience.
- Assign a 1-10 fun score.
- Judge these dimensions:
  - First-minute excitement
  - Interaction feel (responsiveness, clarity, delight)
  - Social/conversation spark
  - Progression and retention hooks
  - Replayability and variety

4. Inspect implementation to explain why.
- Reference specific UI, content, and state files tied to observed behavior.
- Connect findings to concrete code locations.

5. Deliver a blunt, useful report.
- Start with overall fun score.
- List strengths briefly.
- List critical fun blockers in priority order.
- Provide top improvements ordered by expected impact.
- End with a bottom-line verdict: tool-like vs game-like feel.

## Decision Rules
- If browser interaction is available: prioritize live interaction evidence.
- If direct interaction is unavailable: use runtime checks plus UI/state/content inspection, and explicitly note that limitation.
- If multiple issues exist: prioritize changes that improve excitement and replayability before visual polish.

## Completion Checks
- Runtime status confirmed and URL captured.
- Core gameplay loop evaluated end-to-end.
- Report includes a numeric fun score and prioritized recommendations.
- Findings reference concrete files or behaviors.

## Response Template
1. Fun score: X/10
2. What works (short)
3. Critical fun blockers (ordered)
4. Highest-impact improvements (ordered)
5. Bottom line
