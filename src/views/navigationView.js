import { html } from '../../node_modules/lit-html/lit-html.js';

export const navigationTemplate = () => html`
  <ul>
    <div class="left-nav">
      <li><a aria-label="Home" href="/">Home</a></li>
      <li><a aria-label="About" href="/about">About</a></li>
    </div>
    <div class="right-nav">
      <li><a aria-label="Characters" href="/catalog">Characters</a></li>
      <li><a aria-label="Episodes" href="/episodes">Episodes</a></li>
    </div>
  </ul>
`;
