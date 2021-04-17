const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + "/public/index.html",
    filename: "index.html",
    inject: "body"
});

module.exports = {
    entry: "./src/components/index.tsx",
    devtool: "inline-source-map",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader", "ts-loader"]
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), HTMLWebpackPluginConfig]
};