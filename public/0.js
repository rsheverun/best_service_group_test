webpackJsonp([0],{51:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Login",data:function(){return{form:{email:"",password:"",username:!1}}},methods:{login:function(){this.form.email.includes("@")||(this.form.username=this.form.email),this.$store.dispatch("login",this.form)}}}},52:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"mt-auto"},[t._m(0),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address or Username"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-lg btn-primary btn-block",on:{click:function(e){return t.login()}}},[t._v("Sign in")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center mb-4"},[e("h1",{staticClass:"h3 mb-3 font-weight-normal"},[this._v("Login")])])}]}},55:function(t,e,s){var o=s(4)(s(51),s(52),!1,null,null,null);t.exports=o.exports}});