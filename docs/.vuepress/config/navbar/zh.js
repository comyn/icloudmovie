const zh = [
  { text: 'Guide', link: '/zh/guide/' },
  {
    text: 'Reference',
    children: [
      {
        text: 'VSCode',
        children: [
          '/zh/reference/VSCode/VSCode设置.md',
          '/zh/reference/VSCode/VSCode插件.md',
          '/zh/reference/VSCode/Eslint配置.md',
          { text: 'VSCode-SettingsSync配置', link: '/zh/reference/VSCode/VSCode-SettingsSync配置.md' },
          { text: 'VSCode快捷键-Win版本', link: '/zh/reference/VSCode/VSCode快捷键-Win版本.md' }
        ]
      },
      { text: 'Jenkins', children: ['/zh/reference/Jenkins/Jenkins+Vue项目.md'] }
    ]
  },
  {
    text: '服务端',
    children: [
      { text: 'C#', link: '/zh/server/CSharp/', children: [] },
      {
        text: 'NodeJS',
        link: '/zh/server/NodeJS/',
        children: [
          '/zh/server/NodeJS/NodeJS服务运行-Forever.md',
          '/zh/server/NodeJS/NodeJS安装.md',
          '/zh/server/NodeJS/NodeJS服务运行-node-windows.md',
          '/zh/server/NodeJS/nodemon.md',
          '/zh/server/NodeJS/npm安装和卸载模块.md'
        ]
      },
      {
        text: 'Java',
        link: '/zh/server/Java/',
        children: ['/zh/server/Java/环境变量配置.md', '/zh/server/Java/基础语法.md', '/zh/server/Java/AS配置.md', '/zh/server/Java/Gradle下载慢.md']
      }
    ]
  },
  {
    text: '前端',
    children: [
      {
        text: 'Vue',
        link: '/zh/client/Vue/',
        children: [
          '/zh/client/Vue/Vue CLI使用.md',
          '/zh/client/Vue/webpack使用.md',
          '/zh/client/Vue/VueRouter.md',
          '/zh/client/Vue/vue-axios使用.md',
          '/zh/client/Vue/Element-UI使用.md',
          '/zh/client/Vue/iView-Admin目录解释.md',
          '/zh/client/Vue/Mint-ui使用.md'
        ]
      },
      { text: 'WPF', link: '/zh/client/WPF/' },
      { text: 'iOS', link: '/zh/client/iOS/' },
      { text: 'Android', link: '/zh/client/Android/' }
    ]
  }
]
module.exports = {
  zh
}
