const en = {
  '/guide/': [
    {
      isGroup: true,
      text: 'Guide',
      children: ['/guide/README.md', '/guide/getting-started.md']
    }
  ],
  '/reference/VSCode/': [
    {
      isGroup: true,
      text: 'VSCode 配置',
      children: [
        '/reference/VSCode/VSCode设置.md',
        '/reference/VSCode/VSCode插件.md',
        '/reference/VSCode/Eslint配置.md',
        { text: 'VSCode-SettingsSync配置', link: '/reference/VSCode/VSCode-SettingsSync配置.md' },
        { text: 'VSCode快捷键-Win版本', link: '/reference/VSCode/VSCode快捷键-Win版本.md' }
      ]
    }
  ],
  '/reference/Jenkins/': [
    {
      isGroup: true,
      text: 'Jenkins + Vue项目',
      children: ['/reference/Jenkins/Jenkins+Vue项目.md']
    }
  ],
  '/server/CSharp/': [
    {
      isGroup: true,
      text: 'dotnet 平台开发',
      children: ['/server/CSharp/README.md', '/server/CSharp/README1.md']
    }
  ],
  '/server/Java/': [
    {
      isGroup: true,
      text: 'Java 知识',
      children: ['/server/Java/环境变量配置.md', '/server/Java/基础语法.md', '/server/Java/AS配置.md', '/server/Java/Gradle下载慢.md']
    }
  ],
  '/client/Vue/': [
    {
      isGroup: true,
      text: 'Vue 使用',
      children: [
        '/client/Vue/Vue CLI使用.md',
        '/client/Vue/webpack使用.md',
        '/client/Vue/VueRouter.md',
        '/client/Vue/vue-axios使用.md',
        '/client/Vue/Element-UI使用.md',
        '/client/Vue/iView-Admin目录解释.md',
        '/client/Vue/Mint-ui使用.md'
      ]
    }
  ]
}

module.exports = {
  en
}
