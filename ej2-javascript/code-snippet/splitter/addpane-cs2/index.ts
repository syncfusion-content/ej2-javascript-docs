

import { Splitter, PanePropertiesModel } from '@syncfusion/ej2-layouts';

let splitObj: Splitter = new Splitter({
    height: '200px',
    paneSettings: [
        { size: '190px'},
        { size: '190px'}
    ],
    width: '600px',
    created: onSplitterCreate
});
splitObj.appendTo('#splitter');


let paneDetails : PanePropertiesModel = {
    size: '190px',
    content: 'New Pane',
    min: '30px',
    max: '250px',
}

function onSplitterCreate() {
    document.getElementById('addpane').addEventListener('click', () => {
        splitObj.addPane(paneDetails, 1);
    })
}


