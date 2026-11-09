import './globals.css';
import PrivacyBanner from './privacy-banner';
import { CartProvider } from './cart-provider';
export const metadata = { title: 'InkjetProGuide | Printers & Buying Guides', description: 'Find your next home, office, or photo printer. Explore printers and clear buying guides.' };
export default function RootLayout({ children }) { return <html lang="en"><body><CartProvider>{children}</CartProvider><PrivacyBanner /></body></html>; }
