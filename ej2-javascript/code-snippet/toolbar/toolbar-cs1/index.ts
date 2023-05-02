

import {Toolbar} from '@syncfusion/ej2-navigations';
let toolbar: Toolbar = new Toolbar({
    width: 300,
    overflowMode: 'Popup',
    items: [
      { type: 'Button', prefixIcon: 'e-cut-icon tb-icons', text:'Cut', showTextOn:'Overflow' },
      { type: 'Button', prefixIcon: 'e-copy-icon tb-icons', text:'Copy', showTextOn:'Overflow' },
      { type: 'Button', prefixIcon: 'e-paste-icon tb-icons', text:'Paste', showTextOn:'Overflow' },
      { type: 'Separator'},
      { type: 'Button', prefixIcon: 'e-bold-icon tb-icons', text:'Bold', showTextOn:'Overflow' },
      { type: 'Button', prefixIcon: 'e-underline-icon tb-icons', text:'Underline', showTextOn:'Overflow' },
      { type: 'Button', prefixIcon: 'e-italic-icon tb-icons', text:'Italic', showTextOn:'Overflow' },
      { type: 'Separator'},
      { type: 'Button', prefixIcon: 'e-ascending-icon tb-icons', text:'A-Z Sort', showTextOn:'Overflow' },
      { type: 'Button', prefixIcon: 'e-descending-icon tb-icons', text:'Z-A Sort', showTextOn:'Overflow' },
      ]
});
toolbar.appendTo('#element');
document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84 /* t */) {
        // press alt+t to focus the component.
        toolbar.element.focus();
    }
};



