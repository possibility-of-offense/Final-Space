import { html } from '../../node_modules/lit-html/lit-html.js';
import { getLimitChars } from '../api/charactersService.js';
import { mainComponent } from '../components/mainComponent.js';

const catalogTemplate = chars => html`
  <section id="catalog-section">
    <!-- <h1 class="text-center">CATALOG VIEW</h1> -->
    <div class="cards container-wide">
      <!-- component goes here -->
      ${Object.values(chars).map(mainComponent)}
    </div>
  </section>
`;

export const catalogView = async (ctx) => {
  const chars = await getLimitChars(9)
  console.log(chars)
  ctx.renderContent(catalogTemplate(chars))
}