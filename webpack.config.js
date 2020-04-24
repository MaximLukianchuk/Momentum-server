const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = () => {
    return ({
        entry: {
            server: './src/app.js',
        },
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'dist')
        },
        target: 'node',
        node: {
            __dirname: false,
            __filename: false,
        },
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }
            ]
        },
        plugins: [
            new Dotenv()
        ]
    })
};
