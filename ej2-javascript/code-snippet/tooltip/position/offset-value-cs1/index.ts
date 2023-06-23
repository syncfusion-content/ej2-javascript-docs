

import { Tooltip } from '@syncfusion/ej2-popups';
let tooltip: Tooltip = new Tooltip({
    offsetX: 30,
    offsetY: 30,
    mouseTrail: true,
    showTipPointer: false,
    content: 'Tooltip content'
});
tooltip.appendTo('#target');



