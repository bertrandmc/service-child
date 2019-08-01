const path = require('path');

module.exports = {
  entry: path.join(__dirname, "src/shared/Overview.js"),
  output: {
    library: 'overview',
    libraryTarget: 'umd',
    filename: 'Overview.js',
    path: path.resolve(__dirname, "dist/")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'styled-components': {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      root: "styled"
    }
  }
};
