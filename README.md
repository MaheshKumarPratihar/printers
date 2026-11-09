# InkjetProGuide frontend

A responsive Next.js App Router homepage based on the supplied screenshots. Uses React and plain CSS. No backend or external services. See `PROJECT_REQUIREMENTS.md` for standing mobile and advertising-readiness requirements.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` generates a static site in `out/`.

## Update content

- `app/content.js`: navigation labels and anchors, product titles and sample prices, guides, and categories.
- `app/storefront.js`: shared header, footer, homepage and catalogue sections, and preview interactions.
- `app/page.js`, `app/inkjet-printers/page.js`, `app/home-printers/page.js`, `app/office-printers/page.js`, and `app/cart/page.js`: page routes and metadata.
- `app/products.js`: shared catalogue names, prices, images, and category selections.
- `app/category-page.js`: home/office landing sections and home buying guidance.
- `app/cart-state.mjs` and `app/cart-provider.js`: validated browser-local cart. Run `node scripts/check-cart.mjs` for the cart regression check.
- `app/globals.css`: theme colors, spacing, desktop and mobile layouts.
- `public/images/`: supplied screenshot assets, displayed as cropped CSS backgrounds. Replace these with original product and logo files when available for sharper, smaller assets.

Product buttons open preview details. Unavailable destinations display a message. The catalogue has reference products for inkjet, home, and office pages, search, and a browser-local preview cart with quantities and removal. Checkout displays a preview notice; it never places an order. Cart IDs and quantities persist in local storage, and are validated against the current catalogue on load. Newsletter submission validates the email locally but does not store or send it. Fictional reviews have been removed. Office prices on the homepage are omitted because they were not supplied. Contact details and home product prices reproduce the references and should be confirmed before launch.
