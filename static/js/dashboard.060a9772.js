(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{4601:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-container w80 margin-20-auto"},[n("table",{staticClass:"table table-hover table-bordered"},[t._m(0),n("tbody",t._l(t.componentsList,(function(e,o){return n("tr",{key:o},[n("td",{on:{click:function(n){return t.jump(e.demo)}}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v(t._s(e.name))])]),n("td",{on:{click:function(n){return t.jump(e.demo)}}},[n("button",{staticClass:"btn btn-link",attrs:{type:"button"}},[t._v(t._s(e.demo))])]),n("td",[t._v(t._s(e.remark))]),n("td",[t._v(t._s(e.code))])])})),0)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("组件")]),n("th",[t._v("DEMO")]),n("th",[t._v("备注")]),n("th",[t._v("代码")])])])}],s=n("ad70"),r={name:"dashboard",data:function(){return{componentsList:s}},methods:{jump:function(t){this.$router.push({path:t})}}},m=r,c=n("2877"),i=Object(c["a"])(m,o,a,!1,null,null,null);e["default"]=i.exports},ad70:function(t,e){t.exports=[{name:"页面头部",demo:"components/mbs-page-header",remark:"支持自定义title、下划线、按钮",code:"/views/components/mbs-page-eader.vue"},{name:"自定义tag",demo:"components/mbs-tag",remark:"支持调整最大个数、尺寸大小、背景颜色等",code:"/views/components/mbs-tag.vue"},{name:"输入框组",demo:"components/mbs-group-input",remark:"支持设置最多添加、灵活key值等",code:"/views/components/mbs-group-input.vue"},{name:"Loading",demo:"components/mbs-loading",remark:"全局Loading、支持js方式触发",code:"/views/components/mbs-loading.vue"},{name:"分页",demo:"components/mbs-pagination",remark:"分页",code:"/views/components/mbs-pagination.vue"}]}}]);
//# sourceMappingURL=dashboard.060a9772.js.map