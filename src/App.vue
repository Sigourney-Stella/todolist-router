<template>
  <div id="app" class="add">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <div>
      <h1>To Do List</h1>
    </div> -->
    <router-link to="/"></router-link>

    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import cardAdd from './components/cardAdd.vue';
import "./assets/style/global.css";

// import CardTask from './components/cardTask.vue';
// import AddLogin from './components/Login.vue';

export default {
  name: "App",
  components: {
    // cardAdd,
    // CardTask,
    // AddLogin,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url(./anh5.jpg);
  color: #2c3e50;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  height: 100%;
  min-height: 100vh;
  font-family: sans-serif;
  padding: 0px;
  margin: 0px;
  /* margin-top: 60px; */
}

/* html {
    background: linear-gradient(180deg, #2EBF91 0%, rgba(131, 96, 195, 0.31) 100%);
    width: 100%;
    height: 100%;
} */
</style>
