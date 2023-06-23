

import { Tooltip } from '@syncfusion/ej2-popups';

let tooltipContent: HTMLElement = document.createElement("div");
tooltipContent.innerHTML = "<p><strong>Environmentally friendly</strong> or <strong>environment-friendly</strong>, <i>(also referred to as eco-friendly, nature-friendly, and green)</i> are marketing and sustainability terms referring to goods and services, laws, guidelines and policies that inflict reduced, minimal, or no harm upon ecosystems or the environment.</p>";
let tooltip: Tooltip = new Tooltip({
    content: tooltipContent
});
tooltip.appendTo('#target');



