
const setup = (editor,url) =>{
  editor.ui.registry.addButton('hello', {
    text: 'hello button',
    onAction: () => {
      editor.setContent('<p>content added from hello</p>');
    }
  });
};
export default ()=> {
  tinymce.PluginManager.add('hello', setup);
};
