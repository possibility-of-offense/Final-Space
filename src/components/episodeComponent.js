import { html } from "../../node_modules/lit-html/lit-html.js";

export const episodeComponent = (episode) => html`
        <div class="episode-card">
          <div class="episode-card-header">
            <div class="episode-card-info">
              <div class="heading">Release
                <p id="date">${episode.air_date}</h2>
              </div>
              <div class="heading">Director
                <p id="director">${episode.director}</h2>
              </div>
              <div class="heading">Writer
                <p id="writer">${episode.writer}</h2>
              </div>
            </div>
            <div class="episode-card-img">
            <div class="episode-card-name">
              <div class="heading">${episode.name}</div>
              </div>
              <img src=${episode.img_url} alt="episode-img">
            </div>
          </div>
        </div>
`;
