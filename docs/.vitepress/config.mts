import { withMermaid } from 'vitepress-plugin-mermaid'
import viteReact from "@vitejs/plugin-react";
import {loadEnv} from "vite";
import { fileURLToPath, URL } from 'node:url';


// 获取当前工作模式（例如 'development' 或 'production'）
const mode = process.env.NODE_ENV || 'development';

// 获取环境变量文件所在的目录
const envDir = fileURLToPath(new URL('../..', import.meta.url));

console.log('mode:', mode, envDir);

const env = loadEnv(mode, envDir);

export default withMermaid({
  vue: {
    // 配置 Vue 插件
    // ...
  },
  vite: {
    plugins: [viteReact()],
    define: {
      'process.env': env,
    },
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
