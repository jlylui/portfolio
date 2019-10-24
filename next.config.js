// next.config.js
require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");
const withCSS = require("@zeit/next-css");
const isProd = (process.env.NODE_ENV || "production") === "production";
const webpack = require("webpack");
const fetch = require("isomorphic-unfetch");

const assetPrefix = isProd ? "/portfolio" : "";

module.exports = withCSS({
  exportPathMap: async () => {
    const paths = {
      "/": { page: "/" },
      "/projects": { page: "/projects" }
    };
    // const res = await fetch(process.env.RESTURL_ASX_CODE_PROD);
    // const data = await res.json();
    // const asxCode = data.map(entry => entry.ASXCode);

    // asxCode.forEach(code => {
    //   paths[`/shares/${code}.AUS`] = {
    //     page: "/shares",
    //     query: { shareCode: `${code}.AUS` }
    //   };
    // });
    return paths;
  },
  assetPrefix: assetPrefix,
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
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      }),
      new webpack.DefinePlugin({
        "process.env.ASSET_PREFIX": JSON.stringify(assetPrefix)
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
});
