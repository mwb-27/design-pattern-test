const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "./release"), //根目录
    open: true, // 自动打开浏览器
    port: 9000,
  },
};
