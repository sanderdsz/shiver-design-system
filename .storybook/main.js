const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.(tsx|mdx)"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [
    "@storybook/addon-knobs",
    '@storybook/addon-actions/register',
    "@storybook/addon-viewport/register",
    "@storybook/addon-docs",
    "@storybook/addon-storysource"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
