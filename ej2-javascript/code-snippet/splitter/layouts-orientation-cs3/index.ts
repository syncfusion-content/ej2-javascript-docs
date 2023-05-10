

import { Splitter } from '@syncfusion/ej2-layouts';

// Initialize Splitter control
let splitObject: Splitter = new Splitter({
    height: '305px',
    paneSettings: [
        { size: '100px' },
        { size: '100px' },
        { size: '100px' }
    ],
    width: '600px',
    orientation: 'Vertical'

});

// Render initialized Splitter
splitObject.appendTo('#splitter');


