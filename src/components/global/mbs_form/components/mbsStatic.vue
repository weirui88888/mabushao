<template>
  <div class="form-group clearfix" v-if="show">
      <label :class="['control-label' , labelColumnWidth]"><i v-if="showIfRequire">*</i>{{label}}</label>
      <div :class="comColumnWidth" class="row">
          <div :class="['pull-left',comWidth,'form-control-static']" :style="styleItem">
            <i v-if="iconItem.icon && iconItem.position==='left'" :class="['glyphicon',' glyphicon-'+iconItem.icon]"></i>
            {{msg}}
            <i v-if="iconItem.icon && iconItem.position==='right'" :class="['glyphicon',' glyphicon-'+iconItem.icon]"></i>
          </div>
        </div>
  </div>
</template>

<script>
import Base from '../mixins/base'
import Validate from '../mixins/validate'
export default {
  name: 'mbsStatic',
  mixins: [Base, Validate],
  props: ['label', 'val', 'name', 'labelColumn', 'column', 'styleItem', 'EVENT_BUS', 'iconItem'],
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
  }

}
</script>
