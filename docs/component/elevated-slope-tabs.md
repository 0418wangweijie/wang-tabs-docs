# ElevatedSlopeTabs

带有提升效果的线性渐变选项卡组件，支持响应式布局和主题定制。

## 🌐 组件概述

| 特性             | 描述                    |
|----------------|-----------------------|
| **动画效果**       | CSS 过渡动画实现平滑切换效果      |
| **响应式**        | 基于 Rem 单位和弹性布局，适配多端设备 |
| **可配置**        | 支持主题色、圆角、间距等样式配置      |
| **TypeScript** | 完整类型定义，确保代码安全         |
| **提升效果**     | 带有阴影和提升效果的选项卡          |

## 📱 使用场景

- **内容切换**：适用于需要在不同内容块之间切换的场景
- **步骤引导**：配合 `steps` 组件实现分步引导
- **标签导航**：作为底部或侧边栏的导航标签

## 🚀 基础用法

```tsx
import { ElevatedSlopeTabs, Tab } from 'wang-tabs';

const tabs: Tab[] = [
{ name: 'tab1', label: '标签 1' },
{ name: 'tab2', label: '标签 2' },
];

<ElevatedSlopeTabs
tabList={tabs}
activeTab="tab1"
onTabChange={(tab) => console.log(tab)}
/>
```
## 📖 API 文档

### Props

| 参数名           | 类型                      | 默认值 | 描述      |
|---------------|-------------------------|-----|---------|
| `tabList`     | `TabItem[]`                 | -   | 选项卡列表   |
| `activeTab`   | `string`                | -   | 当前激活的标签 |
| `onTabChange` | `(tab: string) => void` | -   | 标签切换回调  |
| `style`       | `CSSProperties`         | -   | 容器样式    |
| `rootStyle`   | `CSSProperties`         | -   | 根元素样式   |
| `children`    | `ReactNode`             | -   | 子元素      |

### TabItem

| 参数名     | 类型     | 默认值 | 描述     |
|---------|--------|-----|--------|
| `key`  | `string` | `number` | -   | key值    |
| `name`  | `string` | -   | 标签名称    |
| `label` | `string` | -   | 标签显示文本 |
| `content`  | `string` | -   | 标签下面内容    |
| `render`  | `JSX.Element` | -   | tabItem标签内容自定义    |


### CSS 变量

根据提供的 CSS 代码，以下是 ElevatedSlopeTabs 组件的 CSS 变量表：

| CSS 变量名 | 默认值 | 描述 |
|------------|-------|------|
| `--tabs-bg` | `linear-gradient(#cdd9fe, #e2e9fd)` | 选项卡背景渐变色 |
| `--tabs-height` | `50px` | 选项卡高度 |
| `--tabs-radius` | `8px` | 选项卡圆角大小 |
| `--tab-font-size` | `16px` | 选项卡文字大小 |
| `--tab-clip-path-before` | `path('M 0,50 C 25,50 25,0 50,0 L 50, 50 Z')` | 左侧斜角裁剪路径 |
| `--tab-clip-path-after` | `path('M 0,0 C 25,0 25,50 50,50 L 0, 50 Z')` | 右侧斜角裁剪路径 |
| `--active-before-after-width` | `var(--tabs-height)` | 激活状态前后伪元素宽度 |
| `--active-filter` | `''` | 激活状态过滤器效果 |
| `--active-transition` | `''` | 激活状态过渡动画 |
| `--active-top` | `-6px` | 激活状态顶部偏移量 |
| `--active-bg-color` | `#fff` | 激活状态背景颜色 |
| `--active-height` | `var(--tabs-height)` | 激活状态高度 |
| `--content-top` | `var(--active-top)` | 内容区域顶部偏移量 |
| `--tab-width` | `calc(100% / var(--tab-count))` | 选项卡宽度 |
| `--active-left-radius` | 未指定 | 激活状态左侧圆角 |
| `--active-right-radius` | 未指定 | 激活状态右侧圆角 |
| `--active-before-display` | `flex` | 控制左侧伪元素显示 |
| `--active-after-display` | `flex` | 控制右侧伪元素显示 |

这些 CSS 变量可以通过 `rootStyle` 属性进行自定义，例如：

```tsx
<ElevatedSlopeTabs 
  tabList={tabList} 
  activeTab={activeTab} 
  onTabChange={setActiveTab} 
  rootStyle={{
    '--tabs-bg': 'linear-gradient(#e6f7ff, #bae7ff)',
    '--active-bg-color': '#ffffff',
    '--tab-font-size': '18px'
  }} 
/>
```

## 💡 注意事项

1. **动画性能**：建议避免在复杂布局中使用过多标签
2. **响应式适配**：通过 `min-width` 媒体查询实现移动端优化
3. **无障碍**：确保 `aria-label` 正确设置，提升可访问性

## 📱 移动端示例

```tsx
// 移动端优化配置
<ElevatedSlopeTabs
style={{ padding: '0 16px' }}
rootStyle={{ maxWidth: '600px', margin: '0 auto' }}
/>
```
### 🚀 更多示例

- [完整示例代码](https://github.com/0418wangweijie/wang-tabs/blob/main/examples/ElevatedSlopeTabs.tsx)
- [主题定制指南](https://wang-tabs-docs.vercel.app/guide/theme)

### 📢 反馈

如果有任何问题或建议，欢迎在 [GitHub Issues](https://github.com/0418wangweijie/wang-tabs/issues) 反馈。

## ElevatedSlopeTabs 演示

```tsx
import React, { useState } from "react";
import { ElevatedSlopeTabs } from "wang-tabs";

const ElevatedSlopeTabsDemo = () => {
const [activeTab, setActiveTab] = useState<string>('tab1');
const [activeTab2, setActiveTab2] = useState<string>('tab1');

    console.log(import.meta.env.NODE_ENV);
    console.log(import.meta.env.VITE_API_STORYBOOK_URL);

    const tabList = [
        {
            name: 'tab1',
            label: 'Tab 1',
            content: 'Content 1'
        },
        {
            name: 'tab2',
            label: 'Tab 2',
            content: 'Content 2'
        }
    ];

    const tabList2 = [
        {
            name: 'tab1',
            label: 'Tab 1',
            content: 'Content 1'
        },
        {
            name: 'tab2',
            label: 'Tab 2',
            content: 'Content 2'
        },
        {
            name: 'tab3',
            label: 'Tab 3',
            content: 'Content 3'
        }
    ];

    return (
        <div>
            <div>
                <ElevatedSlopeTabs tabList={tabList} activeTab={activeTab} onTabChange={setActiveTab} />
                <div>
                    {tabList.filter((tab) => tab.name === activeTab).map((tab) => tab.content)}
                </div>
            </div>
            {/*多个标签以及重置样式展示效果*/}
            <div>
                <ElevatedSlopeTabs tabList={tabList2} activeTab={activeTab2} onTabChange={setActiveTab2} rootStyle={{
                    '--active-color': '#003eb3'
                }} />
                <div>
                    {tabList2.filter((tab) => tab.name === activeTab2).map((tab) => tab.content)}
                </div>
            </div>
        </div>
    );
};

export default ElevatedSlopeTabsDemo;
```
<script setup>
import { ref } from 'vue'

const storybookUrl = ref(process.env.VITE_API_STORYBOOK_URL);
</script>

<iframe
:src="`${storybookUrl}/iframe.html?viewMode=story&id=elevatedslopetabs--primary&globals=&args=`"
style="width: 100%; height:600px; border: none"
title="ElevatedSlopeTabs 演示"
>
未加载
</iframe>