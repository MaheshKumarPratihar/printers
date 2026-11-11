import { sitePath } from './site-path';

export default function Brand() {
  return <a className="paperline-brand" href={sitePath('/')} aria-label="Paperline home">
    <span className="paperline-mark" aria-hidden="true" />
    <span>Paperline<span className="brand-period">.</span></span>
  </a>;
}
