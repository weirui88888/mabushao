<template>
    <span class="item-helptext help-block" v-if="helpText">
        {{helpText}}
    </span>
</template>

<script>
export default {
  name: 'helpText',
  props: ['helpText']
}
</script>
