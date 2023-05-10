

import { Splitter } from '@syncfusion/ej2-layouts';

let splitObj: Splitter = new Splitter({
    height: '230px',
    paneSettings: [
        { collapsible: true },
        { collapsible: true },
        { collapsible: true }
    ],
    width: '100%'
});
splitObj.appendTo('#splitter');

document.getElementById('expand').onclick = (): void => {
   splitObj.expand(0);
}
document.getElementById('collapse').onclick = (): void => {
   splitObj.collapse(0);
}



