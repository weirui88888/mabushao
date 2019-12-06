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
  }
}
</script>
