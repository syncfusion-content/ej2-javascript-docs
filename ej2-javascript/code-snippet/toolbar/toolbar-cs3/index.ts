

import {Toolbar} from '@syncfusion/ej2-navigations';
let toolbar: Toolbar = new Toolbar({
    items: [
      { text: 'Cut' },
      { text: 'Copy' },
      { text: 'Paste' },
      { type: 'Separator'},
      { text: 'Bold' },
      { text: 'Italic' },
      { text: 'Underline' },
    ]
});
toolbar.appendTo('#element');


