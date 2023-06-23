

import { Rating, RatingChangedEventArgs } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Rating control.
let rating: Rating = new Rating({
    valueChanged: (args: RatingChangedEventArgs )=> {
       alert("Previous Value:"+args.previousValue+"\nValue:"+args.value);
    }
});

// Render initialized Rating.
rating.appendTo('#rating');



