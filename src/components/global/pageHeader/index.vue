<template>
    <div class="page-header-container" :class="{'page-header-border-bottom':borderBottom}">
        <h4>
            <span class="page-header-title">{{title}}</span>
            <button-group v-bind="$attrs" v-if="hasButton" v-on="$listeners" class="pull-right"></button-group>
        </h4>
    </div>
</template>

<script>
import buttonGroup from '@/components/global/buttonGroup/index.vue'
export default {
  name: 'pageHeader',
  components: {
    buttonGroup
  },
  props: {
    title: {
      type: String,
      default: '页面标题'
    },
    borderBottom: {
      type: Boolean,
      default: true
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
    @import "~@/styles/mixin.scss";
.page-header-container{
    color:#2679B8;
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
