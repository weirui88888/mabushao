<template>
  <div class="button-group-warp form-group">
      <!-- 全屏居中 -->
    <template v-if="!fullScree">
      <div :class="offsetClass">
        <button type="submit" :class="['btn','btn-'+btn.type]" v-for="btn in buttons" :key="btn.value" @click.prevent="$emit(btn.value)"><i :class="['glyphicon','glyphicon-'+btn.icon]" v-if="btn.icon"></i>{{btn.label}}</button>
      </div>
    </template>
    <template v-else>
      <div class="row">
          <template v-if="buttons.length===1">
                <div class="col-md-12" style="text-align: center;">
                    <button type="submit" class="btn btn-primary">登陆</button>
                </div>
          </template>
          <template v-else-if="buttons.length===2">
                <div class="col-md-6">
                    <button type="submit" class="btn btn-default pull-right" @click.prevent="$emit(buttons[0].value)">{{buttons[0].label}}</button>
                </div>
                <div class="col-md-6">
                    <button type="submit" class="btn btn-primary pull-left" @click.prevent="$emit(buttons[1].value)">{{buttons[1].label}}</button>
                </div>
          </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'buttonGroup',
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
