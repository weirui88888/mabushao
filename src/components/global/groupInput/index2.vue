<!-- <template>
  <div>
    <font-explain title="活动说明：" :explainList="explainList"></font-explain>
    {{list}}
  </div>
</template>

<script>
import groupBase from './groupBase'
export default {
  name: 'groupInput',
  components: {
    groupBase
  },
  data () {
    return {
      max: 5,
      keyConfig: ['first', 'last'],
      list: [
        {
          first: 10,
          last: 10
        },
        {
          first: 20,
          last: 10
        }
      ],
      explainList: [
        '1、最多可设置5个满减层级。',
        '2、活动进行中也可以添加满减产品。',
        '3、活动进行期间,满减信息若修改，则按照最新的满减规则执行。',
        '4、活动状态变更为【已结束】后，活动将结束，请谨慎操作。',
        '5、促销满减支持与红包叠加使用，若商户不想此满减活动支持红包，可设置该商品不支持红包，具体操作请与红包产品经理联系。'
      ]
    }
  },
  methods: {
    _onadd (val) {
      console.log(val)
    },
    _onchange (index, val) {
    //   console.log(index, val)
    }
  }
}
</script> -->
