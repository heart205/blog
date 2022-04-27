# 推荐轮子 文章

## 文件预览

|      文档格式      |         老的开源组件         |             替代开源组件             |
| :----------------: | :--------------------------: | :----------------------------------: |
|    word（docx）    |           mammoth            |          docx-preview(npm)           |
| powerpoint（pptx） |            pptxjs            |           pptxjs 改造开发            |
|   excel（xlsx）    |    sheetjs、handsontable     | exceljs(npm)、handsontable(npm)(npm) |
|     pdf（pdf）     |            pdfjs             |              pdfjs(npm)              |
|        图片        | jquery.verySimpleImageViewer |            v-viewer(npm)             |

## canvas 思考

用 v3 写了一个 canvas 画笔功能

```vue
<template>
  <div>
    <canvas ref="canvas" @mousedown="mouseDown" @mouseup="mouseUp"></canvas>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue';
export default {
  setup() {
    const canvas = ref(null);
    const options = reactive({
      fontSize: 12,
      ctx: '',
      width: 300,
      height: 150,
    });
    function mouseMove(event) {
      options.ctx.restore();
      options.ctx.lineTo(event.offsetX, event.offsetY);
      options.ctx.stroke();
      options.ctx.save();
      event.stopPropagation();
      return false;
    }
    function addEventListener(canvas, options, event) {
      const { offsetX, offsetY } = event;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          options.ctx = ctx;
          options.ctx.beginPath();
          options.ctx.moveTo(offsetX, offsetY);
          canvas.addEventListener('mousemove', mouseMove, false);
        }
      }
    }
    function removeEventListener(canvas, options) {
      if (options.ctx) {
        options.ctx.closePath();
      }
      canvas && canvas.removeEventListener('mousemove', mouseMove, false);
    }
    function mouseDown(event) {
      const canvas = event.target;
      addEventListener(canvas, options, event);
    }
    function AddEventRemoveCanvasMouseMoving() {
      if (canvas && canvas.value) {
        removeEventListener(canvas.value, options);
      }
    }
    function mouseUp(event) {
      const canvas = event.target;
      removeEventListener(canvas, options);
    }
    onMounted(() => {
      const c = canvas.value;
      if (c) {
        // width height 决定了多少像素可以显示在画布上
        c.width = options.width * window.devicePixelRatio;
        c.height = options.height * window.devicePixelRatio;
        // 这里的 宽 高 还是300 150 相当于画布被缩放
        c.style.width = options.width + 'px';
        c.style.height = options.height + 'px';
        const ctx = c.getContext('2d');
        ctx.fontSize = options.fontSize + 'px';
        // 因此这里要放大
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        window.addEventListener(
          'mousemove',
          AddEventRemoveCanvasMouseMoving,
          false
        );
      }
    });
    return {
      canvas,
      mouseDown,
      mouseMove,
      mouseUp,
    };
  },
};
</script>

<style scoped>
canvas {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
}
</style>
```

> canvas 的 width 和 height 属性 决定了多少 css 像素可以显示在画布上
>
> canvas.style.width 和 canvas.style.height 决定了画布的显示尺寸
>
> 这里将 canvas width height 放大了设备像素比 style.width/height 没有变 相当于画布被缩放了 因此` ctx.scale(window.devicePixelRatio, window.devicePixelRatio)` 要放大(这个只是放大局部区域)
>
> 以 300 150 window.devicePixelRatio = 2 为例子
>
> 相当于原来(300 * 150) 的图片要放大成 (600 * 300) 有些地方就会有锯齿
>
> 如果将css像素放大两倍(`canvas.width = canvas.width * window.devicePixelRatio`) 此时对应的像素比就是1 : 1 因此不会模糊
>
> 这里只是将css像素放大了一倍 因此导致视觉上会被缩小(此时的像素比是 1 : 1 了) 因此使用scale局部放大(像素比没有变化 因此 还是清晰)
>
> 不全部用多倍图的原因[博客链接](https://ogliu.com/2020/11/26/2x3x/)
