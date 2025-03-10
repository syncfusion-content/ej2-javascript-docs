import { Tooltip } from '@syncfusion/ej2-popups';

let tooltip: Tooltip = new Tooltip({
    opensOn: 'custom',
    content: 'Tooltip from custom mode'
});
tooltip.appendTo('#box');

(document.getElementById('box') as HTMLElement).addEventListener("dblclick", function () {
    if (this.getAttribute("data-tooltip-id")) {
        tooltip.close();
    } else {
        tooltip.open(this);
    }
});