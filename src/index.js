

import { createApp } from "vue";
import App from "./views/App.vue";
import ButtonCounter from "./views/cbtn.vue";

const app = createApp(App);
app.component('ButtonCounter', ButtonCounter)
app.mount("#app");