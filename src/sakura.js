

import { createApp,ref } from "vue";
import ButtonCounter from "./components/cbtn.vue";
import Header from "./components/header.vue";
import { Icon } from '@iconify/vue';
globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;

const app = createApp({
	components:{ 'button-counter': ButtonCounter,
				 'my-header': Header,
	}
})


app.mount("#app3");



