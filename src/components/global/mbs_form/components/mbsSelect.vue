<template>
        <div class="form-group clearfix" :class="{'has-error':showValidate}">

          <label :class="['control-label' , labelColumnWidth]"><i v-if="showIfRequire">*</i>{{label}}</label>

          <div :class="comColumnWidth">
            <!-- <textarea class="form-control" :placeholder="placeholder" v-model="msg" @blur="handleBlur" :style="styleItem" :rows="rows || 3"></textarea> -->
            <select class="form-control" v-model="msg" @change="handleChange">
                <option value="">请选择</option>
                <option v-for="option in options" :value="option.value" :key="option.value">{{option.label}}</option>
            </select>
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
  name: 'mbsSelect',
  mixins: [Validate, Base],
  props: ['label', 'rules', 'val', 'name', 'helpText', 'EVENT_BUS', 'labelColumn', 'column', 'styleItem', 'after', 'disabled', 'options'],
  components: {
    errorTip,
    helpText,
    afterText
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
      if (this.column) {
        return `col-sm-${this.column}`
      }
      return 'col-sm-10'
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
    .control-label {
    font-weight: normal;
    color:#666;
    i {
        color:red;
    }
    }
}
</style>
