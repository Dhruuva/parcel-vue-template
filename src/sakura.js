

import { createApp } from "vue";
import ButtonCounter from "./views/cbtn.vue";
//import Entry from "./views/Entry.vue";
import { Icon } from '@iconify/vue';
ButtonCounter.props.count.default="22";
console.log(ButtonCounter);
const app = createApp(ButtonCounter);

app.mount("#app3");



