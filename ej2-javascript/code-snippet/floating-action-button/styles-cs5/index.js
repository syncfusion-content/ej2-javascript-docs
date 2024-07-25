ej.base.enableRipple(true);

// Initialize the Floating Action Button control
var fab = new ej.buttons.Fab({
  iconCss: 'e-icons e-people',
  content:'Contact',
  cssClass: 'custom-css',
  target: '#targetElement',
})
// Render initialized Floating Action Button
fab.appendTo('#fab');