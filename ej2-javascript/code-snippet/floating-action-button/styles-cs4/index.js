ej.base.enableRipple(true);

// Initialize the Floating Action Button control with applied warning style
var warningbtn = new ej.buttons.Fab({
    iconCss: 'e-icons e-edit',
    cssClass: 'e-warning',
    target: '#targetElement',
})
// Render initialized Floating Action Button
warningbtn.appendTo('#fab');

