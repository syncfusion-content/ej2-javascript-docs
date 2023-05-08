

import { Tooltip } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

let tooltip: Tooltip = new Tooltip({
    width: '180px',
    height: '40px',
    content: 'This tooltip has 180px width and 40px height'
});
tooltip.appendTo('#target');

let button: Button = new Button({
    content: 'Show Tooltip'
});
button.appendTo('#target');



