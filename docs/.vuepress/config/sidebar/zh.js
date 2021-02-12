const zh = {
  '/guide/': [
    {
      isGroup: true,
      text: 'Guide',
      children: ['/guide/README.md', '/guide/getting-started.md', '/guide/configuration.md']
    }
  ],
  '/guide/advanced/': [
    {
      isGroup: true,
      text: 'Advanced',
      children: ['/guide/advanced/architecture.md', '/guide/advanced/plugin.md', '/guide/advanced/theme.md', '/guide/advanced/markdown.md']
    }
  ],
  '/reference/': [
    {
      isGroup: true,
      text: 'VuePress Reference',
      children: [
        '/reference/cli.md',
        '/reference/config.md',
        '/reference/frontmatter.md',
        '/reference/components.md',
        '/reference/plugin-api.md',
        '/reference/theme-api.md',
        '/reference/client-api.md',
        '/reference/node-api.md'
      ]
    }
  ],
  '/reference/bundler/': [
    {
      isGroup: true,
      text: 'Bundlers Reference',
      children: ['/reference/bundler/webpack.md', '/reference/bundler/vite.md']
    }
  ],
  '/reference/plugin/': [
    {
      isGroup: true,
      text: 'Official Plugins Reference',
      children: ['/reference/plugin/active-header-links.md', '/reference/plugin/back-to-top.md']
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
      children: ['/server/Java/test1.md', '/server/Java/test2.md']
    }
  ]
}

module.exports = {
  zh
}
