import { notFound } from 'next/navigation';
import Storefront from '../../storefront';
import ProductDetail from '../../product-detail';
import { allProducts } from '../../products';

export const dynamicParams = false;

export function generateStaticParams() {
  return allProducts.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = allProducts.find(item => item.id === id);
  if (!product) notFound();
  return { title: product.name + ' | InkjetProGuide' };
}

export default async function Page({ params }) {
  const { id } = await params;
  const product = allProducts.find(item => item.id === id);
  if (!product) notFound();
  return <Storefront page="product"><ProductDetail product={product} /></Storefront>;
}
