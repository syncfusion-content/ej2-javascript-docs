ej.base.enableRipple(true);

//Initialize Toolbar component

var toolbar = new ej.navigations.Toolbar({
width: 330,
overflowMode: 'Popup',
items: [
  { type: 'Button', prefixIcon: 'e-cut-icon', text:'Cut', showTextOn:'Overflow', overflow: 'Show'},
  { type: 'Button', prefixIcon: 'e-copy-icon', text:'Copy', showTextOn:'Overflow', overflow: 'Show'},
  { type: 'Button', prefixIcon: 'e-paste-icon', text:'Paste', showTextOn:'Overflow', overflow: 'Show'},
  { type: 'Separator'},
  { type: 'Button', prefixIcon: 'e-bold-icon', text:'Bold', showTextOn:'Overflow', overflow: 'Show'},
  { type: 'Button', prefixIcon: 'e-underline-icon', text:'Underline', showTextOn:'Overflow', overflow: 'Show'},
  { type: 'Button', prefixIcon: 'e-italic-icon', text:'Italic', overflow: 'Show', showTextOn:'Overflow',},
  { type: 'Button', prefixIcon: 'e-color-icon', text:'Color-Picker', overflow: 'Hide', showTextOn:'Overflow',},
  { type: 'Separator'},
  { type: 'Button', prefixIcon: 'e-ascending-icon', text:'A-Z Sort', overflow: 'Show', showTextOn:'Overflow',},
  { type: 'Button', prefixIcon: 'e-descending-icon', text:'Z-A Sort', overflow: 'Show', showTextOn:'Overflow',},
  { type: 'Button', prefixIcon: 'e-clear-icon', text:'Clear', overflow: 'Show', showTextOn:'Overflow',}]
});

//Render initialized Toolbar component
toolbar.appendTo('#element');

