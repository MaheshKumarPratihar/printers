import GuideIcon from '../../guide-icon';
import { notFound } from 'next/navigation';
import Storefront from '../../storefront';
import { allGuideArticles } from '../../guide-articles';

export const dynamicParams = false;

export function generateStaticParams() {
  return allGuideArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = allGuideArticles.find(article => article.slug === slug);
  if (!guide) notFound();
  return { title: guide.title + ' | InkjetProGuide', description: guide.description };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const guide = allGuideArticles.find(article => article.slug === slug);
  if (!guide) notFound();

  const { title, readTime } = guide;


  return <Storefront page="guides">
    <div className={guide.keyPoints ? "choosing-guide" : undefined}>
    {readTime && <div className="container guide-reading guide-reading-time"><span className="guide-read-time">{readTime}</span></div>}
    <header className="guide-article-hero">
      <div className="container guide-reading">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/guides/">Buying Guides</a><span>/</span><span aria-current="page">{title}</span></nav>
        <GuideIcon category={guide.category} />
        <h1>{title}</h1>
        <p>{guide.introduction ?? guide.description}</p>
      </div>
    </header>
    <article className="container guide-reading guide-article">
      {guide.sections.map(([heading, paragraph]) => <section key={heading}>
        <h2>{heading}</h2><p>{paragraph}</p>
      </section>)}
      {guide.keyPoints && <section>
        <h2>Key Points</h2>
        <ul>{guide.keyPoints.map(point => <li key={point}>{point}</li>)}</ul>
      </section>}
      {guide.relatedCategories?.length > 0 && <section>
        <h2>Explore related printer categories</h2>
        {guide.relatedCategories.map(({ label, href }) => <p key={href}><a className="text-link" href={href}>{label}</a></p>)}
      </section>}
      <aside className="card guide-cta">
        <h2>Ready to Find Your Perfect Printer?</h2>
        <p>Browse the catalogue or keep exploring the buying guides.</p>
        <div className="library-actions"><a className="button" href="/products/">Browse All Printers</a><a className="button secondary" href="/guides/">View All Guides</a></div>
      </aside>
    </article>
    </div>
  </Storefront>;
}
