import registerFilters from './filters'

export default (Vue) => {
  for (let prop in registerFilters) {
    if (registerFilters.hasOwnProperty(prop)) {
      Vue.filter(prop, registerFilters[prop])
    }
  }
}
