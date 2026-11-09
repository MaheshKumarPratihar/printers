'use client';
import { useState } from 'react';
function ContactIcon({ type }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{type === 'phone' ? <path d="M7 3H4a1 1 0 0 0-1 1c0 9 8 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2c-3-1-6-4-7-7l2-2Z"/> : type === 'mail' ? <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 5 10 8L22 5"/></> : type === 'pin' ? <><path d="M19 10c0 5-7 12-7 12S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/></> : <><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></>}</svg>;
}
export default function ContactView() {
  const [message, setMessage] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  return <section className="container contact-page">
    <div className="contact-introduction"><h1>Contact Us</h1><p className="contact-lead">Have questions about an order? Contact InkjetProGuide for order-related inquiries including shipping, returns, and order status.</p><p>This contact page is for order-related questions. For product information, specifications, and buying guidance, explore our resources.</p><p className="contact-resources"><strong>Looking for product information?</strong> Visit our <a href="/guides/">Guides & Resources</a> section for printer buying guidance.</p></div>
    <div className="grid three contact-options">
      <article className="card"><span className="icon-circle"><ContactIcon type="phone"/></span><h2>Phone Inquiries</h2><p>Phone Support (Order Assistance Only)</p><p className="contact-small">We do not provide manufacturer technical support or product troubleshooting by phone.</p><a href="tel:+13254008874">1-325-400-8874</a></article>
      <article className="card"><span className="icon-circle"><ContactIcon type="mail"/></span><h2>Email Us</h2><p>For order-related inquiries</p><a href="mailto:support@inkjetproguide.com">support@inkjetproguide.com</a></article>
      <article className="card"><span className="icon-circle"><ContactIcon type="clock"/></span><h2>Business Hours</h2><p>Office hours shown in the supplied reference</p><strong>Mon - Fri: 9AM - 6PM ET</strong><p className="contact-small">Business details and hours are awaiting confirmation before launch.</p></article>
    </div>
    <div className="contact-columns"><section className="card contact-form-card"><h2>Send Us a Message</h2><p>Complete the form below to preview an order-related inquiry.</p>
      <form onSubmit={event => { event.preventDefault(); setShowPreview(false); const values = new FormData(event.currentTarget); if (['name','subject','message'].some(key => !String(values.get(key) || '').trim())) { setMessage('Please enter your name, subject, and message. These fields cannot contain only spaces.'); return; } setMessage(''); setShowPreview(true); }}>
        <label htmlFor="contact-name">Full Name</label><input id="contact-name" name="name" autoComplete="name" placeholder="John Doe" required maxLength={120}/>
        <label htmlFor="contact-email">Email Address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="john@example.com" required maxLength={254}/>
        <label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" placeholder="How can we help you?" required maxLength={200}/>
        <label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" placeholder="Tell us more about your question or concern..." required maxLength={5000} rows={7}/>
        <p className="contact-form-note" id="contact-preview-note">Preview form only. Entries are not sent or saved. Please do not enter payment details. <a href="/privacy/">Privacy notice</a></p>
        <button className="button" type="submit" aria-describedby="contact-preview-note">Send Message <span className="checkout-preview-label">· Preview</span></button>
        <p className="contact-form-status" role="status">{message}</p>
        {showPreview && <div className="site-toast card">
          <div role="status"><strong>Message sent!</strong><p>Thank you for contacting us. We'll get back to you within 24 business hours.</p></div>
          <button type="button" aria-label="Dismiss notification" onClick={() => setShowPreview(false)}>×</button>
        </div>}
      </form>
    </section><div className="contact-sidebar">
      <section className="card location-card"><h2>Our Location</h2><p>Corporate Mailing Address</p><div className="location-details"><ContactIcon type="pin"/><div><h3>InkjetProGuide</h3><p className="contact-small">Corporate Mailing Address</p><address>11 Municipal Dr UNIT 200<br/>Fishers, IN 46038<br/>United States</address><p className="contact-small">Mailing address from the supplied reference. Confirm business details before public launch.</p></div></div></section>
      <section className="card contact-faq" id="contact-faq"><h2>Frequently Asked Questions</h2>
        <h3>What are your shipping options?</h3><p>Shipping services, delivery estimates, and tracking details will be published when the store launches. This preview does not process shipments.</p>
        <h3>How can I check my order status?</h3><p>Order lookup is not available in this preview. No order is created by adding items to the cart or clicking the checkout preview.</p>
        <h3>Can I return a printer?</h3><p>Return eligibility, time limits, and return-shipping terms will be published in the final Return & Refund Policy before purchases are enabled.</p>
        <h3>What payment methods do you accept?</h3><p>No payments are accepted in this frontend preview. Available payment methods will be shown when checkout is connected.</p>
      </section>
      <aside className="card contact-order-note"><h2>Order Inquiries Only</h2><p>This contact page is for shipping inquiries, return requests, order status updates, and payment questions. For product information and buying guidance, visit our <a href="/guides/">Guides & Resources</a> section.</p><p className="contact-small">InkjetProGuide does not provide manufacturer-authorized technical support or warranty service.</p></aside>
    </div></div>
  </section>;
}
