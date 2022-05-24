
import { createApp } from "vue";
import App from "./views/App.vue";
import Header from "./components/header.vue";

Header.props.count="232";
const app = createApp(App);
app.component("my-header",Header);
app.mount("#app");

