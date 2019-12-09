<template>
    <div class="form-group clearfix">
        <label :class="['control-label' , labelColumnWidth]"><i v-if="showIfRequire">*</i>{{label}}</label>
        <div :class="comColumnWidth" class="row">
            <div :class="['pull-left',comWidth,'form-control-static']" :style="styleItem">
                <div class="panel panel-default">
                    <div class="panel-heading">
                      <h3 class="panel-title">标题</h3>
                    </div>
                    <div class="panel-body">
                      {{val}}
                    </div>
                  </div>
              </div>
          </div>
    </div>
  </template>

<script>
export default {
  name: 'testCuscom',
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
