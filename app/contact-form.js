'use client';

import { useState, useRef, useEffect } from 'react';
import { sitePath } from './site-path';

export default function ContactForm({ email, topics }) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [submission, setSubmission] = useState(null);
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (!popupOpen) return;
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setPopupOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [popupOpen]);

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
      setPopupOpen(true);
      formRef.current?.reset();
    }, 350);
  }

  return (
    <section className="card contact-form-card" aria-labelledby="contact-form-title">
      <h2 id="contact-form-title">Send us a message</h2>
      <p>Have a question or need guidance? Fill out the form below and our team will get back to you.</p>

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
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
          We usually respond within 24 hours. Your information is protected under our <a href={sitePath('/privacy/')}>Privacy Policy</a>.
        </p>
      </form>

      {popupOpen && submission && (
        <div
          className="contact-modal-backdrop"
          onClick={() => setPopupOpen(false)}
          role="presentation"
        >
          <div
            className="contact-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              className="contact-modal-close"
              aria-label="Close notification"
              onClick={() => setPopupOpen(false)}
            >
              ×
            </button>
            <div className="contact-modal-icon-wrap" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 id="contact-modal-title" className="contact-modal-title">
              Message sent successfully!
            </h2>
            <p className="contact-modal-description">
              Thank you for reaching out, <strong>{submission.name}</strong>! We have received your message and our team will get back to you in <strong>24 hours</strong> at <strong>{submission.email}</strong>.
            </p>
            <div className="contact-modal-actions">
              <button
                type="button"
                className="button contact-modal-btn"
                onClick={() => setPopupOpen(false)}
              >
                Got it
              </button>
              <a
                className="button secondary contact-modal-btn"
                href={sitePath('/')}
                onClick={() => setPopupOpen(false)}
              >
                Back to home
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
