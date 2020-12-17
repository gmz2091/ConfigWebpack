const path = require("path");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/js/index.js"),
    contact: path.resolve(__dirname, "src/js/contact.js"),
    precios: path.resolve(__dirname, "src/js/precios.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
};
