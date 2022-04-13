import Vue from "vue";
import App from "./App.vue";
import VeeValidate from "vee-validate";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VeeValidate);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
