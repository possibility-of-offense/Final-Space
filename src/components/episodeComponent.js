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
          <div class="episode-card-body">
            <div class="heading card-header">
              Characters
            </div>
            <div class="episode-card-character">
              <img src="https://finalspaceapi.com/api/character/avatar/gary_goodspeed.png" alt="img goes here">
              <p id="character-name">Name goes here</p>
              <div class="details">See details</div>
            </div>
            <div class="episode-card-loop-buttons">
              <a href="#" class="previous-btn">Prev</a>
              <a href="#" class="next-btn">Next</a>
            </div>
          </div>
        </div>
`;
