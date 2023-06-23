


import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { RichTextEditor, Toolbar, Link, NodeSelection, Image, QuickToolbar, HtmlEditor } from '@syncfusion/ej2-richtexteditor';
import { Dialog } from '@syncfusion/ej2-popups';
RichTextEditor.Inject(Toolbar, Link, Image, QuickToolbar, HtmlEditor);
let dialog: Dialog;
let defaultRTE: RichTextEditor = new RichTextEditor({
   height: 340,
   value: ` <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p>
    <p><b>Key features:</b></p>
    <ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li>
    <li><p>Capable of handling markdown editing.</p></li>
    <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
    <li><p>Provides a fully customizable toolbar.</p></li>
    <li><p>Provides HTML view to edit the source directly for developers.</p></li>
    <li><p>Supports third-party library integration.</p></li>
    <li><p>Allows preview of modified content before saving it.</p></li>
    <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
    </ul>`,
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList',
            'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode',
            {
                tooltipText: 'Insert Symbol',
                undo: true,
                click: function() {
                    defaultRTE.focusIn();
                    dialog.element.style.display = '';
                    ranges = selection.getRange(document);
                    dialog.width = defaultRTE.element.offsetWidth * 0.5;
                    dialog.dataBind();
                    dialog.show();
                },
                template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar"  style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;"> &#937;</div></button>'
            }, '|', 'Undo', 'Redo'
        ]
    },
    created: onCreate
});
defaultRTE.appendTo('#defaultRTE');
let selection: NodeSelection = new NodeSelection();
let ranges: Range;

function onCreate(): void {
  let customBtn: HTMLElement = defaultRTE.element.querySelector('#custom_tbar') as HTMLElement;
  let dialogCtn: HTMLElement = document.getElementById('rteSpecial_char');
  // Initialization of Dialog
  dialog = new Dialog({
      header: 'Special Characters',
      content: dialogCtn,
      target: document.getElementById('container'),
      showCloseIcon: false,
      isModal: true,
      height: 'auto',
      width: '500px',
      overlayClick: dialogOverlay,
      buttons: [{ buttonModel: { content: "Insert", isPrimary: true }, click: onInsert }, { buttonModel: { content: 'Cancel' }, click: dialogOverlay }]
  });
  // Render initialized Dialog
  dialog.appendTo('#customTbarDialog');
  dialog.hide();
  customBtn.onclick = (e: Event) => {
    dialog.element.style.display = '';
    ranges = selection.getRange(document);
    dialog.width = defaultRTE.element.offsetWidth * 0.5;
    dialog.dataBind();
    dialog.show();
    let dialogCtn: HTMLElement = document.getElementById('rteSpecial_char');
    dialogCtn.onclick = (e: Event) => {
        let target: HTMLElement = e.target as HTMLElement;
        let activeEle: HTMLElement = dialog.element.querySelector('.char_block.e-active');
        if (target.classList.contains('char_block')) {
            target.classList.add('e-active');
            if (activeEle) {
                activeEle.classList.remove('e-active');
            }
        }
    };
  }

  function onInsert(): void {
    let activeEle: HTMLElement = dialog.element.querySelector('.char_block.e-active');
    if (activeEle) {
        defaultRTE.executeCommand('insertText', activeEle.textContent , {undo: true});
    }
    dialogOverlay();
  }

  function dialogOverlay(): void {
    let activeEle: HTMLElement = dialog.element.querySelector('.char_block.e-active');
    if (activeEle) {
        activeEle.classList.remove('e-active');
    }
    dialog.hide();
  }
}



