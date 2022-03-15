# TypeScript

## 记录 📝

## 基本类型

### 数组类型

1. 普通的数组类型

```ts
let fibonacci: number[] = [1, 1, 2, 3, 5]

// 数组的项中不允许出现其他的类型
// 不能将类型“string”分配给类型“number”。
let fibonacciTo: number[] = [1, 1, 2, 3, '5']

// 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
let fibonacciNumber: number[] = [1, 1, 2, 3, 5]

//类型“string”的参数不能赋给类型“number”的参数。
fibonacciNumber.push('8')

// 如果数组里面需要使用多个值 可以用type启用一个类型别名
type types = string | number

let fi: types[] = [1, 2, 3, 4, 5, '5']
```

2. 数组范型

```ts
let arrayGenerics: Array<string | number> = [1, 2, 3, 4, 5, '5']
```

3. 特殊的还可以使用一个接口去表示一个数组
   > 数字索引是 string 索引的子集 <br />

```ts
interface inter {
  [index: number]: number | string
}

let fibo: inter = [1, 123, 3213213, 321]
fibo[1] === fibo['1']
```

> 两种任意类型签名并存时，number 类型的签名指定的值类型必须是 string 类型的签名指定的值类型的子集,索引的类型为数字的时候 他的索引类型就必须是 number 类型或者 string 类型<br />

```ts
interface it {
  // 会报错 “number”索引类型“string | number”不能分配给“string”索引类型“object”。
  [index: number]: number | string
  [index: string]: object
}
```

### 类数组类型

类数组（Array-like Object）不是数组类型，比如 arguments,除了有数组的索引签名之外 还拥有其他的属性
类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等

```ts
interface likeObjArray {
  [index: number]: number
  length: number
  callee: Function
}

function sum(a: number, b: number): void {
  // let arg : number[]= arguments; //  类型“IArguments”缺少类型“number[]”的以下属性: pop, push, concat, join 及其他 27 项。
  let arg: likeObjArray = arguments
  // 注意不要写成
  // let arg : Array<likeObjArray> = arguments // 这里说明了 arg是一个二维数组 里面的每一项 都是likeObjArray的类数组
  let args: Array<likeObjArray> = Array(arguments)
}
```

IArguments 是 Typescript 已经定义好了的类型

```ts
interface IArguments {
  [index: number]: any
  length: number
  callee: Function
}
```

## 索引访问类型

通过索引访问类型 可以查找到其他类型或者元素上的特定的属性

> `['taobao', 'timal', 'alipay'] as const` 表示为只读数组

索引类型操作对象:

```ts
type Person = { age: number; name: string; alive: boolean }
// type value = string | number | boolean
type value = Person[keyof Person] // keyof 获取key
type key = keyof Person // age | name | alive
```

索引类型操作数组:

```ts
const app = ['taobao', 'timal', 'alipay'] as const
// a = taobao | timal | alipay
// 如果传入string 会报错
// 但是会转成string 因此这里的a获取的是app的索引类型以及类的全部属性
type a = typeof app[number] 

```
