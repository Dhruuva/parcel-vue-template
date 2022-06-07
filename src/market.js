globalThis.__VUE_OPTIONS_API__ = process.env.NODE_ENV == "development"
globalThis.__VUE_PROD_DEVTOOLS__ = process.env.NODE_ENV == "development"
import { createApp, ref } from "vue";
import Header from "./components/header.vue";
import Entry from "./components/Entry.vue";
import ButtonCounter from "./components/cbtn.vue";
import './assets/main.css';
const app = createApp({});
app.component("my-header",Header);
app.component("my-entry",Entry);
app.component("my-button",ButtonCounter);
app.mount("#app1");