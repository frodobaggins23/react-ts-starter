const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'awesome-typescript-loader']
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components')
    }
  },
  devtool: 'source-map',
  plugins: [
    new CheckerPlugin()
  ],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    hot: true
  }
}
