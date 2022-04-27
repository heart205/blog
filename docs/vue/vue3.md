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

定义一个对象类型的响应式数据(基本类型不要用它 要用`ref`函数)

语法：`const 代理对象 = reactive(源对象)`接受一个对象(或者数组) 返回一个 Proxy 对象

reactive 定义的响应式函数是深层次的 内部基于 Proxy 实现 通过代理对象操作源对象内部数据进行操作

## vue3 响应式

通过 Proxy 拦截对象中的任意属性的变化 包括属性值的读写 属性的添加 属性的删除等

之后再通过反射 对被代理对象的属性进行操作

```js
const obj = {
  name: 'John',
  age: 30,
  job: 'developer',
  sayHello: function () {
    console.log(`Hello, ${this.name}`);
  },
};
const proxy = new Proxy(obj, {
  // 获取某个熟悉的时候调用
  get(target, propName) {
    console.log(`Getting prop ${propName}`);
    console.log(`target[propName] = ${target[propName]}`);
    // return target[propName]
    return Reflect.get(target, propName);
  },
  // 新增或者更新的时候调用
  set(target, propName, value) {
    console.log(`Setting prop ${propName} to ${value}`);
    // target[propName] = value;
    return Reflect.set(target, propName, value);
  },
  // 删除的时候调用
  deleteProperty(target, propName) {
    console.log(`Deleting prop ${propName}`);
    // return delete target[propName];
    return Reflect.deleteProperty(target, propName);
  },
});
//#region
// console.log(proxy.age);

// proxy.age = 48;
// console.log(proxy)

// delete proxy.age;

// console.log(proxy);

//#endregion

/**
 * Reflect
 */
console.log(Reflect.get(obj, 'name'));
const isFlag = Reflect.set(obj, 'ddd', 'Tom');
console.log('isFlag', isFlag);
const a1 = Reflect.defineProperty(obj, 'ref', {
  get() {
    return 3;
  },
});
console.log('a1', a1);

// 重复定义个新的属性值 会返回一个bool类型 判断是否返回成功
const a2 = Reflect.defineProperty(obj, 'ref', {
  get() {
    return 4;
  },
});
console.log('a2', a2);

console.log(obj.ddd);

Object.defineProperty(obj, 'reflect', {
  get() {
    return '1';
  },
});

// Object.defineProperty 不能够重复定义一个属性值
Object.defineProperty(obj, 'reflect', {
  get() {
    return '2';
  },
});

console.log('2');
```

## reactive 与 ref 对比数据

1. 数据定义角度对比

   1. ref 定义基本类型数据
   2. reactive 定义 引用类型数据

   > ref 也可以用来定义引用类型数据 它内部会自动通过 reactive 转为代理对象

2. 原理角度对比

   1. ref 通过`Object.defineProperty`对数据进行劫持
   2. reactive 通过`Proxy 和 Reflect`操作源对象内部的数据 实现响应式

3. 使用角度对比

   1. ref 操作数据需要.value 在 template 中读取 ref 定义的数据不需要`.value`

   ```vue
   <template>
     <div>{{ objRef.a }}</div>
     <button @click="click">函数点击添加</button>
   </template>
   <script>
   import { ref } from 'vue';
   export default {
     setup() {
       let objRef = ref({ a: 1, b: 2 }); // 引用数据类型的对象是RefImpl 里面的value是Proxy对象
       return {
         objRef,
         click() {
           objRef.value.a++;
         },
       };
     },
   };
   </script>
   ```

4. reactive 定义的数据均不需要`.value`

setup 执行的时机

- 在 beforeCreate 之前执行一次 this 是`undefined`

```js
setup(props,context) {

}
```

```vue
<template slot="qwe"></tempalte>  //已经不推荐写法

<template v-slot:q></template> v3推荐写法
```

### setup 参数

1. props 值为对象 父组件传递的属性且已经在组件内部声明接收了的
2. Context ： 上下文对象
   1. attrs： 值为对象 包含组件外部传递的 并且没有在 props 中配置的声明的属性 相当于$attrs
   2. slots: 收到的插槽的内容 相当于 this.$slots
   3. emit 分发自定义事件的函数 相当于 this.$emit

## 计算属性

```vue
<template>
  <div>
    first-name: <input type="text" v-model="person['first-name']" />
    <br />
    last-name: <input type="text" v-model="person['last-name']" />
    <br />
    full-name: <input type="text" v-model="person.fullName" />
  </div>
</template>

<script>
import { computed, reactive } from 'vue';
export default {
  setup() {
    const person = reactive({
      'first-name': '张三',
      'last-name': '李四',
      age: 18,
    });
    // 计算属性应该为 person 的一个属性 不应该单独变成一个对象
    // const computedObj = computed(() => {
    //   return `${person["first-name"]} - ${person["last-name"]}`;
    // });
    person.fullName = computed(() => {
      return `${person['first-name']} - ${person['last-name']}`;
    });
    return {
      person,
      //  computedObj
    };
  },
};
</script>
```

### 测试响应式

```vue
<template>
  <div>
    <button @click="updateB">点击测试响应式</button>
    {{ b }}
  </div>
</template>
<script>
let detail = 1;
import { computed, reactive } from 'vue';
export default {
  setup() {
    const person = reactive({
      'first-name': '张三',
      'last-name': '李四',
      age: 18,
    });
    // 由于detail不是响应式数据 所以页面不会刷新
    const b = computed({
      get() {
        return detail + 'b';
      },
      set(value) {
        console.log('a');
        detail++;
        // 这里如果换成 person.age++ 即会刷新页面
        return true;
      },
    });
    function updateB() {
      b.value++;
      console.log('更新b', 'detail', detail);
    }
    return {
      person,
      updateB,
      b,
    };
  },
};
</script>
```
## watch

watch 单个值的写法

```js
setup() {
	let sum = ref(0)
	watch(sum, (newVal, oldVal) => {
  	console.log('sum变化', newVal, oldVal)
	},{immediate: true})
}
```

watch 多个值的写法

```js
watch(
  [sum, msg],
  (newVal, oldVal) => {
    // 此时的newVal是一个数组 oldVal也是一个数组
    // newVal[newSum,newMsg] oldVal[oldSum,oldMsg]
    console.log('sum变化', newVal, oldVal);
  },
  { immediate: true }
);
```


