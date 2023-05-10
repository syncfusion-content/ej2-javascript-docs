


import { Splitter } from '@syncfusion/ej2-layouts';

// Initialize splitter control
let splitObj: Splitter = new Splitter({
        paneSettings: [
            // Content for Pane 1
            { content:'Left Pane' },

            // Content for Pane 2
            { content:'Middle Pane' },

            // Content for Pane 3
            { content:'Right Pane' }
        ],
        height: '250px'
});

// Render initialized splitter
splitObj.appendTo('#splitter');




