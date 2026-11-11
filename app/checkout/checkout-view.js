'use client';
import { sitePath } from '../site-path';
import Brand from '../brand';

import { useEffect, useId, useRef, useState } from 'react';
import { useCart } from '../cart-provider';
import CatalogueImage from '../catalogue-image';
import { money } from '../products';

import { states, phonePattern, zipPattern, nonBlankPattern } from '../delivery';

function CheckoutField({ label, optional = false, type = 'text', pattern, hint, inputMode, maxLength, errorMessage, help }) {
  const id = useId();
  const [error, setError] = useState('');
  const [helpOpen, setHelpOpen] = useState(false);

  function validate(input) {
    if (!errorMessage) return;
    setError(input.validity.valueMissing ? `Enter your ${label.toLowerCase()}` : input.validity.patternMismatch ? errorMessage : '');
  }

  return <div className="checkout-field-group">
    <div className={`checkout-field checkout-input-wrap${error ? ' checkout-field-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} required={!optional} pattern={pattern ?? (type === 'text' && !optional ? nonBlankPattern : undefined)}
        inputMode={inputMode} maxLength={maxLength} placeholder={optional ? label + " (optional)" : label} title={hint}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? id + '-error' : undefined}
        onBlur={event => validate(event.currentTarget)}
        onChange={event => { if (error) validate(event.currentTarget); }}
        onInvalid={event => validate(event.currentTarget)} />
      {help && <span className="checkout-phone-help" onKeyDown={event => { if (event.key === 'Escape') setHelpOpen(false); }}>
        <button type="button" aria-label="Why we ask for your phone number" aria-expanded={helpOpen} aria-describedby={id + '-help'} onClick={() => setHelpOpen(open => !open)}>ⓘ</button>
        <span className="checkout-help-tip" id={id + '-help'} role="tooltip">{help}</span>
      </span>}
    </div>
    {error && <p className="checkout-error-message" id={id + '-error'} role="alert">{error}</p>}
  </div>;
}

export default function CheckoutView() {
  const { items, count, subtotal, ready } = useCart();
  const policy = useRef(null);
  const confirmationHeading = useRef(null);
  const [status, setStatus] = useState('editing');
  const pending = status === 'checking';
  const confirmed = status === 'complete';

  useEffect(() => {
    if (status === 'complete') confirmationHeading.current?.focus();
    if (status !== 'checking') return;
    const timer = setTimeout(() => setStatus('complete'), 650);
    return () => clearTimeout(timer);
  }, [status]);

  function confirmDetails(event) {
    event.preventDefault();
    setStatus('checking');
  }

  return <div className="checkout-screen">
    <header className="checkout-header">
      <div className="checkout-shell"><Brand /></div>
    </header>
    <main className="checkout-shell order-page">
      {!confirmed && <h1>Checkout</h1>}
      {confirmed ? <section className="card order-receipt">
        <span className="order-status-icon" aria-hidden="true">✓</span>
        <h1 ref={confirmationHeading} tabIndex={-1}>Your order details are complete</h1>
        <p>No order was submitted. Your cart is still available if you want to keep browsing.</p>
        <div className="order-actions">
          <a className="button" href={sitePath('/products/')}>Browse more printers</a>
          <a className="button secondary" href={sitePath('/')}>Back to home</a>
        </div>
      </section> : ready && items.length > 0 ? <div className="order-columns">
        <section className="card checkout-details" aria-labelledby="delivery-title">
          <h2 id="delivery-title">Delivery details</h2>
          <p className="delivery-intro">Enter your contact and delivery details to check them. Online order submission is currently unavailable.</p>
          <form autoComplete="off" onSubmit={confirmDetails} aria-busy={pending}>
            <fieldset disabled={pending} className="delivery-fields">
              <CheckoutField label="Full name" maxLength={120} />
              <CheckoutField label="Email address" type="email" maxLength={254} />
              <CheckoutField label="Phone" type="tel" pattern={phonePattern} errorMessage="Enter a valid U.S. phone number" help="For questions about your order request" hint="(202) 555-0123" maxLength={20} />
              <label className="checkout-field"><span>Country/Region</span>
                <select required defaultValue="US"><option value="US">United States</option></select>
              </label>
              <CheckoutField label="Street address" maxLength={200} />
              <CheckoutField label="Apartment, suite, or unit" maxLength={80} optional />
              <CheckoutField label="City" maxLength={100} />
              <label className="checkout-field checkout-state-field"><span className="sr-only">State</span>
                <select required defaultValue=""><option value="" disabled>State</option>{states.map(state => <option key={state}>{state}</option>)}</select>
              </label>
              <CheckoutField label="ZIP code" inputMode="numeric" pattern={zipPattern} errorMessage="Enter a valid ZIP / postal code for United States" hint="12345 or 12345-6789" maxLength={10} />
              <label className="delivery-note">Delivery instructions (optional)<textarea maxLength={1000} rows={3} placeholder="Add any notes that will help with delivery." /></label>
            </fieldset>
            <button className="button order-submit" disabled={pending} type="submit">Confirm details</button>
          </form>
          <button type="button" className="checkout-link checkout-policy-link" onClick={() => policy.current.showModal()}>Privacy policy</button>
          {pending && <div className="order-processing" role="status">
            <div><span className="order-status-icon"><span className="checkout-spinner" aria-hidden="true" /></span>
              <strong>Checking order details</strong><p>Reviewing the information you entered.</p></div>
          </div>}
        </section>
        <aside className="card checkout-order" aria-label="Order summary">
          <h2>Order summary</h2>
          <ul>
            {items.map(item => <li key={item.id}>
              <div className="checkout-thumbnail"><CatalogueImage product={item} /></div>
              <div>{item.name}<small>Qty {item.quantity}</small></div>
              <strong>{money(item.cents * item.quantity)}</strong>
            </li>)}
          </ul>
          <dl><div className="checkout-total"><dt>Subtotal · {count} {count === 1 ? 'item' : 'items'}</dt><dd>{money(subtotal)}</dd></div></dl>
        </aside>
      </div> : ready ? <p>Your cart is empty. <a className="checkout-link" href={sitePath('/products/')}>Browse the catalogue</a></p> : <p role="status">Loading your cart…</p>}
    </main>
    <dialog className="checkout-policy" ref={policy} aria-labelledby="checkout-policy-title">
      <div className="checkout-policy-heading">
        <h2 id="checkout-policy-title">Privacy policy</h2>
        <button type="button" aria-label="Close privacy policy" onClick={() => policy.current.close()} autoFocus>×</button>
      </div>
      <div className="checkout-policy-body" tabIndex={0}>
        <p>Your contact and delivery details stay on this page. Your browser stores the models and quantities in your cart.</p>
        <p><a className="checkout-link" href={sitePath('/privacy/')}>Read our privacy notice</a></p>
      </div>
    </dialog>
  </div>;
}
