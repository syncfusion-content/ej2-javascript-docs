

import { Tooltip } from '@syncfusion/ej2-popups';

let tooltip: Tooltip = new Tooltip({
    openDelay: 1000,
    closeDelay: 1000,
    content: 'Tooltip with delay'
});
tooltip.appendTo('#target');



