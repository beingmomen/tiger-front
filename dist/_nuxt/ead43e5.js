(window.webpackJsonp=window.webpackJsonp||[]).push([[53,14],{466:function(t,e,r){var content=r(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("f7e4e0e8",content,!0,{sourceMap:!1})},467:function(t,e,r){"use strict";var o=r(160),n=r(102),l=r(103),c=r(101),d=r(161),m=(r(476),r(477),r(478)),f=r.n(m),v={components:{BCard:o.a,BCardTitle:n.a,BCardSubTitle:l.a,BCardBody:c.a,BCollapse:d.a,Prism:f.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},_=(r(469),r(50)),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[r("div",{staticClass:"card-header"},[r("div",[r("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?r("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),r("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(e){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[r("b-card-body",[r("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:r("b-card-body",[t._t("default"),t._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[r("div",{staticClass:"p-1"}),t._v(" "),r("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"0390b462",null);e.a=component.exports},469:function(t,e,r){"use strict";r(466)},470:function(t,e,r){var o=r(79)(!1);o.push([t.i,".card-code pre[class*=language-][data-v-0390b462]{margin:0;max-height:350px;border-radius:.5rem}.card-code[data-v-0390b462] ::-webkit-scrollbar{width:8px;height:8px;background:#2d2d2d;border-radius:100%}.dark-layout .card-code[data-v-0390b462] ::-webkit-scrollbar{background-color:#161d31!important}.card-code[data-v-0390b462] ::-webkit-scrollbar-track{background:transparent}.card-code[data-v-0390b462] ::-webkit-scrollbar-thumb{border-radius:.5rem;background:hsla(0,0%,94.5%,.4)}.card-code[data-v-0390b462] ::-webkit-scrollbar-corner{display:none}.code-toggler[data-v-0390b462]{border-bottom:1px solid transparent}.code-toggler[aria-expanded=false][data-v-0390b462]{border-bottom-color:#7367f0}.card .card-header .heading-elements[data-v-0390b462]{position:static;background:red}",""]),t.exports=o},479:function(t,e,r){"use strict";r.r(e);r(32);var o={props:{label:String,module:String,storeKey:String,required:{type:Boolean,default:!1},type:{type:String,default:"text"},rule:{type:String,default:"required"},disabled:{type:Boolean,default:!1},lg:{type:String,default:"6"},md:{type:String,default:"6"},sm:{type:String,default:"12"}},computed:{getContent:{get:function(){return this.$store.getters["".concat(this.module,"/").concat(this.storeKey)]},set:function(t){this.$store.commit("".concat(this.module,"/").concat(this.storeKey),{key:this.storeKey,value:t})}}}},n=r(50),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-col",{staticClass:"mb-1 custom-form",attrs:{lg:t.lg,md:t.md,sm:t.sm}},[r("b-form-group",{attrs:{"label-class":{"label-required":t.required},label:t.label,"label-for":"vi-first-name"}},[r("b-input-group",{staticClass:"input-group-merge",class:"rtl"==t.dashDir?"form-input-icon-rtl":"form-input-icon-ltr"},[r("b-input-group-prepend",{staticClass:"prepend",attrs:{"is-text":""}},[t._t("icon")],2),t._v(" "),r("b-form-input",{staticStyle:{height:"35px"},attrs:{id:"vi-first-name",placeholder:t.label,disabled:t.disabled,type:t.type},model:{value:t.getContent,callback:function(e){t.getContent=e},expression:"getContent"}})],1)],1)],1)}),[],!1,null,"6e88aa72",null);e.default=component.exports},579:function(t,e,r){"use strict";r.r(e);var o=r(61),n={layout:"admin",components:{BCardCode:r(467).a,UserIcon:o.D,MailIcon:o.s,LockIcon:o.q}},l=r(50),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-code",{attrs:{title:"Create New User"}},[r("b-form",{staticClass:"vh-50",on:{submit:function(t){t.preventDefault()}}},[r("b-row",[r("FormInputIcon",{attrs:{label:"Name",storeKey:"name"},scopedSlots:t._u([{key:"icon",fn:function(){return[r("user-icon",{staticClass:"custom-class",attrs:{size:"1.5x"}})]},proxy:!0}])}),t._v(" "),r("FormInputIcon",{attrs:{label:"Email",storeKey:"email",type:"email"},scopedSlots:t._u([{key:"icon",fn:function(){return[r("mail-icon",{staticClass:"custom-class",attrs:{size:"1.5x"}})]},proxy:!0}])}),t._v(" "),r("FormInputIcon",{attrs:{label:"Password",storeKey:"password",type:"password"},scopedSlots:t._u([{key:"icon",fn:function(){return[r("lock-icon",{staticClass:"custom-class",attrs:{size:"1.5x"}})]},proxy:!0}])}),t._v(" "),r("FormInputIcon",{attrs:{label:"Confirm Password",storeKey:"passwordConfirm",type:"password"},scopedSlots:t._u([{key:"icon",fn:function(){return[r("lock-icon",{staticClass:"custom-class",attrs:{size:"1.5x"}})]},proxy:!0}])}),t._v(" "),r("b-col",{staticClass:"text-end",attrs:{cols:"12"}},[r("b-button",{attrs:{type:"reset",variant:"outline-secondary"}},[t._v(" Reset ")]),t._v(" "),r("b-button",{staticClass:"mr-1",attrs:{type:"submit",variant:"primary"}},[t._v("\n          Submit\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormInputIcon:r(479).default})}}]);