import messages from "@intlify/unplugin-vue-i18n/messages";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

import "./assets/base.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(createI18n({ locale: "en", messages }));
app.use(createHead());

app.mount("#app");
