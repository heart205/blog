# Vue 3.0

## 初始化

`npm init vite-app <project-name>`

## 一些特性

```js
// createApp 工厂函数 已经不会导出Vue
// import Vue from 'vue' // undefined
import { createApp } from 'vue';
```

> vue3.0 的 template 可以没有根标签

## Composition API 组合式 API

### setup

一个配置项 值是一个函数

组件中所用到的：数据。方法等等 均要在配置在 setup 中

1. 如果返回的是一个对象 则对象中的属性 方法 在模版中均可以直接使用

   ```js
   export default {
     setup() {
       // 有点小问题 数据不是响应式
       return {
         msg: 'Hello Vue.js!22',
         count: 0,
       };
     },
   };
   ```

2. 如果返回一个渲染函数 则可以自定义渲染内容

```js
import { h } from 'vue';
export default {
  setup() {
    // 自定义渲染函数
    return () => {
      return h('h1', 'hello vue');
    };
  },
};
```

> vue2 的配置可以读取到 vue3 中的配置
>
> vue3 的 setup 中可能会读取不到 vue2 的配置
>
> 如果有重名 setup 优先
>
> setup 不能是一个 async 函数 因为返回值不再是对象 而是一个 promise

## ref

定义一个响应式的数据

```vue
<template>
  <div>{{ msg }}</div>
  <div>{{ obj.a }}</div>
  <div>{{ obj.b }}</div>
  <button @click="msg = '112'">点击添加</button>
  <button @click="click">函数点击添加</button>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    let msg = ref('hello message');
    console.log(msg); // 被ref加工后是一个引用实现的对象RefImpl
    let obj = ref({ a: 1, b: 2 }); // 引用数据类型的对象是RefImpl 里面的value是Proxy对象
    console.log(obj);
    return {
      msg: msg,
      obj: obj,
      click() {
        // 在template中可以不用.value
        msg.value = '112';
      },
    };
  },
};
</script>
```

基本数据类型的数据是依靠 Object.defineProperty()的 get 和 set 完成的

引用类型的数据 内部求助了 Vue3.0 中的一个新的函数`reactive`函数 完成了 Proxy 对象的封装

## reactive
