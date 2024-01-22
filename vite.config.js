import { defineConfig } from "vite";

export default defineConfig({
    root: './src', //source directory
    build: {
        outDir: '../dist', //output directory
        rollupOptions: {
            input: {
                main: './js/main.js',
            }
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/scss/styles.scss";`
            }
        }
    }
});