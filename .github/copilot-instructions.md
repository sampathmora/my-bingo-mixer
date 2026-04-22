# Project Guidelines

## Build And Test
- Prerequisite: Node.js 22 or newer (see README).
- Install dependencies: npm install
- Run dev server: npm run dev
- Run lint checks: npm run lint
- Run tests: npm run test
- Create production build: npm run build
- Preferred workflow for code changes: run lint and test before build.

## Architecture
- React + Vite + TypeScript app with a single top-level flow in src/App.tsx.
- Game state and actions are centralized in src/hooks/useBingoGame.ts.
- Pure bingo rules and board transforms live in src/utils/bingoLogic.ts.
- UI rendering is split into presentational components in src/components/.
- Question content is stored in src/data/questions.ts.

## Conventions
- Keep game rules pure and testable in src/utils/bingoLogic.ts; avoid moving business rules into UI components.
- Maintain immutable updates for board and state transitions.
- Preserve the 5x5 board invariants: center free space at index 12 and stable square IDs 0-24.
- Persisted localStorage game shape in src/hooks/useBingoGame.ts is versioned; update validation and version together when schema changes.
- Use Vitest for unit tests and keep new logic covered with focused tests near existing patterns in src/utils/bingoLogic.test.ts.

## Key Docs
- Setup and run basics: README.md
- Workshop flow and lab context: workshop/GUIDE.md
- Contribution process and CLA: CONTRIBUTING.md
- Security policy: SECURITY.md
