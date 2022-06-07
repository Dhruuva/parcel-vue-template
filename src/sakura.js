globalThis.__VUE_OPTIONS_API__ = process.env.NODE_ENV == "development"
globalThis.__VUE_PROD_DEVTOOLS__ = process.env.NODE_ENV == "development"

import { createApp,ref } from "vue";
import ButtonCounter from "./components/cbtn.vue";
import Header from "./components/header.vue";
import { Icon } from '@iconify/vue';

const app = createApp({
	components:{ 'button-counter': ButtonCounter,
				 'my-header': Header,
	}
})


app.mount("#app3");



