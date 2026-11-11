import ContactForm from './contact-form';
import GuideIcon from './guide-icon';
import { policyPath } from './policy-content';
import { sitePath } from './site-path';

const topics = [
  ['Printer selection', 'Compare features, ink costs, and everyday printing needs.', 'Buying Guide', '/guides/'],
  ['Shipping and tracking', 'Find out who to contact about delivery estimates or a missing shipment.', 'Supplies', policyPath('shipping')],
  ['Returns and refunds', 'Find the information you’ll need when contacting your seller.', 'Comparison', policyPath('returns')],
  ['Setup and warranty', 'Find HP’s warranty checker and learn what to keep for a claim.', 'Protection', policyPath('warranty')],
  ['Privacy and data', 'See what stays on your device and how to ask about your information.', 'Security', '/privacy/'],
  ['Accessibility', 'Learn how to report a problem using a page, form, or control.', 'Getting Started', policyPath('accessibility')],
];

export default function ContactView() {
  const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim();

  return <>
    <header className="help-hero">
      <div className="container">
        <h1>Contact Us</h1>
        <p>Have a question about a printer, a buying guide, or the website? Find answers by topic or prepare a message for Paperline.</p>
      </div>
    </header>
    <div className="container contact-hub">
      <section aria-labelledby="help-topics">
        <h2 id="help-topics">What can we help with?</h2>
        <div className="contact-topics">
          {topics.map(([title, description, icon, href]) => (
            <a className="card contact-topic" key={title} href={sitePath(href)}>
              <span className="contact-topic-icon"><GuideIcon category={icon} /></span>
              <span><strong>{title}</strong><span>{description}</span></span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
      <div className="contact-columns">
        <ContactForm email={email} topics={topics.map(([title]) => title)} />
        <aside className="contact-sidebar" aria-label="Support resources">
          {email && <section className="card policy-section">
            <h2>Email support</h2>
            <p><a className="text-link" href={`mailto:${email}`}>{email}</a></p>
          </section>}
          <section className="card policy-section">
            <h2>Before you get in touch</h2>
            <details>
              <summary>Where can I check an existing purchase?</summary>
              <p>Contact the seller listed on your receipt. Include your order number and any tracking information.</p>
            </details>
            <details>
              <summary>Where can I get HP drivers or setup help?</summary>
              <p>Use <a className="text-link" href="https://support.hp.com/us-en">HP’s support site</a> and search for your exact model.</p>
            </details>
            <details>
              <summary>How do I report a listing or guide error?</summary>
              <p>Include the page link and the detail you believe needs updating, such as a model number or compatibility note.</p>
            </details>
          </section>
          <img className="support-photo" src={sitePath('/images/hp-officejet-workspace.webp')} width="1200" height="800" loading="lazy" decoding="async" alt="Illustration of an HP OfficeJet Pro on an office desk" />
        </aside>
      </div>
    </div>
  </>;
}
