

import { createApp } from "vue";
import ButtonCounter from "./views/cbtn.vue";
import Entry from "./views/Entry.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Icon } from '@iconify/vue';
library.add(faUserSecret)

const app = createApp(Entry);
app.component('font-awesome-icon', FontAwesomeIcon)
 //app.component('entry', Entry);
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



