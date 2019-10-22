import registerDirectives from './directives'

export default (Vue) => {
  // for (let prop in registerDirectives) {
  //   if (registerDirectives.hasOwnProperty(prop)) {
  //     Vue.directive(prop, registerDirectives[prop])
  //   }
  // }
  console.log(Vue)
  Vue.directive('clipboard', registerDirectives.clipboard)
}
