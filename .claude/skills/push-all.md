# Push All Branches

Push code to both remotes with branch-specific configurations.

## Branches

### `origin/refonte` (dev — toni-garcia-freelance)
- Remote: `git@github.com:toni-garcia-freelance/turing-software.git`
- Normal Next.js config: rewrites (PostHog), `skipTrailingSlashRedirect`, optimized images
- API route `app/api/contact/route.ts` active
- **Ne pas push sur main** — uniquement sur `refonte`
- Push: `git push origin main:refonte`

### `sylvain/main` (sylvain-turing)
- Remote: `git@github.com:sylvain-turing/turing-software.git`
- Same code as origin/main (no modifications)
- Push: `git push sylvain main`

### `sylvain/feature/static-export` (GitHub Pages)
- Remote: `git@github.com:sylvain-turing/turing-software.git`
- Deployed at: https://sylvain-turing.github.io/turing-software/
- Requires these changes **on top of main**:
  1. `next.config.ts`: replace config with `output: "export"`, `basePath: "/turing-software"`, `images.unoptimized: true`, remove `rewrites()` and `skipTrailingSlashRedirect`
  2. `app/api/contact/route.ts` → rename to `route.ts.bak` (API routes incompatible with static export)

## Workflow

1. **Commit and push to main** on sylvain, and to **refonte** on origin
2. **Apply static-export changes** (next.config.ts + disable API route)
3. **Commit** with message "fix: static export config for GitHub Pages"
4. **Force push**: `git push sylvain main:feature/static-export --force`
5. **Revert locally**: `git reset HEAD~1 --hard` to restore main state
6. **Restore** `route.ts.bak` → `route.ts` if needed (the reset should handle it)

## Quick reference

```bash
# After committing to main:
git push origin main:refonte
git push sylvain main

# Then apply static export overlay and push:
# 1. Modify next.config.ts (output: export, basePath, unoptimized images, no rewrites)
# 2. mv app/api/contact/route.ts app/api/contact/route.ts.bak
# 3. git add next.config.ts app/api/contact/
# 4. git commit -m "fix: static export config for GitHub Pages"
# 5. git push sylvain main:feature/static-export --force
# 6. git reset HEAD~1 --hard
```

## next.config.ts for static export

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/turing-software",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
```
