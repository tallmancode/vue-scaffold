import {fileURLToPath, URL} from "node:url";
// eslint-disable-next-line no-undef
const path = require("path");
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            // eslint-disable-next-line no-undef
            entry: path.resolve(__dirname, "src/entry.esm.js"),
            name: "VueScaffold",
            fileName: (format) => `vue-scaffold.${format}.js`,
        },
        rollupOptions: {
            external: ["vue", "vue-router"],
            output: {
                exports: "named",
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
        dedupe: ["vue", "vue-router"],
    }
});
