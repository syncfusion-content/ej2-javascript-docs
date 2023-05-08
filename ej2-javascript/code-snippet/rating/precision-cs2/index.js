ej.base.enableRipple(true);

// Initialize the Full precision Rating control.
var rating1 = new ej.inputs.Rating({ value: 3, precision: 'Full' });
// Initialize the Half precision Rating control.
var rating2 = new ej.inputs.Rating({ value: 2.5, precision: 'Half' });
// Initialize the Quarter precision Rating control.
var rating3 = new ej.inputs.Rating({ value: 3.75, precision: 'Quarter' });
// Initialize the Exact precision Rating control.
var rating4 = new ej.inputs.Rating({ value: 2.3, precision: 'Exact' });

// Render initialized Rating.
rating1.appendTo('#rating1');
rating2.appendTo('#rating2');
rating3.appendTo('#rating3');
rating4.appendTo('#rating4');

