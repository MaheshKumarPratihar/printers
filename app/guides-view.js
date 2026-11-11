import { sitePath } from './site-path';
import GuideIcon from './guide-icon';
import { guideLibrary } from './guide-articles';

export default function GuidesView() {
  return <>
    <section className="guide-library-hero"><div className="container">
      <p className="library-eyebrow">{guideLibrary.length} PRINTER BUYING GUIDES</p>
      <h1>Inkjet Printer Guide Library</h1>
      <p className="library-disclosure">All buying guides are informational only. Paperline is an independent storefront. Product names are used to identify products; this site is not affiliated with or endorsed by printer manufacturers.</p>
      <p className="library-description">Your resource for inkjet printer buying decisions, everyday printing needs, ink costs, and compatibility.</p>
      <div className="library-benefits"><span><span aria-hidden="true">▤</span> Practical buying guidance</span><span><span aria-hidden="true">✓</span> Compare features and costs</span><span><span aria-hidden="true">ϟ</span> Find your next printer</span></div>
      <div className="library-tags"><span>Buying Advice</span><span>Plan Your Budget</span><span>Make Informed Choices</span><a href={sitePath('/inkjet-printers/')}>Explore Available Printers</a></div>
      <div className="library-actions"><a className="button" href={sitePath('/products/')}>Browse All Printers</a><a className="button secondary" href={sitePath('/contact/')}>Contact Us</a></div>
    </div></section>
    <div className="container">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={sitePath('/')}>Home</a><span>/</span><span aria-current="page">Buying Guides</span></nav>
      <section className="card guide-intro">
        <h2>Guidance for Choosing the Right Inkjet Printer</h2>
        <p>Choosing a printer gets easier when you know what you print, how often you print it, and what you can spend on supplies. Use these guides to compare features for your home, office, or creative projects.</p>
        <p>Start with a buying guide or jump to a specific topic, from wireless and mobile printing to paper handling, ink costs, and maintenance.</p>
      </section>
    </div>
    <section className="container section guide-library-content">
      <h2>Explore Our {guideLibrary.length} Buying Guides</h2>
      <p>Find advice for your first printer, your next upgrade, or the model you already own.</p>
      <div className="grid three">
        {guideLibrary.map(({ slug, category, title, description }, index) => (
          <a className="card library-guide guide-index-card" href={sitePath(`/guides/${slug}/`)} id={index === 0 ? 'inkjet' : slug} key={slug}>
            <div className="guide-index-meta"><span>Guide #{index + 1}</span><span className="library-topic">{category}</span></div>
            <div className="guide-index-heading">
              <GuideIcon category={category} />
              <div><h3>{title}</h3><p>{description}</p></div>
            </div>
            <span className="text-link">Read guide <span aria-hidden="true">→</span></span>
          </a>
        ))}
      </div>
    </section>
    <section className="container card guide-cta guide-library-cta">
      <h2>Ready to Find Your Perfect Printer?</h2>
      <p>Browse the printer catalogue and compare models using what you learned.</p>
      <div className="library-actions"><a className="button" href={sitePath('/products/')}>Shop All Printers</a><a className="button secondary" href={sitePath('/contact/')}>Contact Us</a></div>
    </section>
  </>;
}
