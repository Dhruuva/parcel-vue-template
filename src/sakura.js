

import { createApp } from "vue";
import ButtonCounter from "./views/cbtn.vue";
const app = createApp({
    template: `<ButtonCounter>Button</ButtonCounter>`,
    data(){ return {msg:"This sakura"}}
  });
app.mount("#app3");


