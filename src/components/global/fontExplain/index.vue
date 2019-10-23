<template>
    <div class="font-explain-container">
        <span>{{title}}</span>
        <ul>
            <li v-for="(explain,index) in explainList" :key="index" class="explain-li">
                {{explain}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'fontExplain',
  props: {
    title: {
      type: String,
      default: ''
    },
    explainList: {
      type: String,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .font-explain-container{
        padding: 5px;
        .explain-li{
            padding: 2px 0;
        }
    }
</style>
