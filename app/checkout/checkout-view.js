'use client';

import { useId, useRef, useState } from 'react';
import { useCart } from '../cart-provider';
import { CatalogueImage } from '../catalogue';
import { money } from '../products';
import privacyPolicy from './privacy-policy.json';

const states = 'Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|District of Columbia|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming'.split('|');

const phonePattern = /(?:\+?1[ .\-]?)?(?:\([2-9][0-9]{2}\)|[2-9][0-9]{2})[ .\-]?[2-9][0-9]{2}[ .\-]?[0-9]{4}/.source;
const zipPattern = /[0-9]{5}(?:-[0-9]{4})?/.source;
const nonBlankPattern = /.*\S.*/.source;

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
        inputMode={inputMode} maxLength={maxLength} placeholder={label} title={hint}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? id + '-error' : undefined}
        onBlur={event => validate(event.currentTarget)}
        onChange={event => { if (error) validate(event.currentTarget); }}
        onInvalid={event => validate(event.currentTarget)} />
      {label === 'Address' && <svg className="checkout-address-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" />
      </svg>}
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
  const [confirmed, setConfirmed] = useState(false);

  return <div className="checkout-screen">
    <header className="checkout-header">
      <div className="checkout-shell"><a className="brand-image" href="/" aria-label="InkjetProGuide home" /></div>
    </header>
    <main className="checkout-shell checkout-layout">
      <div className="checkout-details">
        <h1>Checkout</h1>
        <p className="checkout-preview-note">Use sample details. This preview does not send or save them.</p>
        {confirmed ? <div className="checkout-confirmation" role="status">
          <h2>Your order has been confirmed</h2>
          <p>We’ll get back to you soon.</p>
          <p><strong>Demo confirmation.</strong> No order was sent and no follow-up will be triggered.</p>
          <a className="checkout-link" href="/products/">Continue shopping</a>
        </div> : ready && items.length > 0 ? <form autoComplete="off" onSubmit={event => {
          event.preventDefault();
          setConfirmed(true);
        }}>
          <section className="checkout-section">
            <h2>Contact</h2>
            <CheckoutField label="Email address" hint="name@example.com" type="email" />
          </section>
          <section className="checkout-section">
            <h2>Delivery</h2>
            <div className="checkout-fields">
              <label className="checkout-field"><span>Country/Region</span>
                <select required defaultValue="US"><option value="US">United States</option></select>
              </label>
              <div className="checkout-fields two"><CheckoutField label="First name" hint="Jane" /><CheckoutField label="Last name" hint="Smith" /></div>
              <CheckoutField label="Address" hint="123 Main Street" />
              <CheckoutField label="Apartment, suite, etc." hint="Apt 4B" optional />
              <div className="checkout-fields three"><CheckoutField label="City" hint="Boston" /><label className="checkout-field checkout-state-field"><span className="sr-only">State</span>
                <select required defaultValue=""><option value="" disabled>State</option>{states.map(state => <option key={state}>{state}</option>)}</select>
              </label><CheckoutField label="ZIP code" inputMode="numeric" pattern={zipPattern} errorMessage="Enter a valid ZIP / postal code for United States" hint="12345 or 12345-6789" maxLength={10} /></div>
              <CheckoutField label="Phone" type="tel" pattern={phonePattern} errorMessage="Enter a valid U.S. phone number" help="In case we need to contact you about your order" hint="(202) 555-0123" maxLength={20} />
            </div>
          </section>
          <button className="checkout-pay" type="submit">Confirm order</button>
        </form> : ready ? <p>Your cart is empty. <a className="checkout-link" href="/products/">Browse the catalogue</a></p> : <p role="status">Loading your cart…</p>}
        <p className="checkout-policy-note">Policy shown for reference. <a className="checkout-link" href="/privacy/">Preview privacy notice</a></p>
        <button type="button" className="checkout-link checkout-policy-link" onClick={() => policy.current.showModal()}>Privacy policy</button>
      </div>
      <aside className="checkout-order" aria-label="Order summary">
        <h2>Order summary</h2>
        <ul>
          {items.map(item => <li key={item.id}>
            <div className="checkout-thumbnail"><CatalogueImage product={item} /><span aria-label={`Quantity: ${item.quantity}`}>{item.quantity}</span></div>
            <span>{item.name}</span>
            <strong>{money(item.cents * item.quantity)}</strong>
          </li>)}
        </ul>
        {items.length > 0 && <dl>
          <div><dt>Subtotal · {count} {count === 1 ? 'item' : 'items'}</dt><dd>{money(subtotal)}</dd></div>
          <div className="checkout-total"><dt>Estimated total</dt><dd><small>USD</small> {money(subtotal)}</dd></div>
        </dl>}
      </aside>
    </main>
    <dialog className="checkout-policy" ref={policy} aria-labelledby="checkout-policy-title">
      <div className="checkout-policy-heading">
        <h2 id="checkout-policy-title">Privacy policy</h2>
        <button type="button" aria-label="Close privacy policy" onClick={() => policy.current.close()} autoFocus>×</button>
      </div>
      <div className="checkout-policy-body" tabIndex={0}>
        {privacyPolicy.map(([kind, value], index) => {
          if (kind === 'heading') return <h3 key={index}>{value}</h3>;
          if (kind === 'list') return <ul key={index}>{value.map(item => <li key={item}>{item}</li>)}</ul>;
          return <p key={index}>{value}</p>;
        })}
      </div>
    </dialog>
  </div>;
}
