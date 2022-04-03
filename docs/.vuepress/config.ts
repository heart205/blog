import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
const { path } = require('@vuepress/utils')
export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: 'Heart',
  description: 'heart',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    sidebar: 'auto',
    sidebarDepth:3,
    displayAllHeaders: true // 默认值：false
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
        components: {
          'heart-layout': path.resolve(__dirname, './theme/layouts/Layout.vue'),
        },
      },
    ],
  ],
})
