(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{538:function(t,e,n){t.exports=n.p+"img/forgot-password-v2-dark.53b9776.svg"},565:function(t,e,n){"use strict";n.r(e);var o={name:"forgot-password",layout:"auth",data:function(){return{btnDisabled:!1,email:""}},components:{ChevronLeftIcon:n(61).e},methods:{reset:function(){var t=this;this.$refs.form.validate().then((function(e){e&&(t.btnDisabled=!0,t.$axios.$post("/users/forgotPassword",{email:t.email}).then((function(e){t.$toast.success(e.message)})))}))}}},l=n(50),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"auth-wrapper auth-v2"},[o("b-row",{staticClass:"auth-inner m-0"},[o("b-link",{staticClass:"brand-logo"},[o("MainLogo"),t._v(" "),o("MainTitle")],1),t._v(" "),o("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[o("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[o("b-img",{attrs:{fluid:"",src:n(538),alt:"Forgot password V2"}})],1)]),t._v(" "),o("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[o("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[o("b-card-title",{staticClass:"font-weight-bold mb-1",attrs:{"title-tag":"h2"}},[t._v("\n          Forgot Password? 🔒\n        ")]),t._v(" "),o("b-card-text",{staticClass:"mb-2"},[t._v("\n          Enter your email and we'll send you instructions to reset your\n          password\n        ")]),t._v(" "),o("validation-observer",{ref:"form"},[o("b-form",{staticClass:"auth-forgot-password-form mt-2",on:{submit:function(e){return e.preventDefault(),t.validationForm.apply(null,arguments)}}},[o("b-form-group",{attrs:{label:"Email","label-for":"forgot-password-email"}},[o("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[o("b-form-input",{attrs:{id:"forgot-password-email",state:!(n.length>0)&&null,name:"forgot-password-email",placeholder:"john@example.com"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),o("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}])})],1),t._v(" "),o("b-button",{attrs:{type:"submit",variant:"primary",block:"",disabled:t.btnDisabled},on:{click:function(e){return e.preventDefault(),t.reset.apply(null,arguments)}}},[t._v("\n              Send reset link\n            ")])],1)],1),t._v(" "),o("p",{staticClass:"text-center mt-2"},[o("b-link",{attrs:{to:"/login"}},[o("chevron-left-icon",{staticClass:"custom-class",attrs:{size:"1.5x"}}),t._v("\n            Back to login\n          ")],1)],1)],1)],1)],1)],1)}),[],!1,null,"105f8fe5",null);e.default=component.exports;installComponents(component,{MainLogo:n(314).default,MainTitle:n(315).default})}}]);