(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c0a2"],{f211:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",[s("Dialog",{attrs:{course:t.course}}),s("v-row",{staticClass:"w-100"},[s("v-col",{staticClass:"m-auto mt-10",attrs:{lg:"5",sm:"12"}},[s("v-card",{staticClass:"mx-auto",attrs:{elevation:"7"}},[s("v-card-text",[s("v-chip",[t._v(t._s(t.course.code))]),s("br"),s("br"),s("p",{staticClass:"text-h2 text--primary"},[t._v(t._s(t.course.title))]),s("v-divider"),s("br"),s("div",{staticClass:"text--primary"},[t._v(" "+t._s(t.course.description)+" ")]),s("br"),s("v-list-item",{staticClass:"pl-0",attrs:{"two-line":""}},[s("v-list-item-content",[s("v-list-item-title",[t._v("Course Level")]),s("v-list-item-subtitle",[t._v(t._s(t.course.level))])],1)],1),s("v-list-item",{staticClass:"pl-0",attrs:{"two-line":""}},[s("v-list-item-content",[s("v-list-item-title",[t._v("CAO Points")]),s("v-list-item-subtitle",[t._v(t._s(t.course.points))])],1)],1)],1),s("v-card-actions",[s("router-link",{attrs:{to:{name:"courses_edit",params:{id:t.course.id}}}},[s("v-btn",{attrs:{color:"secondary"}},[t._v("Edit")])],1),s("v-btn",{staticClass:"ml-4",attrs:{color:"error",dark:""},on:{click:function(e){return t.showDialog()}}},[t._v(" Delete ")])],1),s("br"),t.course.enrolments.length>0?s("v-card-text",[s("v-divider"),s("p",{staticClass:"text-h4 text--primary"},[t._v("Enrolments for this course")])],1):t._e(),s("v-row",t._l(t.course.enrolments,(function(e){return s("v-col",{key:e.id,attrs:{sm:"12",lg:"6"}},[s("v-card",{staticClass:"m-4 pb-2",attrs:{elevation:"7"}},[s("div",{staticClass:"d-flex flex-column justify-space-between"},[s("v-card-title",{staticClass:"text-h5 pl-6"},[t._v(t._s(e.lecturer.name))]),s("v-expansion-panels",{attrs:{flat:"",accordion:""}},[s("v-expansion-panel",[s("v-expansion-panel-header",[t._v("Details")]),s("v-expansion-panel-content",[s("v-list-item",{staticClass:"pl-0",attrs:{"two-line":""}},[s("v-list-item-content",[s("v-list-item-title",[t._v("Status")]),s("v-list-item-subtitle",[t._v(t._s(e.status))])],1)],1),s("v-list-item",{staticClass:"pl-0",attrs:{"two-line":""}},[s("v-list-item-content",[s("v-list-item-title",[t._v("Email")]),s("v-list-item-subtitle",[t._v(t._s(e.lecturer.email))])],1)],1),s("v-list-item",{staticClass:"pl-0",attrs:{"two-line":""}},[s("v-list-item-content",[s("v-list-item-title",[t._v("Phone")]),s("v-list-item-subtitle",[t._v(t._s(e.lecturer.phone))])],1)],1)],1)],1)],1),s("v-card-actions",[s("router-link",{attrs:{to:{name:"enrolments_show",params:{id:e.id}}}},[s("v-btn",{staticClass:"ml-2 mt-5",attrs:{outlined:"",rounded:"",small:""}},[t._v(" View ")])],1)],1)],1)])],1)})),1)],1)],1)],1)],1)},i=[],l=s("bc3a"),o=s.n(l),n=s("3f7a"),r={name:"coursesShow",data:function(){return{course:{}}},components:{Dialog:n["a"]},mounted:function(){this.getData()},methods:{showDialog:function(){this.$store.dispatch("toggleDialog",{text:0!=this.course.enrolments.length?"All enrolments for this course will also be deleted":"This course will be permanently deleted",visible:!0})},getData:function(){var t=this,e=localStorage.getItem("token");o.a.get("https://college-api-mo.herokuapp.com/api/courses/".concat(this.$route.params.id),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){console.log(e),t.course=e.data.data})).catch((function(t){console.log(t),localStorage.removeItem("token")}))}}},c=r,v=s("2877"),u=s("6544"),m=s.n(u),d=s("8336"),p=s("b0af"),_=s("99d9"),h=s("cc20"),b=s("62ad"),C=s("ce7e"),w=s("cd55"),f=s("49e2"),x=s("c865"),g=s("0393"),V=s("a722"),k=s("da13"),D=s("5d23"),y=s("0fd9"),E=Object(v["a"])(c,a,i,!1,null,null,null);e["default"]=E.exports;m()(E,{VBtn:d["a"],VCard:p["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VChip:h["a"],VCol:b["a"],VDivider:C["a"],VExpansionPanel:w["a"],VExpansionPanelContent:f["a"],VExpansionPanelHeader:x["a"],VExpansionPanels:g["a"],VLayout:V["a"],VListItem:k["a"],VListItemContent:D["a"],VListItemSubtitle:D["b"],VListItemTitle:D["c"],VRow:y["a"]})}}]);
//# sourceMappingURL=chunk-2d22c0a2.0e5d4ea6.js.map