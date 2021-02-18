# Vue CLi 使用

[toc]

> Node 版本要求(
>
> Vue CLI 4.x 需要 [Node.js](https://nodejs.org/) v8.9 或更高版本 (推荐 v10 以上)。你可以使用 [n](https://github.com/tj/n)，[nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。

## 官网

[vue-cli][https://cli.vuejs.org/]

## 安装

    npm install -g @vue/cli
    OR
    yarn global add @vue/cli

## 更新升级

```bash
npm update -g @vue/cli

# 或者
yarn global upgrade --latest @vue/cli
```

## 检查版本

    vue --version

## 单个 vue 文件运行

```bash
# 全局安装vue服务
npm install -g @vue/cli-service-global

# powershell或终端运行
vue serve
vue serve MyComponent.vue
```

## 创建项目

    1、管理员运行Windows PowerShell

    2、创建：vue create test 或者vue ui

    3、自动模式只安装Babel和ESlint

    4、手动模式
    Babel
    vue-router 默认 hash 模式，所以我选择默认的，选择了 n ，而不是 history 模式
    Vuex
    CSS Pre-processors 选中Sass/SCSS node.scss
    Linter / Formatter 选中ESLint +Prettier

    5、选择In dedicated config files, 单独存放一个配置文件

    6、选择Lint to save，保存及检查

    7、开发run：npm run serve,生产run: npm run build

    8、webpack配置，在vue-cli 3.0 中的方法，在项目根目录中添加vue.config.js文件
    注意几点：basepath改成了publicPath，compiler改成了runtimeCompiler
    添加@相对路径的方法也在里面配置

    9、使用vue cli 2的创建方式在vue cli 3中创建项目
    npm install -g @vue/cli-init
    # `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
    vue init webpack my-project
