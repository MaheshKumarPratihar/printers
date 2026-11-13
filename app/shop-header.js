'use client';
import { useState, useRef, useEffect } from 'react';
import { sitePath } from './site-path';
import { useCart } from './cart-provider';
import { navigation } from './content';
import { money } from './products';
import CatalogueImage from './catalogue-image';
import Brand from './brand';

function Icon({ name }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'search' ? <><circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/></> : <><path d="M2 3h3l3 13h11l3-10H6"/><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/></>}
  </svg>;
}

export default function ShopHeader({ page, inkjet }) {
  const { items, count, subtotal, updateQuantity, removeItem } = useCart();
  const activeNav = page === 'scanners' ? 5 : page === 'all-in-one-printers' ? 4 : page === 'guides' ? 6 : page === 'contact' ? 8 : page === 'home-printers' ? 2 : page === 'office-printers' ? 3 : ['cart', 'products', 'product', 'policy'].includes(page) ? -1 : inkjet ? 1 : 0;
  const [menu, setMenu] = useState(false);
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const flyoutRef = useRef(null);

  useEffect(() => {
    if (!flyoutOpen) return;
    function handleClickOutside(event) {
      if (flyoutRef.current && !flyoutRef.current.contains(event.target)) {
        setFlyoutOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setFlyoutOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [flyoutOpen]);

  return <header className="shop-header" id="home">
    <div className="topbar container">
      <Brand />
      <form className="header-search" action={sitePath('/products/')} role="search" aria-label="Find products">
        <input name="q" type="search" aria-label="Search by model or type" placeholder="Search by model or type" required />
        <button aria-label="Search catalogue"><Icon name="search" /></button>
      </form>
      <div className="shop-cart-wrapper" ref={flyoutRef}>
        <button
          type="button"
          className="cart shop-cart-button"
          aria-expanded={flyoutOpen}
          aria-haspopup="dialog"
          aria-label={`Cart (${count})`}
          onClick={() => setFlyoutOpen(!flyoutOpen)}
        >
          <Icon name="cart" /><span>Cart</span>{count > 0 && <span className="shop-cart-count" aria-hidden="true">{count}</span>}
        </button>
        {flyoutOpen && (
          <div
            id="shop-cart-flyout"
            className="shop-cart-flyout"
            role="dialog"
            aria-modal="true"
            aria-label="My shopping cart"
          >
            <div className="cart-flyout-header">
              <h2>My shopping cart</h2>
              <button
                type="button"
                className="cart-flyout-close"
                aria-label="Close cart preview"
                onClick={() => setFlyoutOpen(false)}
              >
                ×
              </button>
            </div>
            {items.length === 0 ? (
              <div className="cart-flyout-empty">
                <p>Your cart is empty</p>
                <a
                  className="button"
                  href={sitePath('/products/#catalogue')}
                  onClick={() => setFlyoutOpen(false)}
                >
                  Browse printers
                </a>
              </div>
            ) : (
              <>
                <ul className="cart-flyout-items">
                  {items.map(item => (
                    <li className="cart-flyout-item" key={item.id}>
                      <div className="cart-flyout-thumb">
                        <CatalogueImage product={item} decorative />
                      </div>
                      <div className="cart-flyout-details">
                        <span className="cart-flyout-tag">
                          {item.tank ? 'Smart Tank' : item.laser ? 'LaserJet' : item.category === 'scanner' ? 'Scanner' : item.category === 'office' ? 'OfficeJet' : 'Inkjet Printer'}
                        </span>
                        <a
                          className="cart-flyout-title"
                          href={sitePath(`/products/${item.id}/`)}
                          onClick={() => setFlyoutOpen(false)}
                        >
                          {item.name}
                        </a>
                        <div className="cart-flyout-controls">
                          <div className="cart-flyout-stepper">
                            <button
                              type="button"
                              aria-label={`Decrease quantity of ${item.name}`}
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              −
                            </button>
                            <span aria-label="Quantity">{item.quantity}</span>
                            <button
                              type="button"
                              disabled={item.quantity >= 99}
                              aria-label={`Increase quantity of ${item.name}`}
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              +
                            </button>
                          </div>
                          <strong className="cart-flyout-item-price">
                            {money(item.cents * item.quantity)}
                          </strong>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="cart-flyout-trash"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => removeItem(item.id)}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                          <path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7" />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="cart-flyout-footer">
                  <div className="cart-flyout-total-row">
                    <span>Total</span>
                    <strong>{money(subtotal)}</strong>
                  </div>
                  <div className="cart-flyout-actions">
                    <a
                      className="button cart-flyout-btn-primary"
                      href={sitePath('/cart/')}
                      onClick={() => setFlyoutOpen(false)}
                    >
                      View cart
                    </a>
                    <a
                      className="button secondary cart-flyout-btn-secondary"
                      href={sitePath('/checkout/')}
                      onClick={() => setFlyoutOpen(false)}
                    >
                      Checkout now
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
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
