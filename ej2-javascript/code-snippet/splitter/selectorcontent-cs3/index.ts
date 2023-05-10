

import { Splitter } from '@syncfusion/ej2-layouts';

/**
 *  Splitter pane content as html element using ID selector
 */

let splitObj1: Splitter = new Splitter({
    height: '200px',
    paneSettings: [
        { size: '25%', min: '60px', content: '#left-pane-content' },
        { size: '50%', min: '60px', content: '#middle-pane-content' },
        { size: '25%', min: '60px', content: '#last-pane-content' }
    ],
    width: '100%',
    separatorSize: 4
});
splitObj1.appendTo('#horizontal');



