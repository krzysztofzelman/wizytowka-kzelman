---
name: project-audit
description: Comprehensive full-stack/frontend project audit — explore structure, analyze code, review configs, and produce a prioritized findings report
source: auto-skill
extracted_at: '2026-06-10T18:02:30.092Z'
---

# Project Audit Skill

When asked to "audit" a project, follow this systematic process to produce a comprehensive, actionable report.

## Process

### Phase 1 — Foundation scan
1. **Read root config files**: `package.json`, `vite.config.js` (or `next.config.js`, etc.), `tsconfig.json`, `.eslintrc.*`, `.env.example`
2. **Read deployment configs**: `vercel.json`, `netlify.toml`, `Dockerfile`, `.github/workflows/*`
3. **Read public/metadata**: `index.html` (meta tags, OG, JSON-LD), `robots.txt`, `sitemap.xml`, `public/` listing
4. **Read project docs**: `README.md`, `CONTRIBUTING.md`, `LICENSE`
5. **Check `.gitignore`** — note what's excluded and whether ignored files still appear tracked

### Phase 2 — Source tree exploration
6. **List ALL directories** under `src/` recursively — identify components, hooks, context, utils, types, assets
7. **Read every component** (JSX/TSX + CSS) — do NOT summarize, read full file content. Use subagent if there are many.
8. **Read all hooks, context files, type definitions, utility files**

### Phase 3 — Analysis dimensions
For each layer, assess:

| Dimension | What to check |
|---|---|
| **Architecture** | Component split, data flow, state management, routing |
| **i18n / L10n** | Translation keys, coverage (PL/EN or others), context usage |
| **Design system** | CSS variables, theming (dark/light), responsive breakpoints, animations |
| **Performance** | Bundle size hints, image usage, lazy loading, animation performance |
| **Accessibility** | `aria-*` attributes, semantic HTML, keyboard navigation, focus management |
| **SEO** | Meta tags, OG/Twitter cards, structured data (JSON-LD), sitemap, robots |
| **API / Backend** | Serverless functions, error handling, auth, rate limiting, CORS, timeouts |
| **Testing** | Presence of tests, test runner config, coverage |
| **CI/CD** | Pipeline steps, secrets usage, deployment targets (multi-platform?) |
| **Security** | API keys in code, CORS config, SSH deploy practices, validation |

### Phase 4 — Compile findings
Organize findings into three priority tiers:

- **🔴 Critical** — bugs, security issues, data loss risks, broken functionality
- **🟡 Medium** — tech debt, maintainability concerns, incomplete features
- **🟢 Minor** — polish, naming, unused files, cosmetic issues

For each finding include:
- What/where (file:line if possible)
- Why it's a problem
- Suggested fix (actionable)

### Phase 5 — Recommendations
Provide ordered suggestions:
- **Priority 1**: Safety/correctness — fix bugs first
- **Priority 2**: Code quality — tests, TypeScript, dead code removal
- **Priority 3**: Polish — UX details, metadata, docs, deployment hardening

### Execution — Build-verify workflow
After delivering the audit, when the user agrees to execute fixes:

1. **Work one task at a time**, strictly in priority order (P1 → P2 → P3)
2. **After every single task**, run `npm run build` (or equivalent) — do NOT batch tasks before building
3. If the build fails, fix the error immediately before moving to the next task
4. When migrating to TypeScript, also run `npx tsc --noEmit` alongside the build
5. For test infrastructure tasks, run `npx vitest run` after setup to verify

**Why:** The user explicitly demanded this workflow after a prior experience where batched changes made it impossible to tell which task broke the build. Build-verify after each task prevents cascading failures and keeps each fix independently verifiable.

**How to apply:** Set up a todo list with one task per item. After marking each task complete, run the build command. Only proceed when the exit code is 0.

### TypeScript-specific checks during audit
When auditing a React + TypeScript project, add these to the analysis:

- **Ref/CallbackRef typing:** Check that hooks returning `RefObject<T | null>` are used with the correct generic — `RefObject<HTMLDivElement | null>` cannot be assigned to `Ref<HTMLDivElement>`. Fix: make the hook generic: `useScrollAnimation<T extends HTMLElement = HTMLDivElement>`.
- **CSS custom properties in style prop:** `style={{ '--accent': value }}` causes a TS error because `--accent` isn't a known CSS property. Fix: cast to `as CSSProperties` or `as React.CSSProperties`.
- **Vite ESM + vitest:** When setting up vitest with `@testing-library/react`, ensure `@testing-library/dom` is also installed — vitest + jsdom needs it for TypeScript declarations of `screen`, `waitFor`, etc. Otherwise `npx tsc` will error on test files.
- **react-helmet-async with React 19:** v3 works with React 19 but npm may report peer dependency conflicts. Install with `--legacy-peer-deps`.
- **Error Boundary wrapping:** For volatile components (chat, external data, forms), wrap in a class-based `ErrorBoundary` with `componentDidCatch` logging and a "Try again" button. Import as `{ ErrorBoundary }` and wrap: `<ErrorBoundary><ChatBot /></ErrorBoundary>`.
- **Helmet for dynamic SEO:** Use `react-helmet-async` — wrap app in `<HelmetProvider>` (in `main.tsx`), then add `<Helmet>` in component with `<title>` and `<meta name="description">` that change based on language/route.

### Output format
Present in Polish or English (per user request), use tables for structured data, keep a summary score (e.g., `8/10`).

## When to use
- User asks "zrób audyt projektu" or "review the project" or "code review"
- Before starting significant refactoring work (establish baseline)
- When onboarding to a new project or picking up an unfamiliar codebase
