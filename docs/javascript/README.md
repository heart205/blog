# javaScript

## 通过 js 修改 css 变量

```css
:root {
  --color: #333;
}
```

js 设置 css 变量的值

> 将 css 变量挂载到 html 的 style 属性上

```js
document.querySelector(':root').style.setProperty('--color', '#eee')
```

或者可以给 html 绑定一个 class 通过 class 改变 css 变量的值

```css
.dark {
  --background-color: #333;
  --color: #eee;
}
```

```js
document.querySelector('html').className = 'dark'
```
