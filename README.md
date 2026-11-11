# Paperline storefront

A responsive Next.js printer catalogue and storefront. See `PROJECT_REQUIREMENTS.md` for standing mobile and advertising-readiness requirements.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` generates a static site in `out/`.

## Update content

- `app/content.js`: navigation labels and anchors, product titles and sample prices, guides, and categories.
- `app/storefront.js`: shared header, footer, homepage and catalogue sections,.
- `app/page.js`, `app/inkjet-printers/page.js`, `app/home-printers/page.js`, `app/office-printers/page.js`, and `app/cart/page.js`: page routes and metadata.
- `app/products.js`: shared catalogue names, prices, images, and category selections.
- `app/category-page.js`: home/office landing sections and home buying guidance.
- `app/cart-state.mjs` and `app/cart-provider.js`: validated browser-local cart. Run `node scripts/check-cart.mjs` for the cart regression check.
- `app/globals.css`: theme colors, spacing, desktop and mobile layouts.
- `public/images/`: local product images and workspace photography. Catalogue cards use individually cropped WebP files and lazy loading.

## Checkout

Checkout checks contact and delivery details in the browser. The confirmation leaves the cart intact. The site does not submit orders or collect payments.

Set `NEXT_PUBLIC_SUPPORT_EMAIL` before building to enable email links on the Contact page. The form prepares a draft in the browser and opens the visitor’s email app. The visitor sends it from that app.
