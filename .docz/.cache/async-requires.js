// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-components-atoms-button-button-mdx": () => import("./../../../src/components/atoms/Button/Button.mdx" /* webpackChunkName: "component---src-components-atoms-button-button-mdx" */),
  "component---src-pages-404-js": () => import("./../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

