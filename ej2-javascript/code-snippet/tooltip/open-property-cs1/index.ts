

import { Tooltip } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

//Render button components

let tooltiphover: Button = new Button({ cssClass: 'e-outline', isPrimary: true });
tooltiphover.appendTo('#tooltiphover');

let tooltipclick: Button = new Button({ cssClass: 'e-outline', isPrimary: true });
tooltipclick.appendTo('#tooltipclick');

let tooltipcustom: Button = new Button({ cssClass: 'e-outline', isPrimary: true });
tooltipcustom.appendTo('#tooltipcustom');

let Mode: Button = new Button({ cssClass: 'e-outline', isPrimary: true });
Mode.appendTo('#Mode');

let open: Button = new Button({ cssClass: 'e-outline', isPrimary: true });
open.appendTo('#openMode');

//Render tooltip component

let hoverTooltip: Tooltip = new Tooltip({
    cssClass: 'e-tooltip-css',
    opensOn: 'Hover',
    content: 'Tooltip from hover'
});
hoverTooltip.appendTo('#tooltiphover');

let clickTooltip: Tooltip = new Tooltip({
    cssClass: 'e-tooltip-css',
    opensOn: 'Click',
    content: 'Tooltip from click'
});
clickTooltip.appendTo('#tooltipclick');

let focusTooltip: Tooltip = new Tooltip({
    cssClass: 'e-tooltip-css',
    opensOn: 'Focus',
    content: 'Tooltip from focus'
});
focusTooltip.appendTo('#focus');

let customTooltip: Tooltip = new Tooltip({
    cssClass: 'e-tooltip-css',
    opensOn: 'Custom',
    content: 'Tooltip from custom mode'
});
customTooltip.appendTo('#tooltipcustom');

let openMode: Tooltip = new Tooltip({
    cssClass: 'e-tooltip-css',
    openDelay: 1000,
    closeDelay: 1000,
    position: 'BottomCenter',
    content: 'Opens and closes Tooltip with delay of <i>1000 milliseconds</i>'
});
openMode.appendTo('#openMode');

let mode: Tooltip = new Tooltip({
    cssClass: 'e-tooltip-css',
    content: 'Click close icon to close me',
    position: 'BottomCenter',
    isSticky: true
});
mode.appendTo('#Mode');

document.getElementById('tooltipcustom').addEventListener("dblclick", function () {
    if (this.getAttribute("data-tooltip-id")) {
        customTooltip.close();
    } else {
        customTooltip.open(this);
    }
});



