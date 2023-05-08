

import { Rating, LabelPosition } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Label Position Left Rating control.
var rating1: Rating = new Rating({ value:3, showLabel:true, labelPosition:LabelPosition.Left });
// Initialize the Label Position Right Rating control.
var rating2: Rating = new Rating({ value:3, showLabel:true });
// Initialize the Label Position Top Rating control.
var rating3: Rating = new Rating({ value:3, showLabel:true, labelPosition:LabelPosition.Top });
// Initialize the Label Position Bottom Rating control.
var rating4: Rating = new Rating({ value:3, showLabel:true, labelPosition:LabelPosition.Bottom });

// Render initialized Rating.
rating1.appendTo('#rating1');
rating2.appendTo('#rating2');
rating3.appendTo('#rating3');
rating4.appendTo('#rating4');


