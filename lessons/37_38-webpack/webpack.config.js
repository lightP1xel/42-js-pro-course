const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const isProduction = (process.env.NODE_ENV = "production");

const productionPlugins = [
  new MiniCssExtractPlugin(),
  new ImageMinimizerPlugin({
    minimizerOptions: {
      plugins: [
        ["jpegtran", { progressive: true }],
        ["optipng", { optimizationLevel: 5 }],
      ],
    },
  }),
];

const config = {
  devtool: "source-map",
  mode: isProduction ? "production" : "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  resolve: {
    modules: ["node_modules", "src"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.png|jpeg$/i,
        use: ["file-loader"],
      },
      {
        test: /\.woff2$/i,
        use: ["file-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ].concat(isProduction ? productionPlugins : []),
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true,
  },
};

if (isProduction) {
  config.optimization = {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  };
}

module.exports = config;
