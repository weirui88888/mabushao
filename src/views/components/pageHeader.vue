<template>
  <div class="home" style="padding: 0 20px;">
    <page-header title="组件标题" :borderBottom="true" :buttons="buttons" @edit="_onEdit" @add="_onAdd"></page-header>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
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
      ]
    }
  },
  methods: {
    _onEdit () {
      console.log('edit')
    },
    _onAdd () {
      console.log('add')
    }
  }
}
</script>
