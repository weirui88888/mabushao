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

</style>
