import { checkType } from '../utils'
export default {
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
    this.$props.EVENT_BUS.$emit('on-form-item-add', this)
  },
  beforeDestroy () {
    this.$props.EVENT_BUS.$emit('on-form-item-remove', this)
  }
}
