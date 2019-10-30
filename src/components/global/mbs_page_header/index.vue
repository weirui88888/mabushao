<template>
    <div class="page-header-container" :class="{'page-header-border-bottom':borderBottom}">
        <h4>
            <span class="page-header-title pull-left" :style="{color:titleColor}">{{title}}</span>
            <date-picker v-if="timeConfig.show" v-model="timeConfig.time" lang="zh" :confirm="true" :editable="false" width="330" icon-day="日" confirm-text="确认" range-separator="至" v-on="$listeners" format="YYYY-MM-DD HH:mm:ss" range value-type="format" style="margin-left: 20px;"></date-picker>
            <button-group v-bind="$attrs" v-if="hasButton" v-on="$listeners" class="pull-right"></button-group>
        </h4>
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
export default {
  name: 'pageHeader',
  components: {
    DatePicker
  },
  props: {
    timeConfig: {
      type: Object,
      default () {
        return {

        }
      }
    },
    title: {
      type: String,
      default: '页面标题'
    },
    borderBottom: {
      type: Boolean,
      default: true
    },
    titleColor: {
      type: String,
      default: '#2679B8'
    }
  },
  computed: {
    hasButton () {
      return this.$attrs.buttons
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header-container{
    padding: 20px 0;
    h4{
        @include clearfix
        font-size: 24px;
        .page-header-title{
            margin-top: 4px;
            display: inline-block;
        }
    }
}
.page-header-border-bottom{
    border-bottom: 1px solid #ccc;
}

</style>
