<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="home">
      <form @submit.prevent="Login" id="login">
      <h1>LOGIN</h1>
        <div>
          <label for=" username">Username:</label>
          <br>
          <input type=" username" id=" username" placeholder="name" v-model="username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <br>
          <input type="password" id="password" placeholder="Password"  v-model="password"/>
        </div>
        <button type="submit">Login</button>
  </form>
    </div>
</template>

<script>
    import router from "../Router/router";

export default {
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        Login() {
            if (this.username === "admin" && this.password === "123") {
                this.$store.dispatch("login");
                console.log("oke");
                router.push("/todolist");
            } 
            else {
                alert("đăng nhập thất bại ");
            }

            // if( this.username == "admin" && this.password == "123"){
            //     console.log('dang nhap dung');
            //     this.$router.push('/todolist');
            // }
            // else{
            //     console.log('dang nhap sai');
            // }
        },
    },
}
</script>
<style scoped>
h1{
  color: black;
      margin: 0.5rem;
}
div {
    padding: 0.75rem;
}

input {
  margin: 1rem; 
  width: 150px;
  height: 35px;
  border-radius: 10px;
  padding-left: 10px;
}
label {
    font-size: 20px;
}
button {
    width: 160px;
    height: 37px;
    border-radius: 0 !important;
    background: rgba(76, 207, 169, 0.92);
    cursor: pointer;
    /* font-weight: 500; */
}
#login {
  width: 300px;
  height: 350px;
  background-color: beige;
  border: 1px solid gray;
  border-radius: 10px;
  /* box-sizing: border-box;
  border-radius: 5px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around; */
}
#home {
  display: flex;
  justify-content: center;
}
</style>