<!--
 * @Description:
 * @Autor: rui.wei
 * @Date: 2019-11-06 20:59:00
 * @Email: weirui@zhiketong.cn
 -->
<template>
    <span class="item-helptext" v-if="helpText" v-html="helpText"></span>
</template>

<script>
export default {
  name: 'helpText',
  props: ['helpText']
}
</script>
