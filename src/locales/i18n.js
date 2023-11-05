import Vue from "vue";
import VueI18n from "vue-i18n";
import enLocale from "./en.json";
import viLocale from "./vn.json";

Vue.use(VueI18n);

const messages = {
  en: enLocale,
  vi: viLocale,
};

const i18n = new VueI18n({
  locale: "en", // Ngôn ngữ mặc định
  messages,
});

export default i18n;
