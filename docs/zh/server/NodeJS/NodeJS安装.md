# NodeJS 安装

[参考](https://www.cnblogs.com/goldlong/p/8027997.html)

## 安装环境

    1、本机系统：Windows 10 Pro（64位）
    2、Node.js：v10.15.1LTS（64位）

## 安装 Node.js 步骤

    1、下载对应你系统的Node.js版本:https://nodejs.org/en/download/
    2、选安装目录进行安装
    3、环境配置
    4、测试

## 前期准备

    1、Node.js简介
    简单的说 Node.js 就是运行在服务端的 JavaScript。Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。Node.js 的包管理器 npm，是全球最大的开源库生态系统。
    2、下载Node.js
    打开官网下载链接:https://nodejs.org/en/download/ 我这里下载的是node-v6.9.2-x64.msi

## 安装完成检测

    node -v
    npm -v

## 环境配置

    说明：这里的环境配置主要配置的是npm安装的全局模块所在的路径，以及缓存cache的路径，之所以要配置，是因为以后在执行类似：npm install express [-g] （后面的可选参数-g，g代表global全局安装的意思）的安装语句时，会将安装的模块安装到【C:\Users\用户名\AppData\Roaming\npm】路径中，占C盘空间。
    例如：我希望将全模块所在路径和缓存路径放在我node.js安装的文件夹中，则在我安装的文件夹【D:\Develop\nodejs】下创建两个文件夹【node_global】及【node_cache】
    创建完两个空文件夹之后，打开cmd命令窗口，输入
    npm config set prefix "D:\Develop\nodejs\node_global"
    npm config set cache "D:\Develop\nodejs\node_cache"

    系统环境变量里添加：NODE_PATH C:\Program Files\nodejs\node_global\node_modules
    用户环境变量里修改：将将默认全局模块安装时的路径C:\Users\Scd\AppData\Roaming\npm修改为配置
                            C:\Program Files\nodejs\node_global

    如果安装了cnpm，需要把cnpm的路径也改掉，在系统环境变量里的path中添加C:\Program Files\nodejs\node_global\node_modules\

## 查看 npm 的本地仓库

    npm list -global

## 设置 npm 国内源（可选）

    npm config set registry "https://registry.npm.taobao.org"

## 查看配置信息

    npm config list

## 检查镜像站命令

    npm config get registry

## 测试获取 vue 模块的信息

    npm info vue

## 安装包测试

    以管理员运行dos窗体：npm install express -g     # -g是全局安装的意思
