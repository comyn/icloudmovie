export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [],
  "locales": {
    "/": {
      "lang": "en-US",
      "title": "ai cloud movie",
      "description": "Cloud World"
    },
    "/zh/": {
      "lang": "zh-CN",
      "title": "爱云影",
      "description": "云上世界"
    }
  },
  "themeConfig": {
    "logo": "/images/logo.png",
    "repo": "comyn/blogcms",
    "docsDir": "docs",
    "locales": {
      "/": {
        "selectLanguageName": "English",
        "navbar": [
          {
            "text": "Guide",
            "link": "/guide/"
          },
          {
            "text": "Reference",
            "children": [
              {
                "text": "VuePress",
                "children": [
                  {
                    "text": "CLI",
                    "link": "/reference/cli.html"
                  },
                  "/reference/config.md",
                  "/reference/node-api.md"
                ]
              },
              {
                "text": "Bundlers",
                "children": [
                  "/reference/bundler/webpack.md",
                  "/reference/bundler/vite.md"
                ]
              },
              {
                "text": "Default Theme",
                "children": [
                  "/reference/default-theme/config.md",
                  "/reference/default-theme/frontmatter.md"
                ]
              },
              {
                "text": "Official Plugins",
                "link": "/reference/plugin/",
                "children": []
              }
            ]
          },
          {
            "text": "后端记录",
            "children": [
              {
                "text": "VuePress",
                "children": [
                  {
                    "text": "CLI",
                    "link": "/reference/cli.html"
                  },
                  "/reference/config.md",
                  "/reference/frontmatter.md"
                ]
              },
              {
                "text": "Bundlers",
                "children": [
                  "/reference/bundler/webpack.md",
                  "/reference/bundler/vite.md"
                ]
              },
              {
                "text": "Default Theme",
                "children": [
                  "/reference/default-theme/config.md",
                  "/reference/default-theme/frontmatter.md"
                ]
              },
              {
                "text": "Official Plugins",
                "link": "/reference/plugin/",
                "children": []
              },
              {
                "text": "C#",
                "link": "/server/CSharp/",
                "children": []
              },
              {
                "text": "NodeJS",
                "link": "/server/NodeJS/",
                "children": []
              },
              {
                "text": "Java",
                "link": "/server/Java/",
                "children": [
                  "/server/Java/test1.md",
                  "/server/Java/test2.md"
                ]
              }
            ]
          },
          {
            "text": "前端记录",
            "children": [
              {
                "text": "Web",
                "link": "/client/Web/"
              },
              {
                "text": "WPF",
                "link": "/client/WPF/"
              },
              {
                "text": "iOS",
                "link": "/client/iOS/"
              },
              {
                "text": "Android",
                "link": "/client/Android/"
              }
            ]
          }
        ],
        "sidebar": {
          "/guide/": [
            {
              "isGroup": true,
              "text": "Guide",
              "children": [
                "/guide/README.md",
                "/guide/getting-started.md",
                "/guide/configuration.md"
              ]
            }
          ],
          "/guide/advanced/": [
            {
              "isGroup": true,
              "text": "Advanced",
              "children": [
                "/guide/advanced/architecture.md",
                "/guide/advanced/plugin.md",
                "/guide/advanced/theme.md",
                "/guide/advanced/markdown.md"
              ]
            }
          ],
          "/reference/": [
            {
              "isGroup": true,
              "text": "VuePress Reference",
              "children": [
                "/reference/cli.md",
                "/reference/config.md",
                "/reference/frontmatter.md",
                "/reference/components.md",
                "/reference/plugin-api.md",
                "/reference/theme-api.md",
                "/reference/client-api.md",
                "/reference/node-api.md"
              ]
            }
          ],
          "/reference/bundler/": [
            {
              "isGroup": true,
              "text": "Bundlers Reference",
              "children": [
                "/reference/bundler/webpack.md",
                "/reference/bundler/vite.md"
              ]
            }
          ],
          "/reference/plugin/": [
            {
              "isGroup": true,
              "text": "Official Plugins Reference",
              "children": [
                "/reference/plugin/active-header-links.md",
                "/reference/plugin/back-to-top.md"
              ]
            }
          ],
          "/server/CSharp/": [
            {
              "isGroup": true,
              "text": "dotnet 平台开发",
              "children": [
                "/server/CSharp/README.md",
                "/server/CSharp/README1.md"
              ]
            }
          ],
          "/server/Java/": [
            {
              "isGroup": true,
              "text": "Java 知识",
              "children": [
                "/server/Java/test1.md",
                "/server/Java/test2.md"
              ]
            }
          ]
        },
        "editLinkText": "Edit this page on GitHub",
        "danger": "WARNING"
      }
    },
    "sidebarDepth": 2,
    "lastUpdated": "Last Updated",
    "navbar": [],
    "selectLanguageText": "Languages",
    "selectLanguageAriaLabel": "Select language",
    "sidebar": "auto",
    "editLink": true,
    "editLinkText": "Edit this page",
    "lastUpdatedText": "Last Updated",
    "contributors": true,
    "contributorsText": "Contributors",
    "notFound": [
      "There's nothing here.",
      "How did we get here?",
      "That's a Four-Oh-Four.",
      "Looks like we've got some broken links."
    ],
    "backToHome": "Take me home",
    "openInNewWindow": "open in new window"
  }
}
