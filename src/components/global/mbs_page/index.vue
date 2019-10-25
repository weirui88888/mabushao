<template>
    <div class="page-demo">
        <nav aria-label="Page navigation">
            <ul :class="paginationSize">
              <li @click="_prevClick" :class="{disabled:disabledPrev}" class="hover-pointer">
                  <span aria-hidden="true">上一页</span>
              </li>
              <li v-for="page in totalPage" :key="page" :class="{active:page === pageNumber}" @click.prevent="_onClick(page)"><a href="#">{{page}}</a></li>
              <li @click="_nextClick" :class="{disabled:disabledNext}" class="hover-pointer">
                  <span aria-hidden="true">下一页</span>
              </li>
            </ul>
          </nav>
    </div>
</template>

<script>
export default {
  name: 'MbsPage',
  props: {
    // 可视区域最多展示多少页分页
    max: {
      type: Number,
      default: 5
    },
    size: {
      type: String,
      default: ''
    },
    // 总共多少条数据
    totalNum: {
      type: Number,
      default: 0
    },
    // 每页多少条
    pageSize: {
      type: Number,
      default: 20
    },
    // 当前多少页
    pageNumber: {
      type: Number,
      default: 1
    }
  },
  computed: {
    paginationSize () {
      let sizeConfig = {
        pagination: true
      }
      if (this.size) {
        sizeConfig['pagination-' + this.size] = true
      }
      return sizeConfig
    },
    totalPage () {
      let totalPage = Math.ceil(this.totalNum / this.pageSize)
      if (totalPage === 0) return 1
      return totalPage
    },
    // eslint-disable-next-line vue/return-in-computed-property
    disabledNext () {
      if (this.pageNumber === this.totalPage) {
        return true
      }
      return false
    },
    // eslint-disable-next-line vue/return-in-computed-property
    disabledPrev () {
      if (this.pageNumber === 1) {
        return true
      }
      return false
    }
  },
  methods: {
    // 点击页码
    _onClick (page) {
      if (page === this.pageNumber) return
      this.pageNumber = page
      this._pageChange()
    },
    _prevClick () {
      if (this.pageNumber === 1) return
      this.pageNumber--
      this._pageChange()
    },
    _nextClick () {
      if (this.pageNumber >= this.totalPage) return
      this.pageNumber++
      this._pageChange()
    },
    _pageChange () {
      this.$emit('pageChange', {
        pageNumber: this.pageNumber,
        pageSize: this.pageSize
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .hover-pointer{
    cursor: pointer;
  }
</style>
