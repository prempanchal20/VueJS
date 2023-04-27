import { Form as VeeForm, Field as VeeField, defineRule } from "vee-validate";
import { required } from "@vee-validate/rules";

export default {
  install(App) {
    App.component("VeeForm",VeeForm);
    App.component("VeeField",VeeField);
    defineRule('required',required);
  },
};
