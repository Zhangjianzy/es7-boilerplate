/* server.js */
import express from 'express';
import morgan from 'morgan';
import ejs from 'ejs';

const app = express();
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
// 注册ejs模板为html页
app.engine('.html', ejs.__express);
// 设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');
// 设置模板文件文件夹,__dirname为全局变量,表示网站根目录
app.set('views', `${__dirname}/views`);
app.use(morgan('combined'));

app.route('*')
.get((req, res) => {
  res.status(200).render('index', {
    title: 'es7项目脚手架',
    content: 'es7项目脚手架',
  });
});

/**
* 错误操作句柄
* @param      err     错误
* @param      req     请求
* @param      res     响应
* @param      next    控制权转移
**/
app.use((err, req, res, next) => {
  // console.error(err.stack);
  res.status(500).send('Something bad happened!');
  next();
});

app.listen(port, () => {
  // console.log(`the server is listening on port ${port}`);
});

export default app;
