(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mbsGroupInput"],{"08e5":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var s=[{key:"title",desc:"设置头部标题",type:"string"},{key:"buttons",desc:"设置右侧按钮",type:"array"},{key:"borderBottom",desc:"设置是否需要底部border",type:"boolean",default:"false"}],a=[{key:"tagKey",desc:"设置的tagKey需要跟list数组中的key保持一致",type:"string"},{key:"disabled",desc:"可设置该组件禁止添加",type:"boolean",default:"false"},{key:"addBtn",desc:"按钮文案",type:"string"},{key:"type",desc:"设置按钮类型（背景）",type:"string",option:"success/info/warning/danger"},{key:"size",desc:"设置按钮大小",type:"string",option:"medium/small/mini",default:"medium"},{key:"max",desc:"最多添加个数",type:"number",default:1e3},{key:"maxLength",desc:"最多输入文字数",type:"number",default:1e3}],i=[{key:"max",desc:"最多设置几个",type:"number",default:10},{key:"keyConfig",desc:"设置输入框key值列表",type:"array"}]},b648:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"group-input-container"},[n("mbs-group-input",{attrs:{max:e.max,keyConfig:e.keyConfig},on:{add:e._onadd,change:e._onchange},model:{value:e.list,callback:function(t){e.list=t},expression:"list"}}),n("h3",{staticClass:"mt20"},[e._v("数据项："+e._s(e.list))]),n("attribute-wrap",{staticClass:"mt20",attrs:{attrs:e.attrsConfig}})],1)},a=[],i=n("08e5"),o={name:"MbsGroupInputDemo",data:function(){return{attrsConfig:i["a"],max:5,keyConfig:["first","last"],list:[{first:10,last:10},{first:20,last:10}]}},methods:{_onadd:function(e){console.log(e)},_onchange:function(e,t){console.log(e,t)}}},r=o,u=n("2877"),c=Object(u["a"])(r,s,a,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=mbsGroupInput.47baf6b0.js.map