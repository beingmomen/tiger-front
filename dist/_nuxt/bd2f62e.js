(window.webpackJsonp=window.webpackJsonp||[]).push([[33,19],{499:function(t,e,r){"use strict";r.r(e);var n=r(61),o={props:["visibility"],components:{EyeIcon:n.k,EyeOffIcon:n.l}},l=r(50),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["password"==t.visibility?r("eye-icon",{staticClass:"custom-class cursor-pointer",attrs:{size:"1.5x"}}):r("eye-off-icon",{staticClass:"custom-class cursor-pointer",attrs:{size:"1.5x"}})],1)}),[],!1,null,"dbe0db46",null);e.default=component.exports},541:function(t,e,r){t.exports=r.p+"img/reset-password-v2.7c3052f.svg"},580:function(t,e,r){"use strict";r.r(e);var n={name:"reset-password",layout:"auth",data:function(){return{btnDisabled:!1,reset:{password:"",passwordConfirm:""}}},components:{ChevronLeftIcon:r(61).e},methods:{resetPass:function(){var t=this;this.$refs.form.validate().then((function(e){e&&(t.btnDisabled=!0,t.$axios.$patch("/users/resetPassword/".concat(t.$route.params.token),t.reset).then((function(e){t.$toast.success(e.status),t.$router.push("/login")})))}))}}},o=r(50),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth-wrapper auth-v2"},[n("b-row",{staticClass:"auth-inner m-0"},[n("b-link",{staticClass:"brand-logo"},[n("MainLogo"),t._v(" "),n("MainTitle")],1),t._v(" "),n("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[n("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[n("b-img",{attrs:{src:r(541),fluid:"",alt:"Register V2"}})],1)]),t._v(" "),n("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[n("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[n("b-card-title",{staticClass:"font-weight-bold mb-1",attrs:{"title-tag":"h2"}},[t._v("\n          Reset Password 🔒\n        ")]),t._v(" "),n("b-card-text",{staticClass:"mb-2"},[t._v("\n          Your new password must be different from previously used passwords\n        ")]),t._v(" "),n("validation-observer",{ref:"form"},[n("b-form",{staticClass:"auth-reset-password-form mt-2",on:{submit:function(e){return e.preventDefault(),t.validationForm.apply(null,arguments)}}},[n("b-form-group",{attrs:{label:"New Password","label-for":"reset-password-new"}},[n("validation-provider",{attrs:{name:"Password",vid:"Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("b-input-group",{staticClass:"input-group-merge",class:r.length>0?"is-invalid":null},[n("b-form-input",{staticClass:"form-control-merge",attrs:{id:"reset-password-new",type:t.passwordFieldType,state:!(r.length>0)&&null,name:"reset-password-new",placeholder:"············"},model:{value:t.reset.password,callback:function(e){t.$set(t.reset,"password",e)},expression:"reset.password"}}),t._v(" "),n("b-input-group-append",{attrs:{"is-text":""}},[n("MainEyeIcon",{attrs:{visibility:t.passwordFieldType},nativeOn:{click:function(e){return t.togglePasswordVisibility.apply(null,arguments)}}})],1)],1),t._v(" "),n("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),t._v(" "),n("b-form-group",{attrs:{"label-for":"reset-password-confirm",label:"Confirm Password"}},[n("validation-provider",{attrs:{name:"Confirm Password",rules:"required|confirmed:Password"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("b-input-group",{staticClass:"input-group-merge",class:r.length>0?"is-invalid":null},[n("b-form-input",{staticClass:"form-control-merge",attrs:{id:"reset-password-confirm",type:t.passwordFieldType,state:!(r.length>0)&&null,name:"reset-password-confirm",placeholder:"············"},model:{value:t.reset.passwordConfirm,callback:function(e){t.$set(t.reset,"passwordConfirm",e)},expression:"reset.passwordConfirm"}}),t._v(" "),n("b-input-group-append",{attrs:{"is-text":""}},[n("MainEyeIcon",{attrs:{visibility:t.passwordFieldType},nativeOn:{click:function(e){return t.togglePasswordVisibility.apply(null,arguments)}}})],1)],1),t._v(" "),n("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),t._v(" "),n("b-button",{attrs:{block:"",type:"submit",variant:"primary",disabled:t.btnDisabled},on:{click:function(e){return e.preventDefault(),t.resetPass.apply(null,arguments)}}},[t._v("\n              Set New Password\n            ")])],1)],1),t._v(" "),n("p",{staticClass:"text-center mt-2"},[n("b-link",{attrs:{to:"/login"}},[n("chevron-left-icon",{staticClass:"custom-class",attrs:{size:"1.5x"}}),t._v("\n\n            Back to login\n          ")],1)],1)],1)],1)],1)],1)}),[],!1,null,"4139f6b8",null);e.default=component.exports;installComponents(component,{MainLogo:r(314).default,MainTitle:r(315).default,MainEyeIcon:r(499).default})}}]);