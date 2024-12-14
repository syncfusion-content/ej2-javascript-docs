ej.base.enableRipple(true);

// Initialize Switch component.
var switchObj = new ej.buttons.Switch({ checked: true, beforeChange: beforeChange });

// Render initialized Switch.
switchObj.appendTo('#element');

function beforeChange(args) {
    // Set cancel to true to prevent the switch state change
    args.cancel = true;
}