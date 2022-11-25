import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import { createHead } from "@vueuse/head";
import messages from "@intlify/unplugin-vue-i18n/messages";

import App from "./App.vue";
import router from "./router";

import "./assets/base.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(createI18n({ locale: "en", messages }));
app.use(createHead());

app.mount("#app");
