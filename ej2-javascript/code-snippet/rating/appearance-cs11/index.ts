

import { Rating } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Rating control.
let rating: Rating = new Rating({ value:3, cssClass:"custom-border" });

// Render initialized Rating.
rating.appendTo('#rating');



