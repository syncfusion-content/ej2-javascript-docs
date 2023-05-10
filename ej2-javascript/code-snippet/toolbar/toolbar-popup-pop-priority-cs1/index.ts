

import {Toolbar} from '@syncfusion/ej2-navigations';

let toolbar: Toolbar = new Toolbar({
    width: 330,
    overflowMode: 'Popup',
    items: [
      { type: 'Button', prefixIcon: 'e-cut-icon tb-icons', text:'Cut', showTextOn:'Overflow', overflow: 'Show'},
      { type: 'Button', prefixIcon: 'e-copy-icon tb-icons', text:'Copy', showTextOn:'Overflow', overflow: 'Show'},
      { type: 'Button', prefixIcon: 'e-paste-icon tb-icons', text:'Paste', showTextOn:'Overflow', overflow: 'Show'},
      { type: 'Separator'},
      { type: 'Button', prefixIcon: 'e-bold-icon tb-icons', text:'Bold', showTextOn:'Overflow', overflow: 'Show'},
      { type: 'Button', prefixIcon: 'e-underline-icon tb-icons', text:'Underline', showTextOn:'Overflow', overflow: 'Show'},
      { type: 'Button', prefixIcon: 'e-italic-icon tb-icons', text:'Italic', overflow: 'Show', showTextOn:'Overflow',},
      { type: 'Button', prefixIcon: 'e-color-icon tb-icons', text:'Color-Picker', overflow: 'Hide', showTextOn:'Overflow',},
      { type: 'Separator'},
      { type: 'Button', prefixIcon: 'e-ascending-icon tb-icons', text:'A-Z Sort', overflow: 'Show', showTextOn:'Overflow',},
      { type: 'Button', prefixIcon: 'e-descending-icon tb-icons', text:'Z-A Sort', overflow: 'Show', showTextOn:'Overflow',},
      { type: 'Button', prefixIcon: 'e-clear-icon tb-icons', text:'Clear', overflow: 'Show', showTextOn:'Overflow',}]
});
toolbar.appendTo('#element');



