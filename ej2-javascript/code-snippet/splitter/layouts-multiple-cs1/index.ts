

import { Splitter } from '@syncfusion/ej2-layouts';

// Initialize Splitter control
let splitObject: Splitter = new Splitter({
    height: '300px',
    paneSettings: [
        { size: '150px' },
        { size: '150px' },
        { size: '150px' },
        { size: '150px' }
    ],
    width: '600px',

});

// Render initialized Splitter
splitObject.appendTo('#splitter');


