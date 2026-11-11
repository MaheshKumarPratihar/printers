'use client';
import { useState } from 'react';
import { sitePath } from './site-path';
import { useCart } from './cart-provider';
import { navigation } from './content';
import Brand from './brand';

function Icon({ name }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'search' ? <><circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/></> : <><path d="M2 3h3l3 13h11l3-10H6"/><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/></>}
  </svg>;
}

export default function ShopHeader({ page, inkjet }) {
 const { count } = useCart();
 const activeNav = page === 'scanners' ? 5 : page === 'all-in-one-printers' ? 4 : page === 'guides' ? 6 : page === 'contact' ? 8 : page === 'home-printers' ? 2 : page === 'office-printers' ? 3 : ['cart', 'products', 'product', 'policy'].includes(page) ? -1 : inkjet ? 1 : 0;
 const [menu, setMenu] = useState(false);

 return <header className="shop-header" id="home">
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
  </header>;
}
