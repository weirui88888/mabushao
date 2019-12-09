import Schema from 'async-validator'

export default {
  computed: {
    showValidate () {
      return this.validateState === 'error'
    },
    validateInfo () {
      return this.validateMessage
    }
  },
  methods: {
    resetField () {
      this.validateState = ''
      this.validateMessage = ''
    },
    asyncValidate () {
      this.$nextTick(() => {
        this.validate()
      })
    },
    validate () {
      return new Promise((resolve, reject) => {
        if (!this.rules) {
          // 这里的
          resolve({ label: this.label, status: true })
          return
        }
        let descriptor = {
          [this.name]: this.rules
        }
        let validator = new Schema(descriptor)
        validator.validate({ [this.name]: this.msg }, (err, fields) => {
          let state = !err ? 'success' : 'error'
          let msg = err ? err[0].message : ''
          this.validateState = state
          this.validateMessage = msg

          if (err) {
            resolve({
              name: this.name,
              status: false
            })
          } else {
            resolve({
              name: this.name,
              status: true
            })
          }
        })
      })
    }
  }
}
