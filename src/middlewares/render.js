import { render } from '../../node_modules/lit-html/lit-html.js';

export const addRender = (mainRoot, navRoot) => {
  return (ctx, next) => {
    ctx.renderContent = content => render(content, mainRoot);
    ctx.renderNav = template => render(template, navRoot);
    next();
  };
};
