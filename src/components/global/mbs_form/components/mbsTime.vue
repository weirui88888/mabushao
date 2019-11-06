<template>

        <div class="form-group clearfix time-wrap" :class="{'has-error':showValidate}">

                <label :class="['control-label' , labelColumnWidth]"><i v-if="showIfRequire">*</i>{{label}}</label>

                <div :class="comColumnWidth">
                    <date-picker
                    v-model="msg"
                    lang="zh"
                    :confirm="true"
                    :editable="false"
                    width="330"
                    icon-day="日"
                    confirm-text="确认"
                    range-separator="至"
                    v-on="$listeners"
                    format="YYYY-MM-DD HH:mm:ss"
                    range
                    value-type="format"
                    >
                    </date-picker>
                  <error-tip v-bind="{validateInfo,showValidate}"></error-tip>
                  <help-text :helpText="helpText"></help-text>
                </div>

                <after-text :after="after"></after-text>
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
      if (this.column) {
        return `col-sm-${this.column}`
      }
      return 'col-sm-10'
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
.form-group.time-wrap {
    .control-label {
    font-weight: normal;
    color:#666;
        i {
            color:red;
        }
    }
}
.has-error .mx-datepicker input {
    border-color: #a94442;
}
</style>
