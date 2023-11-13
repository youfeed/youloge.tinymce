## Youloge.tinymce(定制版本：需要搭配使用)


## 想要实现的结构功能

- `public目录`是 `tinymce_6.7.2 dev`代码 vite 打包会原封不动复制到`dist目录`
- `src目录`除去`assets目录 index.js`其他为插件目录
- * 插件目录 按目录名 打包成 `目录/plugin.js 目录/plugin.min.js`覆盖到`dist目录`

*** 当前折中方案，在`public`开发插件，在src 写初始化功能

## 注意事项
