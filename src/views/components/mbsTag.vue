<template>
        <div class="mbs-tag-container mbs-component-container">
          <mbs-tag
            v-model="list"
            v-bind="{disabled, type, size, addBtn, max, tagKey, maxLength}"
            @add="onAdd"
            @delete="ondel"
            @input="change"
          />

          <div class="mbs-data-preview">
            数据项：{{ list }}
          </div>
        </div>
      </template>

<script>
export default {
  name: 'MbstagDemo',
  data () {
    return {
      tagKey: 'title',
      disabled: false,
      addBtn: '添加规则',
      type: '',
      size: 'medium',
      max: 5, // 最多添加
      maxLength: 10, // 文本长度
      list: [
        { title: '卡牌大师' },
        { title: '提莫队长' }
      ]
    }
  },
  methods: {
    change (obj) {
      console.log(obj)
    },
    onAdd (obj) {
      console.log(obj)
    },
    ondel (obj) {
      console.log(obj)
      this.Swal.fire('删除成功')
    }
  }
}
</script>
