// eslint-disable-next-line no-undef
new Vue({
  el: "#life",
  data: {
    content: "Lifecycle Hooks",
  },
  beforeCreate() {
    console.log("before create");
    console.log(this.content);
  },
  created() {
    console.log("created");
    console.log(this.content);
  },
});
