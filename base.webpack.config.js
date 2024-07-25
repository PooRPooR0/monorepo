const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

module.exports = {
	mode: 'production',
	target: 'web',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', {
								"targets": "defaults"
							}],
							'@babel/preset-react'
						]
					}
				}]
			},
			{
				test: cssRegex,
				exclude: cssModuleRegex,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 1
						},
					},
				],
			},
			{
				test: cssModuleRegex,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: true,
						},
					},
				]
			}
		],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join('public', 'index.html')
		}),
		new MiniCssExtractPlugin(),
	],
}
