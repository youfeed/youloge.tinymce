// import { Editor, TinyMCE } from 'tinymce';

const setup = (editor,url) =>{
  editor.ui.registry.addButton('login', {
    text: 'login button',
    onAction: () => {
      editor.setContent('<p>content added from login</p>');
    }
  });
};

export default ()=> {
  tinymce.PluginManager.add('login', setup);
};
