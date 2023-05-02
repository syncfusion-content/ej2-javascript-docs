ej.base.enableRipple(true);

//Initialize Toolbar component

var toolbar = new ej.navigations.Toolbar({
items: [
    { text: "Cut" },
    { text: "Copy" },
    { type: "Separator" },
    { text: "Paste" },
    { type: "Separator" },
    { template: '#AnchorTemplate' }
]
});

//Render initialized Toolbar component
toolbar.appendTo('#element');

