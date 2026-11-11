'use client';
import { sitePath } from './site-path';

import { useCart } from './cart-provider';
import { CatalogueImage } from './catalogue';
import { money } from './products';

export default function ProductDetail({ product }) {
  const { addToCart, ready } = useCart();
  return <section className="container section product-detail">
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <a href={sitePath('/')}>Home</a><span>/</span><a href={sitePath('/products/')}>Catalogue</a>
    </nav>
    <div className="grid two">
      <CatalogueImage product={product} />
      <div>
        <h1>{product.name}</h1>
        <p className="catalogue-price">{money(product.cents)}</p>
        <p>Prices shown in USD</p>
        <button className="button" disabled={!ready} onClick={() => addToCart(product.id)}>Add to cart</button>
      </div>
    </div>
  </section>;
}
