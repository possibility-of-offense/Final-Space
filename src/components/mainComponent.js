import { html } from '../../node_modules/lit-html/lit-html.js';

export const mainComponent = card => html`
  <div class="card box-shadow-1">
    <figure>
      <img
        class="card-image"
        src="https://images.unsplash.com/photo-1669025466409-450f22c7561a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Volcano"
        title="Volcano"
      />
    </figure>
    <section class="card-info">
      <header>
        <h2>Title</h2>
      </header>
      <div class="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquid sint voluptate ex eveniet hic
          aspernatur? Soluta quos placeat veniam?
        </p>
        <a class="box-shadow-2" href="/details/some-card">Go to</a>
      </div>
    </section>
  </div>
`;
