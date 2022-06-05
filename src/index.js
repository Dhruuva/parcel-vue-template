
import { createApp } from "vue";
import Entry from "./components/Entry.vue";
import Header from "./components/header.vue";
globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = true;

const app = createApp({});
app.component("my-header",Header);
app.component("my-entry",Entry);

app.mount("#app");

