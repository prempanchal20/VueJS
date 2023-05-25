import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LoginForm from "../views/LoginForm.vue";
import RegisterForm from "../views/RegisterForm.vue";
import NotFound from "../views/NotFound.vue";
import CarDetails from "../views/CarDetails.vue";
import { useUserStore } from "../stores/userStore";

const routes = [
  {
    path: "/",
    component: Home,
    alias: "/home",
    name: "Home",
    meta: { private: true },
  },
  // { path: "/home", redirect: "/" },
  { path: "/register", component: RegisterForm, name: "Register" },
  { path: "/login", component: LoginForm, name: "Login" },
  { path: "/:pathMatch(.*)*", name: "carDetails", component: NotFound },

  // Dynamic Route
  { path: "/details/:id", name: "details", component: CarDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.private && !useUserStore().userValid) {
    next("/login");
  } else {
    next();
  }
});

export default router;
