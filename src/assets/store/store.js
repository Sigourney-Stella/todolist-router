import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

// window.addEventListener("beforeunload", () => {
//   localStorage.setItem("store", JSON.stringify(store.state));
// });
// const savedState = localStorage.getItem("store");
// const store = new Vuex.Store({
//   state: savedState
//     ? JSON.parse(savedState)
//     : {
//         userName: "",
//         tasks: [],
//         islogin: true,
//       },

const store = new Vuex.Store({
  state: {
    tasks: [{ id: 1, title: "Task 1", completed: false }],
    isLogin: false,
  },

  getters: {
    getTaskItem(state) {
      return state.tasks;
    },
    getIsLogin(state) {
      return state.isLogin;
    },
  },
  mutations: {
    SET_TASK(state, newTask) {
      state.tasks.push(newTask);
      console.log(state.tasks);
    },
    REMOVE_TASK(state, removedTask) {
      state.tasks.splice(removedTask, 1);
    },
    setLoginStatus(state, status) {
      state.isLogin = status;
    },
    setUserName(state, userName) {
      state.userName = userName;
    },
    // SET_CURRENT_ID(state, currentID){
    //     state.currentID = currentID;
    // }
  },
  actions: {
    setTask(context, newTask) {
      context.commit("SET_TASK", newTask);
    },
    removeTask(context, removedTask) {
      context.commit("REMOVE_TASK", removedTask);
    },
    login({ commit }) {
      commit("setLoginStatus", true);
    },
    logout({ commit }) {
      commit("setLoginStatus", false);
    },
  },
});
export default store;
