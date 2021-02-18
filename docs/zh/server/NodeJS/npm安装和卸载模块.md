# npm安装和卸载模块

## 安装但不写入 package.json；

    npm install xxx

## 安装并写入 package.json 的"dependencies"中；

    npm install xxx –S

## 安装并写入 package.json 的"devDependencies"中;

    npm install xxx –D

## 全局安装

    npm install xxx -g

## 安装特定版本

    npm install xxx@1.0.0

## 本地安装时将模块写入 package.json 中：

    npm install xxx             安装但不写入package.json
    npm install xxx –save       安装并写入package.json的”dependencies”中
    npm install xxx –save -dev  安装并写入package.json的”devDependencies”中

## 显示已安装的包

    npm list -g --depth 0

## npm 删除模块

    npm uninstall xxx      删除xxx模块
    npm uninstall -g xxx   删除全局模块xxx

## 检查可以更新的模块

    npm outdated

## 更新某个单一依赖包

    # 可根据包作用范围在后面加上 -D、-S 或 -g
    npm update xxx

## 快速删除项目中 node_modules 目录

    安装"rimraf"模块
    npm install rimraf -g
    
    删除操作
    rimraf node_modules

## 更新 package.json 文件，可使用 npm-check-updates 依赖包

    安装"npm-check-updates"模块
    npm install -g npm-check-updates
    
    安装后，检查可更新的模块
    ncu
    或
    npm-check-updates
    
    更新package.json的依赖包到最新版本
    ncu -u
