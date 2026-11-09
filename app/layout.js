import './globals.css';
import PrivacyBanner from './privacy-banner';
import { CartProvider } from './cart-provider';
export const metadata = { title: 'InkjetProGuide | Printers & Buying Guides', description: 'Find your next home, office, or photo printer. Explore printers and clear buying guides.' };
export default function RootLayout({ children }) {
  return <html lang="en"><body>
    <p className="project-preview"><strong>Independent educational demo.</strong> This project is unaffiliated with the original InkjetProGuide website. Use sample details when testing.</p>
    <CartProvider>{children}</CartProvider><PrivacyBanner />
  </body></html>;
}
