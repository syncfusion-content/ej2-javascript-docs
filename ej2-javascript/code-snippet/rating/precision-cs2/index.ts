

import { Rating, PrecisionType } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Full precision Rating control.
var rating1: Rating = new Rating({ value: 3, precision: PrecisionType.Full });
// Initialize the Half precision Rating control.
var rating2: Rating = new Rating({ value: 2.5, precision: PrecisionType.Half });
// Initialize the Quarter precision Rating control.
var rating3: Rating = new Rating({ value: 3.75, precision: PrecisionType.Quarter });
// Initialize the Exact precision Rating control.
var rating4: Rating = new Rating({ value: 2.3, precision: PrecisionType.Exact });

// Render initialized Rating.
rating1.appendTo('#rating1');
rating2.appendTo('#rating2');
rating3.appendTo('#rating3');
rating4.appendTo('#rating4');


