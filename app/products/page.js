import Storefront from '../storefront';

export const metadata = {
  title: 'Shop Printers for Home & Office | InkjetProGuide',
  description: 'Browse and search the home and office printer catalogue.',
};

export default function Page() {
  return <Storefront page="products" />;
}
