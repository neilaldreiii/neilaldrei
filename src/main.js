import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import inViewportDirective from 'vue-in-viewport-directive';

Vue.config.productionTip = false;

Vue.directive('in-viewport', inViewportDirective)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
