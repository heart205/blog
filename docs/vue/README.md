# vue

## 获取当前的路由

```js
this.$route.path;
```

## wacth 的深层使用

watch 用于监听数据的变化，但是如果监听的对象是一个引用类型的对象，对象的属性值变化默认是监听不到的 可以通过添加 deep 属性配置来深度监听

```js
watch: {
  tableData: {
    handler(newValue,oldValue) {
      // ...
    },
    deep:true, // 深度监听配置
  }
}
```

> handler 不仅可以是一个函数 还可以是一个数组函数 数组里面的函数会一次执行

```js
watch: {
  tableData: {
    handler: [
      function getData(newValue, oldValue) {
        // ...
      },
      function getLength(newValue,oldValue) {
        // ...
      }
    ];
  }
}
```

但是如果一个对象的属性很多 对每个属性都进行监听的性能开销会非常大 因为代码可以优化为:

```js
watch: {
  'tableData.rows.id': {
    handler(newValue,oldValue) {
      // ...
    },
    deep:true
  }
}
```

watch 还有一个属性就是 `immediate` 添加该属性之后可以使得侦听开始之后立即被调用（一般用于是否在侦听对象的初始化的时候是否需要进行侦听回调）

```js
watch: {
  'tableData.rows.id': {
    handler(newValue,oldValue) {
      // ...
    },
    deep:true,
    immediate:true,
  }
}
```
