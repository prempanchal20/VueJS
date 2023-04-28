import { createApp } from "vue";
import App from "./App.vue";
import VeeValidatePlugin from "./includes/validation";

const app = createApp(App)
app.use(VeeValidatePlugin);
app.mount("#app");
