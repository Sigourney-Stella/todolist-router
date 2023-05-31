// export default function loginMiddleware({ store }) {
//     return (to, from, next) => {
//       const islogin = store.getters.getIsLogin;
//       if (islogin) {
//         next("/todolist");
//         console.log("todolist");
//       } else {
//         next("/");
//       }
//     };
//   }