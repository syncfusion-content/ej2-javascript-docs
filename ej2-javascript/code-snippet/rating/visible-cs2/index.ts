

import { Rating } from '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Rating control.
let rating: Rating = new Rating({ value:3, visible:true });

// Render initialized Rating.
rating.appendTo('#rating');

document.getElementById("btn").onclick = function() {
    rating.visible = (rating.visible) ? false : true;
};



