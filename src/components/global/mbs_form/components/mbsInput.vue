<template>
    <div class="form-group clearfix" :class="{'has-error':showValidate}" v-if="show">

      <label :class="['control-label' ,labelColumnWidth]"><i v-if="showIfRequire">*</i>{{label}}</label>

      <div :class="comColumnWidth" class="row">
            <before-text :before="before"></before-text>
            <div :class="['pull-left',comWidth]" :style="styleItem">
              <input type="number" class="form-control" :placeholder="placeholder" v-model.number="msg" @blur="handleBlur" v-if=" type && type==='number'" :disabled="disabled" v-number-input.float="2">
              <input type="text" class="form-control" :placeholder="placeholder" v-model="msg" @blur="handleBlur"  v-else>
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
function onInput (el, ele, binding, vnode) {
  function handle () {
    let val = ele.value
    // modifiers为修饰符对象，传入了float，则其float属性为true
    if (binding.modifiers.float) {
      // 清除"数字"和"."以外的字符
      val = val.replace(/[^\d.]/g, '')
      // 只保留第一个, 清除多余的
      val = val.replace(/\.{2,}/g, '.')
      // 第一个字符如果是.号，则补充前缀0
      val = val.replace(/^\./g, '0.')
      if (typeof binding.value !== 'undefined') {
        // 期望保留的最大小数位数
        let pointKeep = 0
        if (typeof binding.value === 'string' ||
       typeof binding.value === 'number') {
          pointKeep = parseInt(binding.value)
        }
        if (!isNaN(pointKeep)) {
          if (!Number.isInteger(pointKeep) ||
         pointKeep < 0) {
            pointKeep = 0
          }
          // eslint-disable-next-line no-useless-escape
          const str = '^(\\d+)\\.(\\d\{' + pointKeep + '}).*$'
          const reg = new RegExp(str)
          if (pointKeep === 0) {
            // 不需要小数点
            val = val.replace(reg, '$1')
          } else {
            // 通过正则保留小数点后指定的位数
            val = val.replace(reg, '$1.$2')
          }
        }
      } else {
        val = ele.value.replace(/[^\d]/g, '')
      }
      ele.value = val
    }
  }
  return handle
}
export default {
  name: 'mbsInput',
  mixins: [Validate, Base],
  props: ['label', 'rules', 'val', 'name', 'helpText', 'EVENT_BUS', 'placeholder', 'labelColumn', 'column', 'styleItem', 'before', 'after', 'type', 'disabled'],
  components: {
    errorTip,
    helpText,
    afterText,
    beforeText
  },
  methods: {
    handleBlur () {
      this.validate()
    }
  },
  directives: {
    numberInput: {
      bind (el, binding, vnode) {
        const ele = el.tagName === 'INPUT' ? el : el.querySelector('input')
        ele.addEventListener('input', onInput(el, ele, binding, vnode), false)
      }
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
