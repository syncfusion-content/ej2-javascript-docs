

import { Tooltip } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

let button: Button = new Button({content: 'Show Tooltip'});
button.appendTo('#target');
let tooltip: Tooltip = new Tooltip({
    tipPointerPosition: "Start"
});
tooltip.appendTo('#target');


