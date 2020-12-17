const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./build/"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        test: /\.jsx$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  devServer: {
    hot: true,
    host: "0.0.0.0",
    port: "4040",
    inline: true,
    disableHostCheck: true,
    public: "192.168.0.5:4040",
    open: true,
  },
};
