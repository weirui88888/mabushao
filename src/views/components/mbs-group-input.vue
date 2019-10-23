<template>
    <div class="group-input-container">
        <mbs-group-input v-model="list" :max="max" @add="_onadd" @change="_onchange" :keyConfig="keyConfig"></mbs-group-input>
        <h3 class="mt20">数据项：{{ list }}</h3>
        <attribute-wrap :attrs="attrsConfig" class="mt20"></attribute-wrap>
    </div>
</template>

<script>
import { groupInputAttrsConfig } from '@/config/attrsConfig'
export default {
  name: 'MbsGroupInputDemo',
  data () {
    return {
      attrsConfig: groupInputAttrsConfig,
      max: 5,
      keyConfig: ['first', 'last'],
      list: [
        {
          first: 10,
          last: 10
        },
        {
          first: 20,
          last: 10
        }
      ]
    }
  },
  methods: {
    _onadd (val) {
      console.log(val)
    },
    _onchange (index, val) {
      console.log(index, val)
    }
  }
}
</script>
