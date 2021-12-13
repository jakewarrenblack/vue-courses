import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import VueMasonry from "vue-masonry-css";
import VuePaginate from "vue-paginate";

import { BootstrapVue } from "bootstrap-vue";

import Vuelidate from "vuelidate";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vuetify from "./plugins/vuetify";
Vue.use(BootstrapVue);
// Vue.use(VueMasonry);
Vue.use(VuePaginate);

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  validations: {},
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
