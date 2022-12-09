import { html } from '../../node_modules/lit-html/lit-html.js';

export const mainComponent = card => html`
  <div class="card box-shadow-1">
    <figure>
      <img
        class="card-image"
        src=${card.img_url}
        alt="Volcano"
        title="Volcano"
      />
    </figure>
    <section class="card-info">
      <header>
        <h2>${card.name}</h2>
      </header>
      <div class="card-body">
        <p>${card.alias[0]}</p>
        <a class="box-shadow-2" href="/details/${card.id}">Go to</a>
      </div>
    </section>
  </div>
`;
