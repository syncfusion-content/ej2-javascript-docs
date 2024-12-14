

import { Switch, BeforeChangeEventArgs } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize Switch component.
let switchObj: Switch = new Switch({ checked: true, beforeChange: beforeChange });

// Render initialized Switch.
switchObj.appendTo('#element');

function beforeChange(args: BeforeChangeEventArgs) {
    // Set cancel to true to prevent the switch state change
    args.cancel = true;
}