import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import Index from "./Index.vue";
import Form from "./Form.vue";
import Confirm from "./Confirm.vue";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Index,
      children: [
        {
          path: "/",
          component: Form
        },
        {
          path: "/confirm",
          component: Confirm,
          meta: {
            isConfirm: true
          }
        }
      ]
    }
  ]
});
