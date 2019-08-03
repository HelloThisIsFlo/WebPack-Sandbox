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
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Order of loaders: BOTTOM -> TOP
          "style-loader",
          { loader: "css-loader", options: { modules: true } },
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  }
};

module.exports = config;
