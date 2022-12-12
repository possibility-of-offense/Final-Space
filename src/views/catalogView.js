// import { html } from '../../node_modules/lit-html/lit-html.js';
// import { getLimitChars } from '../api/charactersService.js';
// import { mainComponent } from '../components/mainComponent.js';

// const catalogTemplate = chars => html`
//   <section id="catalog-section">
//     <!-- <h1 class="text-center">CATALOG VIEW</h1> -->
//     <div class="cards container-wide">
//       <!-- component goes here -->
//       ${Object.values(chars).map(mainComponent)}
//     </div>
//   </section>
// `;

// export const catalogView = async (ctx) => {
//   const chars = await getLimitChars(9)
//   ctx.renderContent(catalogTemplate(chars))
// }

import { html } from "../../node_modules/lit-html/lit-html.js";
import { mainComponent } from "../components/mainComponent.js";
import {
  handleButtonClick,
  paginateControllers,
} from "../controllers/paginateController.js";
import { store } from "../store/store.js";

const renderPagination = (query, next) => html`
  <div class="pagination-container">
    ${query === 1
      ? html``
      : html`<a
          @click=${(e) => handleButtonClick(store, true, e)}
          class="prev-link"
          href="/catalog?q=${query - 1}"
          >Prev</a
        >`}
    ${next
      ? html`<a
          @click=${(e) => handleButtonClick(store, false, e)}
          class="next-link"
          href="/catalog?q=${query + 1}"
          >Next</a
        >`
      : html``}
  </div>
`;

const catalogTemplate = (chars, querystring, nextElements) => {
  let q = querystring.split("=").pop();
  let query;

  if (q) {
    query = +q;
  } else {
    query = 1;
  }

  return html`
    <section id="catalog-section">
      <h1 class="text-center">CATALOG VIEW</h1>
      <div class="cards container-wide">
        <!-- component goes here -->
        ${Object.values(chars).map(mainComponent)}
        ${renderPagination(query, nextElements)}
      </div>
    </section>
  `;
};

export const catalogView = async (ctx) => {
  const { currentChars, nextElements } = await paginateControllers(store, ctx);

  ctx.renderContent(
    catalogTemplate(currentChars, ctx.querystring, nextElements)
  );
};
