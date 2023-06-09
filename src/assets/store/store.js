import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        tasks: [],
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
        SET_TASK(state, newTask){
            state.tasks.push(newTask);
            console.log(state.tasks);
        },
        REMOVE_TASK(state,removedTask){
            state.tasks.splice(removedTask,1);
        },
        setLoginStatus(state, status) {
            state.isLogin = status;
          },
    },
    actions: {
        setTask(context, newTask){
            context.commit('SET_TASK', newTask);
        },
        removeTask(context, removedTask) {
            context.commit('REMOVE_TASK', removedTask);
        },
        login({ commit }) {
            commit("setLoginStatus", true);
        },
        logout({ commit }) {
            commit("setLoginStatus", false);
        },
    }
  
});
export default store;