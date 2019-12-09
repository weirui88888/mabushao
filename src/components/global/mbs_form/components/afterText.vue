<!--
 * @Description:
 * @Autor: rui.wei
 * @Date: 2019-11-06 20:59:00
 * @Email: weirui@zhiketong.cn
 -->
<template>
    <span class="after-text-wrap" v-if="after" :style="after.style">
        <i class="glyphicon" :class="icon" v-if="after.icon"></i>
        <span v-html="after.text"></span>
      </span>
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
