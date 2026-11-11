import PolicyView from '../policy-view';
import Storefront from '../storefront';

export const metadata = { title: 'Privacy Policy | Paperline' };

export default function Page() {
  return <Storefront page="policy"><PolicyView slug="privacy" /></Storefront>;
}
