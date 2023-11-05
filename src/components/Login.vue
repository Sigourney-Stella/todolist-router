<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="home">
    <form @submit.prevent="Login" id="login">
      <h1>LOGIN</h1>
      <div class="in">
        <div>
          <input
            type=" username"
            id=" username"
            placeholder="username"
            ref="username"
            v-model="username"
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            v-model="password"
          />
          <i class="fa fa-lock" aria-hidden="true"></i>
        </div>
      </div>
      <button type="submit">Login</button>
      <div id="life">{{ content }}</div>
    </form>
  </div>
</template>

<script>
import router from "../Router/router";
// import Header from "./Header.vue"

export default {
  data() {
    return {
      content: "Lifecycle Hooks",
      username: "",
      password: "",
    };
  },
  beforeCreate() {
    console.log("before create");
    console.log(this.content);
  },
  created() {
    console.log("created");
    console.log(this.content);
  },
  beforeMount() {
    console.log("before mount");
    // console.log(document.getElementById("life").innerHTML);
    console.log(this.$refs.username);
    // console.log(this.$refs);
  },
  mounted() {
    console.log("mounted");
    console.log(this.$refs.username);
    // console.log(document.getElementById("life").innerHTML);
  },
  methods: {
    Login() {
      if (this.username === "admin a" && this.password === "123") {
        this.$store.commit("setUserName", this.username);
        this.$store.dispatch("login");
        // console.log("oke");
        router.push("/todolist");
      } else {
        alert("đăng nhập thất bại ");
      }
    },
  },
};
</script>
<style scoped>
div {
  padding: 0.75rem;
}
h1 {
  font-weight: 500;
  font-size: 27px;
  font-family: sans-serif !important;
  margin-top: 2rem;
}
input {
  margin: 0.5rem;
  width: 200px;
  height: 45px;
  padding-left: 10px;
  border: 1px solid black;
  /* border-radius: 25px; */
  background: #e6e6e6;
}

button {
  width: 200px;
  height: 45px;
  /* border: 1px solid black; */
  /* border-radius: 25px; */
  border-radius: 0 !important;
  background-image: linear-gradient(to bottom right, #3b8e86, #e1dccd);
  cursor: pointer;
  margin-top: 1.25rem;
  color: black;
  font-size: 1.25rem;
}
#login {
  width: 300px;
  height: 400px;
  background-color: beige;
  border: 1px solid gray;
  border-radius: 10px;
}
#home {
  display: flex;
  justify-content: center;
}
</style>
