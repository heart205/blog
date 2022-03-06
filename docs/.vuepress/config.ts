import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: 'Heart',
  description: 'heart',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
})
