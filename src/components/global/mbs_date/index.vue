<template>
    <div>
        <date-picker type="datetime" :time-picker-options="{ start: '00:00', step: '00:30', end: '23:30' }" v-model="time3" range lang="zh" :confirm="true" :editable="false" width="330" confirm-text="确认" icon-day="time" range-separator="至" @change="change" format="YYYY-MM-DD HH:mm:ss" value-type="format"></date-picker>
        <date-picker v-model="time2" lang="zh" :confirm="true" :editable="false" width="230" confirm-text="确认" icon-day="time" range-separator="至" @change="change" format="YYYY-MM-DD" value-type="format"></date-picker>
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
export default {
  name: 'mbsDate',
  components: {
    DatePicker
  },
  data () {
    return {
      time3: '',
      time2: ''
    }
  },
  methods: {
    change (val) {
      console.log(val)
    }
  }
}
</script>
