---
name: react-ts-generic-hook-refs
description: Pattern for making React hooks that return refs generic, preventing RefObject assignability errors in TypeScript
source: auto-skill
extracted_at: '2026-06-10T18:14:01.753Z'
---

# Generic ref hooks for React + TypeScript

## Problem

A React hook returns `[React.RefObject<HTMLElement | null>, boolean]` for an intersection observer. When a component uses it on a `<div>` element:

```tsx
const [ref] = useScrollAnimation();
// Error: Type 'RefObject<HTMLElement | null>' is not assignable to type 'Ref<HTMLDivElement>'
```

TypeScript's `RefObject<HTMLElement | null>` cannot be passed to the `ref` prop of `HTMLDivElement` because `HTMLElement` is a wider type than `HTMLDivElement`.

## Solution

Make the hook generic with a default type parameter:

```tsx
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // ... IntersectionObserver logic
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
}
```

## Usage

- **Default (div):** `const [ref] = useScrollAnimation();` — no type argument needed, infers `HTMLDivElement`
- **Specific element:** `const [ref] = useScrollAnimation<HTMLAnchorElement>();`

## Why this works

- `useRef<T | null>(null)` creates `MutableRefObject<T | null>`, which is assignable to `RefObject<T | null>`
- When the component passes `ref` to an element of type `T`, TypeScript sees a matching type parameter and allows the assignment
- The default parameter (`= HTMLDivElement`) means most callers don't need to specify the type explicitly

## When to use

- Custom hooks that return refs (IntersectionObserver, ResizeObserver, scroll position, click-away listeners)
- Any hook whose return type includes `RefObject<HTMLElement>` and is used on specific element types
- Migrating a JS/JSX codebase to strict TypeScript where ref-related errors appear
