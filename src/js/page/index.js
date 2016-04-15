//import CSS demo
import "../../css/lib/reset.css";
import "../../css/common/global.css";
import "../../css/page/index.css";
import "../../css/page/index1.scss";

// 变量析构 demo
const [a,b] = [3,4];
console.log(a,b);

// underscore template demo
var data1 = {
    res : [
        {
            id:1,
            title:11
        },
        {
            id:2,
            title:22
        },
        {
            id:3,
            title:33
        }
    ]
};

import _html from '../../view/hollow.html';
var str = _html(data1);
document.querySelector('#loads').innerHTML = str;
let v = 1;
(()=> console.log(555+"hahah"))();
console.log(v);

// es6 import js demo
import "../components/calc/index.js";

// promise demo
var promise = new Promise(function(resolve,reject){
    //wait(resolve);
    console.log('第一步');
    resolve();
    reject();
});
promise.then(function(){
    console.log('哈哈，成功了');
},function(){
    console.log('呜呜，失败了');
});
