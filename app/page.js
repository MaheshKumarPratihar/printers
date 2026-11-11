import HomeShowcase from './home-showcase';
import { homepageGuides } from './guide-articles';
import Storefront from './storefront';

export default function Home() {
  return <Storefront><HomeShowcase guides={homepageGuides.map(({ slug, category, title }) => ({ slug, category, title }))} /></Storefront>;
}
