## 内存回收

typeof 操作符可以确定值的原始类型，而 instanceof 操作符用于确保值的引用类型。

主流的垃圾回收算法是标记清理，即先给当前不使用的值加上标记，再回来回收它们的内存。 

## Date

Date 类型将日期 保存为自协调世界时(UTC，Universal Time Coordinated)时间 1970 年 1 月 1 日午夜(零时)至今所 经过的毫秒数。使用这种存储格式，Date 类型可以精确表示 1970 年 1 月 1 日之前及之后 285 616 年的 日期。

```js
console.log(new Date().toLocaleString()) //5/2/2022, 8:42:38 PM
console.log(new Date().toString()) // Mon May 02 2022 20:42:38 GMT+0800 (China Standard Time)
console.log(new Date().toDateString()) //星期一 五月 2号 2022
```

 toDateString()显示日期中的周几、月、日、年(格式特定于实现);
 toTimeString()显示日期中的时、分、秒和时区(格式特定于实现);
 toLocaleDateString()显示日期中的周几、月、日、年(格式特定于实现和地区);
 toLocaleTimeString()显示日期中的时、分、秒(格式特定于实现和地区);
 toUTCString()显示完整的 UTC 日期(格式特定于实现)。
 这些方法的输出与 toLocaleString()和 toString()一样，会因浏览器而异。因此不能用于在用户界面上一致地显示日期。

getTime() 返回日期的毫秒表示；与valueof()相同

setTime (milliseconds) 设置日期的毫秒表示，从而修改整个日期

getFullYear (） 返回4位数年（即 2019而不是19）

getUTCFullYear (） 返回 UTC 日期的4位数年

setFullYear (year) 设置日期的年（year 必须是4位数）

setUTCFullYear (year) 设置 UTC 日期的年（year 必须是4位数）

getMonth(） 返回日期的月（0表示 1月，11表示 12月）

getUTCMonth(） 返回 UTC 日期的月（0表示1月，11表示 12月）

setMonth (month) 设置日期的月（month 为大于0的数值，大于11 加年）

setUTCMonth (month) 设置 UTC 日期的月（month 为大于0的数值，大于11加年）

getDate() 返回日期中的日（1~31）

getUrCDate() 返回 UTC 日期中的日（1~31）

setDate (date) 设置日期中的日（如果 date 大于该月天数，则加月）

setUTCDate (date) 设置 UTC 日期中的日（如果 date 大于该月天数，则加月）

getDay(） 返回日期中表示周几的数值（0 表示周日，6表示周六）

getUrCDay() 返回 UTC 日期中表示周几的数值（0 表示周日，6表示周六）

getHours() 返回日期中的时（0~23）

getUTCHours(） 返回 UTC 日期中的时（0~23）

setHours (hours) 设置日期中的时（如果 hours 大于23，则加日）

setUrCHours (hours) 设置 UTC 日期中的时（如果 hours 大于23，则加日）

getMinutes () 返回日期中的分(0~59）

getUTCMinutes(） 返回 UTC 日期中的分(0~59）

setMinutes (minutes) 设置日期中的分（如果 minutes 大于59，则加时）

setUTCMinutes (minutes) 设置 UTC 日期中的分（如果 minutes 大于 59，则加时）

get Seconds(） 返回日期中的秒( 0~59）

getUTCSeconds() 返回 UTC 日期中的秒(0~59）

set Seconds (seconds) 设置日期中的秒（如果 seconds 大于59，则加分）

setUTCSeconds (seconds) 设置 UTC 日期中的秒（如果 seconds 大于59，则加分）

getMilliseconds(） 返回日期中的毫秒

getUTCMilliseconds (） 返回 UTC 日期中的毫秒

setMilliseconds (milliseconds) 设置日期中的毫秒

setUTCMilliseconds (milliseconds) 设置 UTC 日期中的毫秒

getTimezoneoffset () 返回以分钟计的 UTC与本地时区的偏移量（如美国 EST 即“东部标准时间”

返回 300，进人夏令时的地区可能有所差异）

## RegExp

 g:全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束。  i:不区分大小写，表示在查找匹配时忽略 pattern 和字符串的大小写。
 m:多行模式，表示查找到一行文本末尾时会继续查找。
  y:粘附模式，表示只查找从 lastIndex 开始及之后的字符串。

  u:Unicode 模式，启用 Unicode 匹配。

  s:dotAll 模式，表示元字符.匹配任何字符(包括\n 或\r)。



Exec replace 如果设置了`g` 则每次lastIndex都会变化



> 无论正则表达式是怎么创建的，继承的方法 toLocaleString()和 toString()都返回正则表达 式的字面量表示 正则表达式的valueOf()方法返回正则表达式本身。



input $_ 最后搜索的字符串（非标准特性）



lastMatch $& 最后匹配的文本



lastParen $+ 最后匹配的捕获组（非标准特性）



leftContext $`  input 字符串中出现在 LastMatch 前面的文本

rightContext $'  input 字符串中出现在 lastMatch 后面的文本



## 包装类

Boolean、Number 和 String

```
 let s1 = "some text";
    let s2 = s1.substring(2);
```

在这里，s1 是一个包含字符串的变量，它是一个原始值。第二行紧接着在 s1 上调用了 substring() 方法，并把结果保存在 s2 中。我们知道，原始值本身不是对象，因此逻辑上不应该有方法。而实际上 这个例子又确实按照预期运行了。这是因为后台进行了很多处理，从而实现了上述操作。具体来说，当 第二行访问 s1 时，是以读模式访问的，也就是要从内存中读取变量保存的值。在以读模式访问字符串 值的任何时候，后台都会执行以下 3 步:

 (1) 创建一个 String 类型的实例;

(2) 调用实例上的特定方法;
 (3) 销毁实例。
 可以把这 3 步想象成执行了如下 3 行 ECMAScript 代码:

```
    let s1 = new String("some text");
    let s2 = s1.substring(2);
    s1 = null;
```

```
let s1 = "some text";
    s1.color = "red";
    console.log(s1.color);  // undefined
```

这里的第二行代码尝试给字符串 s1 添加了一个 color 属性。可是，第三行代码访问 color 属性时， 它却不见了。原因就是第二行代码运行时会临时创建一个 String 对象，而当第三行代码执行时，这个对 象已经被销毁了。实际上，第三行代码在这里创建了自己的 String 对象，但这个对象没有 color 属性。

在原始值包装类型的实 例上调用 typeof 会返回"object"，所有原始值包装对象都会转换为布尔值 true



>  Object 构造函数作为一个工厂方法，能够根据传入值的类型返回相应原始值包装类型的实例





> 使用 new 调用原始值包装类型的构造函数，与调用同名的转型函数并不一样
>
> ```js
> let value = "25";
> let number = Number(value);
> console.log(typeof number);
> let obj = new Number(value);
> console.log(typeof obj);
> // 转型函数 // "number" // 构造函数 // "object"
> ```
>
> 

## number



toExponential()也接收一个参数，表示结果中小数的位数。

toPrecision()方法会根据情况返回最合理的输出结果，可能是固定长度，也可能是科学记数法 形式。这个方法接收一个参数

```js
let num = 99;
    console.log(num.toPrecision(1)); // "1e+2"
    console.log(num.toPrecision(2)); // "99"
    console.log(num.toPrecision(3)); // "99.0"
```

表示多少次方

```js
2的53次方 2 ** 53
```

Number.MIN_SAFE_INTEGER(253 + 1)到 Number.MAX_SAFE_INTEGER(253  1)

为了鉴别整数是否在这个范围内，可以使用 Number.isSafeInteger()

```js
console.log(Number.isSafeInteger(-1 * (2 ** 53)));      // false
    console.log(Number.isSafeInteger(-1 * (2 ** 53) + 1));  // true
    console.log(Number.isSafeInteger(2 ** 53));             // false
    console.log(Number.isSafeInteger((2 ** 53) - 1));       // true
```

