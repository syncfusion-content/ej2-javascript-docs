

import { Rating } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Rating control.
let rating: Rating = new Rating({ emptyTemplate:'#emptyTemplate', fullTemplate:'#fullTemplate', value:4, enableAnimation:false });

// Render initialized Rating.
rating.appendTo('#rating');



