<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Header></Header>
    <div>
      <h1>TODOLIST</h1>
      <add-card></add-card>
      <task-card></task-card>
      <!-- <button type="submit" @click="logout()" id="logout">Logout</button> -->
    </div>
  </div>
</template>

<script>
import cardAddVue from "./cardAdd.vue";
import HeaderAdd from "./Header.vue";
import cardTaskVue from "./cardTask.vue";
// import axios from 'axios';
// import { mapActions } from 'vuex';
export default {
  name: "home-page",
  components: {
    "add-card": cardAddVue,
    "task-card": cardTaskVue,
    Header: HeaderAdd,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
button {
  width: 160px;
  height: 37px;
  border-radius: 0 !important;
  background: rgba(224, 235, 233, 0.92);
  cursor: pointer;
  /* font-weight: 500; */
}
html {
  background: linear-gradient(
    180deg,
    #2ebf91 0%,
    rgba(131, 96, 195, 0.31) 100%
  );
  background-repeat: no-repeat;
}
</style>
