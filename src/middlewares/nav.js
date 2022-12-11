export const addNav = (template) => {
  return (ctx,next) => {
    ctx.renderNav(template)
    next()
  }
}