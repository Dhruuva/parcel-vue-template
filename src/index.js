
//Vue.config.devtools = true
// Before you create app
//Vue.config.devtools = process.env.NODE_ENV === 'development'


import { createApp } from "vue";
import App from "./views/App.vue";
// import ButtonCounter from "./views/cbtn.vue";
// import Entry from "./views/Entry.vue";

const app = createApp(App);
// app.component('button-counter', ButtonCounter);
// app.component('entry', Entry);
app.mount("#app");