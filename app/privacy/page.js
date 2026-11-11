import { sitePath } from '../site-path';

export const metadata = { title: 'Privacy notice | Paperline' };

export default function Page() {
  const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL;
  return <main className="container section privacy-page">
    <h1>Privacy notice</h1>
    <h2>Cart and preferences</h2>
    <p>Your browser stores cart product IDs, quantities, and your privacy choice on this device. You can remove these records by clearing site data.</p>
    <h2>Checkout details</h2>
    <p>Contact and delivery details entered at checkout are checked on the page. Paperline does not send or store them.</p>
    <h2>Hosting</h2>
    <p>Our hosting provider receives standard web requests, which include network information such as your IP address. Paperline uses no advertising pixels or analytics integrations.</p>
    <p><a className="text-link" href="#privacy-preferences">Open privacy preferences</a></p>
    {email && <p>For privacy questions, email <a className="text-link" href={`mailto:${email}`}>{email}</a>.</p>}
    <a className="button" href={sitePath('/inkjet-printers/')}>Browse printers</a>
  </main>;
}
