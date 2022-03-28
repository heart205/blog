# WebGL

## three.js

### 通过 npm 安装 three.js

安装：

```js
npm install three
```

以 cjs 的风格引用

```js
var THREE = require('three')
var Scene = require('three').Scene
```

以 ESM 的风格引用

```js
import * as THREE from 'three'
import { Scene } from 'three'
```

一些常用类的引入

```js
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer'
```

### 相机

#### 透视相机

```js
const camera = new three.PerspectiveCamera(45, width / height, 0.1, 1000)
```

- 第一个参数是视野角度（FOV） 一般为 45（单位是角度）

- 第二个参数是长宽比（aspect ratio）

- 近截面（near）物体某些部分比摄像机的近截面近 不会渲染

- 远截面（far）物体某些部分比摄像机的远截面远 也不会渲染

```js
// 相机的偏移量 set(x,y,z)
camera.position.set(10, 10, 10)
```

> Threejs 相机对象 Camera 的.lookAt()方法用来设置相机对象看向的位置。<br />.lookAt()方法的参数是三维空间中一个点世界坐标 xyz，参数可以是分别输入 xyz 参数形式.lookAt(x,y,z)，参数也可以是一个表示坐标的三维向量对象.lookAt(new THREE.Vector3(x,y,z))

```js
// scene.position的默认是new THREE.Vector3(0,0,0)
// 这里看向场景的原点的位置
// 在设置lookAt的
camera.position.set(10, 10, 10)
camera.lookAt(scene.position)
```

### 渲染器

#### WebGLRenderer 渲染器

```js
renderer = new THREE.WebGLRenderer() // 创建WebGL对象
renderer.setClearColor(new THREE.Color(0xeeeeee)) //设置默认的渲染颜色
renderer.setSize(width, height) // 设置渲染的尺寸
document.body.appendChild(renderer.domElement) //将渲染的元素挂载到DOM上
```
