import Storefront from '../storefront';

import Catalogue from '../catalogue';
import { sitePath } from '../site-path';

export const metadata = { title: 'Inkjet Printers | Paperline', description: 'Browse our inkjet printer catalogue for home documents, photos, and creative projects.' };

export default function InkjetPrinters() {
  return <Storefront inkjet>
 <section className="inkjet-hero"><div className="container inkjet-hero-grid"><div><p className="inkjet-eyebrow">RICH COLOR. SHARP TEXT. EVERY PAGE.</p><h1>Inkjet Printers</h1><p className="inkjet-description">Browse inkjet printers from our current catalogue. Compare the listed models and visit each product page for features, price and availability.</p><a className="button" href="#catalogue">Shop Inkjet Printers</a></div><img className="inkjet-hero-image" src={sitePath('/images/envy-7955e-hero.webp')} width="790" height="580" fetchPriority="high" alt="HP OfficeJet inkjet printer with a teal document feeder" /></div></section>
 <section className="inkjet-intro" aria-labelledby="inkjet-intro-title"><div className="inkjet-lifestyle product-stage"><img src={sitePath('/images/envy-7955e-hero.webp')} width="790" height="580" alt="HP ENVY Inspire 7955e" loading="lazy" decoding="async" /></div><div className="inkjet-intro-copy"><h2 id="inkjet-intro-title">Inkjet printers</h2><p>For everyday documents, photos and creative projects, compare inkjet printers from the current catalogue. Check each product’s supported paper, connections and ink supplies.</p></div></section>
 <Catalogue />
  </Storefront>;
}
