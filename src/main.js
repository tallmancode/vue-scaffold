import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import VueScaffold from "./entry.esm.js";

const app = createApp(App);

app.use(router);

app.use(VueScaffold);

app.mount("#app");
