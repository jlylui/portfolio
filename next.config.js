// next.config.js
require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");
const withCSS = require("@zeit/next-css");
const optimizedImages = require("next-optimized-images");

module.exports = withCSS(
{
    optimizeImagesInDev: true,
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
    },
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300 // delay before rebuilding
      };
      return config;
    }
  }
);
