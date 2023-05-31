<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h1>TODOLIST</h1>
        <add-card></add-card>
        <task-card></task-card>
        <button type="submit" @click="logout()" id="logout">Logout</button>
  </div>
</template>

<script>
import cardAddVue from "./cardAdd.vue";
import cardTaskVue from "./cardTask.vue";
export default {
    name: "home-page",
  components: {
    "add-card": cardAddVue,
    "task-card": cardTaskVue,
  },
  methods: {
    logout(){
      this.$store.dispatch("logout");
        this.$router.push("/");
    },
  },
}
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
</style>