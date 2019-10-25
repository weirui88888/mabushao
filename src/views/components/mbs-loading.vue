<template>
    <div class="mbs-loading-demo">
        如果我是dj你会爱我吗？
        如果我是dj你会爱我吗？
        如果我是dj你会爱我吗？
        如果我是dj你会爱我吗？
        如果我是dj你会爱我吗？
        如果我是dj你会爱我吗？
        如果我是dj你会爱我吗？
        如果我是dj你会爱我吗？
        如果我是dj你会爱我吗？
        如果我是dj你会爱我吗？
        如果我是dj你会爱我吗？
        如果我是dj你会爱我吗？
        如果我是dj你会爱我吗？
        <mbs-loading :show="true"></mbs-loading>
    </div>
</template>

<script>
export default {
  name: 'MbsLoadingDemo',
  methods: {
    getMessage () {
      alert('我是loading结束后触发的动作')
    }
  },
  mounted () {
    // let that = this
    // this.$mbsLoading.show({
    //   title: '真的好想你',
    //   timer: 3000,
    //   callback () {
    //     that.getMessage()
    //   }
    // })
  }
}
</script>
