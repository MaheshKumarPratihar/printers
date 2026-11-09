import { sitePath } from '../site-path';
import Storefront from '../storefront';
import Catalogue from '../catalogue';
import { scannerCatalogue } from '../products';

export const metadata = {
  title: 'Document Scanners | InkjetProGuide',
  description: 'Compare standalone sheet-feed, flatbed, and network document scanners.',
};

export default function Page() {
  return <Storefront page="scanners">
    <nav className="container breadcrumbs scanner-width" aria-label="Breadcrumb">
      <a href={sitePath('/')}>Home</a><span aria-hidden="true">/</span><span aria-current="page">Scanners</span>
    </nav>
    <section className="scanner-hero">
      <div className="container hero-grid scanner-width">
        <div>
          <p className="inkjet-eyebrow">PAPER IN. CLUTTER OUT.</p>
          <h1>Document Scanners</h1>
          <p className="scanner-lead">Dedicated scanners for paperwork, receipts and everyday document workflows.</p>
          <a className="button" href="#catalogue">Shop Scanners <span aria-hidden="true">→</span></a>
        </div>
        <div className="card scanner-visual">
          <img src={sitePath('/images/scanner-hero.png')} width="1000" height="720" alt="HP ScanJet Pro 2600 f1 document scanner" />
        </div>
      </div>
    </section>
    <div className="container scanner-intro">
      <p>Dedicated document scanners help you turn paper records into files without buying another printer. Your starting point might be household receipts, signed business forms or a larger document archive. This catalogue focuses on standalone scanners, including sheet-feed, flatbed and network models. Compare each model with the originals you handle, the devices you use and the space you have available. Then open the product listing to check the full model name and listed price.</p>
    </div>
    <Catalogue products={scannerCatalogue} itemName="scanners" />
    <article className="container buying-article scanner-advice">
      <section>
        <h2>Choose for the documents you actually handle</h2>
        <p>Start with the originals rather than a speed figure. Loose sheets, receipts, photographs and bound pages can need different handling. A sheet-feed design and a flatbed are not interchangeable for every task. Check the manufacturer’s guidance for your paper sizes and materials before deciding how you will use the scanner.</p>
        <p>Think about the size of a normal scanning session. Occasional household paperwork is different from processing a stack of forms each day. Compare the documented feeder capacity and workload guidance, and allow room for loading originals and collecting them after scanning.</p>
      </section>
      <section>
        <h2>Check connections, software and sidedness</h2>
        <p>Confirm the connections and operating systems listed for the exact model. A network designation does not automatically mean wireless access, and a USB connection does not establish compatibility with every computer. Review any software requirements before planning a shared scanning station.</p>
        <p>If you need searchable documents, check what text-recognition software is included and which file formats it produces. Verify automatic two-sided scanning separately from the presence of a document feeder. Those details determine the steps between feeding a page and filing the result.</p>
      </section>
      <section>
        <h2>Keep scanning separate from printing</h2>
        <p>A dedicated scanner makes sense when digitizing paper is the main job and printing is already covered elsewhere. If you also need to print and copy, compare the <a className="text-link" href={sitePath('/all-in-one-printers/')}>all-in-one collection</a>. This page lists standalone scanners.</p>
      </section>
    </article>
    <section className="section muted">
      <div className="container scanner-width grid two related-guides">
        <div className="card">
          <h2>Related buying guides</h2>
          <a href={sitePath('/guides/all-in-one-vs-print-only/')}>All-in-one versus print-only printers</a>
          <a href={sitePath('/guides/home-use/')}>Plan a home-office workspace</a>
          <a href={sitePath('/guides/wireless-setup/')}>Understand wired and wireless connections</a>
        </div>
        <div className="card">
          <h2>Explore related categories</h2>
          <a href={sitePath('/all-in-one-printers/')}>Printers with scanning and copying</a>
          <a href={sitePath('/office-printers/')}>Browse work and office printers</a>
          <a href={sitePath('/home-printers/')}>Explore home printers</a>
        </div>
      </div>
    </section>
    <section className="container section printer-faq" id="scanner-faq">
      <h2>Scanner FAQ</h2>
      <article className="card">
        <h3>Are these scanners or all-in-one printers?</h3>
        <p>This collection shows dedicated scanners. For a device that also prints, use the <a className="text-link" href={sitePath('/all-in-one-printers/')}>All-in-One Printers</a> page and check the functions of the individual model.</p>
      </article>
      <article className="card">
        <h3>Should I choose a flatbed or a sheet-feed scanner?</h3>
        <p>Match the design to your originals. Check the listing and manufacturer guidance for bound material, delicate pages, paper sizes and batch handling rather than assuming one design covers every document.</p>
      </article>
      <article className="card">
        <h3>Does a feeder always scan both sides automatically?</h3>
        <p>No. Verify automatic two-sided scanning in the model’s specifications. Having a document feeder alone does not confirm how the scanner handles the reverse side of a page.</p>
      </article>
      <article className="card">
        <h3>Will a network scanner work over Wi-Fi?</h3>
        <p>Only if wireless connectivity is explicitly listed. Network access may use a wired connection, so compare the actual connection methods and software requirements with your workspace.</p>
      </article>
    </section>
    <p className="container scanner-width manufacturer-note">InkjetProGuide is an independent storefront and is not affiliated with, authorized by or endorsed by HP Inc. HP and ScanJet are used here to identify products.</p>
  </Storefront>;
}
