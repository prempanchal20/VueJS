import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import { required, min, max } from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `This Field ${ctx.field} is Required`,

          min: `This Field ${ctx.field} is Too Short`,

          max: `This Field ${ctx.field} is Too Long`,
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : "Invalid Field";

        return message
      },
    });
  },
};
