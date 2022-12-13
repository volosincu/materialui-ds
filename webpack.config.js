const path = require('path');
const Webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpackBundleAnalyzer = require('webpack-bundle-analyzer');

process.env.NODE_ENV = 'production';

module.exports = {
  entry: {
    index: './components/DesignSystem.ts',
  },
  target: 'web',
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'lib'),
    library: {
      name: 'materialui-ds',
      type: 'umd',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', 'css'],
  },
  externals: [
    nodeExternals({
      modulesFromFile: {
        excludeFromBundle: ['devDependencies', 'dependencies'],
      },
    }),
  ],
  module: {
    rules: [
      {
        type: 'javascript/auto',
        test: /\.json$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './',
        },
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: [/(node_modules)/],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: [/(node_modules)/],
        loader: 'source-map-loader',
      },
      {
        test: /\.(jpeg|jpg|gif|png|svg|woff|woff2|ttf|eot)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(css)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [() => [require('cssnano')]],
              },
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
      fix: false,
      emitError: true,
      emitWarning: true,
      failOnError: true,
    }),
  ],
};
