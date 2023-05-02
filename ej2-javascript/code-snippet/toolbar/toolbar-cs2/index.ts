

import {Toolbar} from '@syncfusion/ej2-navigations';

let toolbar: Toolbar = new Toolbar({
    width: 300,
    overflowMode: 'Scrollable',
    items: [
      { type: 'Button', prefixIcon: 'e-cut-icon tb-icons', text:'Cut', tabIndex: 0 },
      { type: 'Button', prefixIcon: 'e-copy-icon tb-icons', text:'Copy', tabIndex: 0},
      { type: 'Button', prefixIcon: 'e-paste-icon tb-icons', text:'Paste',tabIndex: 0},
      { type: 'Separator'},
      { type: 'Button', prefixIcon: 'e-bold-icon tb-icons', text:'Bold', tabIndex: 0},
      { type: 'Button', prefixIcon: 'e-underline-icon tb-icons', text:'Underline', tabIndex: 0},
      { type: 'Button', prefixIcon: 'e-italic-icon tb-icons', text:'Italic', tabIndex: 0},
      { type: 'Button', prefixIcon: 'e-color-icon tb-icons', text:'Color-Picker', tabIndex: 0 },
      { type: 'Separator'},
      { type: 'Button', prefixIcon: 'e-ascending-icon tb-icons', text:'A-Z Sort', tabIndex: 0 },
      { type: 'Button', prefixIcon: 'e-descending-icon tb-icons', text:'Z-A Sort', tabIndex: 0},
      { type: 'Button', prefixIcon: 'e-clear-icon tb-icons', text:'Clear', tabIndex: 0}]
});
toolbar.appendTo('#element');


