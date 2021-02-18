const en = [
  { text: 'Guide', link: '/guide/' },
  {
    text: 'Reference',
    children: [
      {
        text: 'VSCode',
        children: [
          '/reference/VSCode/VSCode设置.md',
          '/reference/VSCode/VSCode插件.md',
          '/reference/VSCode/Eslint配置.md',
          { text: 'VSCode-SettingsSync配置', link: '/reference/VSCode/VSCode-SettingsSync配置.md' },
          { text: 'VSCode快捷键-Win版本', link: '/reference/VSCode/VSCode快捷键-Win版本.md' }
        ]
      },
      { text: 'Jenkins', children: ['/reference/Jenkins/Jenkins+Vue项目.md'] }
    ]
  },
  {
    text: '服务端',
    children: [
      { text: 'C#', link: '/server/CSharp/', children: [] },
      {
        text: 'NodeJS',
        link: '/server/NodeJS/',
        children: [
          { text: 'NodeJS服务运行-Forever', link: '/server/NodeJS/NodeJS服务运行-Forever.md' },
          '/server/NodeJS/NodeJS安装.md',
          { text: 'NodeJS服务运行-node-windows', link: '/server/NodeJS/NodeJS服务运行-node-windows.md' },
          '/server/NodeJS/nodemon.md',
          '/server/NodeJS/npm安装和卸载模块.md'
        ]
      },
      {
        text: 'Java',
        link: '/server/Java/',
        children: ['/server/Java/环境变量配置.md', '/server/Java/基础语法.md', '/server/Java/AS配置.md', '/server/Java/Gradle下载慢.md']
      }
    ]
  },
  {
    text: '前端',
    children: [
      {
        text: 'Vue',
        link: '/client/Vue/',
        children: [
          '/client/Vue/Vue CLI使用.md',
          '/client/Vue/webpack使用.md',
          '/client/Vue/VueRouter.md',
          '/client/Vue/vue-axios使用.md',
          '/client/Vue/Element-UI使用.md',
          '/client/Vue/iView-Admin目录解释.md',
          '/client/Vue/Mint-ui使用.md'
        ]
      },
      { text: 'WPF', link: '/client/WPF/', children: [] },
      { text: 'iOS', link: '/client/iOS/', children: [] },
      { text: 'Android', link: '/client/Android/', children: [] }
    ]
  }
]
module.exports = {
  en
}
