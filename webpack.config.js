const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  optimization: { runtimeChunk: "single" },
};
