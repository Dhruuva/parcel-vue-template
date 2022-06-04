globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;
import { createApp, ref } from "vue/dist/vue.esm-bundler";
import Header from "./components/header.vue";
import Entry from "./components/Entry.vue";
const app = createApp({});
app.component("my-header",Header);
app.component("my-entry",Entry);
app.mount("#app");
