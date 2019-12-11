<template>
  <div class="attribute-container">
    <h3 class="mb20">配置项</h3>
    <table class="table table-hover table-bordered w50">
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
</template>

<script>
export default {
  name: 'AttributeWrap',
  props: {
    attrs: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
