(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mbsTag"],{"08e5":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return d}));var a=[{key:"title",desc:"设置头部标题",type:"string"},{key:"buttons",desc:"设置右侧按钮",type:"array"},{key:"borderBottom",desc:"设置是否需要底部border",type:"boolean",default:"false"}],s=[{key:"tagKey",desc:"设置的tagKey需要跟list数组中的key保持一致",type:"string"},{key:"disabled",desc:"可设置该组件禁止添加",type:"boolean",default:"false"},{key:"addBtn",desc:"按钮文案",type:"string"},{key:"type",desc:"设置按钮类型（背景）",type:"string",option:"success/info/warning/danger"},{key:"size",desc:"设置按钮大小",type:"string",option:"medium/small/mini",default:"medium"},{key:"max",desc:"最多添加个数",type:"number",default:1e3},{key:"maxLength",desc:"最多输入文字数",type:"number",default:1e3}],d=[{key:"max",desc:"最多设置几个",type:"number",default:10},{key:"keyConfig",desc:"设置输入框key值列表",type:"array"}]},d363:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mbs-tag-container mbs-component-container"},[n("mbs-tag",e._b({on:{add:e.onAdd,delete:e.ondel,input:e.change},model:{value:e.list,callback:function(t){e.list=t},expression:"list"}},"mbs-tag",{disabled:e.disabled,type:e.type,size:e.size,addBtn:e.addBtn,max:e.max,tagKey:e.tagKey,maxLength:e.maxLength},!1)),n("h3",{staticClass:"p30"},[e._v("数据项："+e._s(e.list))]),n("attribute-wrap",{attrs:{attrs:e.attrsConfig}})],1)},s=[],d=n("08e5"),i={name:"MbstagDemo",data:function(){return{tagKey:"hero",disabled:!1,addBtn:"点我试试",type:"",size:"medium",max:5,maxLength:10,list:[{hero:"卡牌大师"},{hero:"提莫队长"}],attrsConfig:d["c"]}},methods:{change:function(e){console.log(e)},onAdd:function(e){console.log(e)},ondel:function(e){console.log(e),this.Swal.fire("删除成功")}}},o=i,r=n("2877"),l=Object(r["a"])(o,a,s,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=mbsTag.833f3ee1.js.map