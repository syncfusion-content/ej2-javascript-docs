

import { Splitter } from '@syncfusion/ej2-layouts';

let splitObj: Splitter = new Splitter({
    height: '200px',
    paneSettings: [
        { size: '200px', content: 'Left pane'
        },
        { size: '200px', content: 'Middle pane'
        },
        { size: '200px', content: 'Right pane'
        }
    ],
    width: '600px'
});
splitObj.appendTo('#splitter');



