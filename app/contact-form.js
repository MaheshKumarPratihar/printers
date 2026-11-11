'use client';

import { useState } from 'react';
import { sitePath } from './site-path';

export default function ContactForm({ email, topics }) {
  const [draft, setDraft] = useState(null);

  function prepareEmail(event) {
    event.preventDefault();
    const field = id => event.currentTarget.elements.namedItem(id).value.trim();
    const subject = `[${field('contact-topic')}] ${field('contact-subject')}`;
    const body = `${field('contact-message')}\n\n${field('contact-name')}\n${field('contact-email')}`;
    setDraft({ subject, body });
  }

  return <section className="card contact-form-card" aria-labelledby="contact-form-title">
    <h2 id="contact-form-title">Write to Paperline</h2>
    <p>Include the printer model or page link if it helps explain your question.</p>
    <form onSubmit={prepareEmail} onChange={() => draft && setDraft(null)} className="contact-form">
      <div className="contact-form-pair">
        <label htmlFor="contact-name">Full name
          <input id="contact-name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} />
        </label>
        <label htmlFor="contact-email">Email address
          <input id="contact-email" type="email" autoComplete="email" placeholder="alex@example.com" required maxLength={254} />
        </label>
      </div>
      <label htmlFor="contact-topic">Topic
        <select id="contact-topic" required defaultValue="">
          <option value="" disabled>Select a topic</option>
          {topics.map(topic => <option key={topic}>{topic}</option>)}
          <option>Something else</option>
        </select>
      </label>
      <label htmlFor="contact-subject">Subject
        <input id="contact-subject" placeholder="What can we help with?" required maxLength={150} />
      </label>
      <label htmlFor="contact-message">Message
        <textarea id="contact-message" rows={5} placeholder="Tell us what you need help with…" required maxLength={1000} />
      </label>
      <button className="button" type="submit">Prepare email</button>
      <p className="contact-form-note">This form prepares a draft on your device. <a href={sitePath('/privacy/')}>Privacy Policy</a></p>
    </form>
    <div role="status">{draft && <p>Your draft is ready. {email ? 'Open it in your email app to send it.' : 'You can copy the draft below. Paperline’s support email is currently unavailable.'}</p>}</div>
    {draft && (email
      ? <a className="button secondary" href={`mailto:${email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}>Open email app</a>
      : <label className="contact-draft">Email draft
        <textarea readOnly rows={6} value={`${draft.subject}\n\n${draft.body}`} />
      </label>)}
  </section>;
}
