ej.base.enableRipple(true);

//Initialize Toolbar component

var toolbar = new ej.navigations.Toolbar({
items: [
    { text: "Cut" },
    { type: "Separator" },
    { text: "Paste" },
    { type: "Separator" },
    { template: "<div><input type='checkbox' id='check1' checked=''>Accept</input></div>" },
    { text: "Undo" },
    { text: "Redo" },
    { template: "#Template" }
]
});

//Render initialized Toolbar component
toolbar.appendTo('#element');

