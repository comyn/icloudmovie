import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("F:/GitHub/blogcms/icloudmovie/node_modules/@vuepress/theme-default/lib/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("F:/GitHub/blogcms/icloudmovie/node_modules/@vuepress/theme-default/lib/layouts/Layout.vue")),
}
