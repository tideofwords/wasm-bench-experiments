// webpack.config.js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./www/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  experiments: {
    asyncWebAssembly: true,
  },

  resolve: {
    // Any `import ... from "env"` inside your Wasm will now
    // be redirected to the shim file you just wrote:
    alias: {
      env: path.resolve(__dirname, "www", "env-shim.js"),
    },
    extensions: [".js", ".wasm"],
  },

  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: "webassembly/async",
      },
    ],
  },

  devServer: {
    static: [
      path.join(__dirname, "www"),
      path.join(__dirname, "pkg"),
    ],
    port: 8080,
    open: true,
  },
};
