## Youloge.tinymce(定制版本：需要搭配使用)

## 更新日志

- 6.8.0 项目结构优化`vite 打包`方便与vue结合(`后续开发基于此打包版本`)

## 使用说明

- `public目录`(这是编辑器源文件) 原封不动,最终会复制到`dist目录`
- `index.html ` 网页入口
- `src/*` 正常项目目录
- `lib/目录名/index.js 目录名.js`

#### 如何新增插件(可以和tinymce官方插件同名代表覆盖官方插件)

1. `lib/` 下新增 `插件名/index.js`, `插件名/插件名.js`二个文件
2. `vite.config.js` 添加插件名(后续考虑独立一个目录自动加载)
3. `npm run dev` 他和 `vite dev` 不是一个东西依赖`http-server`
4. `npm run build` 每次修改都要 `build 一次` 我不会监听~ 


## 想要实现的结构功能

- `public目录`是 `tinymce_6.7.2 dev`代码 vite 打包会原封不动复制到`dist目录`
- `lib插件目录` 一个文件夹一个插件(目录引入)
- 插件目录 按目录名 打包成 `lib/plugin.js lib/plugin.min.js`覆盖到`dist目录`
- `src目录` 开发目录 正常开发(和用静态tinymce一样 不是es6引入)

*** 当前折中方案，在`public`开发插件，在src 写初始化功能

## 注意事项
