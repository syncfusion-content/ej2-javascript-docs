

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



