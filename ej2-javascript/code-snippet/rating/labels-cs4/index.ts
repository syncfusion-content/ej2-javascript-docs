

import { Rating } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Rating control.
let rating: Rating = new Rating({ showLabel:true, labelTemplate:'#labelTemplate', value:3 });

// Render initialized Rating.
rating.appendTo('#rating');



