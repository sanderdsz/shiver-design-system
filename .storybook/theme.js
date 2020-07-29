import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "#88c0d0",
  colorSecondary: "#5e81ac",

  // UI
  appBg: "#e5e9f0",
  appContentBg: "#eceff4",
  appBorderColor: "#c8ccd2",
  appBorderRadius: 6,

  // Text colors
  textColor: "#2e3440",
  textInverseColor: "#88c0d0",

  // Toolbar default and active colors
  barTextColor: "#4c566a",
  barSelectedColor: "#2e3440",
  barBg: "#c8ccd2",

  // Form colors
  inputBg: "#e5e9f0",
  inputBorder: "#2e3440",
  inputTextColor: "#2e3440",
  inputBorderRadius: 6,
});
