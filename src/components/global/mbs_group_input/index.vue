<template>
  <div class="group-base-container">
    <form class="form-inline mb20" v-for="(group,index) in groupList" :key="index">
      <div class="form-group">
        <span class="group-title">{{index+1}}级优惠</span>
        <label class="label-control label-relative"><span class="label-require">*</span>满</label>
        <input type="number" class="form-control" :placeholder="placeholder" v-model="group[keyConfig[0]]" @blur="blurInput($event,index,[keyConfig[0]])">
      </div>
      <div class="form-group">
        <label class="label-control"><span>{{suffix}}</span>减</label>
        <input type="number" class="form-control" :placeholder="placeholder" v-model="group[keyConfig[1]]" @blur="blurInput($event,index,[keyConfig[1]])">
        <label class="label-control">{{suffix}}</label>
        <i class="glyphicon glyphicon-minus-sign icon-delete" v-if="index>0" @click="remove(index)"></i>
      </div>
    </form>
    <div>
        <button class="btn btn-primary" type="button" v-if="!disabled && groupList.length < max" @click="add"><i class="glyphicon glyphicon-plus"></i> {{btn}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MbsGroupInput',
  props: {
    placeholder: {
      type: String,
      default: '请输入'
    },
    suffix: {
      type: String,
      default: '元'
    },
    value: {
      type: Array,
      default () {
        return []
      }
    },
    keyConfig: {
      type: Array,
      default () {
        return []
      }
    },
    max: {
      type: Number,
      default: 10
    },
    btn: {
      type: String,
      default: '添加'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    groupList: {
      get () {
        return this.value
      }
    }
  },
  methods: {
    add () {
      if (this.groupList.length >= this.max) {
        alert('超过当前最大设置')
        return
      }
      let key1 = this.keyConfig[0]
      let key2 = this.keyConfig[1]
      this.groupList.push({
        [key1]: '',
        [key2]: ''
      })
      this.$emit('add', this.groupList)
    },
    blurInput (event, index, key) {
      let val = +event.target.value
      if (val < 0) {
        this.groupList[index][key] = ''
        return
      }
      this.$emit('change', index, val)
    },
    remove (index) {
      this.groupList.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.group-title{
    padding: 0 10px;
    font-weight: bold;
}
.label-control{
    padding: 0 5px;
}
.label-relative{
    position: relative;
}
.label-require{
    color: red;
    font-size: 18px;
    position: absolute;
    left: -3px;
}
.icon-delete{
    color: red;
    cursor: pointer;
}
</style>
