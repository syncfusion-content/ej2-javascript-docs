

import { Splitter } from '@syncfusion/ej2-layouts';

let splitObj: Splitter = new Splitter({
    height: '200px',
    paneSettings: [
        { size: '200px', min: '20%', max: '40%'},
        { size: '200px', min: '30%', max: '60%'}
        { size: '200px'}
    ],
    width: '600px'
});
splitObj.appendTo('#splitter');



