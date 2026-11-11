import Catalogue from './catalogue';

export default function ProductsView({ title, products, itemName }) {
  return <div className="products-page">
    <div className="container products-intro">
      <h1>{title}</h1>
      <p>Search by model or product type to compare listings.</p>
    </div>
    <Catalogue products={products} itemName={itemName} prioritizeFirst />
  </div>;
}
