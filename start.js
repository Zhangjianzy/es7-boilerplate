/*start.js*/
/***
* 1. 动态转译es6、es7代码为es5，仅限开发环境使用
* 2. 将需要转译的文件通过require放在“require('babel-register');”后面即可
*    eg：require('./server');
**/
require('babel-register');
require('./server');
