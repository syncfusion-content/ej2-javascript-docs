

import { Tooltip, TooltipAnimationSettings } from '@syncfusion/ej2-popups';

let tooltip: Tooltip = new Tooltip({
    content: 'Tooltip content',
    opensOn: 'custom'
});
tooltip.appendTo('#target');


document.getElementById('target').addEventListener("click", function () {
    if (this.getAttribute("data-tooltip-id")) {
        let closeAnimation: TooltipAnimationSettings = { effect: 'FadeOut', duration: 1000 }
        tooltip.close(closeAnimation);
    } else {
        let openAnimation: TooltipAnimationSettings = { effect: 'FadeIn', duration: 1000 }
        tooltip.open(this, openAnimation);
    }
});



