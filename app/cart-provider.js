'use client';
import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { allProducts } from './products';
import { readCart, changeQuantity } from './cart-state.mjs';
import { sitePath } from './site-path';

const CartContext = createContext(null);
const storageKey = 'inkjet-preview-cart-v1';

export function CartProvider({ children }) {
  const [quantities, setQuantities] = useState([]);
  const [notice, setNotice] = useState(null);
  const [ready, setReady] = useState(false);
  const continueBtnRef = useRef(null);

  useEffect(() => {
    try { setQuantities(readCart(localStorage.getItem(storageKey), allProducts)); }
    catch { /* Storage may be blocked; the in-memory cart still works. */ }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(storageKey, JSON.stringify(quantities)); }
    catch { /* Keep the current cart usable when storage is unavailable. */ }
  }, [quantities, ready]);

  // Handle escape key to dismiss cart modal
  useEffect(() => {
    if (!notice) return;
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setNotice(null);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [notice]);

  // Focus continue button when modal opens for keyboard accessibility
  useEffect(() => {
    if (notice && continueBtnRef.current) {
      continueBtnRef.current.focus();
    }
  }, [notice]);

  const items = quantities.map(row => ({ ...allProducts.find(product => product.id === row.id), quantity: row.quantity }));
  const updateQuantity = (id, delta) => setQuantities(rows => changeQuantity(rows, id, delta, allProducts));

  function addToCart(id) {
    const product = allProducts.find(item => item.id === id);
    if (!product) return;
    const atLimit = quantities.find(row => row.id === id)?.quantity === 99;
    if (!atLimit) updateQuantity(id, 1);
    setNotice({ title: atLimit ? 'Cart limit reached' : 'Added to cart', name: product.name, atLimit });
  }

  const count = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.cents * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, ready, addToCart, updateQuantity, removeItem: id => setQuantities(rows => rows.filter(row => row.id !== id)), count, subtotal }}>
      {children}
      {notice && (
        <div
          className="cart-modal-backdrop"
          onClick={() => setNotice(null)}
          role="presentation"
        >
          <div
            className="cart-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-modal-title"
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              className="cart-modal-close"
              aria-label="Close dialog"
              onClick={() => setNotice(null)}
            >
              ×
            </button>
            <div className="cart-modal-icon-wrap" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none" className="cart-modal-icon">
                <path
                  d="M10 14h7l6.5 24h24l5.5-16H18"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="25" cy="48.5" r="4" fill="currentColor" />
                <circle cx="43" cy="48.5" r="4" fill="currentColor" />
                <path
                  d="M26.5 27l5 5.5 11-11"
                  stroke="#16a34a"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 id="cart-modal-title" className="cart-modal-title">
              {notice.title}
            </h2>
            <p className="cart-modal-subtitle">
              {notice.atLimit ? (
                <>You have reached the maximum limit of <strong>99 items</strong>.</>
              ) : (
                <>You have <strong>{count} {count === 1 ? 'item' : 'items'}</strong> in your cart</>
              )}
            </p>
            <div className="cart-modal-actions">
              <button
                ref={continueBtnRef}
                type="button"
                className="cart-modal-btn continue"
                onClick={() => setNotice(null)}
              >
                Continue shopping
              </button>
              <a
                className="cart-modal-btn view-cart"
                href={sitePath('/cart/')}
                onClick={() => setNotice(null)}
              >
                View cart
              </a>
            </div>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext);
