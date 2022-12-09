import { html } from '../../node_modules/lit-html/lit-html.js';

export const navigationTemplate = () => html`
  <ul>
    <li><a aria-label="Home" href="/">Home</a></li>
    <li><a aria-label="Catalog" href="/catalog">Catalog</a></li>
  </ul>
`;
