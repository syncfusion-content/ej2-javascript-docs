ej.base.enableRipple(true);

//Initialize Toolbar component

var toolbar = new ej.navigations.Toolbar({
width: 380,
overflowMode: 'Popup',
items: [
  { type: 'Button', prefixIcon: 'e-cut-icon', text:'Cut', overflow: 'Show' },
  { type: 'Button', prefixIcon: 'e-copy-icon', text:'Copy', overflow: 'Show' },
  { type: 'Button', prefixIcon: 'e-paste-icon',text:'Paste', overflow: 'Show' },
  { type: 'Separator' },
  { type: 'Button', prefixIcon: 'e-bold-icon', text:'Bold'},
  { type: 'Button', prefixIcon: 'e-italic-icon', text:'Italic'},
  { type: 'Button', prefixIcon: 'e-underline-icon', text:'Underline' },
  { type: 'Separator'},
  { type: 'Button', prefixIcon: 'e-ascending-icon', text:'A-Z Sort', overflow: 'Show'},
  { type: 'Button', prefixIcon: 'e-descending-icon', text:'Z-A Sort', overflow: 'Show'},
  ]
});

//Render initialized Toolbar component
toolbar.appendTo('#element');

