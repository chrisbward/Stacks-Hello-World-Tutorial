const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
    resolve: {
        extensions: [".ts", ".js", ".css"]
    },
    plugins: [new MiniCssExtractPlugin({filename: "[name].css"}), new HtmlWebpackPlugin({ template: "./src/index.html" })],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/frontend\/node_modules/],
                use: [
                  {
                    loader: "ts-loader"
                  }
                ]
            },
            {
                test: /\.css$/,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      importLoaders: 1,
                      modules: true,
                    },
                  },
                ],
            }, 
        ],
    },
    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
        ],
    },
    entry: './src/_lib/scripts/index.ts',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
};