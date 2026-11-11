import ContactView from '../contact-view';
import Storefront from '../storefront';
export const metadata = { title: 'Contact Us | Paperline' };
export default function Page() { return <Storefront page="contact"><ContactView /></Storefront>; }
