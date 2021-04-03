module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react', '@babel/preset-stage-0', '@babel/preset-typescript', [
                                '@babel/preset-env', {
                                    targets: {
                                        browsers: ['last 2 versions']
                                    }
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
}