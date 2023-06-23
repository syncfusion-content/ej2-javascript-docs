

import {Toolbar} from '@syncfusion/ej2-navigations';
let toolbar: Toolbar = new Toolbar({
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
toolbar.appendTo('#element');


