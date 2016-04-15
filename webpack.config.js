var path=require('path');
var webpack = require('webpack');

// var entryFiles = {};
var entryFiles = require('./filemap');

// 入口文件
// [
//     "index", // 首页
// ].forEach(function (item) {
//     entryFiles[item] = "./src/js/page/"  + item + ".js";
// });


module.exports={
    entry:entryFiles,
    output:{
        path: path.join(__dirname,'dist'),
        publicPath: "/webpack-node-run/dist/",
        filename: "js/[name].js",
        //chunkFilename: "js/[id].chunk.js"
        chunkFilename: "js/[name].js"
    },
    module: {
        loaders: [	//加载器
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015'],
					plugins: ['transform-runtime']
				}
			},
            {test: /\.css$/, loader:"style-loader!css-loader" },
            {test: /\.scss$/, loader: "style!css!sass"},
            //{test: /\.html$/, loader: "html-loader" },
            //{test: /\.html$/, loader: "template-html-loader" },
            {test: /\.html$/, loader: "underscore-template-loader" },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'}
        ],
        noParse: [/jweixin\.js/]
    },
    plugins:[]
};
