const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "development",
  devServer: {
    contentBase: "./dist",
    watchContentBase: true,
    host: "0.0.0.0",
    port: 1234,
    allowedHosts: ["sandbox.floriankempenich.com"]
  }
};

module.exports = config;
