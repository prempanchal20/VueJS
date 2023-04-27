import { createApp } from "vue";
import App from "./App.vue";
import VeeValidatePlugin from "./includes/validation";

createApp(App).mount("#app");
App.use(VeeValidatePlugin);
