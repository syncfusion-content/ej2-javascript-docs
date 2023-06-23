


import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

let defaultRTE: RichTextEditor = new RichTextEditor({
  height: 340,
  toolbarSettings: {
    items: [ 'FontColor', 'BackgroundColor']
  },
  backgroundColor: {
      modeSwitcher : true
  },
  fontColor: {
      modeSwitcher : true
  }
});
defaultRTE.appendTo('#defaultRTE');



