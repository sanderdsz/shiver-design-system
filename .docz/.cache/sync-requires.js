const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/sander.zuchinalli/Documents/Dev/Sander/shiver-design-system/.docz/.cache/dev-404-page.js"))),
  "component---src-components-atoms-button-button-mdx": hot(preferDefault(require("/home/sander.zuchinalli/Documents/Dev/Sander/shiver-design-system/src/components/atoms/Button/Button.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/sander.zuchinalli/Documents/Dev/Sander/shiver-design-system/.docz/src/pages/404.js")))
}

