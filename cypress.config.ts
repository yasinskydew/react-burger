import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3000/react-burger',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
