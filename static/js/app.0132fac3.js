(function(t){function e(e){for(var a,r,i=e[0],u=e[1],l=e[2],c=0,d=[];c<i.length;c++)r=i[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function i(t){return u.p+"static/js/"+({components:"components",dashboard:"dashboard",mbsGroupInput:"mbsGroupInput",mbsTag:"mbsTag",pageHeader:"pageHeader"}[t]||t)+"."+{components:"553f314f",dashboard:"2cbc98eb",mbsGroupInput:"47baf6b0",mbsTag:"d1c0f527",pageHeader:"603f392e"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={components:1,pageHeader:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="static/css/"+({components:"components",dashboard:"dashboard",mbsGroupInput:"mbsGroupInput",mbsTag:"mbsTag",pageHeader:"pageHeader"}[t]||t)+"."+{components:"723fd5bd",dashboard:"31d6cfe0",mbsGroupInput:"31d6cfe0",mbsTag:"31d6cfe0",pageHeader:"88bd3d31"}[t]+".css",o=u.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===a||c===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],c=l.getAttribute("data-href");if(c===a||c===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],p.parentNode.removeChild(p),n(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(t);var d=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"33ec":function(t,e,n){"use strict";n.r(e);var a=n("5da8");e["default"]=a["a"]},3701:function(t,e,n){},"373b":function(t,e,n){},"3a4d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"attribute-container"},[n("h3",{staticClass:"mb20"},[t._v("配置项")]),n("table",{staticClass:"table table-hover table-bordered w50"},[t._m(0),n("tbody",t._l(t.attrs,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.key))]),n("td",[t._v(t._s(e.desc))]),n("td",[t._v(t._s(e.type))]),n("td",[t._v(t._s(e.option||"-"))]),n("td",[t._v(t._s(e.default||"-"))])])})),0)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])])}],o={name:"attributeWrap",props:{attrs:{type:Array,default:function(){return[]}}}},s=o,i=n("2877"),u=Object(i["a"])(s,a,r,!1,null,null,null),l=u.exports;e["default"]=l},4394:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group-base-container"},[t._l(t.groupList,(function(e,a){return n("form",{key:a,staticClass:"form-inline mb20"},[n("div",{staticClass:"form-group"},[n("span",{staticClass:"group-title"},[t._v(t._s(a+1)+"级优惠")]),t._m(0,!0),n("input",{directives:[{name:"model",rawName:"v-model",value:e[t.keyConfig[0]],expression:"group[keyConfig[0]]"}],staticClass:"form-control",attrs:{type:"number",placeholder:t.placeholder},domProps:{value:e[t.keyConfig[0]]},on:{blur:function(e){return t.blurInput(e,a,[t.keyConfig[0]])},input:function(n){n.target.composing||t.$set(e,t.keyConfig[0],n.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{staticClass:"label-control"},[n("span",[t._v(t._s(t.suffix))]),t._v("减")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e[t.keyConfig[1]],expression:"group[keyConfig[1]]"}],staticClass:"form-control",attrs:{type:"number",placeholder:t.placeholder},domProps:{value:e[t.keyConfig[1]]},on:{blur:function(e){return t.blurInput(e,a,[t.keyConfig[1]])},input:function(n){n.target.composing||t.$set(e,t.keyConfig[1],n.target.value)}}}),n("label",{staticClass:"label-control"},[t._v(t._s(t.suffix))]),a>0?n("i",{staticClass:"glyphicon glyphicon-minus-sign icon-delete",on:{click:function(e){return t.remove(a)}}}):t._e()])])})),n("div",[!t.disabled&&t.groupList.length<t.max?n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.add}},[n("i",{staticClass:"glyphicon glyphicon-plus"}),t._v(" "+t._s(t.btn))]):t._e()])],2)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"label-control label-relative"},[n("span",{staticClass:"label-require"},[t._v("*")]),t._v("满")])}],o=(n("a434"),n("a9e3"),n("2fa7")),s={name:"MbsGroupInput",props:{placeholder:{type:String,default:"请输入"},suffix:{type:String,default:"元"},value:{type:Array,default:function(){return[]}},keyConfig:{type:Array,default:function(){return[]}},max:{type:Number,default:10},btn:{type:String,default:"添加"}},data:function(){return{}},computed:{groupList:{get:function(){return this.value}}},methods:{add:function(){var t;if(this.groupList.length>=this.max)alert("超过当前最大设置");else{var e=this.keyConfig[0],n=this.keyConfig[1];this.groupList.push((t={},Object(o["a"])(t,e,""),Object(o["a"])(t,n,""),t)),this.$emit("add",this.groupList)}},blurInput:function(t,e,n){var a=+t.target.value;a<0?this.groupList[e][n]="":this.$emit("change",e,a)},remove:function(t){this.groupList.splice(t,1)}}},i=s,u=(n("72dc"),n("2877")),l=Object(u["a"])(i,a,r,!1,null,"3c13bf8b",null),c=l.exports;e["default"]=c},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=n("2877"),s={},i=Object(o["a"])(s,a,r,!1,null,null,null),u=i.exports,l=(n("d3b7"),n("8bbf")),c=n.n(l),d=n("8c4f");c.a.use(d["a"]);var p=[{path:"/",name:"home",redirect:"/dashboard"},{path:"/dashboard",name:"dashboard",component:function(){return n.e("dashboard").then(n.bind(null,"4601"))}},{path:"/components",name:"components",component:function(){return n.e("components").then(n.bind(null,"0acd"))},children:[{path:"mbs-page-header",name:"pageHeader",component:function(){return n.e("pageHeader").then(n.bind(null,"7530"))}},{path:"mbs-tag",name:"mbsTag",component:function(){return n.e("mbsTag").then(n.bind(null,"d363"))}},{path:"mbs-group-input",name:"mbsGroupInput",component:function(){return n.e("mbsGroupInput").then(n.bind(null,"b648"))}}]}],f=new d["a"]({routes:p}),b=f,m=n("2f62");c.a.use(m["a"]);var h=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("b20f"),n("a3bc"),n("f5df1");Vue.config.productionTip=!1,new Vue({router:b,store:h,render:function(t){return t(u)}}).$mount("#app")},"5bf4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header-container",class:{"page-header-border-bottom":t.borderBottom}},[n("h4",[n("span",{staticClass:"page-header-title",style:{color:t.titleColor}},[t._v(t._s(t.title))]),t.hasButton?n("button-group",t._g(t._b({staticClass:"pull-right"},"button-group",t.$attrs,!1),t.$listeners)):t._e()],1)])},r=[],o=n("5da8"),s={name:"pageHeader",components:{buttonGroup:o["a"]},props:{title:{type:String,default:"页面标题"},borderBottom:{type:Boolean,default:!0},titleColor:{type:String,default:"#2679B8"}},computed:{hasButton:function(){return this.$attrs.buttons}}},i=s,u=(n("d96c"),n("2877")),l=Object(u["a"])(i,a,r,!1,null,"4bab7d88",null),c=l.exports;e["default"]=c},"5da8":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button-group-container",style:t.buttonGroupStyle},t._l(t.buttons,(function(e,a){return n("button",{key:a,staticClass:"customer-button btn",class:t.btntype(e.type),attrs:{type:"button"},on:{click:function(n){return t.$emit(e.val)}}},[n("i",{staticClass:"glyphicon",class:"glyphicon-"+e.icon}),t._v(" "+t._s(e.key)+" ")])})),0)},r=[],o={name:"buttonGroup",props:{buttons:{type:Array,default:function(){return[]}},buttonGroupStyle:{type:Object,default:function(){return{display:"inline-block"}}}},methods:{btntype:function(t){return t?"btn-".concat(t):"btn-primary"}}},s=o,i=(n("d451"),n("2877")),u=Object(i["a"])(s,a,r,!1,null,"7df35b1b",null);e["a"]=u.exports},"64f3":function(t,e,n){},"6a9b":function(t,e,n){"use strict";var a=n("f383"),r=n.n(a);r.a},"72dc":function(t,e,n){"use strict";var a=n("64f3"),r=n.n(a);r.a},8726:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"font-explain-container"},[n("span",[t._v(t._s(t.title))]),n("ul",t._l(t.explainList,(function(e,a){return n("li",{key:a,staticClass:"explain-li"},[t._v(" "+t._s(e)+" ")])})),0)])},r=[],o={name:"fontExplain",props:{title:{type:String,default:""},explainList:{type:String,default:function(){return[]}}}},s=o,i=(n("c36a"),n("2877")),u=Object(i["a"])(s,a,r,!1,null,"4ae6e5f8",null),l=u.exports;e["default"]=l},"8bbf":function(t,e){t.exports=Vue},"9f75":function(t,e,n){},a3bc:function(t,e,n){"use strict";n.r(e);n("4160"),n("b0c0"),n("d3b7"),n("159b"),n("ddb0");var a=n("8bbf"),r=n.n(a),o=n("d83c");o.keys().forEach((function(t){var e=o(t),n=e.default||e;r.a.component(n.name,n)}))},a743:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mbs-tag-wrap"},[t._l(t.val,(function(e,a){return n("div",{key:a+e[t.tagKey],staticClass:"mbs-tag-item",class:[t.size,t.type]},[t._v(" "+t._s(e[t.tagKey])+" "),t.disabled?t._e():n("i",{on:{click:function(n){return t.deleteFn(e,a)}}},[t._v("x")])])})),t.disabled||!t.addable||t.showInput?t._e():n("div",{staticClass:"mbs-add-btn",class:[t.size,t.type],on:{click:t.addBtnFn}},[n("span",[t._v("+")]),t._v(" "+t._s(t.addBtn))]),t.showInput?n("div",{staticClass:"tag-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tagName,expression:"tagName"}],ref:"tag",class:[t.size,t.type],attrs:{type:"text",maxlength:t.maxLength},domProps:{value:t.tagName},on:{blur:t.addTag,input:function(e){e.target.composing||(t.tagName=e.target.value)}}})]):t._e()],2)},r=[],o=(n("a434"),n("a9e3"),n("2fa7")),s={name:"MbsTag",props:{disabled:{type:Boolean,default:!1},type:{type:String,default:""},size:{type:String,default:"medium"},addBtn:{type:String,default:"标签"},value:{type:Array,default:function(){return[]}},max:{type:Number,default:1e3},tagKey:{type:String,default:""},maxLength:{type:Number,default:1e3}},data:function(){return{tagName:"",showInput:!1,addable:!0}},computed:{val:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},mounted:function(){this.val.length>=this.max&&(this.addable=!1)},methods:{deleteFn:function(t,e){this.val.splice(e,1),this.val.length<this.max&&(this.addable=!0),this.val=this.val,this.$emit("delete",{item:t,index:e})},addBtnFn:function(){var t=this;this.showInput=!0,this.$nextTick((function(){t.$refs.tag.focus()}))},addTag:function(){if(this.showInput=!1,!this.tagName)return this.tagName="",!1;this.val.push(Object(o["a"])({},this.tagKey,this.tagName)),this.$emit("add",{item:Object(o["a"])({},this.tagKey,this.tagName)}),this.tagName="",this.val.length>=this.max&&(this.addable=!1)}}},i=s,u=(n("6a9b"),n("2877")),l=Object(u["a"])(i,a,r,!1,null,"05c63d0a",null),c=l.exports;e["default"]=c},b20f:function(t,e,n){},c36a:function(t,e,n){"use strict";var a=n("373b"),r=n.n(a);r.a},d451:function(t,e,n){"use strict";var a=n("9f75"),r=n.n(a);r.a},d83c:function(t,e,n){var a={"./attribute/index.js":"3a4d","./buttonGroup/index.js":"33ec","./fontExplain/index.js":"8726","./groupInput/index.js":"4394","./index.js":"a3bc","./mbsTag/index.js":"a743","./pageHeader/index.js":"5bf4"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="d83c"},d96c:function(t,e,n){"use strict";var a=n("3701"),r=n.n(a);r.a},f383:function(t,e,n){}});
//# sourceMappingURL=app.0132fac3.js.map