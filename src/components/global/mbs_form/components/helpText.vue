<!--
 * @Description:
 * @Autor: rui.wei
 * @Date: 2019-11-06 20:59:00
 * @Email: weirui@zhiketong.cn
 -->
<template>
    <div class="item-helptext" v-if="helpText" v-html="helpText"></div>
</template>

<script>
export default {
  name: 'helpText',
  props: ['helpText']
}
</script>
