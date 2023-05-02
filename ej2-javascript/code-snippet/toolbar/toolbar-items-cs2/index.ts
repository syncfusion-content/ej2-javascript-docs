


import {Toolbar} from '@syncfusion/ej2-navigations';
let toolbar: Toolbar = new Toolbar({
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
toolbar.appendTo('#element');



