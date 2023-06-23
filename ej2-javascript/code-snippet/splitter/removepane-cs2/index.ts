

import { Splitter } from '@syncfusion/ej2-layouts';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

let splitObj: Splitter = new Splitter({
    height: '200px',
    paneSettings: [
        { size: '200px'},
        { size: '200px'},
        { size: '200px'}
    ],
    width: '600px'
});
splitObj.appendTo('#splitter');

document.getElementById('removepane').addEventListener('click', () => {
    if (!isNullOrUndefined(document.querySelector('#splitter').querySelectorAll('.e-pane-horizontal')[1]))
    {
        splitObj.removePane(1);
    }
})


