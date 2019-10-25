<template>
    <div class="mbs-page-demo">
        <mbs-page :total-num="288" size="" @pageChange="_onPagechange"></mbs-page>
    </div>
</template>

<script>
export default {
  name: 'MbsPageDemo',
  methods: {
    _onPagechange (page) {
      console.log(page)
    }
  }
}
</script>
