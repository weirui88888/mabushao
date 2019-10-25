<template>
    <div class="page-header-container" :class="{'page-header-border-bottom':borderBottom}">
        <h4>
            <span class="page-header-title" :style="{color:titleColor}">{{title}}</span>
            <button-group v-bind="$attrs" v-if="hasButton" v-on="$listeners" class="pull-right"></button-group>
        </h4>
    </div>
</template>

<script>
export default {
  name: 'pageHeader',
  props: {
    title: {
      type: String,
      default: '页面标题'
    },
    borderBottom: {
      type: Boolean,
      default: true
    },
    titleColor: {
      type: String,
      default: '#2679B8'
    }
  },
  computed: {
    hasButton () {
      return this.$attrs.buttons
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header-container{
    padding: 20px 0;
    h4{
        @include clearfix
        font-size: 24px;
        .page-header-title{
            margin-top: 4px;
            display: inline-block;
        }
    }
}
.page-header-border-bottom{
    border-bottom: 1px solid #ccc;
}

</style>
