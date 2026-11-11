'use client';
import { sitePath } from './site-path';

import { useEffect, useState } from 'react';

const storageKey = 'inkjet-privacy-choice-v1';

export default function PrivacyBanner() {
  const [visible, setVisible] = useState(false);
  const [preferences, setPreferences] = useState(false);

  useEffect(() => {
    function openPreferences() {
      if (window.location.hash === '#privacy-preferences') {
        setVisible(true);
        setPreferences(true);
      }
    }

    try {
      const saved = localStorage.getItem(storageKey);
      setVisible(saved !== 'accepted' && saved !== 'rejected');
    } catch {
      setVisible(true);
    }
    openPreferences();
    window.addEventListener('hashchange', openPreferences);
    return () => window.removeEventListener('hashchange', openPreferences);
  }, []);

  function save(choice) {
    try {
      localStorage.setItem(storageKey, choice);
    } catch {
      // The banner can still close when browser storage is unavailable.
    }
    setVisible(false);
    setPreferences(false);
    if (window.location.hash === '#privacy-preferences') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  if (!visible) return null;

  return <aside className="card privacy-banner" aria-labelledby="privacy-banner-title">
    <div className="privacy-banner-heading">
      <span className="privacy-banner-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 1 1-9-9 4 4 0 0 0 4 4 5 5 0 0 0 5 5Z" />
          <path d="M8 10h.01M9 15h.01M14 16h.01M13 11h.01" strokeWidth="2.5" />
        </svg>
      </span>
      <h2 id="privacy-banner-title">Your Privacy Matters</h2>
    </div>
    <p>This site uses browser storage to remember your cart and privacy choice. <a href={sitePath('/privacy/')}>Privacy Policy</a></p>
    {preferences && <div id="privacy-options" className="privacy-banner-options">
      <strong>Essential storage</strong>
      <p>Your cart and privacy choice use local storage. Paperline uses no optional analytics or advertising cookies.</p>
    </div>}
    <div className="privacy-banner-actions">
      <button className="button" type="button" onClick={() => save('accepted')}>Accept All</button>
      <button className="button secondary" type="button" onClick={() => save('rejected')}>Reject All</button>
      <button className="privacy-preferences-toggle" type="button" aria-expanded={preferences} onClick={() => setPreferences(!preferences)}>Preferences</button>
    </div>
  </aside>;
}
