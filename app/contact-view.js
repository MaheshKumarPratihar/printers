import { sitePath } from './site-path';

export default function ContactView() {
  const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL;
  return <section className="container contact-page">
    <div className="contact-introduction">
      <h1>Contact Paperline</h1>
      {email && <p className="contact-lead">For product and order questions, email <a className="text-link" href={`mailto:${email}`}>{email}</a>.</p>}
      <a className="text-link" href={sitePath('/guides/')}>Explore buying guides</a>
    </div>
    <section className="card contact-faq" id="contact-faq">
      <h2>Can I order online?</h2>
      <p>Online order submission is currently unavailable.</p>
    </section>
  </section>;
}
