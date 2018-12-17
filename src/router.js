import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import IndexPage from "./views/IndexPage.vue"

Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "indexPage",
      component: IndexPage
    },{
      path: "/home",
      name: "home",
      component: Home
    },
  ]
});
