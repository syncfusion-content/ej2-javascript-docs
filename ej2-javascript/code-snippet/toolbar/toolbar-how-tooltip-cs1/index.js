ej.base.enableRipple(true);

//Initialize Toolbar component

var toolbar = new ej.navigations.Toolbar({
width: 300,
items: [
    { text: "Cut", tooltipText: 'Cut' },
    { text: "Copy", tooltipText: 'Copy' },
    { text: "Paste", tooltipText: 'Paste' },
    { text: "Undo", tooltipText: 'Undo' },
    { text: "Redo", tooltipText: 'Redo' }
]
});

//Render initialized Toolbar component
toolbar.appendTo('#element');

 var tooltip = new ej.popups.Tooltip({
     target: '#element [title]',
 });
 tooltip.appendTo('#Tooltip');

