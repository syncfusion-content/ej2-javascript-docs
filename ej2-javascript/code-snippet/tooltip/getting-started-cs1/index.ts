

import { Tooltip } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';
let tooltip: Tooltip = new Tooltip({
    content: 'Tooltip content'
});
tooltip.appendTo('#target');

let button: Button = new Button({
    content: 'Show Tooltip'
});
button.appendTo('#target');

// Added code to hide the loader element.
let loader = document.getElementById('loader');
let container = document.getElementById('container');
if (loader) {
    loader.style.display = "none";
}
if (container) {
    container.style.visibility = "visible";
}


