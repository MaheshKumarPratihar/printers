import ProductsView from '../products-view';
import { shopCatalogue } from '../products';
import Storefront from '../storefront';

export const metadata = {
  title: 'Shop Printers for Home & Office | Paperline',
  description: 'Browse and search the home and office printer catalogue.',
};

export default function Page() {
  return <Storefront page="products"><ProductsView title="Shop Printers for Home & Office" products={shopCatalogue} itemName="printers and scanners" /></Storefront>;
}
