'use client';
import { sitePath } from './site-path';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from './cart-provider';
import CatalogueImage from './catalogue-image';
import { money } from './products';

export default function CartView() {
  const { items, ready, subtotal, updateQuantity, removeItem } = useCart();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  return <section className="container cart-page">
    <h1>Shopping cart</h1>
    {!ready ? <p role="status">Loading your cart…</p> : items.length === 0 ? <div className="card empty-results"><h2>Your cart is empty</h2><p>Browse the catalogue and add a printer to compare your selections here.</p><a className="button" href={sitePath('/products/#catalogue')}>Browse printers</a></div> : <div className="order-columns">
      <ul className="card cart-page-items">{items.map(item => <li className="cart-page-item" key={item.id}>
        <CatalogueImage product={item}/><div className="cart-item-description"><h2>{item.name}</h2><p>{money(item.cents)}</p></div>
        <div className="quantity-controls"><button aria-label={`Decrease quantity of ${item.name}`} onClick={() => updateQuantity(item.id, -1)}>−</button><span aria-label="Quantity" aria-live="polite">{item.quantity}</span><button disabled={item.quantity >= 99} aria-label={`Increase quantity of ${item.name}`} onClick={() => updateQuantity(item.id, 1)}>+</button></div>
        <strong className="line-total">{money(item.cents * item.quantity)}</strong>
        <button className="remove-item" aria-label={`Remove ${item.name}`} onClick={() => removeItem(item.id)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7"/></svg></button>
      </li>)}</ul>
      <aside className="card cart-summary" aria-label="Order summary">
        <h2>Order summary</h2>
        <div><span>Subtotal</span><strong aria-live="polite">{money(subtotal)}</strong></div>
        <hr/>
        <button type="button" className="button" disabled={pending} aria-busy={pending}
          onClick={() => startTransition(() => router.push('/checkout/'))}>
          {pending ? <><span className="checkout-spinner" aria-hidden="true" />Redirecting to checkout…</> : 'Checkout'}
        </button>
        <a className="button secondary" href={sitePath('/products/')}>Continue shopping</a>
      </aside>
    </div>}
  </section>;
}
