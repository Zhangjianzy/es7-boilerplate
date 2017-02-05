基于es7的脚手架项目配置，可以作为任一es7项目的初始化架构
----------------------------------------------
##目录结构
|-/es7-boilerplate
  |-/app (存放项目开发原始文件)
  |-/es5_mode(存放转译为es5的文件目录)
  |-/test(测试文件目录)
  | |-setup.js(兼容全局对象)
  | |-...(测试文件)
  |-/views(存放视图文件目录)
  | |-index.html(测试首页)
  |-.babelrc(babel转码配置文件)
  |-.eslintignore(忽略静态编码检查配置文件)
  |-.eslintrc.yml(eslint配置文件)
  |-.gitignore(忽略git同步配置文件)
  |-package.json(项目配置文件)
  |-README.md(项目说明)
  |-resetProject.sh(清空原项目git版本控制脚本)
  |-server.js(node server)
  |-start.js(动态转码)
----------------------------------------------
##使用说明
> * 拷贝项目初始架构，git clone https://github.com/Zhangjianzy/es7-boilerplate.git
> * 打开终端，进入项目目录，执行“./resetProject.sh”命令（⚠️为保证安全，执行完该文件将自动删除⚠️），
    或者手动操作，eg：
    cd <项目目录> && rm -rf .git && git init && npm install -g cnpm --registry=https://registry.npm.taobao.org && cnpm install
> * 启动项目，执行：npm start    
> * 转码es7文件，执行：npm run build
> * 测试项目，执行：npm run test
> * 代码静态检查，执行：npm run lint    
> * 尽情地在es7中策马奔腾吧🐎    
----------------------------------------------
##备注
* 在天朝使用cnpm安装依赖包快速🔜方便，告别被墙的痛苦。使用前需要安装cnpm模块：
  npm install -g cnpm --registry=https://registry.npm.taobao.org
* 使用cnpm替代npm即可，eg：cnpm init、cnpm install [name]等
* 关于yarn（fb的一款js依赖包管理器），个人想说的是在天朝抛开“离线下载”和“lock”
  这两个yarn特性外，在速度上没有cnpm有优势
* 项目流程管理，可以结合gulp、webpack等，可结合实际自行选择
----------------------------------------------
##日志
* 2017-02-05  项目破壳🐣
