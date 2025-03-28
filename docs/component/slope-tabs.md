# SlopeTabs

平滑的线性渐变选项卡组件，支持响应式布局和主题定制。

## 🌐 组件概述

| 特性             | 描述                    |
|----------------|-----------------------|
| **动画效果**       | CSS 过渡动画实现平滑切换效果      |
| **响应式**        | 基于 Rem 单位和弹性布局，适配多端设备 |
| **可配置**        | 支持主题色、圆角、间距等样式配置      |
| **TypeScript** | 完整类型定义，确保代码安全         |

## 📱 使用场景

- **内容切换**：适用于需要在不同内容块之间切换的场景
- **步骤引导**：配合 `steps` 组件实现分步引导
- **标签导航**：作为底部或侧边栏的导航标签

## 🚀 基础用法

```tsx
import {SlopeTabs, Tab} from 'wang-tabs';

const tabs: Tab[] = [
    {name: 'tab1', label: '标签 1'},
    {name: 'tab2', label: '标签 2'}
];

<SlopeTabs
    tabList={tabs}
    activeTab="tab1"
    onTabChange={(tab) => console.log(tab)}
/>
```

## 📖 API 文档

### Props

| 参数名           | 类型                      | 默认值 | 描述      |
|---------------|-------------------------|-----|---------|
| `tabList`     | `Tab[]`                 | -   | 选项卡列表   |
| `activeTab`   | `string`                | -   | 当前激活的标签 |
| `onTabChange` | `(tab: string) => void` | -   | 标签切换回调  |
| `style`       | `CSSProperties`         | -   | 容器样式    |
| `rootStyle`   | `CSSProperties`         | -   | 根元素样式   |

### CSS 变量

| CSS 变量名          | 默认值      | 描述                     |
|-------------------|-----------|------------------------|
| `--tab-height`    | `152px`   | 选项卡高度                 |
| `--active-color`  | `#4096ff` | 激活状态背景颜色             |
| `--primary-color` | `#bae0ff` | 默认状态背景颜色             |
| `--font-color`    | `#fff`    | 文字颜色                   |
| `--border-radius` | `35px`    | 圆角大小                  |
| `--font-size`     | `44px`    | 文字大小                  |

## 💡 注意事项

1. **动画性能**：建议避免在复杂布局中使用过多标签
2. **响应式适配**：通过 `min-width` 媒体查询实现移动端优化
3. **无障碍**：确保 `aria-label` 正确设置，提升可访问性

## 📱 移动端示例

```tsx
// 移动端优化配置
<SlopeTabs
    style={{padding: '0 16px'}}
    rootStyle={{maxWidth: '600px', margin: '0 auto'}}
/>
```

### 🚀 更多示例

- [完整示例代码](https://github.com/0418wangweijie/wang-tabs/blob/main/examples/SlopeTabs.tsx)
- [主题定制指南](https://wang-tabs-docs.vercel.app/guide/theme)

### 📢 反馈

如果有任何问题或建议，欢迎在 [GitHub Issues](https://github.com/0418wangweijie/wang-tabs/issues) 反馈。

## SlopeTabs 演示

```tsx
import React, {useState} from "react";
import {SlopeTabs} from "wang-tabs";

const SlopeTabsDemo = () => {
    const [activeTab, setActiveTab] = useState<string>('tab1')
    const [activeTab2, setActiveTab2] = useState<string>('tab1')

    console.log(import.meta.env.NODE_ENV)
    console.log(import.meta.env.VITE_API_STORYBOOK_URL)
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
    ]

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
    ]

    return (
        <div>
            <div>
                <SlopeTabs tabList={tabList} activeTab={activeTab} onTabChange={setActiveTab}/>
                <div>
                    {tabList.filter((tab) => tab.name === activeTab).map((tab) => tab.content)}
                </div>
            </div>
            {/*多个标签以及重置样式展示效果*/}
            <div>
                <SlopeTabs tabList={tabList2} activeTab={activeTab2} onTabChange={setActiveTab2} rootStyle={{
                    '--active-color': '#003eb3'
                }}/>
                <div>
                    {tabList2.filter((tab) => tab.name === activeTab2).map((tab) => tab.content)}
                </div>
            </div>
        </div>
    )
}

export default SlopeTabsDemo
```

<script setup>
import { ref } from 'vue'

const storybookUrl = ref(process.env.VITE_API_STORYBOOK_URL);

</script>

<iframe
:src="`${storybookUrl}/iframe.html?globals=viewport%3Amobile&viewMode=story&id=slopetabs--primary`"
style="width: 100%; height:600px; border: none"
title="SlopeTabs 演示"
>
未加载
</iframe>



