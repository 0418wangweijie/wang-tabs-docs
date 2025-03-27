# 安装


## 通过 npm 安装

```bash
# 最新稳定版
npm install wang-tabs

# 或者使用 yarn
yarn add wang-tabs
```


## CDN 引入
通过 unpkg 或 jsdelivr 直接在浏览器中使用：
```html
<!-- 引入 React -->
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<!-- 引入 wang-tabs -->
<script src="https://unpkg.com/wang-tabs@latest/dist/index.umd.js"></script>
<link rel="stylesheet" href="https://unpkg.com/wang-tabs@latest/dist/index.css">
```


## 包管理器安装
| 包管理器 | 命令                     | 说明                 |
|----------|--------------------------|----------------------|
| npm      | `npm install wang-tabs`   | 推荐使用最新稳定版   |
| yarn     | `yarn add wang-tabs`      | 更简洁的依赖管理     |
| pnpm     | `pnpm add wang-tabs`      | 快速安装与依赖隔离   |


## Vite 配置
在 `vite.config.js` 中添加别名：
```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@wang-tabs': path.resolve(__dirname, 'node_modules/wang-tabs')
    }
  }
});
```


## Create React App 配置
在 `src/react-app-env.d.ts` 中添加类型声明：
```typescript
/// <reference types="wang-tabs" />
```


## 按需导入（推荐）
通过 `babel-plugin-import` 实现按需加载：
```bash
npm install -D babel-plugin-import
```

修改 `.babelrc`：
```json
{
  "plugins": [
    ["import", {
      "libraryName": "wang-tabs",
      "style": true
    }]
  ]
}
```

使用示例：
```tsx
import { SlopeTabs } from 'wang-tabs';
```


## 全局引入
在入口文件中引入所有组件：
```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { SlopeTabs, ElevatedSlopeTabs } from 'wang-tabs';
import 'wang-tabs/dist/index.css';

ReactDOM.render(<SlopeTabs />, document.getElementById('root'));
```


# 版本兼容性
| 环境       | 支持版本       |
|------------|-------------|
| React      | 18.x+       |
| TypeScript | 4.5+        |
| Node.js    | 16.x+       |


# 注意事项
1. **样式依赖**：必须同时引入 CSS 文件才能正确显示样式
2. **Tree Shaking**：使用按需导入时需配合 `babel-plugin-import`
3. **IE 支持**：需自行引入 `core-js` 和 `regenerator-runtime` 等 polyfill


# 下一步
- [快速上手 →](https://your-docs-url.com/guide/quick-start)
- [组件库概览 →](https://your-docs-url.com/guide/what-is-wang-tabs)


# 问题反馈
如果安装过程中遇到问题，请在 [GitHub Issues](https://github.com/0418wangweijie/wang-tabs/issues) 提交反馈。