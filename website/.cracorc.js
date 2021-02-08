// SEE MORE ON THE CRACO DOCUMENTATION : https://github.com/gsoft-inc/craco
const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

// HERE IS THE PATH TO OUR PACKAGE FOLDER
const pathToLocalPackages = path.join(__dirname, "../packages");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat[pathToLocalPackages];
      }
      return webpackConfig;
    },
  },
};
