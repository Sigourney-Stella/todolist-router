/* eslint-disable no-undef */
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login";
import Home from "../components/Home";
import store from "../assets/store/store";
import Postcard from "../components/Postcard";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/postcard",
    name: "Postcard",
    component: Postcard,
  },
  {
    path: "/todolist",
    name: "todolist",
    component: Home,
    // Sử dụng middleware authMiddleware cho route này
    beforeEnter: (to, from, next) => {
      const islogin = store.getters.getIsLogin;
      if (islogin) {
        next();
      } else {
        next("/");
      }
    },
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
