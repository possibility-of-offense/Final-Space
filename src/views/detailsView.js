import { html } from "../../node_modules/lit-html/lit-html.js";
import { getSingleChar } from "../api/charactersService.js";

const detailsTemplate = (card) => html`
<section id="details-section">
      <h1 class="text-center">SINGLE DETAILS VIEW</h1>
      <div class="single-details-view container-wide box-shadow-1">
        <div class="single-details-view__image">
          <!-- This anchor will lead to another view for the image -->
          <a href="javascript:void(0)">
            <img
              src=${card.img_url}
              alt="image" title="image" class="box-shadow-2" /></a>
        </div>
        <div class="single-details-view__info">
          <div>
            <div>
              <h2>${card.name}</h2>
            </div>
            <p>${card.species}</p>
          </div>
          <div>
            <p>
              Slogan here - Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Incidunt nemo sit vitae, vero illum odio necessitatibus
              sapiente ducimus eligendi, corrupti fugiat saepe voluptates vel
              pariatur aut perspiciatis. Facilis, quia ut! Lorem ipsum dolor
              sit, amet consectetur adipisicing elit.
            <p class="single-details-view__info--show-more-info"> Incidunt nemo sit vitae,
              vero illum odio necessitatibus sapiente ducimus eligendi, corrupti
              fugiat saepe voluptates vel pariatur aut perspiciatis. Facilis,
              quia ut!</p>
            <span class="single-details-view__info--show-more-btn">Show more</span>
            </p>
          </div>
          <hr />
          <div>
            <a href="https://www.google.com" target="_blank">Website - www.test.com</a>
            <p>Established - 1999 &copy;</p>
          </div>
        </div>
      </div>
    </section>
`;

export const detailsView = async (ctx) => {
  const char = await getSingleChar(ctx.params.id);
  ctx.renderContent(detailsTemplate(char));
};
