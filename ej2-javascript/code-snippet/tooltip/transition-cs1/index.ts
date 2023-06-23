

import { Tooltip, TooltipEventArgs } from '@syncfusion/ej2-popups';
let tooltip: Tooltip = new Tooltip({
    target: '.circletool',
    closeDelay: 1000,
    animation: { open: { effect: 'ZoomIn', duration: 500 }, close: { effect: 'ZoomOut', duration: 500 } },
    beforeRender: onBeforeRender,
    afterClose: onAfterClose
});
function onBeforeRender(args: TooltipEventArgs): void {
    if (args.element) {
        // here prevent animation while apply transition
        this.animation = { open: { effect: 'None' } };
        args.element.style.display = 'block';
        args.element.style.transitionProperty = 'left,top';
        args.element.style.transitionDuration = '1000ms';
    }
}
function onAfterClose(args: TooltipEventArgs): void {
    // restore the animation effects
    this.animation = { open: { effect: 'ZoomIn', duration: 500 }, close: { effect: 'ZoomOut', duration: 500 } };
}
tooltip.appendTo('#box');



