import { html } from "../../node_modules/lit-html/lit-html.js";

function renderHomeView() {
  return html` <div class="home-view">
    <div>
      <h1>Welcome to our app</h1>
      <div>
        <p>Final</p>
        <p>Space</p>
      </div>
    </div>
  </div>`;
}

export const homeView = (ctx) => {
  ctx.renderContent(renderHomeView());
};
