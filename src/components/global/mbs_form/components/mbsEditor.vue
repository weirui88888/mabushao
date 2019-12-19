<template>
    <div class="form-group clearfix" v-if="show">
      <label :class="['control-label' , labelColumnWidth]"><i v-if="showIfRequire">*</i>{{label}}</label>
      <div :class="comColumnWidth" class="row">
        <div :class="['pull-left',comWidth]" :style="styleItem">
            <div ref="editor" style="text-align:left" class="edit-wrap"></div>
        </div>
        <help-text :helpText="helpText"></help-text>
      </div>
    </div>
  </template>

<script>
// mixin
import Base from '../mixins/base'
import Validate from '../mixins/validate'
import helpText from './helpText'
import E from 'wangeditor'
export default {
  name: 'mbsEditor',
  mixins: [Validate, Base],
  props: ['label', 'rules', 'val', 'name', 'helpText', 'EVENT_BUS', 'labelColumn', 'column', 'styleItem', 'disabled'],
  components: {
    helpText
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
      editor: null
    }
  },
  watch: {
    'val' () {
      this.editor.txt.html(this.msg)
    }
  },
  mounted () {
    this.editor = new E(this.$refs.editor)
    this.editor.customConfig.onchange = (html) => {
      this.msg = html
    }
    this.editor.create()
    this.editor.txt.html(this.msg)
  }
}
</script>
