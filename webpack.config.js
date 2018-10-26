/*
    ./webpack.config.js
*/

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body"
})

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: [/node_modules/, /dist/] },        
      { test: /\.jsx?$/, loader: "babel-loader", exclude: [/node_modules/, /dist/] },
      { test: /\.css$/, loader: ["style-loader", "css-loader", "less-loader", "sass-loader"]},
      { test: /\.gif$/, loader: "url-loader?limit:10240&mimetype=image/gif" },
      { test: /\.jpg/, loader: "url-loader?limit:10240&mimetype=image/jpg" },
      { test: /\.jpeg$/, loader: "url-loader?limit:10240&mimetype=image/jpg" },
      { test: /\.png$/, loader: "url-loader?limit:10240&mimetype=image/png" },
      { test: /\.svg$/, loader: "url-loader?limit:10240&mimetype=image/svg+xml" },
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  // add this line
  plugins: [HtmlWebpackPluginConfig]
}