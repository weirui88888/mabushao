<template>
  <div class="button-group-warp form-group">
    <!-- 全屏居中 -->
    <template v-if="!fullScree">
      <div :class="offsetClass">
        <button type="submit" :class="['btn','btn-'+btn.type]" v-for="btn in buttons" :key="btn.value"
          @click.prevent="$emit(btn.value)"><i :class="['glyphicon','glyphicon-'+btn.icon]" v-if="btn.icon"></i>
          {{btn.label}}</button>
      </div>
    </template>
    <template v-else>
      <div class="row">
        <template v-if="buttons.length===1">
          <div class="col-md-12" style="text-align: center;">
            <button type="submit" :class="['btn','btn-'+buttons[0].type]" @click.prevent="$emit(buttons[0].value)"><i :class="['glyphicon','glyphicon-'+buttons[0].icon]"
                v-if="buttons[0].icon"></i> {{buttons[0].label}}</button>
          </div>
        </template>
        <template v-else-if="buttons.length===2">
          <div class="col-md-6">
            <button type="submit" :class="['btn','btn-'+buttons[0].type,'pull-right']"
              @click.prevent="$emit(buttons[0].value)"><i :class="['glyphicon','glyphicon-'+buttons[0].icon]" v-if="buttons[0].icon"></i> {{buttons[0].label}}</button>
          </div>
          <div class="col-md-6">
            <button type="submit" :class="['btn','btn-'+buttons[1].type,'pull-left']"
              @click.prevent="$emit(buttons[1].value)"><i :class="['glyphicon','glyphicon-'+buttons[1].icon]" v-if="buttons[1].icon"></i> {{buttons[1].label}}</button>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import Base from '../mixins/base'
export default {
  name: 'buttonGroup',
  mixins: [Base],
  props: {
    buttons: {
      type: Array,
      default () {
        return []
      }
    },
    labelColumn: {
      type: Number,
      default: 1
    },
    fullScree: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    offsetClass () {
      return `col-sm-offset-${this.labelColumn} col-sm-${12 - this.labelColumn}`
    }
  },
  mounted () {
    console.log(this.show)
  }

}
</script>

<style lang="scss" scoped>
.button-group-warp{
    margin-top: 50px;
}
div[class^='col-sm-offset'] button {
    margin-right: 20px;
}
</style>
