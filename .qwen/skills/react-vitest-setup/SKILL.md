---
name: react-vitest-setup
description: Setup vitest with @testing-library/react for a Vite + React + TypeScript project, including the @testing-library/dom gotcha for TS declarations
source: auto-skill
extracted_at: '2026-06-10T20:13:00.000Z'
---

# Vitest + React Testing Library setup for Vite + TypeScript

## Prerequisites

In `package.json` you already have (or need) these devDependencies:
- `vitest` (latest)
- `@testing-library/react` (v16+)
- `@testing-library/jest-dom` (v6+)
- `jsdom`

If the packages aren't installed yet, run:

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
```

## The TypeScript gotcha

After installing, `npx tsc --noEmit` may fail with:

```
Module '"@testing-library/react"' has no exported member 'screen'.
Module '"@testing-library/react"' has no exported member 'waitFor'.
```

**Root cause:** `@testing-library/react` re-exports from `@testing-library/dom`, but TypeScript can't find the declarations because `@testing-library/dom` isn't always pulled in automatically.

**Fix:**

```bash
npm install --save-dev @testing-library/dom
```

No need for `@types/testing-library__dom` — `@testing-library/dom` ships its own `.d.ts` files.

## Setup files

### `vitest.config.js`

```js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,          // describe, it, expect without imports
    environment: 'jsdom',   // DOM emulation for React components
    setupFiles: ['./src/setupTests.ts'],
    include: ['src/**/*.test.{ts,tsx}', 'api/*.test.{js,jsx}'],
  },
});
```

### `src/setupTests.ts`

```ts
import '@testing-library/jest-dom';
```

Brings in `toBeInTheDocument()`, `toHaveTextContent()`, etc.

### `package.json` scripts

Add these to the `"scripts"` section:

```json
"test": "vitest",
"test:ui": "vitest --ui",
"typecheck": "tsc --noEmit"
```

## Test patterns that work

### Hook test (useChatLimit example)

```tsx
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useChatLimit } from './useChatLimit';

describe('useChatLimit', () => {
  beforeEach(() => { sessionStorage.clear(); });

  it('starts with count 0', () => {
    const { result } = renderHook(() => useChatLimit('test_key'));
    expect(result.current.count).toBe(0);
  });

  it('increments count', () => {
    const { result } = renderHook(() => useChatLimit('test_key'));
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
});
```

### Context / component test

Wrap with the context provider:

```tsx
function renderWithLang(lang: 'pl' | 'en') {
  return render(
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang: () => {} }}>
      <YourComponent />
    </LanguageContext.Provider>
  );
}
```

### Snapshot-like structural checks

Test that translation keys match between languages:

```ts
function flattenKeys(obj: Record<string, unknown>, prefix = ''): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return flattenKeys(value as Record<string, unknown>, fullKey);
    }
    return fullKey;
  });
}
// expect(plKeys.sort()).toEqual(enKeys.sort());
```

### API endpoint tests

Mock only `req`/`res` — no need for a full HTTP server:

```ts
function createMockReqRes(overrides = {}) {
  const status = [], json = [], end = [];
  const res = {
    setHeader: () => {},
    status: (code) => { status.push(code); return res; },
    json: (data) => { json.push(data); return res; },
    end: () => { end.push(true); return res; },
  };
  const req = { method: 'POST', body: { message: 'Hello', history: [], count: 0 }, ...overrides };
  return { req, res, status, json, end };
}
```

## When to use

- Setting up vitest in a Vite + React + TypeScript project for the first time
- Encountering TypeScript errors about missing `screen`/`waitFor` after installing `@testing-library/react`
- Adding tests to an existing Vite project that lacks a test runner
- Migrating from Jest/CRA to vitest
