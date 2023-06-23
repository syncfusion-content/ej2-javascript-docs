

import { Rating } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Custom Tooltip Rating control.
let rating: Rating = new Rating({ cssClass:"customtooltip", showTooltip:true, value:3 });

// Render initialized Rating.
rating.appendTo('#rating');



