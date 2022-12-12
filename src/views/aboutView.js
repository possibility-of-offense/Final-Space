import { html } from "../../node_modules/lit-html/lit-html.js";

function renderAboutView() {
  return html`<section class="about-view container-narrow">
    <h1>About us</h1>
    <div class="contributors">
      <div class="box-shadow-1">
        <figure>
          <img
            alt="Ventsislav"
            title="Ventsislav"
            src="https://avatars.githubusercontent.com/u/73138031?v=4"
          />
        </figure>
        <div>
          <header>
            <h3>Ventsislav Iliev</h3>
          </header>
        </div>
        <div class="about-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit
            quaerat neque repudiandae excepturi ab officiis alias, vel, cumque
            fuga animi error minus. Est porro aperiam nemo molestiae laborum
            modi?
          </p>
          <a href="https://github.com/possibility-of-offense" target="_blank"
            >GitHub Profile</a
          >
        </div>
      </div>
      <div class="box-shadow-1">
        <figure>
          <img
            alt="Borislav"
            title="Borislav"
            src="https://avatars.githubusercontent.com/u/96978166?v=4"
          />
        </figure>
        <div>
          <header>
            <h3>Borislav Godumov</h3>
          </header>
        </div>
        <div class="about-info">
          <div class="inner-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              suscipit quaerat neque repudiandae excepturi ab officiis alias,
              vel, cumque fuga animi error minus. Est porro aperiam nemo
              molestiae laborum modi?
            </p>
            <a href="https://github.com/khanark" target="_blank"
              >GitHub Profile</a
            >
          </div>
        </div>
      </div>
    </div>
  </section> `;
}

export function aboutView(ctx) {
  ctx.renderContent(renderAboutView());
}
