'use client';

import { useState } from 'react';
import { CatalogueImage, ProductCard } from './catalogue';
import { homepageGuides } from './guide-articles';
import { allProducts, homeCatalogue, officeCatalogue, allInOneCatalogue, scannerCatalogue, money } from './products';
import { sitePath } from './site-path';

const departments = [
  { title: 'Home & school', text: 'For worksheets, photos and everyday printing.', path: '/home-printers/', model: 'deskjet-4255e', products: homeCatalogue },
  { title: 'Small office', text: 'For invoices, reports and shared workspaces.', path: '/office-printers/', model: 'laserjet-3001dw', products: officeCatalogue },
  { title: 'All-in-one', text: 'Print, scan and copy with one device.', path: '/all-in-one-printers/', model: 'envy-7955e', products: allInOneCatalogue },
  { title: 'Document scanning', text: 'Digitize receipts, records and stacks of paper.', path: '/scanners/', model: 'scanjet-2600-f1', products: scannerCatalogue },
];

const featured = [
  { label: 'All picks', models: ['deskjet-4255e', 'laserjet-3001dw', 'smart-tank-6001', 'scanjet-2600-f1'] },
  { label: 'Home', models: ['deskjet-4255e', 'envy-7955e', 'envy-6155e', 'smart-tank-5101'] },
  { label: 'Office', models: ['laserjet-3001dw', 'officejet-8135e', 'officejet-9125e', 'laserjet-4001dn'] },
  { label: 'Ink tank', models: ['smart-tank-5101', 'smart-tank-5103', 'smart-tank-6001', 'smart-tank-651'] },
];

const questions = [
  ['Should I choose inkjet or laser?', 'Inkjet is a good place to start for photos and mixed color work. Laser is worth comparing if you mostly print text in batches. Check the specific model’s running costs and paper support.'],
  ['When does a refillable ink tank make sense?', 'If you print frequently, compare the cost of refills and estimated page yields alongside the purchase price. Estimate your monthly volume before deciding.'],
  ['Do I need a separate scanner?', 'An all-in-one can cover occasional scanning and copying. For regular batches, compare dedicated scanners by feeder capacity, supported document sizes and two-sided scanning.'],
  ['Can I place an order through this site?', 'You can build a cart and check delivery details. Online order submission is currently unavailable.'],
];

const modelById = new Map(allProducts.map(product => [product.id, product]));

export default function HomeShowcase() {
  const [group, setGroup] = useState(0);
  const [selection, setSelection] = useState([]);
  const selectedProducts = selection.map(id => modelById.get(id));

  function toggleCompare(id) {
    setSelection(ids => ids.includes(id) ? ids.filter(item => item !== id) : ids.length < 3 ? [...ids, id] : ids);
  }

  return <>
    <section className="home-masthead">
      <div className="container home-masthead-grid">
        <div className="home-masthead-copy">
          <p className="home-kicker">Printers & document scanners</p>
          <h1>Find a printer for the way you work.</h1>
          <p>From school worksheets to office reports, compare models by what you need to print, scan or copy.</p>
          <div className="home-actions">
            <a className="button" href={sitePath('/products/')}>Browse catalogue <span aria-hidden="true">↗</span></a>
            <a className="button secondary" href="#printers">Compare featured models</a>
          </div>
        </div>
        <img className="home-masthead-photo" src={sitePath('/images/hp-envy-workspace.webp')} alt="Illustration of an HP ENVY printer on a home desk" width="1280" height="960" fetchPriority="high" />
      </div>
    </section>

    <section className="container home-section" id="categories" aria-labelledby="department-heading">
      <div className="home-section-heading">
        <div><p className="home-kicker">Shop by use</p><h2 id="department-heading">What are you printing?</h2></div>
        <a className="text-link" href={sitePath('/products/')}>All models <span aria-hidden="true">↗</span></a>
      </div>
      <div className="home-departments">
        {departments.map(({ title, text, path, model, products }, index) => (
          <a className={`home-department department-${index}`} key={title} href={sitePath(path)}>
            <div className="department-image"><CatalogueImage product={modelById.get(model)} decorative /></div>
            <div className="department-copy">
              <h3>{title}</h3><p>{text}</p>
              <span>{products.length} models <span aria-hidden="true">↗</span></span>
            </div>
          </a>
        ))}
      </div>
    </section>

    <section className="home-featured" id="printers" aria-labelledby="featured-heading">
      <div className="container home-section">
        <div className="home-section-heading">
          <div><p className="home-kicker">From the catalogue</p><h2 id="featured-heading">Featured models</h2></div>
          <div className="home-filters" role="group" aria-label="Featured model filters">
            {featured.map(({ label }, index) => <button type="button" key={label} aria-pressed={group === index} onClick={() => setGroup(index)}>{label}</button>)}
          </div>
        </div>
        <div className="grid four home-product-grid">
          {featured[group].models.map(id => (
            <ProductCard key={id} product={modelById.get(id)}>
              <label className="compare-choice">
                <input type="checkbox" checked={selection.includes(id)} disabled={selection.length === 3 && !selection.includes(id)} onChange={() => toggleCompare(id)} aria-label={`Compare ${modelById.get(id).name}`} />
                Compare
              </label>
            </ProductCard>
          ))}
        </div>
        <section className="home-compare" id="shop-smart" aria-labelledby="compare-heading">
          <h3 id="compare-heading">Compare your shortlist</h3>
          <p role="status">{selection.length} of 3 selected. Choose models above to see their price and type side by side.</p>
          {selectedProducts.length > 0 && <>
            <div className="compare-scroll" tabIndex={0} role="region" aria-label="Model comparison table">
              <table>
                <thead><tr><th scope="col">Model</th>{selectedProducts.map(product => <th scope="col" key={product.id}><a href={sitePath(`/products/${product.id}/`)}>{product.name}</a></th>)}</tr></thead>
                <tbody>
                  <tr><th scope="row">Listed price</th>{selectedProducts.map(product => <td key={product.id}>{money(product.cents)}</td>)}</tr>
                  <tr><th scope="row">Type</th>{selectedProducts.map(product => <td key={product.id}>{product.category === 'scanner' ? 'Document scanner' : product.category === 'laser' ? 'Laser printer' : product.id.startsWith('smart-tank') ? 'Ink tank printer' : 'Inkjet printer'}</td>)}</tr>
                  <tr><th scope="row">All-in-one</th>{selectedProducts.map(product => <td key={product.id}>{product.allInOne ? 'Yes' : 'No'}</td>)}</tr>
                </tbody>
              </table>
            </div>
            <button className="text-link compare-clear" type="button" onClick={() => setSelection([])}>Clear selection</button>
          </>}
        </section>
      </div>
    </section>

    <section className="container home-section" id="guides" aria-labelledby="guide-heading">
      <div className="home-section-heading">
        <div><p className="home-kicker">Buying guides</p><h2 id="guide-heading">Get to know your options.</h2></div>
        <a className="text-link" href={sitePath('/guides/')}>Guide library <span aria-hidden="true">↗</span></a>
      </div>
      <div className="home-guides">
        {homepageGuides.map(guide => <a key={guide.slug} href={sitePath(`/guides/${guide.slug}/`)}>
          <span>{guide.category}</span><h3>{guide.title}</h3><span className="guide-arrow" aria-hidden="true">↗</span>
        </a>)}
      </div>
    </section>

    <section className="container home-section home-faq" id="faq" aria-labelledby="faq-heading">
      <div id="about"><p className="home-kicker">About Paperline</p><h2 id="faq-heading">A few things to know.</h2><p>Paperline brings printer specs, catalogue prices and buying guides together so you can build a shortlist.</p></div>
      <div>{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </section>
  </>;
}
