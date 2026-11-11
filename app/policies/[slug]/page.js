import { notFound } from 'next/navigation';
import { policies } from '../../policy-content';
import PolicyView from '../../policy-view';
import Storefront from '../../storefront';

export function generateStaticParams() {
  return Object.keys(policies).filter(slug => slug !== 'privacy').map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (slug === 'privacy' || !Object.hasOwn(policies, slug)) notFound();
  const policy = policies[slug];
  return { title: `${policy.title} | Paperline`, description: policy.intro };
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (slug === 'privacy' || !Object.hasOwn(policies, slug)) notFound();
  return <Storefront page="policy"><PolicyView slug={slug} /></Storefront>;
}
