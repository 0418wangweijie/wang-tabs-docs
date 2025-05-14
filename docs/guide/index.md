
# 什么是 `WangTabs`

`WangTabs` 是一个轻量级、可定制的 React 组件库，专为构建平滑的选项卡切换交互而设计。它提供了 **SlopeTabs** 和 **ElevatedSlopeTabs** 等多种核心组件，支持 **CSS 动画**、**样式定制** 和 **TypeScript**，适用于需要高效实现选项卡功能的 React 项目。


## 核心功能

| 功能特性               | 说明                                                                 |
|-----------------------|--------------------------------------------------------------------|
| **平滑动画**          | 支持 CSS 过渡和 React Spring 动画，提供流畅的选中状态切换体验。                        |
| **完全可控**          | 支持受控/非受控模式，开发者可通过 `activeTab` 和 `onTabChange` 完全控制组件状态。           |
| **主题定制**          | 提供 4 种内置主题，支持 CSS 变量覆盖或自定义样式 API，轻松适配不同设计需求。                |
| **响应式设计**        | 基于 Rem 单位和弹性布局，自动适配移动端和 PC 端。                                   |
| **TypeScript 支持**   | 完整的类型定义，确保代码安全和开发效率。                                           |


## 快速上手

### 安装
```bash
npm install wang-tabs
# 或
yarn add wang-tabs
```

### 基本使用
```tsx
import React, { useState } from 'react';
import { SlopeTabs } from 'wang-tabs';

const App = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const tabList = [
    { name: 'tab1', label: '标签 1'},
    { name: 'tab2', label: '标签 2'},
  ];

  return (
    <SlopeTabs
      tabList={tabList}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
};
```


## 组件对比

| 组件名称           | 视觉风格       | 核心特性                                                                 |
|-------------------|-------------|-----------------------------------------------------------------------|
| **SlopeTabs**     | 线性渐变样式    | 简洁的线性切换效果，适合常规选项卡场景。                                    |
| **ElevatedSlopeTabs** | 立体悬浮样式   | 独特的 3D 悬浮效果，适合需要突出视觉层级的场景。                            |


## 样式定制

### 1. CSS 变量覆盖
通过修改以下变量快速调整样式：
```css
:root {
  --active-color: #ff6b6b; /* 激活态颜色 */
  --font-size: 16px;       /* 文字大小 */
  --border-radius: 8px;    /* 圆角 */
}
```

### 2. 自定义样式 API
通过 `style` 和 `rootStyle` props 传递样式对象：
```tsx
<SlopeTabs
  style={{ padding: '1rem' }}
  rootStyle={{ '--border-radius': '20px' }}
/>
```

## 环境变量配置

wang-tabs 支持通过环境变量配置 px 到 rem 的转换功能：

| 环境变量 | 类型 | 默认值 | 描述 |
|---------------|-------|----|----------------------------------------------|
| `ENABLE_PX_TO_REM` | `boolean` | `true` | 是否启用 px 到 rem 的自动转换 |
| `PX_TO_REM_ROOT_VALUE` | `number` | `16` | rem 转换的基准值 |

### 配置示例

```bash
# 启用 px 到 rem 转换，基准值为 16px
ENABLE_PX_TO_REM=true PX_TO_REM_ROOT_VALUE=16 npm start

# 禁用 px 到 rem 转换
ENABLE_PX_TO_REM=false npm start

# 自定义基准值为 75px（适用于移动端）
ENABLE_PX_TO_REM=true PX_TO_REM_ROOT_VALUE=75 npm start
```


## 开发与贡献

1. **提交 Issue**：在 [GitHub Issues](https://github.com/0418wangweijie/wang-tabs/issues) 反馈问题或建议。
2. **Pull Request**：Fork 仓库后提交代码，需通过测试和文档检查。
3. **讨论社区**：加入 [Discussions](https://github.com/0418wangweijie/wang-tabs/discussions) 参与功能设计讨论。


## 许可证

MIT License © 2025-present [Your Name](https://github.com/0418wangweijie)

```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```