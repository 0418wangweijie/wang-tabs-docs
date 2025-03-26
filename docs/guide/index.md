# wang-tabs

`wang-tabs` 是一个轻量级、可定制的 React 组件库，包含多个选项卡组件，支持平滑的选中状态切换动画。适用于需要选项卡切换功能的 React 项目。

## 样式处理

### SCSS 支持

本项目使用 SCSS 进行样式编写，所有组件样式均采用模块化方式管理。您可以通过以下方式自定义样式：

1. 直接修改 SCSS 变量
2. 通过 CSS 变量覆盖默认样式
3. 使用 `style` 和 `rootStyle` props 传递自定义样式

### 单位转换

为了更好的响应式支持，项目中使用了 `postcss-pxtorem` 插件将 px 单位自动转换为 rem 单位。转换规则如下：

- 根字体大小 (rootValue): 28px
- 转换精度 (unitPrecision): 5 位小数
- 最小转换值 (minPixelValue): 2px

这意味着在 SCSS 文件中编写的 px 值会在编译时自动转换为 rem 单位。例如：

```scss
// 输入
.example {
    width: 56px;
}

// 输出
.example {
    width: 2rem; /* 56px / 28px */
}
```