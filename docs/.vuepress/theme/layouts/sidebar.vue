<script>
  import { h } from 'vue'
  // TODO: vue写递归组件 生成侧边栏
  function hRender(h, x) {
    return h(
      'li',
      x.children instanceof Array
        ? x.children.map((t) => {
            return [h('a', { href: '#' + x.text }, [x.text]), hRender(h, t)]
          })
        : [h('a', { href: '#' + x.text }, [x.text])]
    )
  }
  export default {
    name: 'SiderBar',
    props: {
      titles: [],
    },
    render() {
      return h(
        'ul',
        {},
        this.titles && this.titles.children instanceof Array
          ? this.titles.children.map((x) => {
              return [
                h('a', { href: '#' + this.titles.text }, [this.titles.text]),
                hRender(h, x),
              ]
            })
          : [h('a', { href: '#' + this.titles.text }, [this.titles.text])]
      )
    },
  }
</script>

<style lang="css" scoped>
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul {
    padding-left: 20px;
  }
  li {
    padding-left: 10px;
  }
  ul a,
  li a {
    color: var(--color);
    transition: color 0.2s cubic-bezier(.14,.87,.9,.39)
  }
  ul a:hover,li a:hover {
    color: var(--c-text-accent);
  }
  ul > a { 
    font-weight: 600;
  }
</style>
