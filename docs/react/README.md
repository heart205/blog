# react

## ReactDOM API:

### unmountComponentAtNode

> 从 DOM 中卸载 react 组件 并且会将组件的事件监听和 state 一起卸载 如果传入的 dom 中有 react 组件 则会被卸载 原声的 dom 组件不受影响

```js
ReactDOM.unmountComponentAtNode(divTag)
```

> [unmountComponentAtNode](https://zh-hans.reactjs.org/docs/react-dom.html#unmountcomponentatnode)

### render(element, container[, callback])

> 如果 React 元素之前已经在 container 里渲染过，这将会对其执行更新操作，并仅会在必要时改变 DOM 以映射最新的 React 元素。<br />
> 首次调用时，容器节点里的所有 DOM 元素(子节点)都会被替换
> callback callback 将在组件被渲染或更新之后被执行

```js
ReactDOM.render(
  <MessageFunction
    message={message}
    type={type}
    onclose={() => {
      if (divTag) {
        ReactDOM.unmountComponentAtNode(divTag)
        root ? root.removeChild(divTag) : null
        if (root && !root?.hasChildNodes()) {
          document.body.removeChild(root)
        }
      }
    }}
  />,
  divTag
)
```

> [render](https://zh-hans.reactjs.org/docs/react-dom.html#render)

### dangerouslySetInnerHTML

直接在 react 中添加 DOM 元素会被当作字符串解析
dangerouslySetInnerHTML 是 React 为浏览器 DOM 提供 innerHTML 的替换方案 `key 为 __html`

```tsx
<code>
  <pre dangerouslySetInnerHTML={{ __html: prismjs.highlight(JSON.stringify(code, null, 2) || '', prismjs.languages[language], language) }}></pre>
</code>
```

> [dangerouslySetInnerHTML](https://zh-hans.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)


> [mui]](https://github.com/mui/material-ui)