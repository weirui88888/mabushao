<template>
  <div>
    <!-- @edit="_onLogin"
    @cancel="_onReset" -->
    <mbs-from
    :fields="fields"
    ref="mbsForm"
    :value="value"
    :validation="validation"
    :labelColumn="1"
    />
    <div class="row">
        <div class="col-md-6">
            <button type="button" class="btn btn-primary pull-right" @click="_onLogin">确认</button>
        </div>
        <div class="col-md-6">
            <button type="button" class="btn btn-default pull-left" @click="_onReset">重置</button>
        </div>
      </div>
    </div>
</template>

<script>
import mbsFrom from '@/components/global/mbs_form/index.vue'

export default {
  name: 'mbsFormDemo',
  components: {
    mbsFrom
  },
  mounted () {
    // this.$dlg.mask('form data saving')
    // this.$dlg.alert('Data saved successfully!')

  },
  methods: {
    _onLogin () {
      // TODO:自定义表单里面的按钮，不起作用
      // console.log(this.$refs.mbsForm.validate)
      this.$refs.mbsForm.validate((err, values) => {
        if (err) {
          console.log('验证失败')
        } else {
          console.log('验证成功', values)
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
          column: '2',
          // disabled: true,
          placeholder: '这个item主要是说明可以通过传入type区分input类型',
          helpText: '填写后不可更改',
          type: 'number'
          // styleItem: {
          //   width: '200px'
          // }
        },
        {
          name: 'time',
          component: 'mbsTime',
          label: '时间控件',
          column: '4'
        },
        {
          name: 'name',
          component: 'mbsInput',
          label: '姓名',
          column: '4',
          placeholder: '请输入姓名',
          after: {
            // text: '我是后面的文字',
            html: '<a href="https:www.baidu.com">立即前往百度</a>',
            style: {
              'letter-spacing': '3px'
            }
          }
        },
        {
          name: 'book',
          component: 'mbsInput',
          label: '书籍',
          column: '4',
          placeholder: '请输入书名',
          after: {
            text: '要记得多看书哦',
            style: {
              color: 'red',
              // 'font-weight': 'bold',
              'letter-spacing': '2px'
            }
          }
        },
        {
          name: 'email',
          component: 'mbsInput',
          label: '邮箱',
          column: '4',
          placeholder: '可以传入自定义校验函数哦',
          after: {
            text: '以163.com结尾',
            icon: 'pushpin'
          }
        },
        {
          name: 'remark',
          component: 'mbsTextarea',
          label: '备注',
          column: '4',
          placeholder: '文本域',
          rows: 6
        },
        {
          name: 'position',
          component: 'mbsSelect',
          label: '位置',
          column: '2',
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
          column: '4',
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
          ]
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
          ]
        },
        {
          name: 'job',
          component: 'mbsTag',
          label: '擅长英雄',
          column: '8',
          tagKey: 'hero',
          disabled: false,
          addBtn: '点击添加',
          type: 'danger',
          size: '',
          max: 3, // 最多添加
          maxLength: 10, // 文本长度
          list: [
            { hero: '卡牌大师' },
            { hero: '提莫队长' }
          ]
        }
        // {
        //   name: 'button',
        //   component: 'mbsButtonGroup',
        //   fullScree: false,
        //   buttons: [
        //     {
        //       label: '确认',
        //       value: 'edit',
        //       type: 'primary',
        //       icon: 'plus'
        //     },
        //     {
        //       label: '重置',
        //       value: 'cancel',
        //       type: 'default',
        //       icon: 'refresh'
        //     }
        //   ]
        // }
      ],
      value: {
        age: 18,
        name: 'xiaoming',
        book: 'javascript',
        email: 'ruiwei@163.com',
        remark: '',
        position: 'mid',
        favourite: ['ko'],
        sex: 'man',
        job: [
          { hero: '卡牌大师' },
          { hero: '提莫队长' }
        ],
        time: []
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
        book: {
          'message': '书名必填',
          required: true
        },
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
        favourite: {
          validator (rule, value, callback) {
            var errors = []
            if (!value.length) {
              errors.push(new Error('至少选择一个爱好'))
            }
            return errors
          },
          message: '至少选择一个爱好'
        },
        job: [
          {
            min: 2,
            message: '最少两个',
            type: 'array'
          }
        ]
      }
    }
  }
}
</script>
