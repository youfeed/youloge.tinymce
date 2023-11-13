import './style.css'
import {render} from './lib/index.js'
var editors = null
render({
  selector:'#editor'
}).then(([editor])=>{
  editors = editor
  window.editor = editor
  console.log(window.editor)
});

document.querySelector('#getContent').onclick = ()=>{
  console.log(editors.getContent())
}
// let draft = 
// draft().onReady()
// setupCounter(document.querySelector('#counter'))
