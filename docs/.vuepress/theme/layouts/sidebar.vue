<script>
  import { h } from 'vue'
  // TODO: vue写递归组件 生成侧边栏
  function hRender(h, x) {
    return h(
      x.type,
      x.children instanceof Array
        ? x.children.map((t) => {
            return [x.text, hRender(h, t)]
          })
        : [x.text]
    )
  }
  export default {
    name: 'SiderBar',
    props: {
      titles: [],
    },
    render() {
      return  h(
        this.titles.type,
        {},
        this.titles && this.titles.children instanceof Array
          ? this.titles.children.map((x) => {
              return [this.titles.text, hRender(h, x)]
            })
          : [this.titles.text]
      )
    },
  }
</script>
