(window.webpackJsonp=window.webpackJsonp||[]).push([[51,5,25,27],{466:function(t,e,r){var content=r(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("f7e4e0e8",content,!0,{sourceMap:!1})},467:function(t,e,r){"use strict";var o=r(160),n=r(102),l=r(103),c=r(101),d=r(161),f=(r(476),r(477),r(478)),m=r.n(f),v={components:{BCard:o.a,BCardTitle:n.a,BCardSubTitle:l.a,BCardBody:c.a,BCollapse:d.a,Prism:m.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},h=(r(469),r(50)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[r("div",{staticClass:"card-header"},[r("div",[r("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?r("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),r("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(e){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[r("b-card-body",[r("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:r("b-card-body",[t._t("default"),t._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[r("div",{staticClass:"p-1"}),t._v(" "),r("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"0390b462",null);e.a=component.exports},468:function(t,e,r){var content=r(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("7ec48f70",content,!0,{sourceMap:!1})},469:function(t,e,r){"use strict";r(466)},470:function(t,e,r){var o=r(79)(!1);o.push([t.i,".card-code pre[class*=language-][data-v-0390b462]{margin:0;max-height:350px;border-radius:.5rem}.card-code[data-v-0390b462] ::-webkit-scrollbar{width:8px;height:8px;background:#2d2d2d;border-radius:100%}.dark-layout .card-code[data-v-0390b462] ::-webkit-scrollbar{background-color:#161d31!important}.card-code[data-v-0390b462] ::-webkit-scrollbar-track{background:transparent}.card-code[data-v-0390b462] ::-webkit-scrollbar-thumb{border-radius:.5rem;background:hsla(0,0%,94.5%,.4)}.card-code[data-v-0390b462] ::-webkit-scrollbar-corner{display:none}.code-toggler[data-v-0390b462]{border-bottom:1px solid transparent}.code-toggler[aria-expanded=false][data-v-0390b462]{border-bottom-color:#7367f0}.card .card-header .heading-elements[data-v-0390b462]{position:static;background:red}",""]),t.exports=o},471:function(t,e,r){"use strict";r(468)},472:function(t,e,r){var o=r(79)(!1);o.push([t.i,"[dir=ltr] .content-header-title[data-v-4c3b7205]{border-right:1px solid #d6dce1}[dir=rtl] .content-header-title[data-v-4c3b7205]{border-left:1px solid #d6dce1}[dir=ltr] .content-header-title[data-v-4c3b7205]{border-left:none!important}[dir=rtl] .content-header-title[data-v-4c3b7205]{border-right:none!important}.breadcrumb-item-c[data-v-4c3b7205]{margin-top:3px}",""]),t.exports=o},473:function(t,e,r){"use strict";r.r(e);var o=r(61),n={props:{title:String,breadcrumbs:Array},components:{HomeIcon:o.o}},l=(r(471),r(50)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"content-header"},[r("b-col",{staticClass:"content-header-left mb-2"},[r("b-row",{staticClass:"breadcrumbs-top"},[r("b-col",{attrs:{cols:"12 d-flex "}},[r("h2",{staticClass:"content-header-title pe-4 mb-0 text-uppercase"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),r("div",{staticClass:"breadcrumb-wrapper"},[r("b-breadcrumb",[r("b-breadcrumb-item",{attrs:{to:t.localePath("/panel")}},[r("home-icon",{staticClass:"custom-class",attrs:{size:"1.5x"}})],1),t._v(" "),t._l(t.breadcrumbs,(function(e){return r("b-breadcrumb-item",{key:e.text,staticClass:"text-capitalize breadcrumb-item-c",attrs:{active:e.active,to:e.to}},[t._v("\n              "+t._s(e.text)+"\n            ")])}))],2)],1)])],1)],1)],1)}),[],!1,null,"4c3b7205",null);e.default=component.exports},474:function(t,e,r){"use strict";r.r(e);var o=r(61),n={props:{title:String,breadcrumbs:Array},components:{HomeIcon:o.o}},l=r(50),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-wrapper"},[r("CardsBreadcrumb",{attrs:{title:t.title,breadcrumbs:t.breadcrumbs}}),t._v(" "),r("div",{staticClass:"content-body"},[r("b-row",[t._t("content")],2)],1)],1)}),[],!1,null,"42c26f6f",null);e.default=component.exports;installComponents(component,{CardsBreadcrumb:r(473).default})},480:function(t,e,r){var content=r(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("d92819c2",content,!0,{sourceMap:!1})},486:function(t,e,r){"use strict";r(480)},487:function(t,e,r){var o=r(79)(!1);o.push([t.i,".filterInput[data-v-384632f9]{margin-top:5px}",""]),t.exports=o},492:function(t,e,r){"use strict";r.r(e);r(37),r(15),r(12),r(32),r(42);var o=r(467),n=r(61),l={props:{headers:Array,module:String,title:String,notId:{type:Boolean,default:!0},create:{type:Boolean,default:!0},update:{type:Boolean,default:!0},sort:{type:Boolean,default:!1},search:{type:Boolean,default:!0},pageLength:{type:Boolean,default:!1},pagination:{type:Boolean,default:!0}},components:{BCardCode:o.a,ChevronLeftIcon:n.e,ChevronRightIcon:n.f,MoreVerticalIcon:n.v,EditIcon:n.j,TrashIcon:n.B},data:function(){return{perPage:10,pageOptions:[3,5,10],totalRows:1,currentPage:1,sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,infoModal:{id:"info-modal",title:"",content:""},status:[{1:"Current",2:"Professional",3:"Rejected",4:"Resigned",5:"Applied"},{1:"light-primary",2:"light-success",3:"light-danger",4:"light-warning",5:"light-info"}]}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))},getItems:function(){return this.$store.getters["".concat(this.module,"/getAllData")]},totalItems:function(){return this.$store.getters["".concat(this.module,"/getTotalItems")]}},methods:{showMsgBoxTwo:function(data){var t=this;this.$bvModal.msgBoxConfirm("".concat(this.$t("modals.delete_msg"),"( ").concat(data.item.name," )"),{title:this.$t("modals.delete_confirm"),size:"sm",okVariant:"primary",okTitle:this.$t("buttons.yes"),cancelTitle:this.$t("buttons.no"),cancelVariant:"outline-secondary",hideHeaderClose:!1,centered:!1}).then((function(e){e&&t.$store.dispatch("".concat(t.module,"/deleteFromDB"),data.item._id).then((function(e){t.$nuxt.refresh(),t.$toast.success("Deleted Successfully")}))})).then((function(){}))},info:function(t,e,button){this.infoModal.title="Row index: ".concat(e),this.infoModal.content=JSON.stringify(t,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,button)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},searchData:function(){this.$store.dispatch("".concat(this.module,"/getDataByQuery"),{page:this.currentPage,search:this.filter})},change:function(){this.filter||this.searchData()}},watch:{currentPage:function(t,e){this.$store.dispatch("".concat(this.module,"/getDataByQuery"),{page:t,search:this.filter})}}},c=(r(486),r(50)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-code",{attrs:{"no-body":""}},[t.getItems.length?r("div",[r("b-card-body",[r("div",{staticClass:"d-flex justify-content-end flex-wrap"},[t.sort?r("b-form-group",{staticClass:"mr-1 mb-md-0",attrs:{label:"Sort","label-size":"sm","label-align-sm":"left","label-cols-sm":"2","label-for":"sortBySelect"}},[r("b-input-group",{attrs:{size:"sm"}},[r("b-form-select",{attrs:{id:"sortBySelect",options:t.sortOptions},scopedSlots:t._u([{key:"first",fn:function(){return[r("option",{attrs:{value:""}},[t._v("none")])]},proxy:!0}],null,!1,849268830),model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}}),t._v(" "),r("b-form-select",{attrs:{size:"sm",disabled:!t.sortBy},model:{value:t.sortDesc,callback:function(e){t.sortDesc=e},expression:"sortDesc"}},[r("option",{domProps:{value:!1}},[t._v("Asc")]),t._v(" "),r("option",{domProps:{value:!0}},[t._v("Desc")])])],1)],1):t._e(),t._v(" "),t.search?r("b-form-group",{staticClass:"mb-0"},[r("b-input-group",{attrs:{size:"md"}},[r("b-form-input",{staticClass:"rounded-end",attrs:{id:"filterInput",type:"search",placeholder:t.$t("inputs.searchPlaceholder")},on:{input:t.change},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),t._v(" "),r("b-input-group-append",[r("b-button",{staticClass:"search-btn-table rounded-end",attrs:{disabled:!t.filter},on:{click:function(e){return t.searchData()}}},[t._v("\n                "+t._s(t.$t("buttons.search"))+"\n              ")])],1)],1)],1):t._e(),t._v(" "),t.create?r("b-button",{staticClass:"ms-4",attrs:{to:t.$route.path+"/create",variant:"primary"}},[r("span",{staticClass:"text-nowrap text-capitalize"},[t._v(t._s(t.$t("buttons.add"))+" "+t._s(t.title))])]):t._e()],1)]),t._v(" "),r("b-table",{staticClass:"position-relative",attrs:{striped:"",hover:"",responsive:"","current-page":t.currentPage,items:t.getItems,fields:t.headers,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"cell(avatar)",fn:function(data){return[r("b-avatar",{staticClass:"avatar-table",attrs:{src:data.value}})]}},{key:"cell(cover)",fn:function(data){return[r("b-avatar",{staticClass:"avatar-table",attrs:{src:data.value}})]}},{key:"cell(status)",fn:function(data){return[r("b-badge",{attrs:{variant:t.status[1][data.value]}},[t._v("\n          "+t._s(t.status[0][data.value])+"\n        ")])]}},{key:"cell(actions)",fn:function(data){return[t.update?r("nuxt-link",{attrs:{to:t.$route.path+"/"+data.item.slug+"-"+data.item._id}},[r("edit-icon",{staticClass:"custom-class text-primary",attrs:{size:"1.5x"}})],1):t._e(),t._v(" "),r("trash-icon",{staticClass:"custom-clas mr-50 text-danger",attrs:{size:"1.5x"},on:{click:function(e){return t.showMsgBoxTwo(data)}}})]}}],null,!1,380912045)}),t._v(" "),r("b-card-body",{staticClass:"d-flex justify-content-end flex-wrap pt-0"},[t.pageLength?r("b-form-group",{staticClass:"text-nowrap mb-md-0 mr-1",attrs:{label:"Per Page","label-cols":"6","label-align":"left","label-size":"sm","label-for":"sortBySelect"}},[r("b-form-select",{attrs:{id:"perPageSelect",size:"sm",inline:"",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1):t._e(),t._v(" "),t.pagination?r("div",[r("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalItems,"per-page":t.perPage,align:"center",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1):t._e()],1)],1):r("div",{staticClass:"card align-items-center justify-content-center",staticStyle:{height:"calc(100vh - 260px)"}},[r("lottie-player",{staticClass:"lottie-container",staticStyle:{width:"500px",height:"500px"},attrs:{src:"https://assets9.lottiefiles.com/packages/lf20_gvpcpv48.json",background:"transparent",speed:"1",loop:"",autoplay:""}}),t._v(" "),t.create?r("b-button",{staticClass:"ms-4",attrs:{to:t.$route.path+"/create",variant:"primary"}},[r("span",{staticClass:"text-nowrap text-capitalize"},[t._v(t._s(t.$t("buttons.add"))+" "+t._s(t.title))])]):t._e()],1)])}),[],!1,null,"384632f9",null);e.default=component.exports},572:function(t,e,r){"use strict";r.r(e);var o=r(31),n=(r(32),r(66),{name:"players",layout:"admin",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,o=t.store,t.$toast,e.next=3,r.$get("/players").then((function(t){o.dispatch("panel/players/getAllDataFromApi",t)}));case 3:return e.abrupt("return",{});case 4:case"end":return e.stop()}}),e)})))()},data:function(){var t=this;return{module:"panel/players",breadcrumbs:[{text:this.$t("sidebar.players"),active:!0,to:this.localePath("/panel/players")}],headers:[{key:"avatar",label:"Photo",sortable:!1,formatter:function(e,r,o){return"".concat(t.$config.NODE_URL_images,"/players/").concat(o.image)}},{key:"name",label:"Name",sortable:!0},{key:"startDate",label:"Start Date",sortable:!0,formatter:function(e){return t.$moment(e).format("YYYY-MM-DD")}},{key:"birth",label:"Birth Day",sortable:!0,formatter:function(e){return t.$moment(e).format("YYYY-MM-DD")}},{key:"nationalId",label:"National ID",sortable:!0},{key:"lastBelt.belt.name",label:"Last Belt",sortable:!0},{key:"activity.name",label:"activity",sortable:!0},"actions"]}}}),l=r(50),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SettingsLayout",{attrs:{title:t.$t("sidebar.players"),breadcrumbs:t.breadcrumbs},scopedSlots:t._u([{key:"content",fn:function(){return[r("b-col",{attrs:{cols:"12"}},[r("TablesTa",{attrs:{title:"player",headers:t.headers,module:t.module}})],1)]},proxy:!0}])})}),[],!1,null,"2fa677fe",null);e.default=component.exports;installComponents(component,{TablesTa:r(492).default,SettingsLayout:r(474).default})}}]);