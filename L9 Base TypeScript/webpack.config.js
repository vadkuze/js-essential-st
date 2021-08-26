const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js"
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
            filename: "index.html",
            minify: false
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                loader: 'ts-loader',
                include: [path.resolve(__dirname, './src')],
                exclude: [/node_modules/]
            }
        ]
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 4200,
        liveReload: true,
        open: true
    }
}