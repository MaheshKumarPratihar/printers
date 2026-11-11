'use client';
import { sitePath } from './site-path';
import { useState } from 'react';
import { useCart } from './cart-provider';
export default function ContactView() {
  const { ready } = useCart();
  const [message, setMessage] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  return <section className="container contact-page">
    <div className="contact-introduction">
      <h1>Contact Paperline</h1>
      <p className="contact-lead">Try the contact form with sample details, or visit the buying guides for help choosing a printer.</p>
      <a className="text-link" href={sitePath('/guides/')}>Explore buying guides</a>
    </div>
    <div className="contact-columns"><section className="card contact-form-card"><h2>Send Us a Message</h2><p>Complete the form below to preview an order-related inquiry.</p>
      <form onSubmit={event => { event.preventDefault(); setShowPreview(false); const values = new FormData(event.currentTarget); if (['name','subject','message'].some(key => !String(values.get(key) || '').trim())) { setMessage('Please enter your name, subject, and message. These fields cannot contain only spaces.'); return; } setMessage(''); setShowPreview(true); }}>
        <label htmlFor="contact-name">Full Name</label><input id="contact-name" name="name" autoComplete="name" placeholder="John Doe" required maxLength={120}/>
        <label htmlFor="contact-email">Email Address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="john@example.com" required maxLength={254}/>
        <label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" placeholder="How can we help you?" required maxLength={200}/>
        <label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" placeholder="Tell us more about your question or concern..." required maxLength={5000} rows={7}/>
        <p className="contact-form-note" id="contact-preview-note">Preview form only. Entries are not sent or saved. Please do not enter payment details. <a href={sitePath('/privacy/')}>Privacy notice</a></p>
        <button className="button" type="submit" disabled={!ready} aria-describedby="contact-preview-note">Send Message <span className="checkout-preview-label">· Preview</span></button>
        <p className="contact-form-status" role="status">{message}</p>
        {showPreview && <div className="site-toast card">
          <div role="status"><strong>Message preview complete</strong><p>Your sample message stayed in this browser.</p></div>
          <button type="button" aria-label="Dismiss notification" onClick={() => setShowPreview(false)}>×</button>
        </div>}
      </form>
    </section><div className="contact-sidebar">
      <section className="card contact-faq" id="contact-faq"><h2>Frequently Asked Questions</h2>
        <h3>What are your shipping options?</h3><p>Shipping services, delivery estimates, and tracking details will be published when the store launches. This preview does not process shipments.</p>
        <h3>How can I check my order status?</h3><p>Order lookup is not available in this preview. No order is created by adding items to the cart or clicking the checkout preview.</p>
        <h3>Can I return a printer?</h3><p>Return eligibility, time limits, and return-shipping terms will be published in the final Return & Refund Policy before purchases are enabled.</p>
        <h3>What payment methods do you accept?</h3><p>No payments are accepted in this frontend preview. Available payment methods will be shown when checkout is connected.</p>
      </section>
    </div></div>
  </section>;
}
