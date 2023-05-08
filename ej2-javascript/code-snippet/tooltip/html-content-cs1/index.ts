

import { Tooltip } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

//Define an array of JSON data
let title: Tooltip = new Tooltip({
    cssClass: 'e-tooltip-css',
    position: 'BottomCenter',
    opensOn: 'Hover',
    beforeRender: onBeforeRender,
    content: document.getElementById('tooltip')
});
title.appendTo('#Title');

let btn: Button = new Button();
btn.appendTo('#Title');

function onBeforeRender() {
    if(document.getElementById('tooltip')) {
        document.getElementById('tooltip').style.display = 'block';
    }
}


