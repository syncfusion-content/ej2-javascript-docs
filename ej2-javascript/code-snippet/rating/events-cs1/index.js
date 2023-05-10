ej.base.enableRipple(true);

// Initialize the Rating control.
var rating = new ej.inputs.Rating({ 
    valueChanged: (args)=> {
        alert("Previous Value:"+args.previousValue+"\nValue:"+args.value);
    } 
});

// Render initialized Rating.
rating.appendTo('#rating');

