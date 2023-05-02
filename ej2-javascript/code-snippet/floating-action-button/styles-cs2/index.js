ej.base.enableRipple(true);

// Initialize the Floating Action Button control
var fab = new ej.buttons.Fab({
    iconCss: 'e-icons e-edit',
    content:'<span class="text-container"><span class="textEle">Edit</span></span>',
    cssClass: 'fab-hover',
    target: '#targetElement',
})
// Render initialized Floating Action Button
fab.appendTo('#fab');

