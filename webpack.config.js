var path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'index.js',
		library: 'mele',
		libraryTarget: 'umd'
	},
	externals: {
		react: {
			root: 'React',
			amd: 'react',
			commonjs: 'react',
			commonjs2: 'react'
		}
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
};
