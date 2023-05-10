ej.base.enableRipple(true);

//Initialize Toolbar component

var toolbar = new ej.navigations.Toolbar({
items: [
    { text: "Cut" },
    { text: "Copy" },
    { type: "Separator" },
    { text: "Paste" },
    { type: "Separator" },
    { text: "Undo" },
    { text: "Redo" }
]
});

//Render initialized Toolbar component
toolbar.appendTo('#element');

