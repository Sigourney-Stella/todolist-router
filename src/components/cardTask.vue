<template>
  <div>
    <div v-for="(task, index) in tasks"  :key="task.id" id="todo-list">
      <div class="card-box">
        <div class="card-box-wrapper">
          <span>{{task.title}}</span>
        </div>
        <div class="card-box-btn">
          <button @click="deleteToDo(index)" class="btn btn-primary"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";

export default {
    name : 'cardTask',
    props:{
        // newTasks: Array,
    },
      data() {
          return {
            input: "",
          }
      },
    computed: mapState({
    tasks: (state) => state.tasks,
    }),
    methods: {
        deleteToDo(index) {
            this.$store.dispatch("removeTask", index);
            console.log(index);
    },
    },
}
</script>
<style scoped>
li{
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25), 0px 4px 40px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    width: 550px;
    height: 142px;
    display: block;

}
span {
    border: 2px solid black;
    width: 100%;
    border-radius: 27px;
}

</style>