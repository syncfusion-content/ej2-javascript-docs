ej.base.enableRipple(true);

// Initialize the Label Position Left Rating control.
var rating1 = new ej.inputs.Rating({ value:3, showLabel:true, labelPosition:"Left"});
// Initialize the Label Position Right Rating control.
var rating2 = new ej.inputs.Rating({ value:3, showLabel:true, });
// Initialize the Label Position Top Rating control.
var rating3 = new ej.inputs.Rating({ value:3, showLabel:true, labelPosition:"Top" });
// Initialize the Label Position Bottom Rating control.
var rating4 = new ej.inputs.Rating({ value:3, showLabel:true, labelPosition:"Bottom" });


// Render initialized Rating.
rating1.appendTo('#rating1');
rating2.appendTo('#rating2');
rating3.appendTo('#rating3');
rating4.appendTo('#rating4');

