import * as path from 'path'

import theme from "./docs/dracula.js";
const PUBLIC = path.resolve(__dirname, 'public')

export default {
  title: 'Shiver',
  description: 'a winter cold design system',
  public: 'public',
  themesDir: 'docs/theme',
  typescript: true,
  filterComponents: (files) =>
    files.filter((filepath) => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
  themeConfig: {
    colors: {
      text: "#2e3440",
      link: "#ebcb8b",
      background: "#eceff4",
      border: "#3b4252",
      header: {
        bg: "#88c0d0",
        button: {
          bg: "#3b4252",
          color: "#eceff4",
        },
      },
      sidebar: {
        bg: "#eceff4",
      },
      props: {
        bg: "#e5e9f0",
        descriptionBg: "#e5e9f0",
      },
      playground: {
        bg: "#e5e9f0",
        border: "#3b4252",
      },
      logo: {
        src: '/public/images/logo.svg',
        width: 150,
      },
    },
    prismTheme: theme,
  },
  ignore: [
    "**/docs/**",
    "/docs/**",
    "index.stories.mdx",
    "README.md",
    "Button.stories.tsx",
  ],
  dest: "/dist",
  onCreateWebpackChain: config => {
    config.resolve.alias
      .set('@images', `${PUBLIC}/images`)

    return config
  }
};
