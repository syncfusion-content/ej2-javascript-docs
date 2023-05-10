ej.base.enableRipple(true);

// Initialize the Floating Action Button control
var fab = new ej.buttons.Fab({
    iconCss: 'e-icons e-edit', 
    content:'Edit' });

// Render initialized Floating Action Button
fab.appendTo('#fab');

// onclick event handler
fab.element.onclick = function() {
    alert("Edit is clicked!");
};

