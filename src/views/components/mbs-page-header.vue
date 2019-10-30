<template>
  <div class="home">
    <page-header :timeConfig="Config" title="组件标题" :borderBottom="true" :buttons="buttons" @edit="_onEdit" @add="_onAdd" :titleColor="variables.titleText" @change="change"></page-header>
    <attribute-wrap :attrs="attrsConfig" class="mt20"></attribute-wrap>
  </div>
</template>

<script>
import { pageHeaderAttrsConfig } from '@/config/attrsConfig'
// TODO:全局样式对象
import variables from '@/styles/variables.scss'
export default {
  name: 'MbsPageHeaderDemo',
  data () {
    return {
      Config: {
        show: true,
        time: ''
      },
      buttons: [
        {
          key: '编辑',
          val: 'edit',
          icon: 'plus'
        },
        {
          key: '添加',
          val: 'add',
          type: 'success'
        }
      ],
      attrsConfig: pageHeaderAttrsConfig,
      tom: {
        name: 'tom',
        age: 18
      }
    }
  },
  methods: {
    _onEdit () {
      console.log('edit')
    },
    _onAdd () {
      console.log('add')
      this.tom.age = 20
    },
    change (time) {
      console.log(time)
    }
  },
  computed: {
    variables () {
      return variables
    }
  }
}
</script>

<style lang="scss">
  //TODO:通过向预处理器 Loader 传递选项，可以将样式全局变量在组件中共享，不用单独引入
  .demo {
    @include circle(30px,red);
  }
</style>
