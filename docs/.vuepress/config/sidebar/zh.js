const zh = {
  '/zh/guide/': [
    {
      isGroup: true,
      text: 'Guide',
      children: ['/zh/guide/README.md', '/zh/guide/getting-started.md', '/zh/guide/markdown.md', '/zh/guide/assets.md']
    }
  ],
  '/zh/reference/VSCode/': [
    {
      isGroup: true,
      text: 'VSCode 配置',
      children: [
        '/zh/reference/VSCode/VSCode设置.md',
        '/zh/reference/VSCode/VSCode插件.md',
        '/zh/reference/VSCode/Eslint配置.md',
        { text: 'VSCode-SettingsSync配置', link: '/zh/reference/VSCode/VSCode-SettingsSync配置.md' },
        { text: 'VSCode快捷键-Win版本', link: '/zh/reference/VSCode/VSCode快捷键-Win版本.md' }
      ]
    }
  ],
  '/zh/reference/Jenkins/': [
    {
      isGroup: true,
      text: 'Jenkins + Vue项目',
      children: ['/zh/reference/Jenkins/Jenkins+Vue项目.md']
    }
  ],
  '/zh/server/CSharp/': [
    {
      isGroup: true,
      text: 'dotnet 平台开发',
      children: ['/zh/server/CSharp/README.md', '/zh/server/CSharp/README1.md']
    }
  ],
  '/zh/server/Java/': [
    {
      isGroup: true,
      text: 'Java 知识',
      children: ['/zh/server/Java/环境变量配置.md', '/zh/server/Java/基础语法.md', '/zh/server/Java/AS配置.md', '/zh/server/Java/Gradle下载慢.md']
    }
  ],
  '/zh/client/Vue': [
    {
      isGroup: true,
      text: 'Vue 使用',
      children: [
        '/zh/client/Vue/Vue CLI使用.md',
        '/zh/client/Vue/webpack使用.md',
        '/zh/client/Vue/VueRouter.md',
        '/zh/client/Vue/vue-axios使用.md',
        '/zh/client/Vue/Element-UI使用.md',
        '/zh/client/Vue/iView-Admin目录解释.md',
        '/zh/client/Vue/Mint-ui使用.md'
      ]
    }
  ]
}

module.exports = {
  zh
}
