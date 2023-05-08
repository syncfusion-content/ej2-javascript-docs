

import { Splitter } from '@syncfusion/ej2-layouts';

let splitObj: Splitter = new Splitter({
    height: '200px',
    paneSettings: [
        { size: '30%' },
        { size: '40%' },
        { size: '30%' }
    ],
    width: '600px'
});
splitObj.appendTo('#splitter');



