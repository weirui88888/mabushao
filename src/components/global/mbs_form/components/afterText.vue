<template>
    <div class="after-text-wrap" v-if="after" :style="after.style">
        <i class="glyphicon" :class="icon" v-if="after.icon"></i>
        <template v-if="after.text">
            {{after.text}}
        </template>
        <template v-else-if="after.html">
            <span v-html="after.html"></span>
        </template>
    </div>
</template>

<script>
export default {
  name: 'afterText',
  props: ['after'],
  computed: {
    icon () {
      return 'glyphicon-' + this.after.icon
    }
  }
}
</script>

<style>
    .after-text-wrap{
        float: left;
        font-size: 12px;
        padding:8px 0;
        color:#737373;
    }
</style>
