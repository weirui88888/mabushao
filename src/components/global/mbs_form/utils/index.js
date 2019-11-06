import Vue from 'vue'

// eventsbus
const createEventBus = () => {
  return new Vue()
}

// 深拷贝
const cloneDeep = source => {
  // 只适用于对象中没有函数
  return JSON.parse(JSON.stringify(source))
}

/**
 * @description: 根据字段进行排序fields
 */
const orderProperty = field => {
  return field.sort((pre, cur) => {
    return (pre.order || 999) - (cur.order || 999)
  })
}

const checkType = type => {
  return Object.prototype.toString.call(type).slice(8, -1)
}

export {
  createEventBus,
  cloneDeep,
  orderProperty,
  checkType
}
