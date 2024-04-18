const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const path = require('path')
const webpack = require('webpack')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    entry: {
      main: path.resolve(__dirname, '../src/script.js'),
    },
    output:
    {
        filename: 'app.js',
        path: path.resolve(__dirname, '../dist')
    },
    // devtool: 'source-map',
    plugins:
    [

        new CopyWebpackPlugin({
            patterns: [
                { from: "src/static/fonts", to: "fonts" },
                { from: "src/static/json", to: "json" },
                { from: "src/static/files", to: "files" },
                { from: path.resolve(__dirname, '../images'), to: "images" },
                { from: path.resolve(__dirname, '../videos'), to: "videos" },
            ],
        }),

        ...['index', 'about', 'flour_brands', 'qamhati', 'modern-mills', 'qoot-and-root', 'animal_feed_brands', 'careers', 'contact'].map( (page) => {
            return new HtmlWebpackPlugin({
                template: path.resolve(__dirname, `../src/${page}.html`),
                filename: `${page}.html`,
                chunks: ['main'],
                minify: true
            })
        }),

        ...['index_ar', 'about_ar', 'flour_brands_ar', 'qamhati_ar', 'modern-mills_ar', 'qoot-and-root_ar', 'animal_feed_brands_ar', 'careers_ar', 'contact_ar'].map( (page) => {
            return new HtmlWebpackPlugin({
                template: path.resolve(__dirname, `../src/${page}.html`),
                filename: `${page}.html`,
                chunks: ['main'],
                minify: true
            })
        }),

        new MiniCSSExtractPlugin(),

    ],
    module:
    {
        rules:
        [

            // HTML
            {
                test: /\.(html)$/,
                use:
                [
                    'html-loader'
                ]
            },

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },

            // CSS
            {
                test: /\.css$/,
                use:
                [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            },

        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            // new CssMinimizerPlugin(),
            // new TerserPlugin()
        ],
    }

}
