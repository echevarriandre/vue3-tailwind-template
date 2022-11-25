import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import vue from "@vitejs/plugin-vue";
import { dirname, resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    VueI18nPlugin({ include: resolve(dirname(fileURLToPath(import.meta.url)), "./locales/**") }),
    Components({ resolvers: [IconsResolver()] }),
    Icons(),
    AutoImport({
      imports: ["vue", "vue-i18n", "vue-router", "vue/macros", "@vueuse/core", "@vueuse/head"],
      eslintrc: { enabled: true },
      vueTemplate: true,
      dts: "./auto-imports.d.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
