

import { createApp } from "vue";
import ButtonCounter from "./views/cbtn.vue";
import Entry from "./views/Entry.vue";
const app = createApp(ButtonCounter);
 app.component('entry', Entry);
//app.use(Entry)

// const app = createApp({
 
//   template: `<button-counter></button-counter>`,
//    data: () => ({
//     msg: 'World'
//   }),
// });

//app.component('button-counter', ButtonCounter);

// const app = createApp({
//     data(){ return { msg:"This sakura"}}
//   });

//alert("Hello! I am an alert box!!");
app.mount("#app3");



