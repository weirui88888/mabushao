<template>
    <div class="item-error-tip" v-if="showValidate">
        <span>{{validateInfo}}</span>
    </div>
</template>

<script>
export default {
  name: 'errorTip',
  props: {
    validateInfo: {
      type: String,
      default: ''
    },
    showValidate: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.item-error-tip{
    clear:both;
    color: #a94442;
    padding: 2px 0px;
    font-size: 12px;
}
</style>
