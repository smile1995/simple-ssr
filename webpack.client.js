const path = require('path');
const {merge} = require('webpack-merge');
const config = require('./webpack.base.js');

const clientConfig = {
    mode: "development",
    entry: './src/client/index.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: ['style-loader', {
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
                        loader: "style-loader", // creates style nodes from JS strings
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
    }
}

module.exports = merge(config, clientConfig);