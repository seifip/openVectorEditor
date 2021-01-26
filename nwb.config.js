const path = require("path");

module.exports = {
  type: "react-component",
  npm: {
    umd: {},
    // comment out the next line and comment in the following lines to avoid building anything but the umd build
    esModules: true,
    // esModules: console.log("commentMeBackOut") || false,
    // cjs: console.log("commentMeBackOut") || false
  },
  ...(process.env.WITH_COVERAGE && {
    babel: {
      plugins: ["istanbul"]
    }
  }),
  webpack: {
    aliases: {
      // **** You can comment one or more of these in to override an npm module with a local module. *****
      // **** Just be sure to comment them back out before committing! *****
      // "ve-range-utils":
      //   console.log("comment me back out!") ||
      //   path.resolve("../ve-range-utils/src/"),
      // "ve-sequence-utils":
      //   console.log("comment me back out!") ||
      //   path.resolve("../ve-sequence-utils/src/"),
      // "bio-parsers":
      //   console.log("comment me back out!") ||
      //   path.resolve("../ve-sequence-parsers/src/parsers/"),
      // "teselagen-react-components":
      //   console.log("comment me back out!") ||
      //   path.resolve("../teselagen-react-components/src/"),
      // "@teselagen/apollo-methods":
      //   console.log("comment me back out!") ||
      //   path.resolve("../teselagen-common/apollo-methods/src/"),

      //don't comment this out!
      react: path.resolve(__dirname, "node_modules/react"),
      "@blueprintjs/core": path.resolve(
        __dirname,
        "node_modules/@blueprintjs/core"
      ),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom")
    },
    extra: {
      devtool: "source-map"
    },
    extractCSS: {
      filename: "[name].css"
    }
  }
};

// webpack: {
//     extra: {
//         devtool: 'inline-source-map'
//     }
// }
