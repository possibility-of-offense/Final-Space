import page from "../node_modules/page/page.mjs";

import { addNav } from "./middlewares/nav.js";
import { addRender } from "./middlewares/render.js";

import { navigationTemplate } from "./views/navigationView.js";
import { catalogView } from "./views/catalogView.js";
import { detailsView } from "./views/detailsView.js";
import { homeView } from "./views/homeView.js";
import { store } from "./store/store.js";

// accordion();
const roots = {
  nav: document.getElementById("main-nav"),
  main: document.querySelector("main"),
};

page(addRender(roots.main, roots.nav));
page(addNav(navigationTemplate()));

// ADDED
function clearTimer(ctx, next) {
  if (store.timer && !ctx.path.includes("catalog")) {
    clearTimeout(store.timer);
  }
  next();
}
page(clearTimer);

// ADDED

page("/", homeView);
page("/catalog", catalogView);
page("/details/:id", detailsView);
page.start();
