import { policyPath } from './policy-content';
import { sitePath } from './site-path';

export default function ContactView() {
  const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL;

  return <>
    <header className="help-hero">
      <div className="container">
        <h1>Contact Us</h1>
        <p>Find help with printer selection, warranty coverage, and questions about Paperline.</p>
      </div>
    </header>
    <div className="container support-layout">
      <section className="card policy-section">
        <h2>Paperline support</h2>
        {email ? <>
          <p>For questions about a listing, privacy, or site accessibility, include the model or page link and a short description of what you need.</p>
          <a className="button" href={`mailto:${email}`}>Email {email}</a>
        </> : <p>Paperline’s support email is currently unavailable. Use the resources below for product and purchase questions.</p>}
      </section>
      <img className="support-photo" src={sitePath('/images/hp-officejet-workspace.webp')} width="1200" height="800" alt="Illustration of an HP OfficeJet Pro on an office desk" />
      <section className="card policy-section">
        <h2>Printer setup and warranty</h2>
        <p>Have your printer’s model number handy. Use HP’s support resources for setup, drivers, troubleshooting, or checking a manufacturer warranty.</p>
        <a className="text-link" href={sitePath(policyPath('warranty'))}>Warranty Information</a>
      </section>
      <section className="card policy-section">
        <h2>Shipping, returns, and refunds</h2>
        <p>For a purchase made elsewhere, contact the seller listed on your receipt. Keep your order number and any tracking details so they can locate the purchase.</p>
        <a className="text-link" href={sitePath(policyPath('returns'))}>Returns &amp; Refunds Policy</a>
      </section>
    </div>
  </>;
}
