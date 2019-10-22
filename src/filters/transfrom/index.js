
/**
 * @description: 首字母大写
 */
const toUpperCase = (value) => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}
/**
 * @description: 首字母小写
 */
const toLowerCase = (value) => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toLowerCase() + value.slice(1)
}

export {
  toUpperCase,
  toLowerCase
}
