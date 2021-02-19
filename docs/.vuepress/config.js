// import { navbar, sidebar } from './config'
const navbar_zh = require('./config/navbar/zh')
const navbar_en = require('./config/navbar/en')

const sidebar_zh = require('./config/sidebar/zh')
const sidebar_en = require('./config/sidebar/en')

const navbar = Object.assign({}, navbar_zh, navbar_en)
const sidebar = Object.assign({}, sidebar_zh, sidebar_en)

module.exports = {
  base: '/', // 设置站点根路径
  // dest: './dist', // 设置输出目录
  port: 8090,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/icons/favicon-16x16.png`
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`
      }
    ]
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },

  locales: {
    // 作为特例，默认语言可以使用 '/' 作为其路径。

    '/': {
      lang: 'en-US',
      title: 'AI Cloud Movie',
      description: 'The world of cloud'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '爱云影',
      description: '云上世界'
    }
  },

  themeConfig: {
    // Public 文件路径
    logo: '/images/logo.png',

    // 如果你按照 `organization/repository` 的格式设置它
    // 我们会将它作为一个 GitHub 仓库
    repo: 'comyn/icloudmovie',
    // 如果你使用的不是 GitHub ，可以直接使用 URL
    // repo: 'https://gitlab.com/foo/bar'

    docsDir: 'docs',

    // URL
    // logo: 'https://vuejs.org/images/logo.png',
    locales: {
      '/': {
        selectLanguageName: 'English',

        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: sidebar.en,

        // page meta
        editLinkText: 'Edit this page on GitHub'
      },
      '/zh/': {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: ['这里什么都没有', '我们怎么到这来了？', '这是一个 404 页面', '看起来我们进入了错误的链接'],
        backToHome: '返回首页',

        // other
        openInNewWindow: '在新窗口打开'
      }
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated'
  }
}
