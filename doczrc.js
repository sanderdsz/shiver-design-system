import * as path from "path";

import theme from "./docs/theme/prism/prism";
const PUBLIC = path.resolve(__dirname, "public");

export default {
  title: "Shiver",
  description: "a winter cold design system",
  public: "public",
  themesDir: "docs/theme",
  typescript: true,
  filterComponents: (files) =>
    files.filter((filepath) => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
  themeConfig: {
    colors: {
      primary: "#88c0d0",
      text: "#2e3440",
      background: "#eceff4",
      border: "#3b4252",
      muted: "#c8ccd2",
      link: "#88c0d0",
      header: {
        text: "#2e3440",
        bg: "#88c0d0",
        button: {
          bg: "#3b4252",
          color: "#eceff4",
        },
      },
      sidebar: {
        bg: "#e5e9f0",
        navLinkActive: "#88c0d0",
      },
      props: {
        bg: "#e5e9f0",
        descriptionBg: "#e5e9f0",
      },
      playground: {
        bg: "#eceff4",
        border: "#3b4252",
      },
      logo: {
        src: "/public/images/logo.svg",
        width: 150,
      },
      modes: {
        dark: {
          background: "#3b4252",
          text: "#eceff4",
          border: "#c8ccd2",
          header: {
            text: "#e5e9f0",
            bg: "#5e81ac",
            button: {
              bg: "#c8ccd2",
              color: "#2e3440",
            },
          },
          props: {
            bg: "#434c5e",
            descriptionBg: "#434c5e",
            text: "#eceff4",
            descriptionText: "#eceff4",
            defaultValue: "#88c0d0",
          },
          sidebar: {
            bg: "#434c5e",
            navGroup: "#eceff4",
            navLink: "#eceff4",
            navLinkActive: "#88c0d0",
            tocLink: "#d8dee9",
            tocLinkActive: "#c8ccd2",
          },
          playground: {
            bg: "#434c5e",
            border: "#c8ccd2",
          },
        },
      },
    },
    prismTheme: theme,
  },
  ignore: [
    "**/docs/storybook/**",
    "/docs/storybook/**",
    "index.stories.mdx",
    "README.md",
    "Button.stories.tsx",
  ],
  dest: "/dist",
  onCreateWebpackChain: (config) => {
    config.resolve.alias.set("@images", `${PUBLIC}/images`);

    return config;
  },
};
