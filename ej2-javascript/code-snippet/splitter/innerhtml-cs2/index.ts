

import { Splitter } from '@syncfusion/ej2-layouts';

let splitObj: Splitter = new Splitter({
    height: '200px',
    paneSettings: [
        { size: '200px' },
        { size: '200px' },
        { size: '200px' }
    ],
    width: '600px'
});
splitObj.appendTo('#splitter');



