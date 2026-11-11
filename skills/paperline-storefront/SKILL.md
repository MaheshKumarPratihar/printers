---
name: paperline-storefront
description: Maintain Paperline, the Next.js HP printer and scanner storefront in MaheshKumarPratihar/printers. Use when changing or reviewing its catalogue, guides, cart, checkout, contact page, policies, design, performance, or static deployment.
---

# Maintain the Paperline storefront

Open the repository root. Read [AGENTS.md](../../AGENTS.md), [PROJECT_REQUIREMENTS.md](../../PROJECT_REQUIREMENTS.md), and the [project handoff](../../ANTIGRAVITY_CONTEXT.md). The handoff maps routes, source files, deployment settings, and launch dependencies. Check the current code and latest user direction when older notes conflict. Before changing Next.js code, read the relevant installed framework docs in `node_modules/next/dist/docs/`.

## Make the change at its source

- Edit `app/products.js` for model names, prices, images, and category membership. Keep existing IDs stable because the browser cart stores them. Use the exact HP model photo and check catalogue links after changing an ID or category.
- Edit `app/guide-content.json` for guide copy and `app/policy-content.js` for store policies. Keep published slugs stable or update their callers. Use Paperline's business information and describe the behavior the site actually implements.
- Use shared button styles in `app/globals.css` and `app/paperline.css`. Keep the layout usable on phones, the product cards compact, and photo backgrounds neutral or matched to the page.
- Keep the static export working. Use client components for browser interactions and state. Use correctly sized local product images, lazy-load offscreen photos, and reserve high priority for the main visible image.
- The cart is browser-local. Checkout validates U.S. contact and delivery details and displays a local completion state. The contact form prepares an email draft. Match status messages to the actions that actually occur.

## Verify and hand off

Run `git diff --check`, `node scripts/check-cart.mjs`, and `npm run build`. Serve `out/` and test the changed user flow at phone and desktop widths. For routing and asset changes, also build with `NEXT_PUBLIC_BASE_PATH=/printers npm run build` and check links on the resulting subpath. For performance work, compare Lighthouse results from the same production build setup and device profile.

Follow the repository's Git instructions for verified changes. Keep unrelated changes out of the commit. Report which flows you verified, the commit or push result, and any missing configuration that affects the requested behavior.
