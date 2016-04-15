var fs = require('fs');
var path = require('path');
var ignore = [];
var readdir = './src/js/page/';
var fileMap = {};

function doRead(dir){
    var files = fs.readdirSync(dir);

    files.forEach(function(file){
        var curDir = path.join(dir, file)
        var stat = fs.lstatSync(curDir)
        var extname = path.extname(curDir)
        var entry = path.relative(readdir, curDir)

        //脚本排除
        if(~['common', 'global.config.js', 'page', '_linechart.js'].indexOf(file)){
            return ;
        }

        
        if(stat.isFile()){
            extname == '.js' && (fileMap[entry.split('.')[0]] = './' + curDir)
        }else{
            doRead(curDir)
        }
    })
}
doRead(readdir)
module.exports = fileMap