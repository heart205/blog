# CSS

# css 变量

css 变量的取值操作是根据作用域取值 当前作用域没有 会向上级逐层查找

```css
:root {
  --color: pink;
}
.app {
  --color: red;
  width: 100px;
  height: 100px;
  background-color: var(--color);
}
```

## 变量用于属性值

```css
.foo {
  --side: margin-top;
  var(--side): 20px;
}
```

## css 伪元素

### lang 伪元素

选择 lang 属性的元素

```css
p:lang(en) {
  background-color: red;
}
```

```html
<!-- 由于默认的html就是带有en的 所以:lang(en) 能选择到p标签 -->
<div>
  <p>1</p>
  <p>2</p>
  <p lang="zh">3</p>
</div>
```
[codepen](https://codepen.io/hearto_o/pen/eYyyOXq)

## 变量默认值

如果没有--color 变量 则会使用 blue 替代

```css
background-color: var(--color, blue);
```

> [CSS Custom Properties for Cascading Variables Module Level 1](https://www.w3.org/TR/css-variables-1/#custom-property)

## 移动端布局

### 设备像素 DP(device pixels)

DP(device pixels) 称为设备像素 物理像素

> (设备像素 物理像素)代表屏幕上有多少个点，比如 1080x2340 表示屏幕一排包含 1080 个物理像素点

### 逻辑像素

逻辑像素表示屏幕展示物体的视觉尺寸是多少，逻辑像素也称作设备独立像素 与设备无关的逻辑像素，代表可以通过程序控制使用的虚拟像素，是一个总体概念，包括了 CSS 像素

### 设备像素比 DPR(device pixels ratio)

设备像素比（dpr 描述的是未缩放状态下，物理像素和设备独立像素的初始比例关系，计算方法如下图。
DPR = 物理像素 / 设备独立像素

> 在理想视口下 一个 css 像素等于一个设备独立像素
> web 端开发的时候 当页面缩放比例为 100%时，一个 CSS 像素等于一个设备独立像素。

> 由于移动端的屏幕比例不一致 因此后面引入了像素比的概念 为了适配各种屏幕，我们写代码时一般使用设备独立像素来对页面进行布局 但是一般的设计稿都是
> 设备像素比大于 1 的屏幕上，我们写的 1px 实际上是被多个物理像素渲染，这就会出现 1px 在有些屏幕上看起来很粗的现象 （相当于 1px 的 css 像素显示到屏幕的物理像素会是多 px）

当设备像素比为 1:1 时，使用 1（1×1）个设备像素显示 1 个 CSS 像素；

当设备像素比为 2:1 时，使用 4（2×2）个设备像素显示 1 个 CSS 像素；

当设备像素比为 3:1 时，使用 9（3×3）个设备像素显示 1 个 CSS 像素。

因此在移动端开发的时候不仅要关注设备像素比 还需要关注设备的尺寸

> 以媒体查询为例子：

```css
@media screen and (min-width: 375px) {
  .app {
    width: 375px;
  }
}
@media screen and (min-width: 414px) {
  .app {
    width: 414px;
  }
}
```

> [像素比查询网站](https://screensiz.es/)<br /> > [iPhone Resolutions](https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions)
