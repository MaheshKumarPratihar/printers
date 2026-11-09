'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { allProducts } from './products';
import { readCart, changeQuantity } from './cart-state.mjs';

const CartContext = createContext(null);
const storageKey = 'inkjet-preview-cart-v1';

export function CartProvider({ children }) {
  const [quantities, setQuantities] = useState([]);
  const [notice, setNotice] = useState(null);
  const [ready, setReady] = useState(false);
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
  const items = quantities.map(row => ({ ...allProducts.find(product => product.id === row.id), quantity: row.quantity }));
  const updateQuantity = (id, delta) => setQuantities(rows => changeQuantity(rows, id, delta, allProducts));
  function addToCart(id) {
    const product = allProducts.find(item => item.id === id);
    if (!product) return;
    const atLimit = quantities.find(row => row.id === id)?.quantity === 99;
    if (!atLimit) updateQuantity(id, 1);
    setNotice({ title: atLimit ? 'Cart limit reached' : 'Added to cart', name: product.name });
  }
  return <CartContext.Provider value={{ items, ready, addToCart, updateQuantity, removeItem: id => setQuantities(rows => rows.filter(row => row.id !== id)), count: items.reduce((total, item) => total + item.quantity, 0), subtotal: items.reduce((total, item) => total + item.cents * item.quantity, 0) }}>
    {children}
    <div role="status" className={notice ? 'site-toast card' : undefined}>
      {notice && <><strong>{notice.title}</strong><p>{notice.name}</p></>}
      {notice && <button type="button" aria-label="Dismiss cart notification" onClick={() => setNotice(null)}>×</button>}
    </div>
  </CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
