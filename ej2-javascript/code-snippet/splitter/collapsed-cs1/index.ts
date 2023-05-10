

import { Splitter } from '@syncfusion/ej2-layouts';

let splitObj: Splitter = new Splitter({
    height: '250px',
    paneSettings: [
        { collapsible: true },
        { collapsible: true, collapsed: true },
        { collapsible: true }
    ],
    width: '100%'
});
splitObj.appendTo('#splitter');



