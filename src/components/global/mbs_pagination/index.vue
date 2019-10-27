<template>
  <div class="pagination-wrap clearfix">
      <nav aria-label="Page navigation" class="clearfix navigation-style" :class="[paginationPosition]">
          <select class="form-control pull-left" :class="[paginationSelect]" v-model="pagesize" v-if="sizeList.length">
              <option v-for="size in sizeList" :key="size" :value="size">每页{{size}}条</option>
            </select>
          <ul :class="[paginationSize]" class="pull-left">
              <li class="hover-pointer" v-if="showQuickLinkFirst" @click.prevent="_goFirstPage">
                  <a href="#" aria-label="First">
                    <span aria-hidden="true">首页</span>
                  </a>
              </li>
            <li @click.prevent="_prevClick" v-if="!disabledPrev" class="hover-pointer">
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li v-for="page in totalPage" :key="page" :class="{active:page === pagenumber}" @click.prevent="_onClick(page)"><a href="#">{{page}}</a></li>
            <li @click.prevent="_nextClick" v-if="!disabledNext" class="hover-pointer">
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
            <li class="hover-pointer" v-if="showQuickLinkLast" @click.prevent="_goLastPage">
                <a href="#" aria-label="Last">
                  <span aria-hidden="true">末页</span>
                </a>
            </li>
          </ul>
          <section class="pagination-desc pull-left" v-if="showDesc">
            <span>每页{{pagesize}}条，共计{{totalNum}}条数据</span>
          </section>
        </nav>
  </div>
</template>

<script>
export default {
  name: 'MbsPagination',
  props: {
    quickLink: {
      type: Boolean,
      default: true
    },
    showDesc: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'left'
    },
    sizeList: {
      type: Array,
      default () {
        return []
      }
    },
    // 分页尺寸 sm／默认／lg lg不建议使用
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
  data () {
    return {
      pagenumber: this.pageNumber,
      pagesize: this.pageSize
    }
  },
  computed: {
  // 分页大小
    paginationSize () {
      let sizeConfig = {
        pagination: true
      }
      if (this.size) {
        sizeConfig['pagination-' + this.size] = true
      }
      return sizeConfig
    },
    // 选择每页多少条数据时，样式
    paginationSelect () {
      let sizeConfig = {
        'pagination-select': true
      }
      if (this.size) {
        sizeConfig['pagination-select-' + this.size] = true
      }
      return sizeConfig
    },
    // 分页位置
    paginationPosition () {
      return `pull-${this.position}`
    },
    // 生成可视区域分页
    totalPage () {
      if (this.totalNum === 0) {
        return [1]
      }
      let totalPage = Math.ceil(this.totalNum / this.pagesize)
      let _from = this.pagenumber - 2
      if (_from < 1) {
        _from = 1
      }

      let _to = _from + 4
      if (_to >= totalPage) {
        _to = totalPage
      }

      let _showPage = []
      while (_from <= _to) {
        _showPage.push(_from)
        _from++
      }
      return _showPage
    },
    disabledNext () {
      let totalpagesize = Math.ceil(this.totalNum / this.pagesize)
      if (this.pagenumber === totalpagesize || totalpagesize === 0) {
        return true
      }
      return false
    },
    disabledPrev () {
      if (this.pagenumber === 1) {
        return true
      }
      return false
    },
    showQuickLinkFirst () {
      let totalpagesize = Math.ceil(this.totalNum / this.pagesize)
      if (this.quickLink && totalpagesize > 5 && !this.disabledPrev) {
        return true
      }
      return false
    },
    showQuickLinkLast () {
      let totalpagesize = Math.ceil(this.totalNum / this.pagesize)
      if (this.quickLink && totalpagesize > 5 && !this.disabledNext) {
        return true
      }
      return false
    }
  },
  methods: {
  // 点击页码
    _onClick (page) {
      if (page === this.pagenumber) return
      this.pagenumber = page
      this._pageChange()
    },
    _prevClick () {
      if (this.pagenumber === 1) return
      this.pagenumber--
      this._pageChange()
    },
    _nextClick () {
      let totalpagesize = Math.ceil(this.totalNum / this.pagesize)
      if (this.pagenumber >= totalpagesize) return
      this.pagenumber++
      this._pageChange()
    },
    _pageChange () {
      this.$emit('pageChange', {
        pagenumber: this.pagenumber,
        pagesize: this.pagesize
      })
    },
    _goFirstPage () {
      this.pagenumber = 1
      this._pageChange()
    },
    _goLastPage () {
      let lastPage = Math.ceil(this.totalNum / this.pagesize)
      this.pagenumber = lastPage
      this._pageChange()
    }
  },
  watch: {
    pagesize () {
      this.pagenumber = 1
      this._pageChange()
    }
  }
}
</script>

<style scoped>
.hover-pointer{
  cursor: pointer;
}
.pagination-desc{
  display: inline-block;
  margin: 20px 0;
  padding: 6px 0 6px 10px;
  font-size: 14px;
  color: #337ab7;
  letter-spacing: 1.5px;
}
.pagination-sm+.pagination-desc{
  font-size: 12px;
}
.pagination-lg+.pagination-desc{
  font-size: 16px;
  padding:11px 10px;
}
.pagination-select{
  width: 100px;
  margin: 20px 10px;
  color:#337ab7;
}
.pagination-select.pagination-select-sm{
  font-size: 12px;
  height: 28px;
  width: 80px;
}
.pagination-select.pagination-select-lg{
  font-size: 16px;
  height: 45px;
  width: 120px;
}
</style>
