// components/index.js
import Vue from 'vue'

// 自动加载 global 目录下的 .js 结尾的文件
const componentsContext = require.context('../global', true, /\.js$/)
componentsContext.keys().forEach(component => {
  // TODO:这里的文件循环有问题排除form里面的部分js文件
  if (component === './index.js') return
  if (component === './mbs_form/mixins/base.js') return
  if (component === './mbs_form/mixins/validate.js') return
  if (component === './mbs_form/utils/index.js') return
  const componentConfig = componentsContext(component)
  /**
  * 兼容 import export 和 require module.export 两种规范
  */
  const ctrl = componentConfig.default || componentConfig
  Vue.component(ctrl.name, ctrl)
})
