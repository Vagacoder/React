// import path from 'path';
// import getFilesFromDir from './src/config/files';
// import HtmlWebPackPlugin from 'html-webpack-plugin';
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const getFilesFromDir = require("./src/config/files");


const PAGE_DIR = path.join("src", "pages", path.sep);

const jsFiles = getFilesFromDir(PAGE_DIR, [".js"]);

// export const entry = {
//     'index': './src/index.js',
//     'products/product-1': './src/pages/products/product-1.js',
//     'contact': './src/pages/contact.js'
// };

const entry = jsFiles.reduce((obj, filePath) => {
  const fileNameOnly = filePath.replace(path.extname(filePath), "").replace(PAGE_DIR, "");
  obj[fileNameOnly] = `./${filePath}`;
  return obj;
}, {});


const htmlFiles = getFilesFromDir(PAGE_DIR, [".html"]);

// const plugins = [
//     new HtmlWebPackPlugin({
//         chunks: ["contact", "verndor"],
//         template: "src/pages/contact.html",
//         filename: "contact.html"
//     })
// ]

const htmlPlugins = htmlFiles.map((filePath) => {
  const fileName = filePath.replace(PAGE_DIR, "");
  return new HtmlWebPackPlugin({
    chunks: [fileName.replace(path.extname(fileName), ""), "vendor"],
    template: filePath,
    filename: fileName
  })
})

module.exports = {
  entry: entry,
  plugins: [...htmlPlugins],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src", "components")
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
          ]
        }
      }
    }]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          enforce: true
        }
      }
    }
  }
};