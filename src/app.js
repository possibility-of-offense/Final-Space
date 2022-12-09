import page from '../node_modules/page/page.mjs';
import { navigationTemplate } from './dom/navigationView.js';
import { addNav } from './middlewares/nav.js';
import { addRender } from './middlewares/render.js';
import { catalogView } from './dom/catalogView.js';
import { detailsView } from './dom/detailsView.js';

// accordion();
const roots = {
  nav: document.getElementById('main-nav'),
  main: document.querySelector('main'),
};

page(addRender(roots.main, roots.nav));
page(addNav(navigationTemplate()));
// page('/', homeView);
page('/catalog', catalogView);
page('/details/:id', detailsView);
page.start();
