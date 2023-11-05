<template>
  <div>
    <div v-for="(task, index) in tasks" :key="index.id" id="todo-list">
      <div class="card-box">
        <div class="card-box-wrapper">
          <div>
            <h2>{{ task.content }}</h2>
          </div>
          <input type="checkbox" v-model="task.completed" />

          <span :class="{ completed: task.completed }">{{ task.title }}</span>

          <p>Ngày: {{ task.formattedDate }}</p>
        </div>
        <div class="card-box-btn">
          <button @click="EditToDo(index)">Edit</button>
          <button @click="deleteToDo(index)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "cardTask",
  props: {
    // newTasks: Array,
  },
  data() {
    return {
      input: "",
    };
  },
  // computed: mapState({
  //   tasks: (state) => state.tasks,
  // }),
  computed: mapState({
    tasks: (state) =>
      state.tasks.map((task) => ({
        ...task,
        formattedDate: new Date(task.date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      })),
  }),
  // computed: {
  //   ...mapState(["tasks"]),
  //   formattedDate() {
  //     return new Date(this.date).toLocaleDateString(undefined, {
  //       year: "12",
  //       month: "12",
  //       day: "12",
  //     });
  //   },
  // },
  methods: {
    toggleTaskCompletion(index) {
      this.$store.commit("TOGGLE_TASK_COMPLETION", index);
    },
    deleteToDo(index) {
      this.$store.dispatch("removeTask", index);
      console.log(index);
    },
    EditToDo(index) {
      console.log(index);
    },
  },
};
</script>
<style scoped>
html {
  background: linear-gradient(
    180deg,
    #2ebf91 0%,
    rgba(131, 96, 195, 0.31) 100%
  );
  background-repeat: no-repeat;
}
li {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25),
    0px 4px 40px rgba(0, 0, 0, 0.25);
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

.card-box-btn {
  display: flex;
}
.completed {
  text-decoration: line-through;
  color: black;
}
</style>
