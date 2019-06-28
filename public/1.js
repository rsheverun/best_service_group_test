webpackJsonp([1],{50:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Dashboard",data:function(){return{data:{selectedCategory:"",page:1,perPage:10},prevDisabled:!0,nextDisabled:!1}},computed:{categories:function(){return this.$store.state.category.list},count:function(){return this.$store.state.actor.count},actors:function(){return this.$store.state.actor.list}},watch:{data:{handler:function(t){1==t.page?this.prevDisabled=!0:(this.prevDisabled=!1,this.nextDisabled=!0),t.page*this.data.perPage+this.data.perPage>this.count&&""!=this.count?this.nextDisabled=!0:this.nextDisabled=!1},deep:!0}},mounted:function(){this.getCategories()},methods:{getCategories:function(){this.$store.dispatch("getCategories")},getActorsFromCategory:function(){""!=this.data.selectedCategory&&this.$store.dispatch("getActorsFromCategory",this.data)},changePage:function(t){switch(t){case"prev":this.data.page--;break;case"next":++this.data.page}this.getActorsFromCategory()},logout:function(){this.$store.dispatch("logout")}}}},51:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container mt-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-right mb-5"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.logout()}}},[t._v("Log Out")])])]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.selectedCategory,expression:"data.selectedCategory"}],staticClass:"form-control mb-4",attrs:{name:"category"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.data,"selectedCategory",e.target.multiple?a:a[0])},t.getActorsFromCategory]}},[a("option",{attrs:{value:""}},[t._v("*Please select a film category")]),t._v(" "),t._l(t.categories,function(e){return a("option",{domProps:{value:e.category_id}},[t._v(t._s(e.name))])})],2),t._v(" "),t.data.selectedCategory?a("div",[a("table",{staticClass:"table"},[t._m(0),t._v(" "),a("tbody",t._l(t.actors,function(e){return a("tr",[a("td",[t._v(t._s(e.first_name))]),t._v(" "),a("td",[t._v(t._s(e.last_name))]),t._v(" "),a("td",[t._v(t._s(e.cat_film_app))])])}),0)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:t.prevDisabled}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return t.changePage("prev")}}},[t._v("Previous")])]),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:t.nextDisabled}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return t.changePage("next")}}},[t._v("Next")])])])])])])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("First")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Last")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Count")])])])}]}},53:function(t,e,a){var s=a(12)(a(50),a(51),!1,null,null,null);t.exports=s.exports}});