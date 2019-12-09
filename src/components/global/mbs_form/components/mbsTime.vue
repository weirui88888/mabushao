<template>

        <div class="form-group clearfix time-wrap" :class="{'has-error':showValidate}" v-if="show">

                <label :class="['control-label' , labelColumnWidth]"><i v-if="showIfRequire">*</i>{{label}}</label>

                <div :class="[comColumnWidth,'row']">
                  <div :class="['pull-left',comWidth]">
                      <date-picker
                      v-model="msg"
                      lang="zh"
                      :confirm="true"
                      :editable="false"
                      icon-day="日"
                      width="100%"
                      confirm-text="确认"
                      range-separator="至"
                      v-on="$listeners"
                      format="YYYY-MM-DD HH:mm:ss"
                      range
                      value-type="format"
                      >
                      </date-picker>
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
  name: 'mbsInput',
  mixins: [Validate, Base],
  props: ['label', 'rules', 'val', 'name', 'helpText', 'EVENT_BUS', 'labelColumn', 'column', 'styleItem', 'after', 'disabled'],
  components: {
    errorTip,
    helpText,
    afterText
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
  watch: {
    msg () {
      this.validate()
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

<style lang="scss">
.has-error .mx-datepicker input {
    border-color: #a94442;
}
</style>
