

import { Tooltip } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

let tooltip: Tooltip = new Tooltip({
    target: '.e-info',
    position: 'RightCenter'
});
tooltip.appendTo('#details');

let button: Button = new Button();
button.appendTo('#sample');
button.appendTo('#clear');

// Added code to hide the loader element.
let loader = document.getElementById('loader');
let container = document.getElementById('container');
if (loader) {
    loader.style.display = "none";
}
if (container) {
    container.style.visibility = "visible";
}


