const path = require('path');
const {merge} = require('webpack-merge');
const config = require('./webpack.base.js');
const nodeExternals = require('webpack-node-externals');

const serverConfig = {
    target: 'node',
    mode: "development",
    entry: './src/server/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: ['isomorphic-style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: false,
                    }
                }]
            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: "isomorphic-style-loader", // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                        options: {
                            importLoaders: 1,
                            modules: false,
                        }
                    },
                    {
                        loader: "less-loader", // compiles Less to CSS
                    },
                ],
            },
        ]
    },
    externals: [nodeExternals()],
}

module.exports = merge(config, serverConfig);