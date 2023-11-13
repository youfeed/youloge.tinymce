import { defineConfig } from "vite";
// 后面做目录读取 - 填写插件目录名称即可
const plugins = ['login','hello','example'];
export default defineConfig({
  build: {
    minify:'terser', 
    rollupOptions: {
      external: ['tinymce'],
      ...{
        'lib':()=>{
          var input = { index: 'index.html' }
          plugins.forEach(is=>{
            input[is] =  `./lib/${is}/`
          })
          return {input:input}
        }
      }['lib'](),
      output:{
        // format:'amd',
        inlineDynamicImports:false,
        entryFileNames: ({name})=>plugins.includes(name) ? 'plugins/[name]/plugin.js' : 'assets/[name].js'
      }
    }
  },
  css:{
    postcss:{
      include: "**/skin.css",
      inject: false,
      extract: true
    }
  }
})