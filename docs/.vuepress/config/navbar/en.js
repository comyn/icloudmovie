const en = [
  { text: 'Guide', link: '/guide/' },
  {
    text: 'Reference',
    children: [
      { text: 'VuePress', children: [{ text: 'CLI', link: '/reference/cli.html' }, '/reference/config.md', '/reference/node-api.md'] },
      { text: 'Bundlers', children: ['/reference/bundler/webpack.md', '/reference/bundler/vite.md'] },
      { text: 'Default Theme', children: ['/reference/default-theme/config.md', '/reference/default-theme/frontmatter.md'] },
      { text: 'Official Plugins', link: '/reference/plugin/', children: [] }
    ]
  },
  {
    text: '后端记录',
    children: [
      { text: 'VuePress', children: [{ text: 'CLI', link: '/reference/cli.html' }, '/reference/config.md', '/reference/frontmatter.md'] },
      { text: 'Bundlers', children: ['/reference/bundler/webpack.md', '/reference/bundler/vite.md'] },
      { text: 'Default Theme', children: ['/reference/default-theme/config.md', '/reference/default-theme/frontmatter.md'] },
      { text: 'Official Plugins', link: '/reference/plugin/', children: [] },
      { text: 'C#', link: '/server/CSharp/', children: [] },
      { text: 'NodeJS', link: '/server/NodeJS/', children: [] },
      { text: 'Java', link: '/server/Java/', children: ['/server/Java/test1.md', '/server/Java/test2.md'] }
    ]
  },
  {
    text: '前端记录',
    children: [
      { text: 'Web', link: '/client/Web/' },
      { text: 'WPF', link: '/client/WPF/' },
      { text: 'iOS', link: '/client/iOS/' },
      { text: 'Android', link: '/client/Android/' }
    ]
  }
]
module.exports = {
  en
}
