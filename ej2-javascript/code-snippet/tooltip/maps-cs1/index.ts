

import { Tooltip } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

//Render iframe button
let iframeContent: Button = new Button({ cssClass: 'e-outline', isPrimary: true });
iframeContent.appendTo('#iframeContent');

//Render iframe tooltip
let TooltipContent: Tooltip = new Tooltip({
    cssClass: 'e-tooltip-css',
    content: '<iframe src="https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/dashboard" id="tooltipFrame"></iframe>',
    position: 'BottomCenter',
    opensOn: 'Click',
    width: '350',
    height: '250'
});
TooltipContent.appendTo('#iframeContent');

