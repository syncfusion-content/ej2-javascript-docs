

import { Rating } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Show Tooltip Rating control.
let rating: Rating = new Rating({ showTooltip:true, value:3 });

// Render initialized Rating.
rating.appendTo('#rating');



