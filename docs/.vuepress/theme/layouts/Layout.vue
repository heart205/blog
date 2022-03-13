<template>
  <div>
    <div className="heart-main">
      <div className="custom-shape-divider"></div>
    </div>
    <div class="container">
      <div class="siderbar">
        <template v-for="(item, index) in titles" :key="index">
          <SiderBar :titles="item" />
        </template>
      </div>
      <main>
        <Content ref="container" />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import type { titles } from '../../types/layouts'
  import SiderBar from './sidebar.vue'
  type T = HTMLCollection | null
  export default {
    data() {
      const data: {
        titles: Array<titles>
      } = {
        titles: [],
      }
      return data
    },
    components: {
      SiderBar,
    },
    methods: {
      // 推测title的标题是第几标题
      // TODO: 判断数字开头的情况
      inferTitleNumber(title: string): number {
        const reg = /H(\d)/
        if (reg.test(title)) {
          return Number.parseInt(RegExp.$1)
        }
        return NaN
      },
      // 添加标题至titles中
      addTitle(num: number, text: string) {
        const obj = {
          type: `H${num}`,
          text,
          children: null,
        }
        if (this.titles.length === 0) {
          this.titles.push(obj)
          return
        }
        let tree: titles = this.titles[this.titles.length - 1] // 最终的树
        let result: titles | null = null
        while (true) {
          const len = this.inferTitleNumber(tree.type)
          if (len >= num) {
            break
          }
          result = tree
          if (tree.children) {
            tree = tree.children[tree.children.length - 1]
          } else {
            break
          }
        }
        if (result !== null) {
          if (!result.children) result.children = []
          result.children.push(obj)
        } else {
          this.titles.push(obj)
        }
      },
    },
    mounted() {
      // 获取侧边栏状态栏
      const total = ['H1', 'H2', 'H3', 'H4', 'H5']
      let titleCollection: T =
        (this.$refs.container &&
          this.$refs.container.parentNode &&
          this.$refs.container.parentNode.children) ||
        null
      // 用树的前序遍历来写到时候
      if (titleCollection) {
        for (let i in titleCollection) {
          if (titleCollection[i] instanceof HTMLHeadingElement) {
            const index = this.inferTitleNumber(titleCollection[i].nodeName)
            if (!isNaN(index)) {
              this.addTitle(index, titleCollection[i].getAttribute('id'))
            }
          }
        }
      }
    },
  }
</script>

<style scoped>
  :root {
    --left-color: #e883a5;
    --right-color: #e18a4e;
  }
  .heart-main {
    position: relative;
    background: linear-gradient(217deg, #ece5b8, #defbba 70.71%),
      linear-gradient(127deg, #e9e9b8, #eae7b8 70.71%),
      linear-gradient(336deg, #f3d7b7, #efdeb8 70.71%);
    animation: color-change 8s linear infinite;
    height: 100vh;
  }
  .img-main {
    position: absolute;
    width: 600px;
    left: 15px;
    top: 50%;
    transform: translateY(-30%);
    object-fit: contain;
  }
  .custom-shape-divider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider svg {
    position: relative;
    display: block;
    width: calc(131% + 1.3px);
    height: 290px;
  }

  .shape-fill {
    fill: #ffffff !important;
  }

  @keyframes color-change {
    from {
      filter: hue-rotate(360deg);
    }
  }
  .container {
    display: flex;
  }
  .siderbar{
    width: 200px;
    border-right: 1px solid var(--c-border);
    margin-right: 40px;
    padding: 1.5rem 0;
  }
</style>
