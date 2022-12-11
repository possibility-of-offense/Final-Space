import { html } from '../../node_modules/lit-html/lit-html.js';
import { getLimitEpisodes } from '../api/episodesService.js';
import { episodeComponent } from '../components/episodeComponent.js';

const episodesTemplate = episodes => html`
  <section id="episodes-section">
    <div class="cards container-wide">
      ${Object.values(episodes).map(episodeComponent)}
      <!-- episodes go here -->
    </div>
  </section>
`;

export const episodesView = async (ctx) => {
  const episodes = await getLimitEpisodes(5)
  Object.values(episodes).forEach(episode => console.log(episode.air_date))
  ctx.renderContent(episodesTemplate(episodes))
}