<template>
    <div class="button-group-container" :style="buttonGroupStyle">
        <button
        v-for="(button,index) in buttons"
        :key="index"
        @click="$emit(button.val)"
        class="customer-button btn"
        :class="btntype(button.type)"
        type="button">
            <i class="glyphicon" :class="'glyphicon-'+button.icon"></i> {{button.key}}
        </button>
    </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  props: {
    buttons: {
      type: Array,
      default () {
        return []
      }
    },
    buttonGroupStyle: {
      type: Object,
      default () {
        return {
          'display': 'inline-block'
        }
      }
    }
  },
  methods: {
    btntype (type) {
      if (type) return `btn-${type}`
      return 'btn-primary'
    }
  }
}
</script>

<style lang="scss" scoped>
    .customer-button{
        margin-left: 20px;
    }
</style>
