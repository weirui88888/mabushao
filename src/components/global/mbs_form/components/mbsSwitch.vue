<template>
  <div class="form-group clearfix" :class="{'has-error':showValidate}" v-if="show">

    <label :class="['control-label' ,labelColumnWidth]"><i v-if="showIfRequire">*</i>{{label}}</label>

    <div :class="comColumnWidth" class="row">
          <before-text :before="before"></before-text>
          <div class="switch-wrapper pull-left" :style="{'width':width+'px','height': height+'px','border-radius': (height/2)+'px','background':msg?switchBg:'#f5f5f5'}" :class="[{'disabled':this.disabled}]" @click="handleSwitch">
            <div class="slider" :style="{'width':(height-2)+'px','height':(height-2)+'px','left':left+'px','line-height':(height-2)+'px'}">{{sliderValue}}</div>
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
  name: 'mbsSwitch',
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
    val: [Boolean, Number],
    label: {
      type: String,
      default: ''
    },
    EVENT_BUS: {
      type: Object
    },
    width: {
      type: Number,
      default: 60
    },
    height: {
      type: Number,
      default: 32
    },
    background: {
      type: String,
      default: '#13CE66'
    },
    labelColumn: {
      type: Number
    },
    column: {
      type: [Number, String]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    helpText: {
      type: String
    },
    switchBg: {
      type: String,
      default: '#286090'
    },
    after: {
      type: Object
    },
    before: {
      type: Object
    },
    slider: {
      type: Object
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
    sliderValue () {
      if (this.msg && this.slider) {
        return this.slider.open
      } else if (!this.msg && this.slider) {
        return this.slider.close
      }
      return ''
    },
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
    left () {
      if (this.msg) {
        let left = this.width - (this.height - 1)
        return left
      } else {
        return 1
      }
    }
  },
  methods: {
    handleSwitch () {
      if (this.disabled) {
        return
      }
      if (typeof (this.msg) === 'number') {
        this.msg ? (this.msg = 0) : (this.msg = 1)
      } else if (typeof (this.msg) === 'boolean') {
        this.msg ? (this.msg = false) : (this.msg = true)
      }
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
.switch-wrapper {
    width: 60px;
    height: 34px;
    margin: 0 15px;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
  }
  .disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  .slider {
    text-align: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #ffffff;
    position: absolute;
    top: 1px;
    left: 1px;
    z-index: 3;
    transition: left 0.4s;
  }
</style>
