import { createRouter, createWebHistory } from "vue-router";

import successMessageVue from "@/components/successMessage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/success",
      name: "success",
      component: successMessageVue,
    },
  ],
});

export default router;
