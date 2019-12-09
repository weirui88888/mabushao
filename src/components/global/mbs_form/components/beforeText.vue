 <template>
    <span class="before-text-wrap" v-if="before" :style="before.style">
        <i class="glyphicon" :class="icon" v-if="before.icon"></i>
        <span v-html="before.text"></span>
      </span>
</template>

<script>
export default {
  name: 'beforeText',
  props: ['before'],
  computed: {
    icon () {
      return 'glyphicon-' + this.before.icon
    }
  }
}
</script>
