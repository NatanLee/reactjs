 //встроенный модуль ноды
 const path = require('path');
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
  
 //const ExtractTextPlugin = require('extract-text-webpack-plugin');
  
 module.exports = {
	entry:{
		main: path.resolve(__dirname, 'src', 'index.jsx'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		//типы файлов по умолчанию
		extensions: ['.json', '.js', '.jsx'],
		alias: {
			'components': path.resolve(__dirname, 'src', 'components'),
			'containers': path.resolve(__dirname, 'src', 'containers')
		}
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
	},
	module: {
		rules: [
			{
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
					options: {
						presets: [
						"@babel/preset-env", "@babel/preset-react"
						],
						plugins: [
							'@babel/plugin-proposal-class-properties'
						]		
					}
        }
      },
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: ''
						},
					},
					'css-loader'		
				]
			}
		]
	},
	plugins: [
		//new ExtractTextPlugin('style.css'),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),		
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: 'index.html',
			
		})
	 ] 
 }