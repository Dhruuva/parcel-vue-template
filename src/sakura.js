

import { createApp,ref } from "vue/dist/vue.esm-bundler";
import ButtonCounter from "./views/cbtn.vue";
import Header from "./components/header.vue";
//import Entry from "./views/Entry.vue";
import { Icon } from '@iconify/vue';
//ButtonCounter.props.count.default="232";
//console.log(ButtonCounter);

const app = createApp({
	components:{ 'button-counter': ButtonCounter,
				 'my-header': Header,
	}
});

app.mount("#app3");



