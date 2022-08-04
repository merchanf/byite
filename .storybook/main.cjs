const { mergeConfig } = require('vite');
const path = require("path");

module.exports = {
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: "@",
            replacement: path.resolve(__dirname, "./src"),
          },
          {
            find: "@components",
            replacement: path.resolve(__dirname, "./src/components"),
          },
        ],
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "./src/styles/main";`,
          },
        },
      },
    });
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
};
