<template>
    <div class="mbs-from-wrap form-horizontal">
        <component
          v-for="field in fields"
          :key="field.name"
          :labelColumn="labelColumn"
          :is="field.component"
          :VALUE="formValue"
          :val="formValue[field.name]"
          :EVENT_BUS="EVENT_BUS"
          :rules="validation[field.name]"
          v-on="$listeners"
          v-bind="field">
        </component>
    </div>
</template>

<script>
import mbsInput from './components/mbsInput.vue'
import mbsTextarea from './components/mbsTextarea.vue'
import mbsSelect from './components/mbsSelect.vue'
import mbsCheckbox from './components/mbsCheckbox.vue'
import mbsRadio from './components/mbsRadio.vue'
import mbsButtonGroup from './components/mbsButtonGroup'
import mbsTag from './components/mbsTag'
import mbsTime from './components/mbsTime'
import mbsStatic from './components/mbsStatic'
import mbsInputNumber from './components/mbsInputNumber'
import { createEventBus } from './utils'
export default {
  name: 'mbsForm',
  components: {
    mbsInput,
    mbsTextarea,
    mbsSelect,
    mbsCheckbox,
    mbsRadio,
    mbsButtonGroup,
    mbsTag,
    mbsTime,
    mbsStatic,
    mbsInputNumber
  },
  props: ['fields', 'value', 'validation', 'labelColumn'],
  created () {
    this.initFormValue(this.value)
    this.EVENT_BUS.$on('on-form-item-add', field => {
      if (field) this.validates.push(field)
      return false
    })
    this.EVENT_BUS.$on('on-form-item-remove', (field) => {
      if (field) this.fields.splice(this.fields.indexOf(field), 1)
      return false
    })
    this.EVENT_BUS.$on('on-set-form-data', payload => {
      this.setFormData(payload)
    })
  },
  data () {
    return {
      formValue: {},
      validates: [],
      EVENT_BUS: createEventBus()
    }
  },
  computed: {
  },
  methods: {
    initFormValue (value) {
      this.formValue = this.cloneDeep(value)
    },
    cloneDeep (source) {
      return JSON.parse(JSON.stringify(source))
    },
    setFormData (payload) {
      let { key, value } = payload
      this.formValue[key] = value
    },
    validate (cb) {
      let err = false
      let len = this.validates.length
      this.validates.forEach((field, index) => {
        field.validate().then(res => {
          const { status } = res
          if (!status) {
            err = true
          }
          if ((index + 1) === len) {
            cb(err, this.formValue)
          }
        }).catch(err => {
          console.log(err)
        })
      })
    },
    resetFields () {
      this.initFormValue(this.value)
      this.validates.forEach(field => {
        field.resetField && field.resetField()
      })
    }
  }
}
</script>

<style lang="scss">
.form-horizontal {
  .form-group {
    margin-left: 0;
    margin-right:0;
  }
  .pd15 {
    padding: 0 15px;
  }
  .item-error-tip{
    clear:both;
    color: #a94442;
    padding: 4px 15px;
    font-size: 12px;
  }
  .item-helptext {
    color: #737373;
    font-size: 12px;
    padding:5px 15px;
    clear: both;
  }
  .before-text-wrap{
    float: left;
    color:#737373;
    padding: 7px 0 7px 15px;
  }
  .after-text-wrap{
    float: left;
    padding:7px 0;
    color:#737373;
  }
  .control-label {
    color:#666;
      i {
          color:red;
          padding:3px;
      }
  }
  .form-control-static {
    color: #737373;
  }
}
</style>
