import { createApp } from "vue";
import App from "./App.vue";
import Navbar from "./components/Navbar.vue";
import VeeValidatePlugin from "./includes/validation";
import router from "./router/router";
import { useRouter } from "vue-router";

const route = useRouter();

const app = createApp(App);
app.component("Navbar", Navbar);

app.use(VeeValidatePlugin);
app.use(router);
app.mount("#app");
