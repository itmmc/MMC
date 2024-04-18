const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(
    commonConfiguration,
    {
        mode: 'production',
        performance: {
            maxEntrypointSize: 512000,
            maxAssetSize: 512000,
            hints: false
        },
        plugins:
        [
            new CleanWebpackPlugin()
        ]
    }
)
