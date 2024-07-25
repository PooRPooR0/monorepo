const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
	extends: path.resolve(__dirname, '../../base.webpack.config.js'),
	entry: path.join(__dirname, 'src', 'index.tsx'),
	resolve: {
		extensions: ['.ts', '.js', '.json', '.tsx', ".jsx"],
		plugins: [new TsconfigPathsPlugin({configFile: "tsconfig.baseapp.json"})]
	},
}
