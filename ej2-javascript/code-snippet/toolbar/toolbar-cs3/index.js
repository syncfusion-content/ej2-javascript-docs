ej.base.enableRipple(true);

//Initialize Toolbar component

var toolbar = new ej.navigations.Toolbar({
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

//Render initialized Toolbar component
toolbar.appendTo('#element');

