# mint-ui

## 本地安装

    npm i mint-ui -S

## 部分引用配置

    1.npm intall mint-ui --save

    2.npm install babel-plugin-component -D //需要安装这个插件

    3.修改 babel.config.js 文件

    module.exports = {
    presets: [
    ‘@vue/app’
    ],
    plugins:[
    [
    “component”,
    {
    “libraryName”: “mint-ui”,
    “style”: true
    }
    ]
    ]
    }

    如果已经有值，在后面追加配置即可

    module.exports = {
    presets: [
    ‘@vue/app’
    ],
    plugins: [
    “transform-vue-jsx”,
    “transform-runtime”,
    [“component”, [
    {
    “libraryName”:“mint-ui”,
    “style”:true
    }
    ]
    ]
    ]
    }

    在main.js 中添加 引入组件的配置
    import { Button, Cell } from ‘mint-ui’
    import ‘mint-ui/lib/style.css’
    //也可以在index.html中cdn引入

    Vue.component(Button.name, Button)
    Vue.component(Cell.name, Cell) //Vue.use 不行，抛弃