import Vue from "vue";
import Router from "vue-router";
import Profile from "./views/Profile";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "profile",
      component: Profile
    }
  ],
  mode: "history"
});
