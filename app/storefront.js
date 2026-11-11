'use client';
import { sitePath } from './site-path';
import { useState } from 'react';
import Catalogue from './catalogue';
import { shopCatalogue, allInOneCatalogue } from './products';
import { useCart } from './cart-provider';
import CategoryPage from './category-page';
import CartView from './cart-view';
import GuidesView from './guides-view';
import HomeShowcase from './home-showcase';
import ContactView from './contact-view';
import { navigation } from './content';
import Brand from './brand';
function Icon({ name = 'printer', ...props }) {
 const paths = { printer: <><path d="M6 9V3h12v6M6 17H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6zM17 12h1"/></>, wifi: <><path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8 16a6 6 0 0 1 8 0"/><circle cx="12" cy="20" r="1"/></>, sparkles: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5ZM20 2v4M18 4h4"/></>, chart: <path d="M3 3v18h18M8 16v-5M13 16V6M18 16V9"/>, search: <><circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/></>, check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></>, book: <path d="M12 5C8 2 4 3 2 4v16c4-2 7-1 10 1 3-2 6-3 10-1V4c-2-1-6-2-10 1v16"/>, arrow: <path d="M4 12h16m-6-6 6 6-6 6"/>, cart: <><path d="M2 3h3l3 13h11l3-10H6"/><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/></>, mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 5 10 8L22 5"/></>, box: <><path d="m12 2 10 5v10l-10 5-10-5V7Zm0 10v10M2 7l10 5 10-5M7 4.5l10 5"/></>, truck: <><path d="M2 4h12v14H2zM14 9h4l4 5v4h-8"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></>, card: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></> };
 return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.printer}</svg>;
}
export default function Storefront({ inkjet = false, page = 'home', children }) {
 const { count } = useCart();
 const activeNav = page === 'scanners' ? 5 : page === 'all-in-one-printers' ? 4 : page === 'guides' ? 6 : page === 'contact' ? 8 : page === 'home-printers' ? 2 : page === 'office-printers' ? 3 : ['cart', 'products', 'product'].includes(page) ? -1 : inkjet ? 1 : 0;
 const [menu, setMenu] = useState(false);

 return <>
  <a className="skip" href="#main">Skip to content</a>
  <header className="shop-header" id="home">
    <div className="topbar container">
      <Brand />
      <form className="header-search" action={sitePath('/products/')} role="search" aria-label="Find products">
        <input name="q" type="search" aria-label="Search by model or type" placeholder="Search by model or type" required />
        <button aria-label="Search catalogue"><Icon name="search" /></button>
      </form>
      <a className="cart" href={sitePath('/cart/')} aria-label={`Cart (${count})`}>
        <Icon name="cart" /><span>Cart</span>{count > 0 && <span className="shop-cart-count" aria-hidden="true">{count}</span>}
      </a>
      <button className="menu-toggle" type="button" aria-expanded={menu} aria-controls="navigation" onClick={() => setMenu(!menu)}>{menu ? 'Close' : 'Menu'}</button>
    </div>
    <nav id="navigation" className={menu ? 'navigation open' : 'navigation'} aria-label="Main navigation">
      <div className="shop-nav container">
        <div className="nav-links">
          {navigation.map(([title, href], i) => (
            <a key={title} className={i === activeNav ? 'active' : undefined} aria-current={i === activeNav ? 'page' : undefined} href={sitePath(href)} onClick={() => setMenu(false)}>{title}</a>
          ))}
        </div>
        <details className="series">
          <summary>Shop by series <span aria-hidden="true">⌄</span></summary>
          <div>
            {['DeskJet', 'Envy', 'OfficeJet', 'Smart Tank', 'LaserJet'].map(name => (
              <a key={name} href={sitePath(`/products/?q=${encodeURIComponent(name)}#catalogue`)} onClick={event => event.currentTarget.closest('details').removeAttribute('open')}>HP {name}</a>
            ))}
          </div>
        </details>
      </div>
    </nav>
  </header>
 <main id="main">{['product', 'scanners'].includes(page) ? children : ['products', 'all-in-one-printers'].includes(page) ? <div className="products-page">
 <div className="container products-intro">
   <h1>{page === 'all-in-one-printers' ? 'All-in-One Printers' : 'Shop Printers for Home & Office'}</h1>
   <p>Search by model or product type to compare listings.</p>
 </div>
 <Catalogue products={page === 'all-in-one-printers' ? allInOneCatalogue : shopCatalogue} itemName={page === 'products' ? 'printers and scanners' : 'printers'} />
 </div> : page === 'guides' ? (children ?? <GuidesView />) : page === 'contact' ? <ContactView /> : page === 'cart' ? <CartView /> : page === 'home-printers' || page === 'office-printers' ? <CategoryPage kind={page} /> : inkjet ? <>
 <section className="inkjet-hero"><div className="container inkjet-hero-grid"><div><p className="inkjet-eyebrow">RICH COLOR. SHARP TEXT. EVERY PAGE.</p><h1>Inkjet Printers</h1><p className="inkjet-description">Browse inkjet printers from our current catalogue. Compare the listed models and visit each product page for features, price and availability.</p><a className="button" href="#catalogue">Shop Inkjet Printers</a></div><div className="inkjet-hero-image" role="img" aria-label="HP OfficeJet inkjet printer with a teal document feeder"/></div></section>
 <section className="inkjet-intro" aria-labelledby="inkjet-intro-title"><div className="inkjet-lifestyle" role="img" aria-label="Home printer on a desk in a colorful creative workspace"/><div className="inkjet-intro-copy"><h2 id="inkjet-intro-title">Inkjet printers</h2><p>For everyday documents, photos and creative projects, compare inkjet printers from the current catalogue. Check each product’s supported paper, connections and ink supplies.</p></div></section>
 <Catalogue />
 </> : <HomeShowcase />}</main>
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
          <a href={sitePath('/contact/')}>Contact</a>
          <a href={sitePath('/privacy/')}>Privacy notice</a>
        </div>
      </div>
      <p className="shop-footer-note">Paperline is an independent catalogue preview. Manufacturer and model names identify the listed products.</p>
    </div>
  </footer>
 </>;
}
