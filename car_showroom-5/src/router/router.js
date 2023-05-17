import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LoginForm from "../views/LoginForm.vue";
import RegisterForm from "../views/RegisterForm.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/home", redirect: "/" },
  { path: "/register", component: RegisterForm },
  { path: "/login", component: LoginForm },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
