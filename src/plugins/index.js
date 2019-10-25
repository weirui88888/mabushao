import mbsLoading from '@/components/global/mbs_loading'

let $vm

export default {
  install (Vue, options) {
    if (!$vm) {
      const LoadingPlugin = Vue.extend(mbsLoading)
      $vm = new LoadingPlugin({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }
    $vm.show = false
    let loading = {
      show (config) {
        $vm.show = true
        $vm.text = config.text || '正在加载...'
        if (config.timer) {
          setTimeout(() => {
            $vm.show = false
            if (typeof config.callback === 'function' && config.callback) {
              config.callback()
            }
          }, config.timer)
        }
      },
      hide () {
        $vm.show = false
      }
    }
    Vue.prototype.$mbsLoading = loading
  }
}
