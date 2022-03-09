(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c623cfac"],{"0589":function(t,e,s){"use strict";s("63fd")},"63fd":function(t,e,s){},"88f0":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",[s("Dialog",{attrs:{lecturer:t.lecturer}}),s("v-row",{staticClass:"w-100"},[s("v-col",{staticClass:"m-auto mt-10",attrs:{lg:"5",sm:"12"}},[s("v-card",{staticClass:"mx-auto",attrs:{elevation:"7"}},[s("v-card-text",[s("v-chip",[t._v("ID: "+t._s(t.lecturer.id))]),s("br"),s("br"),s("p",{staticClass:"text-h2 text--primary"},[t._v(t._s(t.lecturer.name))]),s("v-divider"),s("br"),s("v-list-item",{staticClass:"pl-0",attrs:{"two-line":""}},[s("v-list-item-content",[s("v-list-item-title",[t._v("Email Level")]),s("v-list-item-subtitle",[t._v(t._s(t.lecturer.email))])],1)],1),s("v-list-item",{staticClass:"pl-0",attrs:{"two-line":""}},[s("v-list-item-content",[s("v-list-item-title",[t._v("Address")]),s("v-list-item-subtitle",[t._v(t._s(t.lecturer.address))])],1)],1),s("v-list-item",{staticClass:"pl-0",attrs:{"two-line":""}},[s("v-list-item-content",[s("v-list-item-title",[t._v("Phone")]),s("v-list-item-subtitle",[t._v(t._s(t.lecturer.phone))])],1)],1)],1),s("v-card-actions",{staticClass:"ml-2"},[s("router-link",{attrs:{to:{name:"lecturers_edit",params:{id:t.lecturer.id}}}},[s("v-btn",{attrs:{color:"secondary"}},[t._v("Edit")])],1),s("v-btn",{staticClass:"ml-4",attrs:{color:"error"},on:{click:function(e){return t.showDialog()}}},[t._v("Delete")])],1),s("br"),t.lecturer.enrolments.length>0?s("v-card-text",[s("v-divider"),s("p",{staticClass:"text-h4 text--primary"},[t._v("Enrolments")])],1):t._e(),s("v-row",t._l(t.lecturer.enrolments,(function(e){return s("v-col",{key:e.id,attrs:{sm:"12",lg:"6"}},[s("v-card",{staticClass:"m-3 pb-2",attrs:{elevation:"7"}},[s("div",{staticClass:"d-flex flex-column justify-space-between"},[s("v-card-title",{staticClass:"text-h5 pl-6",attrs:{"fill-width":""}},[s("v-chip",{staticClass:"mr-4",class:""+e.status},[t._v(t._s(e.status))])],1),s("v-card-title",{staticClass:"text-h5 pl-6",attrs:{"fill-width":""}},[t._v(" "+t._s(e.course.title)+" ")]),s("v-expansion-panels",{attrs:{flat:"",accordion:""}},[s("v-expansion-panel",[s("v-expansion-panel-header",{staticClass:"pl-6"},[t._v("Details")]),s("v-expansion-panel-content",[s("v-list-item",{staticClass:"pl-5",attrs:{"two-line":""}},[s("v-list-item-content",[s("v-list-item-title",[t._v("Course code")]),s("v-list-item-subtitle",[t._v(t._s(e.course.code))])],1)],1),s("v-list-item",{staticClass:"pl-5",attrs:{"two-line":""}},[s("v-list-item-content",[s("v-list-item-title",[t._v("CAO points")]),s("v-list-item-subtitle",[t._v(t._s(e.course.points))])],1)],1)],1)],1)],1),s("v-card-actions",[s("router-link",{attrs:{to:{name:"enrolments_show",params:{id:e.id}}}},[s("v-btn",{staticClass:"ml-2 mt-5",attrs:{outlined:"",rounded:"",small:""}},[t._v(" View ")])],1)],1)],1)])],1)})),1)],1)],1)],1),s("v-row")],1)},i=[],l=s("5530"),r=s("bc3a"),n=s.n(r),o=s("3f7a"),c=s("2f62"),v={name:"LecturersShow",components:{Dialog:o["a"]},data:function(){return{lecturer:{}}},computed:Object(l["a"])({},Object(c["c"])(["loggedIn"])),mounted:function(){this.getData()},created:function(){document.title="View Lecturer"},methods:{showDialog:function(){this.$store.dispatch("toggleDialog",{text:0!=this.lecturer.enrolments.length?"All enrolments for this lecturer will also be deleted":"This lecturer will be permanently deleted",visible:!0})},getData:function(){var t=this,e=localStorage.getItem("token");e&&this.loggedIn||(this.$router.push({name:"home"}),this.$store.dispatch("toggleSnackbar",{text:"Login to view lecturers",timeout:6e3})),n.a.get("https://college-api-mo.herokuapp.com/api/lecturers/".concat(this.$route.params.id),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){console.log(e),t.lecturer=e.data.data})).catch((function(t){console.log(t)}))}}},u=v,d=(s("0589"),s("2877")),m=s("6544"),p=s.n(m),h=s("8336"),_=s("b0af"),f=s("99d9"),C=s("cc20"),b=s("62ad"),w=s("ce7e"),g=s("cd55"),x=s("49e2"),V=s("c865"),D=s("0393"),k=s("a722"),L=s("da13"),y=s("5d23"),E=s("0fd9"),I=Object(d["a"])(u,a,i,!1,null,"5a8ce118",null);e["default"]=I.exports;p()(I,{VBtn:h["a"],VCard:_["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VChip:C["a"],VCol:b["a"],VDivider:w["a"],VExpansionPanel:g["a"],VExpansionPanelContent:x["a"],VExpansionPanelHeader:V["a"],VExpansionPanels:D["a"],VLayout:k["a"],VListItem:L["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VRow:E["a"]})}}]);
//# sourceMappingURL=chunk-c623cfac.5d4d7b53.js.map