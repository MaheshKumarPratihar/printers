'use client';

import { useState } from 'react';
import { sitePath } from './site-path';

export default function ContactForm({ email, topics }) {
  const [submitted, setSubmitted] = useState(false);
  const [submission, setSubmission] = useState(null);
  const [sending, setSending] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const field = id => event.currentTarget.elements.namedItem(id)?.value?.trim() || '';
    const name = field('contact-name');
    const userEmail = field('contact-email');
    const topic = field('contact-topic');
    const subject = field('contact-subject');
    const message = field('contact-message');

    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSubmission({ name, email: userEmail, topic, subject, message });
      setSubmitted(true);
    }, 350);
  }

  function handleReset() {
    setSubmitted(false);
    setSubmission(null);
  }

  return (
    <section className="card contact-form-card" aria-labelledby="contact-form-title">
      <h2 id="contact-form-title">Send us a message</h2>
      <p>Have a question or need guidance? Fill out the form below and our team will get back to you.</p>

      {submitted && submission ? (
        <div className="contact-success" role="status">
          <div className="contact-success-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3>Message sent successfully!</h3>
          <p>
            Thank you, <strong>{submission.name}</strong>. Your inquiry regarding <strong>{submission.topic}</strong> has been received. Our support team will reply to <strong>{submission.email}</strong> within 1 business day.
          </p>
          <div className="contact-success-actions">
            <button type="button" className="button secondary" onClick={handleReset}>
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-pair">
            <label htmlFor="contact-name">
              Full name
              <input id="contact-name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} />
            </label>
            <label htmlFor="contact-email">
              Email address
              <input id="contact-email" type="email" autoComplete="email" placeholder="alex@example.com" required maxLength={254} />
            </label>
          </div>
          <label htmlFor="contact-topic">
            Topic
            <select id="contact-topic" required defaultValue="">
              <option value="" disabled>Select a topic</option>
              {topics.map(topic => <option key={topic}>{topic}</option>)}
              <option>Something else</option>
            </select>
          </label>
          <label htmlFor="contact-subject">
            Subject
            <input id="contact-subject" placeholder="What can we help with?" required maxLength={150} />
          </label>
          <label htmlFor="contact-message">
            Message
            <textarea id="contact-message" rows={5} placeholder="Tell us what you need help with…" required maxLength={1000} />
          </label>
          <button className="button" type="submit" disabled={sending}>
            {sending ? 'Sending message…' : 'Send message'}
          </button>
          <p className="contact-form-note">
            We usually respond within 1 business day. Your information is protected under our <a href={sitePath('/privacy/')}>Privacy Policy</a>.
          </p>
        </form>
      )}
    </section>
  );
}
