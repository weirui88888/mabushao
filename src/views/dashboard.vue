<template>
  <div class="dashboard-container w80 margin-20-auto">
    i am you fans
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>组件</th>
          <th>DEMO</th>
          <th>备注</th>
          <th>代码</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(com,index) in componentsList" :key="index">
            <td @click="jump(com.demo)">
                <button type="button" class="btn btn-primary">{{com.name}}</button>
            </td>
            <td @click="jump(com.demo)">
                <button type="button" class="btn btn-link">{{com.demo}}</button>
            </td>
            <td>{{com.remark}}</td>
            <td>{{com.code}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// 组件配置文件
let dashborardConfig = require('./dashboard-config.js')
export default {
  name: 'dashboard',
  data () {
    return {
      componentsList: dashborardConfig
    }
  },
  methods: {
    jump (address) {
      this.$router.push({
        path: address
      })
    }
  }
}
</script>

<style lang="scss">

</style>
