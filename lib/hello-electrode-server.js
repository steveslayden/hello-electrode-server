"use strict";

const config = require("electrode-confippet").config;
const logger = require("winston");
const helloPlugin = require("./hello-plugin");

module.exports = () => {
  require("electrode-server")(config.$("electrodeServer"));
};

