import Vue from "vue";
import App from "./App.vue";
import store from "./assets/store/store";
import router from "./Router/router";
import i18n from "vue-i18n";
import BootstrapVue from "bootstrap-vue";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/js/bootstrap.js";

// import enLocale from "./locales/en.json";
// import viLocale from "./locales/vi.json";
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

// Vue.use(VueI18n);

// const messages = {
//   en: enLocale,
//   vi: viLocale,
// };

// const i18n = new VueI18n({
//   locale: "en", // Ngôn ngữ mặc định
//   messages,
// });

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
