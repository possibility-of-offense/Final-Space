import page from "../node_modules/page/page.mjs";
import { navigationTemplate } from "./views/navigationView.js";
import { addNav } from "./middlewares/nav.js";
import { addRender } from "./middlewares/render.js";
import { catalogView } from "./views/catalogView.js";
import { detailsView } from "./views/detailsView.js";
import { episodesView } from "./views/episodesView.js";
import { aboutView } from "./views/aboutView.js";

// accordion();
const roots = {
  nav: document.getElementById("main-nav"),
  main: document.querySelector("main"),
};

page(addRender(roots.main, roots.nav));
page(addNav(navigationTemplate()));
// page('/', homeView);
page("/catalog", catalogView);
page("/episodes", episodesView);
page("/details/:id", detailsView);
page("/about", aboutView);
page.start();
