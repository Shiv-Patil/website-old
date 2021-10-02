import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Terminal from "../views/Terminal.vue";

const routes = [
  {
    path: "/",
    alias: "/terminal",
    name: "Terminal",
    component: Terminal,
    meta: {
      enterClass: "animate__animated animate__zoomIn",
      leaveClass: "animate__animated animate__zoomOut",
    },
  },
  {
    path: "/gui",
    name: "Home",
    component: Home,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (from.name === "Terminal") {
    to.meta.enterClass = "animate__animated animate__zoomIn";
    to.meta.leaveClass = "animate__animated animate__zoomOut";
  }
  next();
});

export default router;
