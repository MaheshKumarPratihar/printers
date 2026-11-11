import { sitePath } from './site-path';

export default function CatalogueImage({ product, decorative = false, priority = false }) {
  return <img
    className="catalogue-image"
    src={sitePath(product.image)}
    alt={decorative ? '' : product.name}
    width="290"
    height="290"
    loading={priority ? 'eager' : 'lazy'}
    fetchPriority={priority ? 'high' : undefined}
    decoding={priority ? undefined : 'async'}
  />;
}
