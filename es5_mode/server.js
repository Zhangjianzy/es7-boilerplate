'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); /* server.js */

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
// 注册ejs模板为html页
app.engine('.html', _ejs2.default.__express);
// 设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');
// 设置模板文件文件夹,__dirname为全局变量,表示网站根目录
app.set('views', __dirname + '/views');
app.use((0, _morgan2.default)('combined'));

app.route('*').get(function (req, res) {
  res.status(200).render('index', {
    title: 'es7项目脚手架',
    content: 'es7项目脚手架'
  });
});

/**
* 错误操作句柄
* @param      err     错误
* @param      req     请求
* @param      res     响应
* @param      next    控制权转移
**/
app.use(function (err, req, res, next) {
  // console.error(err.stack);
  res.status(500).send('Something bad happened!');
  next();
});

app.listen(port, function () {
  // console.log(`the server is listening on port ${port}`);
});

exports.default = app;

//# sourceMappingURL=server.js.map