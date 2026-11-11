# Paperline storefront

A responsive Next.js printer catalogue and storefront. See [Antigravity handoff](ANTIGRAVITY_CONTEXT.md) for the current project context and [standing requirements](PROJECT_REQUIREMENTS.md) for mobile and advertising readiness.

## Use the project skill in another agent

Open this repository in Claude, Gemini, Antigravity, or another coding agent with file access. Give it this prompt with the change you want to make.

> Read `skills/paperline-storefront/SKILL.md` and its linked project files. Use them as context for this task.

The [Paperline skill](skills/paperline-storefront/SKILL.md) is a plain Markdown file with Agent Skills frontmatter.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` generates a static site in `out/`.

## Update content

- `app/content.js`: navigation labels and destinations.
- `app/storefront.js`: shared storefront layout. Header navigation lives in `app/shop-header.js`.
- `app/page.js`, `app/inkjet-printers/page.js`, `app/home-printers/page.js`, `app/office-printers/page.js`, and `app/cart/page.js`: page routes and metadata.
- `app/products.js`: shared catalogue names, prices, images, and category selections.
- `app/category-page.js`: home/office landing sections and home buying guidance.
- `app/cart-state.mjs` and `app/cart-provider.js`: validated browser-local cart. Run `node scripts/check-cart.mjs` for the cart regression check.
- `app/globals.css`: theme colors, spacing, desktop and mobile layouts.
- `public/images/`: local HP product photos. Catalogue cards use individually cropped WebP files and lazy loading.

## Checkout

Checkout checks contact and delivery details in the browser. The confirmation leaves the cart intact. The site does not submit orders or collect payments.

Set `NEXT_PUBLIC_SUPPORT_EMAIL` before building to enable email links on the Contact page. The form prepares a draft in the browser and opens the visitor’s email app. The visitor sends it from that app.
