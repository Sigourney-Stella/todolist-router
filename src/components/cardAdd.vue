<template>
  <div id="todo-list">
    <form @submit.prevent="addNewTask">
      <div class="card-box">
        <div class="card-box-wrapper">
          <label for="new-todo" class="card-box-title">Task</label>
          <div>
            <input
              type="text"
              v-model="title"
              placeholder="title"
              id="new-todo1"
            />
            <input
              type="text"
              v-model="input"
              placeholder="Text something!"
              id="new-todo"
            />
          </div>
        </div>
        <div class="card-box-btn">
          <button>Add</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  name: "cardAdd",
  data() {
    return {
      input: "",
      title: "",
      nextTodoId: 0,
    };
  },
  methods: {
    addNewTask() {
      if (this.input.trim(" ") == "") {
        console.log("error");
      } else {
        this.$store.dispatch("setTask", {
          id: this.nextTodoId++,
          title: this.input,
          content: this.title,
          date: new Date().toISOString().substring(0, 10),
        });
        // this.nextTodoId++;
        this.input = "";
        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-family: "Times New Roman";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  color: #fff;
}
input {
  width: 290px;
  /* height: 35px; */
  border-radius: 25px;
  padding-left: 10px;
  border: none;
}
html {
  background: linear-gradient(
    180deg,
    #2ebf91 0%,
    rgba(131, 96, 195, 0.31) 100%
  );
  background-repeat: no-repeat;
}

/* input{
    border-radius: 25px;
    width: 100%;
    line-height: 40px;
} */
</style>
