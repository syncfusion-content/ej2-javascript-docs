ej.base.enableRipple(true);

// Initialize the Floating Action Button control
var fab = new ej.buttons.Fab({
    iconCss: 'fab-icons fab-icon-people', 
    content:'Contacts', 
    target: '#targetElement',
    iconPosition: 'Right' 
});

// Render initialized Floating Action Button
fab.appendTo('#fab');

