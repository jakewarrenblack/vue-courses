(function(e){function t(t){for(var n,a,i=t[0],l=t[1],c=t[2],u=0,m=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-1783169c":"1353e8b5","chunk-19bba706":"2d273367","chunk-217c167b":"54197277","chunk-6145f3b9":"85de6c2f","chunk-67dd48ab":"01c4ff5b","chunk-2175a811":"9830be81","chunk-45e4bbf5":"c8ccff9f","chunk-a4f30f38":"ef8221d6","chunk-f9a528ee":"c4e16a8b","chunk-6840d6fa":"643e10e7","chunk-d9f4790c":"7b84172b","chunk-2d0d39ee":"24ed50a4","chunk-2d22c0a2":"0e5d4ea6","chunk-3fafd81f":"2b84b72b","chunk-a386bd78":"2fb442f8","chunk-c50321a4":"7a5f2464"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={"chunk-1783169c":1,"chunk-19bba706":1,"chunk-217c167b":1,"chunk-6145f3b9":1,"chunk-67dd48ab":1,"chunk-2175a811":1,"chunk-45e4bbf5":1,"chunk-a4f30f38":1,"chunk-f9a528ee":1,"chunk-6840d6fa":1,"chunk-d9f4790c":1,"chunk-3fafd81f":1,"chunk-a386bd78":1,"chunk-c50321a4":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-1783169c":"ee55c622","chunk-19bba706":"febc51c3","chunk-217c167b":"9ed3c44a","chunk-6145f3b9":"650649f4","chunk-67dd48ab":"4558d631","chunk-2175a811":"3f2bbc39","chunk-45e4bbf5":"c556d93a","chunk-a4f30f38":"c22619b0","chunk-f9a528ee":"52d64b9b","chunk-6840d6fa":"00c93aeb","chunk-d9f4790c":"fd56a9a9","chunk-2d0d39ee":"31d6cfe0","chunk-2d22c0a2":"31d6cfe0","chunk-3fafd81f":"83e0dd93","chunk-a386bd78":"c13a12e3","chunk-c50321a4":"c031de5a"}[e]+".css",o=l.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){c=m[i],u=c.getAttribute("data-href");if(u===n||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],d.parentNode.removeChild(d),r(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var m=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",m.name="ChunkLoadError",m.type=n,m.request=a,r[1](m)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-courses/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var d=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{style:{background:e.$vuetify.theme.themes[e.theme].background},attrs:{id:"inspire"}},[r("v-navigation-drawer",{staticClass:"primary navigation-drawer",attrs:{app:"",temporary:"",clipped:"","disable-resize-watcher":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{staticClass:"d-flex flex-column fill-height"},[r("div",[r("v-list-item",{staticClass:"d-flex flex-column justify-center text-center mt-2"},[r("h3",{staticClass:"lessEmphasis--text"},[e._v("College Dashboard")])]),e._l(e.links,(function(t){return r("v-list-item",{key:t,staticClass:"mb-5 secondary m-3 rounded",attrs:{router:"",to:{name:""+t.route}}},[r("v-list-tile-action",[r("v-icon",{staticClass:"lessEmphasis--text",attrs:{left:""}},[e._v(e._s(t.icon))])],1),r("v-list-tile-action",[r("v-list-tile-title",{staticClass:"lessEmphasis--text"},[e._v(" "+e._s(t.text)+" ")])],1)],1)}))],2),e.$store.state.loggedIn?r("div",{staticClass:"mt-auto"},[r("v-list-item",{staticClass:"mb-5 secondary m-3 rounded",on:{click:function(t){return e.logOut()}}},[r("v-list-tile-action",[r("v-icon",{staticClass:"lessEmphasis--text",attrs:{left:""}},[e._v("mdi-exit-to-app")])],1),r("v-list-tile-action",[r("v-list-tile-title",{staticClass:"lessEmphasis--text"},[e._v(" Logout ")])],1)],1)],1):e._e()])],1),r("v-app-bar",{attrs:{app:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),r("v-toolbar-title",[e._v("College management system")]),r("v-spacer"),r("v-row",{staticClass:"w-20 justify-content-end align-items-center"},[e.$store.state.loggedIn?r("v-btn",{staticClass:"v-btn secondary",on:{click:function(t){return e.logOut()}}},[e._v("Log Out")]):e._e(),r("v-switch",{staticClass:"mt-5 mx-5",attrs:{value:"dark",color:"pink","prepend-icon":"mdi-theme-light-dark"},on:{change:function(t){return e.toggleTheme()}}})],1)],1),r("v-main",[r("br"),r("snackbar"),r("router-view",{})],1)],1)},o=[],s=(r("ac1f"),r("5319"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-snackbar",{attrs:{top:"",color:e.snackbar.colour,timeout:e.snackbar.timeout,"multi-line":e.snackbar.multiline},scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[r("v-btn",e._b({attrs:{color:"blue",text:""},on:{click:function(t){return e.toggleSnackbar()}}},"v-btn",n,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbar.visible,callback:function(t){e.$set(e.snackbar,"visible",t)},expression:"snackbar.visible"}},[e._v(" "+e._s(e.snackbar.message)+" ")])}),i=[],l={name:"Snackbar",computed:{snackbar:function(){return this.$store.state.snackbar}},methods:{toggleSnackbar:function(){this.$store.dispatch("toggleSnackbar")}}},c=l,u=r("2877"),m=r("6544"),d=r.n(m),f=r("8336"),h=r("2db4"),g=Object(u["a"])(c,s,i,!1,null,null,null),p=g.exports;d()(g,{VBtn:f["a"],VSnackbar:h["a"]});var b={components:{Snackbar:p},data:function(){return{dark:!1,drawer:null,links:[{icon:"mdi-home",text:"Home",route:"home"},{icon:"mdi-school",text:"Courses",route:"courses_index"},{icon:"mdi-book-open-blank-variant",text:"Enrolments",route:"enrolments_index"},{icon:"mdi-account-multiple",text:"Lecturers",route:"lecturers_index"}]}},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}},methods:{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark},logOut:function(){this.$store.dispatch("logout"),this.$router.replace("/")}}},v=b,k=(r("d58d"),r("7496")),E=r("40dc"),_=r("5bc1"),S=r("132d"),w=r("8860"),y=r("da13"),O=r("f6c4"),$=r("f774"),x=r("0fd9"),I=r("2fa4"),T=r("b73d"),L=r("2a7f"),R=Object(u["a"])(v,a,o,!1,null,"d01082ee",null),j=R.exports;d()(R,{VApp:k["a"],VAppBar:E["a"],VAppBarNavIcon:_["a"],VBtn:f["a"],VIcon:S["a"],VList:w["a"],VListItem:y["a"],VMain:O["a"],VNavigationDrawer:$["a"],VRow:x["a"],VSpacer:I["a"],VSwitch:T["a"],VToolbarTitle:L["a"]});r("d3b7"),r("3ca3"),r("ddb0");var C=r("8c4f"),N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-img",{staticClass:"bgImage",attrs:{"lazy-src":""+(null!=e.storedSmallSrc?e.storedSmallSrc:e.smallSrc),height:"100%","max-height":"100%","max-width":"100%",src:""+(null!=e.storedLargeSrc?e.storedLargeSrc:e.largeSrc)}},[r("v-container",{staticClass:"container",attrs:{"fill-height":""}},[r("v-layout",{staticClass:"m-auto",staticStyle:{height:"40%"},attrs:{"align-center":"","justify-center":""}},[r("v-col",{attrs:{lg:"8"}},[r("v-card",[e.loggedIn?e._e():r("v-row",{staticClass:"d-flex justify-space-between flex-row m-0",attrs:{"fill-width":""}},[r("v-btn",{staticClass:"w-50",attrs:{tile:"",large:"",depressed:""},on:{click:function(t){e.activeForm="login"}}},[e._v("Login")]),r("v-btn",{staticClass:"w-50",attrs:{tile:"",large:"",depressed:""},on:{click:function(t){e.activeForm="register"}}},[e._v("Register")])],1),e.loggedIn?e._e():r("v-divider"),"login"==e.activeForm?r("LoginForm"):e._e(),"register"==e.activeForm?r("RegisterForm"):e._e()],1)],1)],1)],1)],1)},A=[],V=r("5530"),B=r("1da1"),G=(r("c96a"),r("96cf"),r("bc3a")),q=r.n(G),P=r("2f62"),D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-5"},[e.loggedIn?r("h2",{staticClass:"mb-10"},[e._v("Welcome")]):r("h2",{staticClass:"mb-10"},[e._v("Login")]),e.loggedIn?r("p",[e._v("Welcome back, "+e._s(this.getName()))]):r("div",[r("v-text-field",{attrs:{type:"email",label:"Email","error-messages":e.emailErrors},on:{input:function(t){return e.$v.form.email.$touch()},blur:function(t){return e.$v.form.email.$touch()}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),null!=e.loginErrors&&e.loginErrors.email?r("v-alert",{attrs:{type:"error",dismissible:""}},[e._v(e._s(JSON.stringify(e.loginErrors.email)))]):e._e(),r("br"),r("v-text-field",{attrs:{type:"password",label:"Password","error-messages":e.passwordErrors},on:{input:function(t){return e.$v.form.password.$touch()},blur:function(t){return e.$v.form.password.$touch()}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),null!=e.loginErrors&&e.loginErrors.name?r("v-alert",{attrs:{type:"error",dismissible:""}},[e._v(e._s(JSON.stringify(e.loginErrors.name)))]):e._e(),r("br"),null!=e.loginErrors&&e.loginErrors.error?r("v-alert",{attrs:{type:"error",dismissible:""}},[e._v(e._s(JSON.stringify(e.loginErrors.error)))]):e._e(),r("v-btn",{attrs:{color:"secondary"},on:{click:function(t){return e.validateLogin(e.form)}}},[e._v("Submit")])],1)])},F=[],J=r("1dce"),M=r.n(J),H=r("b5ae"),U={name:"LoginForm",mounted:function(){},mixins:[J["validationMixin"]],data:function(){return{form:{email:"",password:""}}},validations:{form:{email:{required:H["required"],email:H["email"]},password:{required:H["required"],minLength:Object(H["minLength"])(6)}}},computed:Object(V["a"])(Object(V["a"])({loginErrors:function(){return this.$store.state.loginErrors}},Object(P["c"])(["loggedIn"])),{},{emailErrors:function(){var e=[];return this.$v.form.email.$dirty?(!this.$v.form.email.required&&e.push("Email is required"),!this.$v.form.email.email&&e.push("Email must be a valid email address"),e):e},passwordErrors:function(){var e=[];return this.$v.form.password.$dirty?(!this.$v.form.password.required&&e.push("Password is required"),!this.$v.form.password.minLength&&e.push("Password must be at least 6 characters"),e):e}}),methods:Object(V["a"])(Object(V["a"])({validateLogin:function(e){var t=this;this.$v.$touch(),this.$v.$invalid||t.login(e)}},Object(P["b"])(["login","register"])),{},{getName:function(){return localStorage.getItem("name")}})},K=U,z=r("0798"),W=r("8654"),X=Object(u["a"])(K,D,F,!1,null,null,null),Z=X.exports;d()(X,{VAlert:z["a"],VBtn:f["a"],VTextField:W["a"]});var Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-5"},[e.loggedIn?r("h2",{staticClass:"mb-10"},[e._v("Welcome")]):r("h2",{staticClass:"mb-10"},[e._v("Register")]),e.loggedIn?r("p",[e._v("Welcome back, "+e._s(this.getName()))]):r("div",[r("v-text-field",{attrs:{type:"text",label:"Name","error-messages":e.nameErrors},on:{input:function(t){return e.$v.form.name.$touch()},blur:function(t){return e.$v.form.name.$touch()}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),null!=e.registerErrors&&e.registerErrors.name?r("v-alert",{attrs:{type:"error",dismissible:""}},[e._v(e._s(JSON.stringify(e.registerErrors.name)))]):e._e(),r("v-text-field",{attrs:{type:"email",label:"Email","error-messages":e.emailErrors},on:{input:function(t){return e.$v.form.email.$touch()},blur:function(t){return e.$v.form.email.$touch()}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),null!=e.registerErrors&&e.registerErrors.email?r("v-alert",{attrs:{type:"error",dismissible:""}},[e._v(e._s(JSON.stringify(e.registerErrors.email)))]):e._e(),r("v-text-field",{attrs:{type:"password",label:"Password","error-messages":e.passwordErrors},on:{input:function(t){return e.$v.form.password.$touch()},blur:function(t){return e.$v.form.password.$touch()}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),null!=e.registerErrors&&e.registerErrors.password?r("v-alert",{attrs:{type:"error",dismissible:""}},[e._v(e._s(JSON.stringify(e.registerErrors.password)))]):e._e(),r("br"),r("v-btn",{attrs:{color:"secondary"},on:{click:function(t){return e.validateRegister(e.form)}}},[e._v("Submit")])],1)])},Y=[],ee=(r("b0c0"),{name:"RegisterForm",mounted:function(){},mixins:[J["validationMixin"]],data:function(){return{form:{name:"",email:"",password:""}}},validations:{form:{name:{required:H["required"],minLength:Object(H["minLength"])(3)},email:{required:H["required"],email:H["email"]},password:{required:H["required"],minLength:Object(H["minLength"])(6)}}},computed:Object(V["a"])(Object(V["a"])({registerErrors:function(){return this.$store.state.registerErrors}},Object(P["c"])(["loggedIn"])),{},{nameErrors:function(){var e=[];return this.$v.form.name.$dirty?(!this.$v.form.name.required&&e.push("Name is required"),!this.$v.form.name.minLength&&e.push("Name must be at least 3 characters"),e):e},emailErrors:function(){var e=[];return this.$v.form.email.$dirty?(!this.$v.form.email.required&&e.push("Email is required"),!this.$v.form.email.email&&e.push("Email must be a valid email address"),e):e},passwordErrors:function(){var e=[];return this.$v.form.password.$dirty?(!this.$v.form.password.required&&e.push("Password is required"),!this.$v.form.password.minLength&&e.push("Password must be at least 6 characters"),e):e}}),methods:Object(V["a"])(Object(V["a"])({validateRegister:function(e){var t=this;this.$v.$touch(),this.$v.$invalid||t.register(e)}},Object(P["b"])(["login","register"])),{},{getName:function(){return localStorage.getItem("name")}})}),te=ee,re=Object(u["a"])(te,Q,Y,!1,null,null,null),ne=re.exports;d()(re,{VAlert:z["a"],VBtn:f["a"],VTextField:W["a"]});var ae={name:"Home",components:{LoginForm:Z,RegisterForm:ne},mounted:function(){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.removeBreakTag(),t.next=3,e.getImage();case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{form:{name:"",email:"",password:""},name:"",largeSrc:"",smallSrc:"",activeForm:"login"}},computed:Object(V["a"])({storedSmallSrc:function(){return localStorage.getItem("smallSrc")},storedLargeSrc:function(){return localStorage.getItem("largeSrc")}},Object(P["c"])(["loggedIn"])),methods:Object(V["a"])(Object(V["a"])({hasOneDayPassed:function(){var e=(new Date).toLocaleDateString();return localStorage.todays_date!=e&&(localStorage.todays_date=e,!0)}},Object(P["b"])(["login","register"])),{},{getName:function(){return localStorage.getItem("name")},removeBreakTag:function(){null!=document.getElementsByTagName("BR"[0])&&void 0!=document.getElementsByTagName("BR"[0])&&document.getElementsByTagName("BR")[0].remove()},getImage:function(){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.hasOneDayPassed()||null==e.storedSmallSrc||null==e.storedLargeSrc){t.next=2;break}return t.abrupt("return",!1);case 2:return r=e,t.next=5,q.a.get("https://api.unsplash.com/photos/random?client_id=9LhVwLjJrdIy5jX3svklsUACp0mByDjsrzbJNTZGAqg&query=nature").then((function(e){r.smallSrc=e.data.urls.small,r.largeSrc=e.data.urls.full,localStorage.setItem("smallSrc",e.data.urls.small),localStorage.setItem("largeSrc",e.data.urls.full)})).catch((function(e){console.log(e);var t="https://api.pexels.com/v1/search?query=nature&per_page=1&orientation=landscape",n="563492ad6f91700001000001660dc6de6e62494da4a3601ccfc6ecc3";q.a.get(t,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){r.smallSrc=e.data.urls.small,r.largeSrc=e.data.urls.large2x,localStorage.setItem("smallSrc",e.data.urls.small),localStorage.setItem("largeSrc",e.data.urls.large2x)})).catch((function(e){return console.log(e)}))}));case 5:case"end":return t.stop()}}),t)})))()}})},oe=ae,se=(r("8f6c"),r("b0af")),ie=r("62ad"),le=r("a523"),ce=r("ce7e"),ue=r("adda"),me=r("a722"),de=Object(u["a"])(oe,N,A,!1,null,"2055534b",null),fe=de.exports;d()(de,{VBtn:f["a"],VCard:se["a"],VCol:ie["a"],VContainer:le["a"],VDivider:ce["a"],VImg:ue["a"],VLayout:me["a"],VRow:x["a"]}),n["default"].use(C["a"]);var he=new C["a"]({mode:"history",base:"/vue-courses/",routes:[{path:"/",name:"home",component:fe},{path:"/courses",name:"courses_index",component:function(){return r.e("chunk-217c167b").then(r.bind(null,"1acb"))}},{path:"/courses/:id",name:"courses_show",component:function(){return Promise.all([r.e("chunk-67dd48ab"),r.e("chunk-d9f4790c"),r.e("chunk-2d22c0a2")]).then(r.bind(null,"f211"))}},{path:"/courses/add",name:"courses_add",component:function(){return r.e("chunk-c50321a4").then(r.bind(null,"14ea"))}},{path:"/courses/edit/:id",name:"courses_edit",component:function(){return r.e("chunk-6145f3b9").then(r.bind(null,"99e7"))}},{path:"/enrolments",name:"enrolments_index",component:function(){return Promise.all([r.e("chunk-67dd48ab"),r.e("chunk-2175a811"),r.e("chunk-6840d6fa")]).then(r.bind(null,"0f95"))}},{path:"/enrolments/:id",name:"enrolments_show",component:function(){return Promise.all([r.e("chunk-67dd48ab"),r.e("chunk-d9f4790c"),r.e("chunk-2d0d39ee")]).then(r.bind(null,"5e19"))}},{path:"/enrolments/add",name:"enrolments_add",component:function(){return Promise.all([r.e("chunk-67dd48ab"),r.e("chunk-2175a811"),r.e("chunk-45e4bbf5"),r.e("chunk-a4f30f38")]).then(r.bind(null,"44aa"))}},{path:"/enrolments/edit/:id",name:"enrolments_edit",component:function(){return Promise.all([r.e("chunk-67dd48ab"),r.e("chunk-2175a811"),r.e("chunk-45e4bbf5"),r.e("chunk-f9a528ee")]).then(r.bind(null,"6f67"))}},{path:"/lecturers",name:"lecturers_index",component:function(){return r.e("chunk-a386bd78").then(r.bind(null,"508c"))}},{path:"/lecturers/:id",name:"lecturers_show",component:function(){return Promise.all([r.e("chunk-67dd48ab"),r.e("chunk-d9f4790c"),r.e("chunk-3fafd81f")]).then(r.bind(null,"88f0"))}},{path:"/lecturers/add",name:"lecturers_add",component:function(){return r.e("chunk-1783169c").then(r.bind(null,"2398"))}},{path:"/lecturers/edit/:id",name:"lecturers_edit",component:function(){return r.e("chunk-19bba706").then(r.bind(null,"70fe"))}}]});n["default"].use(P["a"]);var ge=new P["a"].Store({state:{loggedIn:!1,snackbar:{visible:!1,message:null,timeout:6e3,multiline:!1},dialog:{message:null,visible:!1},registerErrors:null,loginErrors:null},getters:{},mutations:{SET_LOGGED_IN_STATUS:function(e,t){e.loggedIn=t},TOGGLE_SNACKBAR:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t?(console.log("SNACKBAR SET TO VISIBLE"),e.snackbar.message=t.text,e.snackbar.multiline=t.text.length>50,t.colour?e.snackbar.colour=t.colour:e.snackbar.colour="primary",t.timeout&&(e.snackbar.timeout=t.timeout),e.snackbar.visible=!0):(console.log("SNACKBAR HAS BEEN HIDDEN"),console.log("no payload received"),e.snackbar.visible=!1,e.snackbar.multiline=!1,e.snackbar.timeout=6e3,e.snackbar.text=null)},TOGGLE_DIALOG:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t?(e.dialog.message=t.text,e.dialog.visible=!0):(console.log("STATE HAS BEEN SET TO FALSE"),e.dialog.message=null,e.dialog.visible=!1)},SET_REGISTER_ERRORS:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.registerErrors=t||null},SET_LOGIN_ERRORS:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.loginErrors=t||null}},actions:{login:function(e,t){console.log(t),q.a.post("https://college-api-mo.herokuapp.com/api/login",{email:t.email,password:t.password}).then((function(t){console.log(t.data.token),console.log("username: "+t.data.name),e.commit("SET_LOGIN_ERRORS"),e.commit("SET_LOGGED_IN_STATUS",!0),localStorage.setItem("token",t.data.token),localStorage.setItem("name",t.data.name)})).catch((function(t){console.log(t),console.log(t.response.data.message),e.commit("SET_LOGIN_ERRORS",t.response.data)}))},register:function(e,t){console.log(t),q.a.post("https://college-api-mo.herokuapp.com/api/register",{name:t.name,email:t.email,password:t.password}).then((function(r){console.log(r.data.token),console.log("username: "+r.data.name),e.commit("SET_REGISTER_ERRORS"),q.a.post("https://college-api-mo.herokuapp.com/api/login",{email:t.email,password:t.password}).then((function(t){console.log(t.data.token),console.log("username: "+t.data.name),e.commit("SET_LOGGED_IN_STATUS",!0),localStorage.setItem("token",t.data.token),localStorage.setItem("name",t.data.name),e.commit("SET_LOGIN_ERRORS")})).catch((function(t){console.log(t),console.log(t.response),e.commit("SET_LOGIN_ERRORS",t.response.data)}))})).catch((function(t){console.log(t),console.log(t.response.data),e.commit("SET_REGISTER_ERRORS",t.response.data)}))},logout:function(e){localStorage.removeItem("token"),e.commit("SET_LOGGED_IN_STATUS",!1)},toggleSnackbar:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;console.log("store toggle snackbar ran, payload is:"),console.log(t),e.commit("TOGGLE_SNACKBAR",t)},toggleDialog:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.commit("TOGGLE_DIALOG",t)}}}),pe=r("baff"),be=r.n(pe),ve=r("5f5b"),ke=(r("f9e3"),r("2dd8"),r("f309"));n["default"].use(ke["a"]);var Ee=new ke["a"]({iconfont:"md",theme:{themes:{light:{primary:"#535352",secondary:"#60B664",lessEmphasis:"#E1E1E1",background:"#EEEEEE"},dark:{primary:"#111111",secondary:"#4003ab",lessEmphasis:"#E1E1E1",background:"#011627"}},options:{customProperties:!0}}});n["default"].use(ve["a"]),n["default"].use(be.a),n["default"].use(M.a),n["default"].config.productionTip=!1,new n["default"]({router:he,validations:{},store:ge,vuetify:Ee,render:function(e){return e(j)}}).$mount("#app")},8185:function(e,t,r){},"8f6c":function(e,t,r){"use strict";r("91fa")},"91fa":function(e,t,r){},d58d:function(e,t,r){"use strict";r("8185")}});
//# sourceMappingURL=app.28ad62a3.js.map