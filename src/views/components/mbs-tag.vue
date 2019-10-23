<template>
        <div class="mbs-tag-container mbs-component-container">
          <mbs-tag
            v-model="list"
            v-bind="{disabled, type, size, addBtn, max, tagKey, maxLength}"
            @add="onAdd"
            @delete="ondel"
            @input="change"
          />
          <h3 class="p30">数据项：{{ list }}</h3>

          <attribute-wrap :attrs="attrsConfig"></attribute-wrap>
        </div>
      </template>

<script>
import { tagAttrsConfig } from '@/config/attrsConfig'
export default {
  name: 'MbstagDemo',
  data () {
    return {
      tagKey: 'hero',
      disabled: false,
      addBtn: '点我试试',
      type: '',
      size: 'medium',
      max: 5, // 最多添加
      maxLength: 10, // 文本长度
      list: [
        { hero: '卡牌大师' },
        { hero: '提莫队长' }
      ],
      attrsConfig: tagAttrsConfig
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
