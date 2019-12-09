<template>
        <div class="form-group clearfix" :class="{'has-error':showValidate}" v-if="show">

          <label :class="['control-label' , labelColumnWidth]"><i v-if="showIfRequire">*</i>{{label}}</label>

          <div :class="comColumnWidth" class="row">
            <before-text :before="before"></before-text>

            <div :class="['pull-left',comWidth]" :style="styleItem">
              <select class="form-control" v-model="msg" @change="handleChange">
                  <option value="">请选择</option>
                  <option v-for="option in options" :value="option.value" :key="option.value">{{option.label}}</option>
              </select>
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
import beforeText from './beforeText'
export default {
  name: 'mbsSelect',
  mixins: [Validate, Base],
  props: ['label', 'rules', 'val', 'name', 'helpText', 'EVENT_BUS', 'labelColumn', 'column', 'styleItem', 'before', 'after', 'disabled', 'options'],
  components: {
    errorTip,
    helpText,
    afterText,
    beforeText
  },
  methods: {
    handleChange () {
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
