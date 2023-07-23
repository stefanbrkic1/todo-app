const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'), // Set the path to your output folder (Webpack 5+)
        hot: true, // Enable hot module replacement for faster updates
        liveReload: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'ToDo | ProductivityApp',
            favicon: "./src/img/favicon.ico",
            template: path.resolve(__dirname, './src/template.html'),
        }),
    ],
    output: {
        filename: '[name].[contenthash].js',
        path:path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
        ],
    },
}