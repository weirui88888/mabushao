import { checkType } from '../utils'
export default {
  props: {
    visible: {
      type: Function,
      default () {
        return {}
      }
    },
    VALUE: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      // 判断展示该组件
      show: true
    }
  },
  computed: {
    msg: {
      get: function () {
        return this.val
      },
      set: function (value) {
        this.$props.EVENT_BUS.$emit('on-set-form-data', {
          key: this.name,
          value
        })
      }
    },
    ifRequire () {
      let require = false
      if (checkType(this.rules) === 'Object') {
        if (this.rules.hasOwnProperty('required') && this.rules.required) {
          require = true
        }
      }
      if (checkType(this.rules) === 'Array') {
        this.rules.forEach((rule, index) => {
          if (rule.hasOwnProperty('required') && rule.required) {
            require = true
          }
        })
      }
      return require
    }
  },
  mounted () {
    if (this.$props.EVENT_BUS) {
      this.$props.EVENT_BUS.$emit('on-form-item-add', this)
    }
  },
  beforeDestroy () {
    if (this.$props.EVENT_BUS) {
      this.$props.EVENT_BUS.$emit('on-form-item-remove', this)
    }
  },
  watch: {
    // 观察到原始数据的变化，判断是否展示该组件
    'VALUE': {
      handler () {
        if (this.visible) {
          this.show = this.visible(this.VALUE)
        }
      },
      immediate: true,
      deep: true
    }
  }
}
