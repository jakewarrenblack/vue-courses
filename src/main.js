import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMasonry from "vue-masonry-css";

import { BootstrapVue } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vuetify from "./plugins/vuetify";
Vue.use(BootstrapVue);
Vue.use(VueMasonry);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
