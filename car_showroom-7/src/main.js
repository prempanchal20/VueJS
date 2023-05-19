import { createApp } from "vue";
import App from "./App.vue";
import Navbar from "./components/Navbar.vue";
import VeeValidatePlugin from "./includes/validation";
import router from "./router/router";

const app = createApp(App);
app.use(router);
app.component("Navbar", Navbar);

app.use(VeeValidatePlugin);
app.mount("#app");
