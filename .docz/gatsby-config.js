const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Shiver Design System',
    description: 'Shiver Design System',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {
          colors: {
            text: '#2e3440',
            link: '#ebcb8b',
            background: '#eceff4',
            border: '#3b4252',
            header: {
              bg: '#88c0d0',
              button: { bg: '#3b4252', color: '#eceff4' },
            },
            sidebar: { bg: '#eceff4' },
            props: { bg: '#e5e9f0', descriptionBg: '#e5e9f0' },
            playground: { bg: '#e5e9f0', border: '#3b4252' },
          },
          prismTheme: {
            plain: { color: '#F8F8F2', backgroundColor: '#434c5e' },
            styles: [
              { types: ['prolog'], style: { color: '#5E81AC' } },
              { types: ['constant'], style: { color: '#5E81AC' } },
              { types: ['builtin'], style: { color: '#5E81AC' } },
              { types: ['inserted'], style: { color: '#88C0D0' } },
              { types: ['function'], style: { color: '#88C0D0' } },
              { types: ['deleted'], style: { color: '#BF616A' } },
              { types: ['changed'], style: { color: '#D08770' } },
              { types: ['punctuation'], style: { color: '#D8DEE9' } },
              { types: ['symbol'], style: { color: '#D8DEE9' } },
              { types: ['string'], style: { color: '#88C0D0' } },
              { types: ['selector'], style: { color: '#88C0D0' } },
              { types: ['tag'], style: { color: '#88C0D0' } },
              { types: ['char'], style: { color: '#88C0D0' } },
              {
                types: ['variable'],
                style: { color: '#81A1C1', fontStyle: 'italic' },
              },
              {
                types: ['keyword'],
                style: { color: '#81A1C1', fontStyle: 'italic' },
              },
              { types: ['comment'], style: { color: '#c8ccd2' } },
              { types: ['attr-name'], style: { color: '#8FBCBB' } },
              { types: ['number'], style: { color: '#B48EAD' } },
            ],
          },
        },
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [
          '**/docs/**',
          '/docs/**',
          'index.stories.mdx',
          'README.md',
          'Button.stories.tsx',
        ],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/sander/dev/shiver-design-system/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Shiver Design System',
        description: 'Shiver Design System',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/sander/dev/shiver-design-system',
          templates:
            '/home/sander/dev/shiver-design-system/node_modules/docz-core/dist/templates',
          docz: '/home/sander/dev/shiver-design-system/.docz',
          cache: '/home/sander/dev/shiver-design-system/.docz/.cache',
          app: '/home/sander/dev/shiver-design-system/.docz/app',
          appPackageJson: '/home/sander/dev/shiver-design-system/package.json',
          appTsConfig: '/home/sander/dev/shiver-design-system/tsconfig.json',
          gatsbyConfig:
            '/home/sander/dev/shiver-design-system/gatsby-config.js',
          gatsbyBrowser:
            '/home/sander/dev/shiver-design-system/gatsby-browser.js',
          gatsbyNode: '/home/sander/dev/shiver-design-system/gatsby-node.js',
          gatsbySSR: '/home/sander/dev/shiver-design-system/gatsby-ssr.js',
          importsJs:
            '/home/sander/dev/shiver-design-system/.docz/app/imports.js',
          rootJs: '/home/sander/dev/shiver-design-system/.docz/app/root.jsx',
          indexJs: '/home/sander/dev/shiver-design-system/.docz/app/index.jsx',
          indexHtml:
            '/home/sander/dev/shiver-design-system/.docz/app/index.html',
          db: '/home/sander/dev/shiver-design-system/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
