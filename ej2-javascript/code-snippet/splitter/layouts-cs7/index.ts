

import { Splitter } from '@syncfusion/ej2-layouts';

// Initialize Splitter control
let splitObject: Splitter = new Splitter({
    height: '250px',
    paneSettings: [
        { size: '200px' },
        { size: '200px' },
        { size: '200px' }
    ],
    width: '600px',
    separatorSize: '5'

});

// Render initialized Splitter
splitObject.appendTo('#splitter');


