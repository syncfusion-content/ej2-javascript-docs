

import {Toolbar} from '@syncfusion/ej2-navigations';

let toolbar: Toolbar = new Toolbar({
    width: 380,
    overflowMode: 'Popup',
    items: [
      { type: 'Button', prefixIcon: 'e-cut-icon tb-icons', text:'Cut', overflow: 'Show' },
      { type: 'Button', prefixIcon: 'e-copy-icon tb-icons', text:'Copy', overflow: 'Show' },
      { type: 'Button', prefixIcon: 'e-paste-icon tb-icons',text:'Paste', overflow: 'Show' },
      { type: 'Separator' },
      { type: 'Button', prefixIcon: 'e-bold-icon tb-icons', text:'Bold'},
      { type: 'Button', prefixIcon: 'e-italic-icon tb-icons', text:'Italic'},
      { type: 'Button', prefixIcon: 'e-underline-icon tb-icons', text:'Underline' },
      { type: 'Separator'},
      { type: 'Button', prefixIcon: 'e-ascending-icon tb-icons', text:'A-Z Sort', overflow: 'Show'},
      { type: 'Button', prefixIcon: 'e-descending-icon tb-icons', text:'Z-A Sort', overflow: 'Show'},
      ]
});
toolbar.appendTo('#element');



