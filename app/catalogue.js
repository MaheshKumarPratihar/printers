'use client';
import { sitePath } from './site-path';
import { useState, useEffect } from 'react';

import { catalogueProducts, money } from './products';
import CatalogueImage from './catalogue-image';
import { useCart } from './cart-provider';

export default function Catalogue({ products = catalogueProducts, itemName = "printers", prioritizeFirst = false }) {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  useEffect(() => { const initial = new URLSearchParams(window.location.search).get('q') || ''; setInput(initial); setQuery(initial); }, []);
  const results = products.filter(product => product.name.toLowerCase().includes(query.trim().toLowerCase()));
  return <section className="section container catalogue" id="catalogue" aria-label={`Catalogue of ${itemName}`}>
    <form role="search" className="catalogue-search" onSubmit={event => { event.preventDefault(); setQuery(input); }}>
      <label htmlFor="printer-search" className="sr-only">Search {itemName}</label>
      <input id="printer-search" type="search" value={input} onChange={event => { setInput(event.target.value); if (!event.target.value) setQuery(''); }} placeholder={`Search ${itemName}...`} />
      <button className="button" type="submit">Search</button>
    </form>
    <p className="catalogue-notice">Prices shown in USD</p>
    <div role="status" className="catalogue-status">{query ? `${results.length} matching products found for “${query}”` : `${results.length} matching products`}</div>
    {results.length ? <div className="grid four catalogue-grid">
      {results.map((product, index) => <ProductCard key={product.id} product={product} priority={prioritizeFirst && index === 0} />)}
    </div> : <div className="empty-results"><h2>No matching products</h2><p>Try a different model name or number.</p><button className="button" onClick={() => { setInput(''); setQuery(''); }}>Clear search</button></div>}
  </section>;
}

export function ProductCard({ product, children, priority }) {
  const { addToCart, ready } = useCart();
  const href = sitePath(`/products/${product.id}/`);
  return <article className="catalogue-card">
    <a className="catalogue-image-link" href={href} aria-label={product.name}>
      <CatalogueImage product={product} decorative priority={priority} />
    </a>
    <div className="catalogue-card-body">
      <h3><a href={href}>{product.name}</a></h3>
      <p className="catalogue-price">{money(product.cents)}</p>
      {['deskjet-2855e', 'officejet-9135e', 'officejet-9730e'].includes(product.id) && <p className="offer-note">Promotional text in the reference image is not a confirmed offer.</p>}
      <div className="product-card-actions">
        <a className="button secondary" href={href}>View details</a>
        <button className="button" disabled={!ready} onClick={() => addToCart(product.id)}>Add to cart</button>
      </div>
      {children}
    </div>
  </article>;
}
