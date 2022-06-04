
import { createApp } from "vue/dist/vue.esm-bundler";
import Entry from "./views/Entry.vue";
import Header from "./components/header.vue";
globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;

const app = createApp({});
app.component("my-header",Header);
app.component("my-entry",Entry);

app.mount("#app");

