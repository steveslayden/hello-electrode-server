"use strict";

const logger = require("winston");
const helloPlugin = require("./hello-plugin");

const config = {
  plugins: {
    hello: {
      module: "./lib/hello-plugin",
      options: {}
    }
  }
};

module.exports = () => {
  require("electrode-server")(config);
};

