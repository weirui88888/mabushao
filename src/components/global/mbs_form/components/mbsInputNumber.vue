<template>
    <div class="form-group clearfix" :class="{'has-error':showValidate}" v-if="show">

      <label :class="['control-label' ,labelColumnWidth]"><i v-if="showIfRequire">*</i>{{label}}</label>

      <div :class="comColumnWidth" class="row">
            <before-text :before="before"></before-text>
            <div :class="['mbs-input-number-container','pull-left',disabled]">
                <button class="pull-left mbs-btn mbs-btn-left" type="button" @click="reduce" :class="[{reduceDisable:reduceDisable,mbsBtnDisable:disabled},size]">-</button>
                <input  class="pull-left mbs-input" type="number" :value="msg" :disabled="disabled" :class="[{mbsInputDisable:disabled},size]" @change="handleInputChange($event)" :placeholder="placeholder" :readonly="readonly">
                <button class="pull-left mbs-btn mbs-btn-right" type="button" @click="add" :class="[{addDisable:addDisable,mbsBtnDisable:disabled},size]">+</button>
            </div>
            <after-text :after="after"></after-text>
            <error-tip v-bind="{validateInfo,showValidate}"></error-tip>
            <help-text :helpText="helpText"></help-text>
      </div>

    </div>
</template>

<script>
import Base from '../mixins/base'
import Validate from '../mixins/validate'
import errorTip from './errorTip'
import helpText from './helpText'
import afterText from './afterText'
import beforeText from './beforeText'
export default {
  name: 'mbsInputNumber',
  mixins: [Validate, Base],
  components: {
    errorTip,
    helpText,
    afterText,
    beforeText
  },
  props: {
    name: {
      type: String
    },
    rules: {
      type: [Array, Object]
    },
    label: {
      type: String,
      default: ''
    },
    EVENT_BUS: {
      type: Object
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    val: {
      type: [Number, String]
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 99999
    },
    step: {
      type: Number,
      default: 1
    },
    size: {
      type: String,
      default: 'medium'
    },
    labelColumn: {
      type: Number
    },
    helpText: {
      type: String
    },
    before: {
      type: Object
    },
    after: {
      type: Object
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      keyName: this.objKey,
      validateState: '',
      validateMessage: ''
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
    },
    addDisable () {
      if (this.max <= this.msg) {
        return true
      }
      return false
    },
    reduceDisable () {
      if (this.msg <= this.min) {
        return true
      }
      return false
    }
  },
  methods: {
    add () {
      if (this.disabled) return
      if (this.msg * 1 + this.step > this.max) {
        return false
      }
      this.msg = this.msg * 1 + this.step
    },
    reduce () {
      if (this.disabled) return
      if (this.msg * 1 - this.step < this.min) {
        return false
      }
      this.msg = this.msg * 1 - this.step
    },
    handleInputChange (e) {
      let targetValue = e.target.value
      if (isNaN(targetValue)) {
        e.target.value = this.max
        this.msg = this.max
        return
      }
      if (targetValue === '') {
        e.target.value = this.min
        this.msg = this.min
        return
      }
      if (Number(targetValue) > this.max) {
        e.target.value = this.max
        this.msg = this.max
        return
      }
      if (Number(targetValue) < this.min) {
        e.target.value = this.min
        this.msg = this.min
      }
      this.msg = Number(targetValue)
    }
  },
  watch: {
    msg (val) {
      this.validate()
    }
  }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
input[type='number'] {
    -moz-appearance:textfield;
}

.mbs-input-number-container{
  border-radius: 5px;
  margin: 0 15px;
  display: inline-block;
  border: 1px solid transparent;
}

.mbs-btn{
    padding: 6px 12px;
    font-size: 14px;
    border:1px solid #ccc;
    background: #f5f7fa;
}
.mbs-btn:hover{
    color:#66afe9;
}
.mbs-input-number-container:hover{
  border: 1px solid #66afe9;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
}
.mbs-btn.medium{
    padding: 8px 12px;
    outline: none;
    background: #f5f7fa;
}
.mbs-btn.small{
    padding: 3px 8px;
    outline: none;
    background: #f5f7fa;
}
.mbs-btn.mini{
    padding: 2px 7px;
    outline: none;
    background: #f5f7fa;
}
.mbs-input{
    text-align: center;
    padding: 6px 0;
    width: 100px;
    border: 1px solid #ccc ;
    outline: none;
}
.mbs-input.medium{
    text-align: center;
    padding: 8px 0;
    width: 110px;
    outline: none;
}
.mbs-input.small{
    text-align: center;
    padding: 3px 0;
    width: 100px;
    outline: none;
}
.mbs-input.mini{
    text-align: center;
    padding: 2px 0;
    width: 60px;
    outline: none;
}
.mbs-btn.mbsBtnDisable,.mbs-input.mbsInputDisable{
    cursor: not-allowed;
    color:#e4e7ed;
}
.mbs-btn-left{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: none;
}
.mbs-btn-left.reduceDisable{
    cursor: not-allowed;
    color: #ccc;
}
.mbs-btn-right{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: none;
}
.mbs-btn-right.addDisable{
    cursor: not-allowed;
    color: #ccc;
}
</style>
