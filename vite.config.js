import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify:'terser',
    // input: './lib/index.js',
    // lib: {
    //   entry: './lib/index.js',
    //   name: 'youloge.draft',
    //   fileName: 'draft'
    // },
    // output:{

    // },
    rollupOptions: {
      external: ['tinymce'],
    },
    commonjsOptions:{}
  },
  css:{
    postcss:{
      include: "**/skin.css",
      inject: false,
      extract: true
    }
  }
})