<template>
  <div class="form-group clearfix" :class="{'has-error':showValidate}" v-if="show">
    <label :class="['control-label' , labelColumnWidth]"><i v-if="showIfRequire">*</i>{{label}}</label>

    <div :class="comColumnWidth" class="row">
      <div :class="['pull-left',comWidth]">
          <label class="radio-inline" v-for="option in options" :key="option.value">
            <input type="radio" :name="name" :value="option.value" :checked="option.value===msg"
              @change="msg = option.value"> {{option.label}}
          </label>
      </div>
      <after-text :after="after"></after-text>
      <error-tip v-bind="{validateInfo,showValidate}"></error-tip>
      <help-text :helpText="helpText"></help-text>
    </div>
  </div>
</template>

<script>
// mixin
import Base from '../mixins/base'
import Validate from '../mixins/validate'
import errorTip from './errorTip'
import helpText from './helpText'
import afterText from './afterText'
export default {
  name: 'mbsRadio',
  mixins: [Validate, Base],
  props: ['label', 'rules', 'val', 'name', 'helpText', 'EVENT_BUS', 'labelColumn', 'column', 'styleItem', 'after', 'disabled', 'options'],
  components: {
    errorTip,
    helpText,
    afterText
  },
  methods: {
    handleBlur () {
      this.validate()
    },
    hasChecked (value) {
      return this.msg.includes(value)
    },
    _onChange (val, event) {
      if (event.target.checked) {
        this.val.push(val)
      } else {
        let indexFlag
        this.val.forEach((elem, index) => {
          if (elem === val) {
            indexFlag = index
          }
        })
        this.val.splice(indexFlag, 1)
      }
      this.asyncValidate()
    }
  },
  computed: {
    showIfRequire () {
      return this.ifRequire && this.label.trim() !== ''
    },
    labelColumnWidth () {
      if (this.labelColumn) {
        return `col-sm-${this.labelColumn}`
      }
      return 'col-sm-2'
    },
    comColumnWidth () {
      return `col-sm-${12 - this.labelColumn || 2}`
    },
    comWidth () {
      return `col-sm-${this.column || 2}`
    }
  },
  data () {
    return {
      keyName: this.objKey,
      validateState: '',
      validateMessage: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.form-group {
    &.has-error {
        .checkbox-inline{
            color:#555;
        }
    }
}
</style>
