import { withMermaid } from 'vitepress-plugin-mermaid'
import viteReact from "@vitejs/plugin-react";

export default withMermaid({
  vite: {
    plugins: [viteReact()]
  },
  title: "Wang Tabs 文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide' },
      { text: '组件', link: '/component' }
    ],

    sidebar: {
      '/guide/':[
        {
          text: '基础',
          items: [
            { text: '什么是wang-tabs', link: '/guide' },
            { text: '设计', link: '/guide/design' },
            { text: '安装', link: '/guide/installation' }
          ]
        },
      ],
      '/component/':[
        {
          text: '组件总览',
          items: [
            {text: '组件总览', link: '/component'},
            {text: 'SlopeTabs组件', link: '/component/slope-tabs'}
          ]
        }
      ]
  },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
});

// https://vitepress.dev/reference/site-config
// export default defineConfig({
//
// })
