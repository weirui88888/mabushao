(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pageHeader"],{"08e5":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s}));var a=[{key:"title",desc:"设置头部标题",type:"string"},{key:"buttons",desc:"设置右侧按钮",type:"array"},{key:"borderBottom",desc:"设置是否需要底部border",type:"boolean",default:"false"}],o=[{key:"tagKey",desc:"设置的tagKey需要跟list数组中的key保持一致",type:"string"},{key:"disabled",desc:"可设置该组件禁止添加",type:"boolean",default:"false"},{key:"addBtn",desc:"按钮文案",type:"string"},{key:"type",desc:"设置按钮类型（背景）",type:"string",option:"success/info/warning/danger"},{key:"size",desc:"设置按钮大小",type:"string",option:"medium/small/mini",default:"medium"},{key:"max",desc:"最多添加个数",type:"number",default:1e3},{key:"maxLength",desc:"最多输入文字数",type:"number",default:1e3}],s=[{key:"max",desc:"最多设置几个",type:"number",default:10},{key:"keyConfig",desc:"设置输入框key值列表",type:"array"}]},7530:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("page-header",{attrs:{timeConfig:e.Config,title:"组件标题",borderBottom:!0,buttons:e.buttons,titleColor:e.variables.titleText},on:{edit:e._onEdit,add:e._onAdd,change:e.change}}),n("attribute-wrap",{staticClass:"mt20",attrs:{attrs:e.attrsConfig}})],1)},o=[],s=n("08e5"),i=n("cf1e"),d=n.n(i),r={name:"MbsPageHeaderDemo",data:function(){return{Config:{show:!0,time:""},buttons:[{key:"编辑",val:"edit",icon:"plus"},{key:"添加",val:"add",type:"success"}],attrsConfig:s["b"],tom:{name:"tom",age:18}}},methods:{_onEdit:function(){console.log("edit")},_onAdd:function(){console.log("add"),this.tom.age=20},change:function(e){console.log(e)}},computed:{variables:function(){return d.a}}},c=r,u=(n("d3f7"),n("2877")),l=Object(u["a"])(c,a,o,!1,null,null,null);t["default"]=l.exports},"963f":function(e,t,n){},cf1e:function(e,t,n){e.exports={titleText:"#337ab7",menuActiveText:"#409EFF"}},d3f7:function(e,t,n){"use strict";var a=n("963f"),o=n.n(a);o.a}}]);