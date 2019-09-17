// next.config.js
require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack: function(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]"
        }
      }
    });
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];
    return config;
  }
});
