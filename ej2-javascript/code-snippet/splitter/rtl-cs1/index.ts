


import { Splitter } from '@syncfusion/ej2-layouts';

let splitObj: Splitter = new Splitter({
    paneSettings: [
       { content:'Left Pane' },
       { content:'Middle Pane' },
       { content:'Right Pane' }
    ],
    enableRtl : true,
    height: '250px'
});
splitObj.appendTo('#splitter');



