// Initialize button component
var button = new ej.buttons.Button({ content: 'Button' });
button.appendTo('#element');
// Initialize Slider component
var defaultObj = new ej.inputs.Slider({
	// Set slider minimum and maximum values
	// new Date(Year, Month, day, hours, minutes, seconds, millseconds)
	min: new Date(2013, 6, 13, 11).getTime(), max: new Date(2013, 6, 13, 17).getTime(),
	// 3600000 milliseconds = 1 Hour
	step: 3600000,
	//Set buttons for slider 
    showButtons: true,
	// Set the initial range values for slider
	value: new Date(2013, 6, 13, 13).getTime(),
	// Bind Tooltip change event for custom formatting
	tooltipChange: tooltipChangeHandler,
	// Initialize tooltip with placement
	tooltip: {
		placement: 'Before', isVisible: true, cssClass: 'e-tooltip-cutomization'
	},
	// Bind ticks event for custom formatting
	renderingTicks: renderingTicksHandler,
	// Initialize ticks with placement, largestep, smallstep
	ticks: {
		placement: 'After',
		// 2 * 3600000 milliseconds = 2 Hour
		largeStep: 2 * 3600000,
		smallStep: 3600000, showSmallTicks: true
	},
	// Set the type to render range slider
	type: 'MinRange'
});
defaultObj.appendTo('#slider');

function tooltipChangeHandler(args) {
	/**
	  * toLocaleTimeString is predefined javascript date function, which is used to
	  * customize the date in different format
	  */
	var custom = { hour: '2-digit', minute: '2-digit' };
	// Splitting the range values from the tooltip using space into an array.
	if (args.text.indexOf('-') !== -1) {
		var totalMilliSeconds = args.text.split(' ');
		// First part is the first handle value
		var firstPart = totalMilliSeconds[0];
		// Second part is the second handle value
		var secondPart = totalMilliSeconds[2];

		firstPart = new Date(Number(firstPart)).toLocaleTimeString('en-us', custom);
		secondPart = new Date(Number(secondPart)).toLocaleTimeString('en-us', custom);
	} else {
		args.text =  new Date(Number(args.text)).toLocaleTimeString('en-us', custom);
	}
}

function renderingTicksHandler(args) {
	var totalMilliSeconds = args.value;
	/**
	 * toLocaleTimeString is predefined javascript date function, which is used to
	 * customize the date in different format
	 */
	var custom = { hour: '2-digit', minute: '2-digit' };
	// Assigning our custom text to the tick value.
	args.text = new Date(totalMilliSeconds).toLocaleTimeString('en-us', custom);
}

//Visible slider by clicking the button
document.getElementById('element').onclick = function () {
	slider = document.getElementById("case");
	ticks = document.getElementById("slider");
	slider.style.display = "block";
	ticks.ej2_instances[0].refresh();
};

