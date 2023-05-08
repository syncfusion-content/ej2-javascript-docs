

import { Tooltip } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';
let hoverTooltip: Tooltip = new Tooltip({
    opensOn: 'Hover',
    content: 'Tooltip from hover'
});
hoverTooltip.appendTo('#tooltiphover');

let button: Button = new Button();
button.appendTo('#tooltiphover');

let clickTooltip: Tooltip = new Tooltip({
    opensOn: 'Click',
    content: 'Tooltip from click'
});
clickTooltip.appendTo('#tooltipclick');
button.appendTo('#tooltipclick');

let focusTooltip: Tooltip = new Tooltip({
    opensOn: 'Focus',
    content: 'Tooltip from focus'
});
focusTooltip.appendTo('#tooltipfocus');

let customTooltip: Tooltip = new Tooltip({
    opensOn: 'Custom',
    content: 'Tooltip from custom mode'
});
customTooltip.appendTo('#tooltipcustom');
button.appendTo('#tooltipopen');

document.getElementById('tooltipopen').addEventListener("click", function () {
    if (this.getAttribute("data-tooltip-id")) {
        customTooltip.close();
    } else {
        customTooltip.open(this);
    }
});


