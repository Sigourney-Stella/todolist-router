<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header-container">
    <div class="menu">
      <img src="./Todoist_logo.png" />
      <div class="has-menu">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          EN
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" @click="changeLocale('en')">English</a>
          </li>
          <li>
            <a class="dropdown-item" @click="changeLocale('vi')">Tiếng Việt</a>
          </li>
        </ul>
      </div>
      <div class="has-menu">
        <!-- <div class="dropdown user"> -->
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ Avatar }}
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" @click="logout()">Logout</a></li>
          <li><a class="dropdown-item" @click="postcard()">Profile</a></li>
        </ul>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
// import store from "../assets/store/store";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",

  data() {
    return {
      // userName: "Hai Nguyen",
    };
  },
  computed: {
    Avatar() {
      this.$store.state.userName;
      const words = this.$store.state.userName.split(" ");
      var arr = "";
      words.forEach((words) => {
        arr += words.charAt(0);
      });
      return arr;

      // console.log(this.userName);
      // return this.userName.charAt(0);
    },
  },
  methods: {
    postcard() {
      this.$router.push("/postcard");
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    changeLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>

<style scoped>
.has-menu {
  margin: 30px;
}
.menu {
  text-align: initial;
}

.has-menu {
  float: right;
  position: relative;
}

.header-container {
  padding-bottom: 10px;
  background: #aeb3b3;
  margin-bottom: 4rem;
}

.menu img {
  width: 25%;
  margin: 10px;
}

ul.dropdown-menu.show {
  transform: translate3d(-70px, 82px, 0px);
  height: 5rem;
}

.dropdown-toggle::after {
  display: none;
}

button.btn.btn-secondary.dropdown-toggle {
  border-radius: 3rem;
  background: #c90e39;
  color: black;
  font-family: sans-serif;
  font-size: 20px;
}

/* 

    .dropdown {
    text-align: initial;
    }

    .dropdown img{
        width: 20%;
        margin: 25px 0px 0px 15px;
     }

     .menu li {
        float: right;
        list-style: none;
        color: #2c3e50;
        font-size: 30px;
    }
    
    .menu li a{
        color: #2c3e50;
        text-decoration: none;
    }
    .menu li:hover{
        background-color: #EEE;
    }
    
    .has-menu:hover .submenu{
        display: block;
    }

    .submenu{
        padding: 0px;
        display: none;
        position: absolute;  
    }  */
</style>
