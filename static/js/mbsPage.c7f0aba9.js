(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mbsPage"],{"85a5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mbs-pagination-demo"}},[t._m(0),a("mbs-pagination",t._b({on:{pageChange:t._onPagechange}},"mbs-pagination",t.attribute,!1)),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[t._m(1),a("table",{staticClass:"table table-bordered table-hover"},[t._m(2),a("tbody",t._l(t.attrs,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(e.key))]),a("td",[t._v(t._s(e.desc))]),a("td",[t._v(t._s(e.type))]),a("td",[t._v(t._s(e.option||"-"))]),a("td",[t._v(t._s(e.default||"-"))])])})),0)])]),a("div",{staticClass:"col-md-3"},[t._m(3),a("form",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-success"},[t._v("totalNum")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.attribute.totalNum,expression:"attribute.totalNum"}],staticClass:"form-control",staticStyle:{width:"100px"},attrs:{type:"number",min:"0",placeholder:"可设置分页共多少条数据"},domProps:{value:t.attribute.totalNum},on:{input:function(e){e.target.composing||t.$set(t.attribute,"totalNum",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-success"},[t._v("position")]),a("div",{staticClass:"radio"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attribute.position,expression:"attribute.position"}],attrs:{type:"radio",name:"position",value:"left"},domProps:{checked:t._q(t.attribute.position,"left")},on:{change:function(e){return t.$set(t.attribute,"position","left")}}}),t._v(" left ")])]),a("div",{staticClass:"radio"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attribute.position,expression:"attribute.position"}],attrs:{type:"radio",name:"position",value:"right"},domProps:{checked:t._q(t.attribute.position,"right")},on:{change:function(e){return t.$set(t.attribute,"position","right")}}}),t._v(" right ")])])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-success"},[t._v("size")]),a("div",{staticClass:"radio"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attribute.size,expression:"attribute.size"}],attrs:{type:"radio",name:"size",value:"sm"},domProps:{checked:t._q(t.attribute.size,"sm")},on:{change:function(e){return t.$set(t.attribute,"size","sm")}}}),t._v(" sm ")])]),a("div",{staticClass:"radio"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attribute.size,expression:"attribute.size"}],attrs:{type:"radio",name:"size",value:""},domProps:{checked:t._q(t.attribute.size,"")},on:{change:function(e){return t.$set(t.attribute,"size","")}}}),t._v(" 默认 ")])]),a("div",{staticClass:"radio"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attribute.size,expression:"attribute.size"}],attrs:{type:"radio",name:"size",value:"lg"},domProps:{checked:t._q(t.attribute.size,"lg")},on:{change:function(e){return t.$set(t.attribute,"size","lg")}}}),t._v(" lg ")])])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-success"},[t._v("showDesc")]),a("div",{staticClass:"radio"},[a("label",[a("input",{attrs:{type:"radio",name:"showDesc",checked:""},on:{click:function(e){t.attribute.showDesc=!0}}}),t._v(" true ")])]),a("div",{staticClass:"radio"},[a("label",[a("input",{attrs:{type:"radio",name:"showDesc",value:"false"},on:{click:function(e){t.attribute.showDesc=!1}}}),t._v(" false ")])])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-success"},[t._v("quickLink")]),a("div",{staticClass:"radio"},[a("label",[a("input",{attrs:{type:"radio",name:"quickLink",checked:""},on:{click:function(e){t.attribute.quickLink=!0}}}),t._v(" true ")])]),a("div",{staticClass:"radio"},[a("label",[a("input",{attrs:{type:"radio",name:"quickLink",value:"false"},on:{click:function(e){t.attribute.quickLink=!1}}}),t._v(" false ")])])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-success"},[t._v("sizeList")]),a("div",{staticClass:"radio"},[a("label",[a("input",{attrs:{type:"radio",name:"sizeList",checked:""},on:{click:function(e){t.attribute.sizeList=[]}}}),t._v(" 默认 ")])]),a("div",{staticClass:"radio"},[a("label",[a("input",{attrs:{type:"radio",name:"sizeList",value:"false"},on:{click:function(e){t.attribute.sizeList=[10,20,50]}}}),t._v(" [10,20,50] ")])])])])]),a("div",{staticClass:"col-md-3"},[t._m(4),a("pre",[t._v(t._s(t.attribute))])])]),t._m(5),t._m(6)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("h3",[t._v("基于bootstrap3的分页组件")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("h3",[t._v("Attributes")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("h3",{staticClass:"text-danger"},[t._v("在线演示")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("h3",{staticClass:"text-success"},[t._v("数据")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("h3",[t._v("安装:")]),a("pre",[t._v("        step1: npm install --save mbs-pagination\n\n        step2: 在需要的组件中引入\n\n        import mbsPagination from 'mbs-pagination'\n\n        export default {\n          name: 'xxx',\n          components:{ mbsPagination }\n        }\n\n        step3:\n        <mbs-pagination\n          :total-num=\"100\"\n          :page-number=\"1\"\n          ...\n        >\n        </mbs-pagination>")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("注意：分页组件默认为不开启每页展示条数选项，如果需要的话，请确保sizeList数组中选项包含数值pageSize")])])}],n={name:"mbsPaginationDemo",data:function(){return{attribute:{totalNum:2048,pageNumber:1,position:"left",pageSize:20,size:"",sizeList:[],showDesc:!0,quickLink:!0},attrs:[{key:"totalNum",desc:"共多少条数据",type:"number",default:0},{key:"pageSize",desc:"设置每页多少条数据",type:"number",default:20},{key:"pageNumber",desc:"当前处于第几页",type:"number",default:1},{key:"size",type:"string",option:"sm/lg",desc:"分页尺寸"},{key:"sizeList",desc:"可设置每页展示条数",type:"array",default:"[]"},{key:"position",desc:"分页位置",type:"string",option:"left/right",default:"left"},{key:"showDesc",desc:"是否展示总条数提示",type:"boolean",option:"true/false",default:"true"},{key:"quickLink",desc:"是否有首页、末页快捷键",type:"boolean",option:"true/false",default:"true"}]}},methods:{_onPagechange:function(t){console.log(t)}}},r=n,o=a("2877"),l=Object(o["a"])(r,s,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=mbsPage.c7f0aba9.js.map