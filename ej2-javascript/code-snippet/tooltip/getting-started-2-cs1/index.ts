

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



