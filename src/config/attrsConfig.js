// 组件标题配置
let pageHeaderAttrsConfig = [
  {
    key: 'title',
    desc: '设置头部标题',
    type: 'string'
  },
  {
    key: 'buttons',
    desc: '设置右侧按钮',
    type: 'array'
  },
  {
    key: 'borderBottom',
    desc: '设置是否需要底部border',
    type: 'boolean',
    default: 'false'
  }
]

// 自定义tag配置
let tagAttrsConfig = [
  {
    key: 'tagKey',
    desc: '设置的tagKey需要跟list数组中的key保持一致',
    type: 'string'
  },
  {
    key: 'disabled',
    desc: '可设置该组件禁止添加',
    type: 'boolean',
    default: 'false'
  },
  {
    key: 'addBtn',
    desc: '按钮文案',
    type: 'string'
  },
  {
    key: 'type',
    desc: '设置按钮类型（背景）',
    type: 'string',
    option: 'success/info/warning/danger'
  },
  {
    key: 'size',
    desc: '设置按钮大小',
    type: 'string',
    option: 'medium/small/mini',
    default: 'medium'
  },
  {
    key: 'max',
    desc: '最多添加个数',
    type: 'number',
    default: 1000
  },
  {
    key: 'maxLength',
    desc: '最多输入文字数',
    type: 'number',
    default: 1000
  }
]

let groupInputAttrsConfig = [
  {
    key: 'max',
    desc: '最多设置几个',
    type: 'number',
    default: 10
  },
  {
    key: 'keyConfig',
    desc: '设置输入框key值列表',
    type: 'array'
  }

]

export {
  pageHeaderAttrsConfig,
  tagAttrsConfig,
  groupInputAttrsConfig
}
