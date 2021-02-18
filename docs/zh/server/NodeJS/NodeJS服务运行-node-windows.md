# NodeJS 服务运行-node-windows

[windows 服务器上使用 node-windows 部署 nodeJS 服务](https://blog.csdn.net/qq_41725450/article/details/100980342?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control)

[TOC]

> 一般部署 nodejs 的项目，大家都会用到 forever 这个库，这个库相当好用，可以让 nodejs 的站点在后台跑，不需要 cmd 的窗口一直开着。在 windows 下，如果用户一直不注销，这种方式是可行的，但在服务器上的话就麻烦了，因为服务器在部署完成后，一般都会注销，那么站点就挂了。
>
> 因此需要把它部署成 windows 服务，废话不多说，部署成 windows 服务需要几个步骤

## 1. 全局安装 node-windows 的库

```
npm i -g node-windows
```

## 2. 在项目中新建一个安装文件 nw.js

```js
const path = require('path')

const Service = require('node-windows').Service

// Create a new service object
const svc = new Service({
  name: 'node windows server test', // 名称
  description: 'The socket.io nodejs server test ', // 描述
  script: path.resolve('./app.js'), // node执行入口
  nodeOptions: ['--harmony', '--max_old_space_size=4096']
})

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
  svc.start()
})

svc.install()
```

## 3. 在项目中新建一个卸载文件 nw-uninstall.js

```js
const path = require('path')

// 卸载文件nw-uninstall.js
const Service = require('node-windows').Service

const svc = new Service({
  name: 'node windows server test', // 名称
  description: 'The socket.io nodejs server test ', // 描述
  script: path.resolve('./app.js'), // node执行入口
  nodeOptions: ['--harmony', '--max_old_space_size=4096']
})

svc.on('uninstall', function () {
  console.log('Uninstall complete.')
  console.log('The service exists: ', svc.exists)
})

svc.uninstall()
```

## 4. 执行命令

```shell
node nw.js //安装服务
node nw-uninstall //卸载服务
```
