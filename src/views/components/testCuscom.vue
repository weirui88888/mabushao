<template>
    <div class="form-group clearfix">
        <label :class="['control-label' , labelColumnWidth]"><i v-if="showIfRequire">*</i>{{label}}</label>
        <div :class="comColumnWidth" class="row">
            <div :class="['pull-left',comWidth]" :style="styleItem">
                <div class="panel panel-default">
                    <div class="panel-heading">
                      <h3 class="panel-title">表格</h3>
                    </div>
                    <div class="panel-body">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                                <th>姓名</th>
                                <th>年龄</th>
                                <th>爱好</th>
                                <th width="150px">操作</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item,index) in val" :key='item.name'>
                              <td>{{item.name}}</td>
                              <td>{{item.age}}</td>
                              <td>{{item.pretty}}</td>
                              <td>
                                  <button type="button" class="btn btn-primary cus-button">详情</button>
                                  <button type="button" class="btn btn-danger cus-button" @click="onDelete(index)">删除</button>
                              </td>
                            </tr>
                            <tr v-if="!val.length">
                              <td colspan="4" style="text-align: center;background: #faeee7;">暂无数据^_^</td>
                            </tr>
                          </tbody>
                          </table>
                    </div>
                  </div>
              </div>
          </div>
    </div>
  </template>

<script>
export default {
  name: 'testCuscom',
  props: ['label', 'val', 'name', 'labelColumn', 'column', 'styleItem', 'EVENT_BUS', 'iconItem'],
  computed: {
    showIfRequire () {
      return this.ifRequire && this.label.trim() !== ''
    },
    labelColumnWidth () {
      if (this.labelColumn) {
        return `col-sm-${this.labelColumn}`
      }
      return 'col-sm-2'
    },
    comColumnWidth () {
      return `col-sm-${12 - this.labelColumn || 2}`
    },
    comWidth () {
      return `col-sm-${this.column || 2}`
    }
  },
  methods: {
    onDelete (index) {
      this.val.splice(index, 1)
    }
  }
}
</script>

<style>
.cus-button:not(:last-child){
  margin-right: 10px;
}
</style>
