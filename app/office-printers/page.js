import CategoryPage from '../category-page';
import Storefront from '../storefront';
export const metadata = { title: 'Work and Office Printers | Paperline' };
export default function Page() { return <Storefront page="office-printers"><CategoryPage kind="office-printers" /></Storefront>; }
