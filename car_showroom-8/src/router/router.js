import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LoginForm from "../views/LoginForm.vue";
import RegisterForm from "../views/RegisterForm.vue";
import NotFound from "../views/NotFound.vue";
import CarDetails from "../views/CarDetails.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/home", redirect: "/" },
  { path: "/register", component: RegisterForm },
  { path: "/login", component: LoginForm },
  { path: "/:pathMatch(.*)*", name: "carDetails", component: NotFound },

  // Dynamic Route
  { path: "/details/:id", name: "details", component: CarDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
