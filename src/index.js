
// import contentUiSkinCss from './tinymce/content.css?inline';
import contentCss from './assets/content.css?inline';

export function render (selector) {
  // let init =  {...{}}
  // tinymce.
  let x = tinymce.init({
    selector: selector.selector,
    inline_boundaries: false,
    // inline_boundaries_selector:false,
    // plugins: 'advlist code emoticons link lists table',
    toolbar: 'bold italic | bullist numlist | link emoticons',
    // skin: false,
    quickbars_selection_toolbar:'cut copy | bold italic underline strikethrough',
    // valid_children: '+div[style]',
    valid_elements: 'div,p,h1,h2,h3,h4,h5,h6,ul,ol,li,table,thead,tbody,tr,th,td,img,span,a,strong,em,i,b,u,br,code,pre,blockquote',
    plugins:'code quickbars  preview searchreplace autolink fullscreen image link media codesample table charmap advlist lists wordcount  ',
    toolbar:'code undo redo blocks  formatselect fontselect fontsize | forecolor backcolor bold italic underline strikethrough charmap | indent2em align outdent indent | link bullist numlist image table codesample wordcount',
    content_css: 'document',
    content_css: false,
    min_width: 400,
    toolbar_mode: 'scrolling',
    custom_elements:'youloge-',
    paste_webkit_styles: 'all',
    keep_styles:true,
    //
    a11y_advanced_options:true,
    // event_root: '#root', // 事件委托
    promotion:false,//徽章
    // contentCss
    content_css: 'document',
    content_style:`img{max-width:100%;height: auto;} \n ${contentCss.toString()}`,
  });
  return x;
};