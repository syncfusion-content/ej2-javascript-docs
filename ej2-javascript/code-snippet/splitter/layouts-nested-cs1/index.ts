

import { Splitter } from '@syncfusion/ej2-layouts';

let horizontalObj: Splitter = new Splitter({
    height: '316px',
    paneSettings: [
        { size: '200px' },
        { size: '200px' },
        { size: '200px' }
    ],
    width: '600px'
});
horizontalObj.appendTo('#Horizontal_splitter');

let verticalObj: Splitter = new Splitter({
    height: '308px',
    paneSettings: [
        { size: '150px', min: '20%' },
        { size: '100px', min: '20%' }
    ],
    orientation: 'Vertical'
});
verticalObj.appendTo('#vertical_splitter');


