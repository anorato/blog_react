const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/app.tsx",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./template.html"
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devtool: "eval",
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};
