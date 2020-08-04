const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-atoms-button-button-mdx": hot(preferDefault(require("/home/sander/dev/shiver-design-system/src/components/atoms/Button/Button.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/sander/dev/shiver-design-system/.docz/src/pages/404.js")))
}

