# Paperline project handoff for Antigravity

Updated November 11, 2026. Open the `inkjet-pro-guide` repository folder in Antigravity. Read this file, `AGENTS.md`, and `PROJECT_REQUIREMENTS.md` before editing. `TASK_CONTEXT.md` records earlier iterations, some of which have since been replaced. Use the current code and this handoff for the active design and behavior.

For a reusable starting point, direct your coding agent to [the Paperline storefront skill](skills/paperline-storefront/SKILL.md). It links to this handoff and gives the checks to run for common changes.

## Product and scope

Paperline is an independent, mobile-friendly catalogue of HP printers and document scanners, with a searchable product catalogue, buying guides, a browser-local cart, checkout validation, a contact page, and store policies. The reference storefronts provided layout and content ideas. Paperline has its own branding and should use its own business information.

The catalogue is frontend-only. There is no order, inventory, payment, contact-message, or user-account backend. Checkout checks the entered details in the browser and shows a completion screen. It keeps the cart available. Its confirmation must accurately describe what happened. Use actual Paperline business details for public contact channels and policies.

## Repository and local setup

- Repository folder on this Mac is `/Users/mahesh/Documents/ChatGPT/Ideas/inkjet-pro-guide`.
- GitHub upstream is `MaheshKumarPratihar/printers`, branch `main`. The owner authorized routine pushes of verified changes. Stage only the task changes, check the diff, and avoid force pushes.
- The app uses Next.js App Router, React, JavaScript, and CSS. The current lockfile resolves Next.js 16.4.4 and React 19.3.1. GitHub Actions runs Node 24. Consult the installed Next.js docs in `node_modules/next/dist/docs/` before changing framework behavior.
- Run `npm ci` and `npm run dev`. Open `http://localhost:3000/` or use the URL Next prints if that port is occupied.
- Run `npm run build` to export the static site into `out/`. Serve that directory with a static web server to test the production output.

## Route map and editable content

| Area | Routes | Where to edit |
| --- | --- | --- |
| Homepage | `/` | `app/page.js`, `app/home-showcase.js`. Includes departments, featured filters, comparison for up to three products, featured guides, and FAQs. Preserve `#shop-smart`, `#guides`, `#faq`, and `#about` links. |
| Navigation and footer | Storefront routes | `app/storefront.js` owns the static shell and footer. `app/shop-header.js` owns the mobile menu, cart count, search, and series menu. `app/content.js` provides nav destinations. |
| Catalogue and product detail | `/products/`, `/products/[id]/` | `app/products.js` is the source for model names, IDs, prices in cents, images, and categories. `app/catalogue.js` handles search and cards. `app/product-detail.js` shows the selected model. |
| Category pages | `/inkjet-printers/`, `/home-printers/`, `/office-printers/`, `/all-in-one-printers/`, `/scanners/` | Edit route files and shared `app/category-page.js`. Keep scanners distinct from multifunction printers. Preserve search destinations that use `?q=...` and shop links that use `#catalogue`. |
| Guides | `/guides/`, `/guides/[slug]/` | `app/guide-content.json` is the content source. A guide's slug is its URL. `app/guide-articles.js` selects library and homepage guides. `app/guide-icon.js` maps guide topics to icons. |
| Cart and checkout | `/cart/`, `/checkout/` | `app/cart-provider.js`, `app/cart-state.mjs`, `app/cart-view.js`, `app/checkout/checkout-view.js`, `app/delivery.js`. |
| Contact and policies | `/contact/`, `/privacy/`, `/policies/[slug]/` | `app/contact-view.js` and `app/contact-form.js` handle support. `app/policy-content.js` is the shared policy copy. `app/policy-view.js` renders policy sections and anchors. `app/privacy-banner.js` manages the browser preference. |

The main catalogue contains 56 HP models including eight standalone scanners. Confirm products, condition, prices, and availability before presenting them as live offers. Avoid inventing specifications or changing stable product IDs casually. The cart stores those IDs with quantities and calculates totals from the current catalogue.

## Contact, checkout, and privacy behavior

- The Contact Us form appears below the heading with full name, email, topic, subject, and message. It validates required fields and prepares an email draft in memory. With `NEXT_PUBLIC_SUPPORT_EMAIL` set, visitors can open the draft in their email app and send it there. Otherwise the form shows a copyable draft. There is no delivery confirmation on the site. Keep the support topics and FAQs linked to the corresponding policies.
- Cart quantities and the privacy choice use browser local storage. Existing storage keys are `inkjet-preview-cart-v1` and `inkjet-privacy-choice-v1`. The names are internal compatibility details.
- Checkout uses the United States country option, a state selector, and U.S. phone and ZIP format checks. Its privacy link opens a modal and links to the same public privacy notice. Keep payment, express checkout, estimated shipping and taxes, and the old checkout back-to-cart link out of the current flow.
- Policy copy covers the actual browser and email behavior. Amazon and the other supplied references informed the organization. Their company names, platform claims, contacts, fulfilment promises, and tracking practices are reference material.
- The public policy routes cover privacy, purchase, returns and refunds, shipping, warranty, terms, disclaimer, and accessibility. Update privacy text when the site starts collecting or sending data in a new way.

## Visual and performance requirements

- Preserve the Paperline dark teal header, green primary buttons, light green or neutral panels, and compact product cards. Shared styles live in `app/globals.css` and `app/paperline.css`. Keep primary and secondary actions on the shared `.button` and `.button.secondary` styles. Choose placement and width by layout. Use a consistent type size, radius, contrast, and 44px minimum height for primary actions.
- Use product photos that match the displayed HP model. The homepage and Inkjet hero use the locally cropped `public/images/envy-7955e-hero.webp`. Product cards use `public/images/catalogue/<id>.webp`. Choose neutral or theme-matched backgrounds for new imagery.
- Keep the storefront shell and static reading content at build time. Use client components for local state, search, menus, form drafts, and checkout. Keep the full guide dataset out of the homepage client bundle.
- Use small local WebP files, explicit image dimensions, lazy loading for offscreen product photos, and high priority only for the main visible image. Avoid screenshot sheets as runtime backgrounds.
- Audit representative routes at phone and desktop widths. Check mobile Lighthouse on a served production build. A score measured on localhost is a lab result and will vary with hosting and network conditions.

## Deploy and verify

GitHub Pages is the test deployment. `.github/workflows/pages.yml` builds and uploads `out/` on pushes to `main`. `NEXT_PUBLIC_BASE_PATH` is set to the Pages base path by the workflow, normally `/printers`. For a local Pages-style build use `NEXT_PUBLIC_BASE_PATH=/printers npm run build` and serve the result at `/printers/`. Route and asset URLs use `app/site-path.js`.

For a future Hostinger deployment at a domain root, build with an empty base path and publish the contents of `out/` using the site's static hosting setup. The final domain and hosting configuration still need verification. `NEXT_PUBLIC_SUPPORT_EMAIL` is a public build-time setting. The Pages workflow reads it from the repository Actions variable of the same name.

Before pushing a change, run `git diff --check`, `node scripts/check-cart.mjs`, and `npm run build`. Check mobile at 375px and desktop, including internal navigation, category anchors, product images, search, add-to-cart, quantity and subtotal, checkout validation, privacy modal, and contact draft behavior. For changes to hosting or asset paths, also check the `/printers/` export.

Before launch or Microsoft Advertising review, verify the business identity and support inbox, asset rights, live prices and availability, the intended purchase path, current policies, and the deployed HTTPS destination. The current build can demonstrate the catalogue and checkout interface. Microsoft determines ad approval separately.
