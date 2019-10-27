<template>
  <div id="mbs-pagination-demo">
    <!-- position="left" -->
    <!-- size="sm" -->
    <!-- :size-list="[10,20,50]" -->
    <!-- :quick-link="true" -->
    <!-- :show-desc="false" -->
    <div class="page-header">
      <h3>基于bootstrap3的分页组件</h3>
    </div>

    <mbs-pagination v-bind="attribute" @pageChange="_onPagechange" />

    <div class="row">
      <div class="col-md-6">
        <div class="page-header">
          <h3>Attributes</h3>
        </div>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(attr,index) in attrs" :key="index">
              <td>{{attr.key}}</td>
              <td>{{attr.desc}}</td>
              <td>{{attr.type}}</td>
              <td>{{attr.option || '-'}}</td>
              <td>{{attr.default || '-'}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-3">
        <div class="page-header">
          <h3 class="text-danger">在线演示</h3>
        </div>
        <form>
          <div class="form-group">
            <label class="text-success">totalNum</label>
            <input type="number" min="0" class="form-control" style="width: 100px;" placeholder="可设置分页共多少条数据"
              v-model="attribute.totalNum">
          </div>
          <div class="form-group">
            <label class="text-success">position</label>
            <div class="radio">
              <label>
                <input type="radio" name="position" value="left" v-model="attribute.position">
                left
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="position" value="right" v-model="attribute.position">
                right
              </label>
            </div>
          </div>
          <div class="form-group">
            <label class="text-success">size</label>
            <div class="radio">
              <label>
                <input type="radio" name="size" value="sm" v-model="attribute.size">
                sm
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="size" value="" v-model="attribute.size">
                默认
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="size" value="lg" v-model="attribute.size">
                lg
              </label>
            </div>
          </div>
          <div class="form-group">
            <label class="text-success">showDesc</label>
            <div class="radio">
              <label>
                <input type="radio" name="showDesc" checked @click="attribute.showDesc = true">
                true
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="showDesc" value="false" @click="attribute.showDesc = false">
                false
              </label>
            </div>
          </div>
          <div class="form-group">
            <label class="text-success">quickLink</label>
            <div class="radio">
              <label>
                <input type="radio" name="quickLink" checked @click="attribute.quickLink = true">
                true
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="quickLink" value="false" @click="attribute.quickLink = false">
                false
              </label>
            </div>
          </div>
          <div class="form-group">
            <label class="text-success">sizeList</label>
            <div class="radio">
              <label>
                <input type="radio" name="sizeList" checked @click="attribute.sizeList = []">
                默认
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="sizeList" value="false" @click="attribute.sizeList = [10,20,50]">
                [10,20,50]
              </label>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-3">
        <div class="page-header">
          <h3 class="text-success">数据</h3>
        </div>
        <pre>{{attribute}}</pre>
      </div>
    </div>

    <div class="page-header">
        <h3>安装:</h3>
        <pre>
          step1: npm install --save mbs-pagination

          step2: 在需要的组件中引入

          import mbsPagination from 'mbs-pagination'

          export default {
            name: 'xxx',
            components:{ mbsPagination }
          }

          step3:
          &lt;mbs-pagination
            :total-num="100"
            :page-number="1"
            ...
          &gt;
          &lt;/mbs-pagination&gt;</pre>
      </div>

    <div class="page-header">
      <div class="alert alert-danger" role="alert">注意：分页组件默认为不开启每页展示条数选项，如果需要的话，请确保sizeList数组中选项包含数值pageSize</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'mbsPaginationDemo',
  data () {
    return {
      attribute: {
        totalNum: 2048,
        pageNumber: 1,
        position: 'left',
        pageSize: 20,
        size: '',
        sizeList: [],
        showDesc: true,
        quickLink: true
      },
      attrs: [
        {
          key: 'totalNum',
          desc: '共多少条数据',
          type: 'number',
          default: 0
        },
        {
          key: 'pageSize',
          desc: '设置每页多少条数据',
          type: 'number',
          default: 20
        },
        {
          key: 'pageNumber',
          desc: '当前处于第几页',
          type: 'number',
          default: 1
        },
        {
          key: 'size',
          type: 'string',
          option: 'sm/lg',
          desc: '分页尺寸'
        },
        {
          key: 'sizeList',
          desc: '可设置每页展示条数',
          type: 'array',
          default: '[]'
        },
        {
          key: 'position',
          desc: '分页位置',
          type: 'string',
          option: 'left/right',
          default: 'left'
        },
        {
          key: 'showDesc',
          desc: '是否展示总条数提示',
          type: 'boolean',
          option: 'true/false',
          default: 'true'
        },
        {
          key: 'quickLink',
          desc: '是否有首页、末页快捷键',
          type: 'boolean',
          option: 'true/false',
          default: 'true'
        }
      ]
    }
  },
  methods: {
    _onPagechange (page) {
      console.log(page)
    }
  }
}
</script>
