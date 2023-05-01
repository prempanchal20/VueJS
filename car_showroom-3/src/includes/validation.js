import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import { required, min, max, url } from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("url", url);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `This Field ${ctx.field} is Required`,

          min: `This Field ${ctx.field} is Too Short`,

          max: `This Field ${ctx.field} is Too Long`,

          url: `This Field ${ctx.field} is not Valid URL`,
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : "Invalid Field";
        return message;
      },
    });
  },
};
