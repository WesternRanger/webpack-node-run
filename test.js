'use strict';
var path = require('path');
var WebpackRun = require('./index.js');

var webpackRun = new WebpackRun(path.join(__dirname, 'src/js/page'));


debugger;
webpackRun.do(function(err){
    if(err){
        console.log(err);
    }
});