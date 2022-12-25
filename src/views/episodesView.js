import { html } from '../../node_modules/lit-html/lit-html.js';
import { getSingleChar } from '../api/charactersService.js';
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

export const episodesView = async ctx => {
    const episodes = await getLimitEpisodes(5);
    // need to get all the characters
    ctx.renderContent(episodesTemplate(episodes));
};
