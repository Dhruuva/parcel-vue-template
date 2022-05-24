
import { createApp } from "vue/dist/vue.esm-bundler";
import Entry from "./views/Entry.vue";
import Header from "./components/header.vue";
globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;
Header.props.count="232";
const app = createApp({});
app.component("my-header",Header);
app.component("my-entry",Entry);
app.config.compilerOptions._VUE_OPTIONS_API__ = true;
app.config.compilerOptions.__VUE_PROD_DEVTOOLS__ = false;
console.log(app.config)
app.mount("#app");

