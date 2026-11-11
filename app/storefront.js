import { sitePath } from './site-path';
import ShopHeader from './shop-header';
import Brand from './brand';
import { policies, policyPath } from './policy-content';
export default function Storefront({ inkjet = false, page = 'home', children }) {

 return <>
  <a className="skip" href="#main">Skip to content</a>
  <ShopHeader page={page} inkjet={inkjet} />
  <main id="main">{children}</main>
  <footer className="shop-footer" id="contact">
    <div className="container">
      <div className="shop-footer-grid">
        <div>
          <Brand />
          <p>Compare printers and scanners for home, work, and everything you put on paper.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <a href={sitePath('/products/')}>All models</a>
          <a href={sitePath('/home-printers/')}>Home printers</a>
          <a href={sitePath('/office-printers/')}>Office printers</a>
          <a href={sitePath('/scanners/')}>Document scanners</a>
        </div>
        <div>
          <h2>Resources</h2>
          <a href={sitePath('/guides/')}>Buying guides</a>
          <a href={sitePath('/#faq')}>Common questions</a>
          <a href={sitePath('/contact/')}>Contact Us</a>
        </div>
        <div>
          <h2>Get help</h2>
          {Object.entries(policies).map(([slug, { title }]) => <a key={slug} href={sitePath(policyPath(slug))}>{title}</a>)}
        </div>
      </div>
      <p className="shop-footer-note">Paperline is an independent printer catalogue. Manufacturer and model names identify the listed products.</p>
    </div>
  </footer>
 </>;
}
