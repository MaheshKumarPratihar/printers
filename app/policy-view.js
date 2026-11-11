import { policies } from './policy-content';
import { sitePath } from './site-path';

export default function PolicyView({ slug }) {
  const { title, intro, sections } = policies[slug];

  return <>
    <header className="help-hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{intro}</p>
        <p className="policy-date">Updated <time dateTime="2026-11-11">November 11, 2026</time></p>
      </div>
    </header>
    <div className="container policy-layout">
      <nav className="card policy-contents" aria-labelledby="policy-contents-heading">
        <h2 id="policy-contents-heading">On this page</h2>
        <ul>{sections.map(([id, heading]) => <li key={id}><a href={`#${id}`}>{heading}</a></li>)}</ul>
      </nav>
      <div className="policy-sections">
        {sections.map(([id, heading, body, link]) => (
          <section className="card policy-section" id={id} key={id}>
            <h2>{heading}</h2>
            <p>{body}</p>
            {link && <a className="text-link" href={sitePath(link[1])}>{link[0]}</a>}
          </section>
        ))}
        <a className="button secondary" href={sitePath('/contact/')}>Contact Us</a>
      </div>
    </div>
  </>;
}
