<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This project runs **Next.js 16.2.10** — your training data is outdated and will cause errors.

**Before writing any Next.js code:**
1. Read `node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md`
2. Read the relevant section in `node_modules/next/dist/docs/01-app/01-getting-started/`

Heed all deprecation notices. APIs, file conventions, and behaviors have changed significantly.
<!-- END:nextjs-agent-rules -->

---

## Quick Cheat Sheet — Most Common Mistakes

### ❌ These patterns THROW ERRORS in Next.js 16:

```ts
// 1. Sync params/searchParams/cookies/headers
export default function Page({ params }) { return params.slug }  // ❌ throws
const store = cookies()                                           // ❌ throws

// 2. revalidateTag without profile
revalidateTag('posts')                                           // ❌ deprecated/error

// 3. unstable_ prefix on stable APIs
import { unstable_cacheLife } from 'next/cache'                  // ❌ removed prefix

// 4. middleware.ts with old export name
export function middleware(req) { ... }                           // ❌ deprecated

// 5. Tailwind v3 CSS directives
@tailwind base; @tailwind components; @tailwind utilities;        // ❌ v3 syntax

// 6. Using getConfig() from next/config
import getConfig from 'next/config'                              // ❌ removed
```

### ✅ Correct patterns:

```ts
// 1. Always await request APIs
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
}
const store = await cookies()

// 2. revalidateTag with profile
revalidateTag('posts', 'hours')
// Or use updateTag for immediate invalidation (Server Actions only)
updateTag('posts')

// 3. Direct imports from next/cache
import { cacheLife, cacheTag } from 'next/cache'

// 4. proxy.ts with new export name
// File: proxy.ts  (not middleware.ts)
export function proxy(req: NextRequest) { ... }

// 5. Tailwind v4
@import "tailwindcss";
@theme { --color-brand: #5BBFAD; }

// 6. Use process.env directly
const url = process.env.DATABASE_URL
```

---

## Project Stack

- **Next.js**: 16.2.10 + Turbopack (default, no flag needed)
- **React**: 19.2.4
- **TypeScript**: ^5 (≥5.1 required)
- **Tailwind CSS**: v4 (`@tailwindcss/postcss`) — CSS-first, NO `tailwind.config.js`
- **ESLint**: ^9 — use `eslint` directly, not `next lint` (removed in v16)
- **Node.js**: Must be ≥20.9.0 (Node 18 dropped)

## Bundled Documentation

Full docs live at: `node_modules/next/dist/docs/`

Key files:
- `01-app/02-guides/upgrading/version-16.md` — all breaking changes
- `01-app/01-getting-started/05-server-and-client-components.md` — RSC patterns
- `01-app/01-getting-started/07-mutating-data.md` — Server Actions
- `01-app/01-getting-started/08-caching.md` — caching model
- `01-app/02-guides/authentication.md` — auth patterns
- `01-app/02-guides/ai-agents.md` — this file's origin doc
