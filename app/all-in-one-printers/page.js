import ProductsView from '../products-view';
import { allInOneCatalogue } from '../products';
import Storefront from '../storefront';

export default function Page() {
  return <Storefront page="all-in-one-printers"><ProductsView title="All-in-One Printers" products={allInOneCatalogue} itemName="printers" /></Storefront>;
}
