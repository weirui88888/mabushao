<template>
  <div>
    <mbs-from
    @edit="_onLogin"
    @cancel="_onReset"
    :fields="fields"
    ref="mbsForm"
    :value="value"
    :validation="validation"
    :labelColumn="1"
    />
    <!-- <div class="row clear-margin">
      <div class="col-md-6">
        <button type="button" class="btn btn-primary pull-right" @click="_onLogin">确认</button>
      </div>
      <div class="col-md-6">
        <button type="button" class="btn btn-default pull-left" @click="_onReset">重置</button>
      </div>
    </div> -->
    </div>
</template>

<script>
import mbsFrom from '@/components/global/mbs_form/index.vue'
// eslint-disable-next-line no-unused-vars
import testCumcom from './testCuscom'
export default {
  name: 'mbsFormDemo',
  components: {
    mbsFrom
  },
  mounted () {
    // this.$toast('form表单还在不断完善，有兴趣的可以一起加入进来～', {
    //   type: 'warning',
    //   closeTime: 3,
    //   height: 100,
    //   position: 'topRight'
    // })
  },
  methods: {
    _onLogin () {
      // TODO:自定义表单里面的按钮，不起作用
      // console.log(thiresetFieldss.$refs.mbsForm.validate)
      this.$refs.mbsForm.validate((err, values) => {
        if (err) {
          console.log('验证失败')
        } else {
          alert(JSON.stringify(values))
        }
      })
    },
    _onReset () {
      this.$refs.mbsForm.resetFields()
    }
  },
  data () {
    return {
      fields: [
        {
          name: 'age',
          component: 'mbsInput',
          label: '年龄',
          column: '4',
          // disabled: true,
          placeholder: '这个item主要是说明可以通过传入type区分input类型',
          helpText: '<i class="glyphicon glyphicon-info-sign" style="color:#337ab7;"></i>填写后不可更改',
          type: 'number'
        },
        {
          name: 'static',
          component: 'mbsStatic',
          label: '静态控件',
          column: '4',
          styleItem: {
            // fontWeight: 'bold'
          },
          // iconItem: {
          //   icon: 'heart',
          //   position: 'right'
          // },
          visible (data) {
            return data.sex === 'woman'
          }
        },
        {
          name: 'time',
          component: 'mbsTime',
          label: '时间控件',
          column: '4',
          helpText: '<i class="glyphicon glyphicon-info-sign" style="color:#ffa259;"></i>填写后不可更改',
          after: {
            // text: '我是后面的文字',
            text: '<a href="https:www.baidu.com">立即前往百度<i class="glyphicon glyphicon-arrow-right"></i></a>',
            style: {
              'letter-spacing': '3px'
            }
          }
        },
        {
          name: 'name',
          component: 'mbsInput',
          label: '姓名',
          column: '4',
          placeholder: '请输入姓名'
        },
        {
          name: 'book',
          component: 'mbsInput',
          label: '书籍',
          column: '4',
          placeholder: '请输入',
          type: 'text',
          before: {
            text: '前缀可以添加在这里'
          },
          after: {
            text: '后缀可以添加在这里'
          },
          styleItem: {
            width: '200px'
          }
        },
        {
          name: 'email',
          component: 'mbsInput',
          label: '邮箱',
          column: '4',
          placeholder: '可以传入自定义校验函数哦',
          after: {
            text: '请输入正确的邮箱，以163.com结尾'
            // icon: 'pushpin'
          },
          helpText: '<i class="glyphicon glyphicon-info-sign" style="color:#337ab7;"></i>邮箱保存后不可更改'
        },
        {
          name: 'switchCheck',
          component: 'mbsSwitch',
          label: 'switch开关',
          column: '4',
          slider: {
            open: '开',
            close: '关'
          },
          disabled: false,
          helpText: '<i class="glyphicon glyphicon-info-sign" style="color:#337ab7;"></i>switch打开后，需要填写备注信息，支持传入滑块字段'
        },
        {
          name: 'remark',
          component: 'mbsTextarea',
          label: '备注',
          column: '4',
          placeholder: '文本域',
          rows: 6,
          visible (data) {
            return data.switchCheck === true || data.switchCheck === 1
          }
        },
        {
          name: 'inputNumber',
          step: 2,
          component: 'mbsInputNumber',
          label: '数字计数器',
          column: '4',
          readonly: true,
          placeholder: '数字计数器',
          helpText: '<i class="glyphicon glyphicon-info-sign" style="color:#337ab7;"></i>可以设置累加的间隔，默认为step为1，支持设置readonly',
          after: {
            text: '元'
          }
        },
        {
          name: 'position',
          component: 'mbsSelect',
          label: '位置',
          column: '1',
          before: {
            text: '请选择擅长的位置'
          },
          after: {
            text: '选择后将按照该位置进行排位'
          },
          styleItem: {
            width: '120px'
          },
          options: [
            {
              label: '上单',
              value: 'top'
            },
            {
              label: '打野',
              value: 'jungle'
            },
            {
              label: '中单',
              value: 'mid'
            },
            {
              label: '辅助',
              value: 'sup'
            },
            {
              label: 'ADC',
              value: 'ad'
            }
          ]
        },
        {
          name: 'favourite',
          component: 'mbsCheckbox',
          direction: 'vertical',
          label: '爱好',
          column: '2',
          options: [
            {
              label: '吃饭',
              value: 'eat'
            },
            {
              label: '睡觉',
              value: 'sleep'
            },
            {
              label: '打豆豆',
              value: 'ko'
            }
          ],
          helpText: '<i class="glyphicon glyphicon-info-sign" style="color:#337ab7;"></i>至少选择一个爱好'
        },
        {
          name: 'sex',
          component: 'mbsRadio',
          label: '性别',
          column: '4',
          options: [
            {
              label: '男',
              value: 'man'
            },
            {
              label: '女',
              value: 'woman'
            }
          ],
          helpText: '<i class="glyphicon glyphicon-info-sign" style="color:#337ab7;"></i>性别保存后不可更改'
        },
        {
          name: 'switch',
          component: 'mbsRadio',
          label: '开关',
          column: '4',
          options: [
            {
              label: '开',
              value: 1
            },
            {
              label: '关',
              value: 0
            }
          ],
          helpText: '<i class="glyphicon glyphicon-info-sign" style="color:#337ab7;"></i>开关选择打开后，需要配置开关断开时间'
        },
        {
          name: 'switchTime',
          component: 'mbsInput',
          label: '开关断开时间',
          // disabled: true,
          placeholder: '开关断开时间',
          type: 'number',
          styleItem: {
            width: '100px',
            paddingRight: '5px'
          },
          after: {
            text: '分钟'
          },
          visible (data) {
            return data.switch === 1
          }
        },
        {
          name: 'job',
          component: 'mbsTag',
          label: '擅长英雄',
          column: '8',
          tagKey: 'hero',
          disabled: false,
          addBtn: '点击添加',
          type: 'success',
          size: '',
          max: 3, // 最多添加
          maxLength: 10 // 文本长度
        },
        {
          name: 'testCumcom',
          component: testCumcom,
          label: '自定义组件',
          column: '6'
        },
        {
          name: 'editor',
          component: 'mbsEditor',
          label: '图文编辑',
          column: '4',
          styleItem: {
            width: '720px'
          },
          helpText: '<i class="glyphicon glyphicon-info-sign" style="color:#337ab7;"></i>请不要涉及敏感信息，否则会被驳回'
        },
        {
          name: 'button',
          component: 'mbsButtonGroup',
          fullScree: false,
          buttons: [
            {
              label: '确认',
              value: 'edit',
              type: 'primary',
              icon: 'plus'
            },
            {
              label: '重置',
              value: 'cancel',
              type: 'default',
              icon: 'refresh'
            }
          ]
        }
      ],
      value: {
        testCumcom: [
          {
            name: '小明',
            age: 18,
            pretty: 'play game'
          },
          {
            name: '小红',
            age: 22,
            pretty: 'reading'
          },
          {
            name: '老张',
            age: 35,
            pretty: 'smoking'
          }
        ],
        inputNumber: 0,
        age: 18,
        static: '我是静态文字哦，也可以不用传label',
        name: 'xiaoming',
        book: '人民的名义',
        email: 'ruiwei@163.com',
        remark: '',
        position: 'mid',
        favourite: ['ko'],
        sex: 'woman',
        switch: 0,
        switchTime: 30,
        switchCheck: 1, // 支持boolean和number
        job: [
          { hero: '卡牌大师' },
          { hero: '提莫队长' }
        ],
        time: ['2019-11-07 20:12:48', '2019-12-07 20:12:48'],
        editor: '<h1 style="text-align:center;">富文本编辑器</h1>'
      },
      validation: {
        age: [
          {
            required: true,
            'message': '年龄不能为空'
          },
          {
            'message': '年龄必须为数字',
            'type': 'number'
          }
        ],
        time: {
          validator (rule, value, callback) {
            var errors = []
            if (!value[0]) {
              errors.push(new Error('请填写时间'))
            }
            return errors
          }
        },
        book: [
          {
            'message': '书名必填',
            required: true
          }
        ],
        position: {
          'message': '请选择位置',
          required: true
        },
        email: [
          {
            'required': true,
            'message': '邮箱不能为空'
          },
          {
            'message': '请输入正确的邮箱格式',
            type: 'email'
          },
          {
            validator (rule, value, callback) {
              var errors = []
              if (!value.endsWith('@163.com')) {
                errors.push(new Error('当前只能注册163邮箱'))
              }
              return errors
            }
          }
        ],
        favourite: [
          {
            'required': true,
            'message': '爱好不能为空'
          }
          // {
          //   validator (rule, value, callback) {
          //     var errors = []
          //     if (!value.length) {
          //       errors.push(new Error('至少选择一个爱好'))
          //     }
          //     return errors
          //   },
          //   message: '至少选择一个爱好'
          // }
        ],
        job: [
          {
            min: 2,
            message: '最少输入两个最擅长英雄',
            type: 'array'
          },
          {
            'required': true,
            'message': '请选择擅长的英雄'
          }
        ],
        switchTime: [
          {
            required: true,
            'message': '请输入开关断开时间'
          }
        ],
        inputNumber: [
          {
            type: 'integer',
            message: '请输入整数'
          }
        ]
      }
    }
  }
}
</script>

<style>
.clear-margin{
  margin-left:0 ;
  margin-right:0 ;
}
</style>
