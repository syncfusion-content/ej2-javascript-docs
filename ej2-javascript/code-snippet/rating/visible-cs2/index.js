ej.base.enableRipple(true);

// Initialize the Rating control.
var rating = new ej.inputs.Rating({ value:3, visible:true });

// Render initialized Rating.
rating.appendTo('#rating');

document.getElementById("btn").onclick = function () {
    rating.visible = (rating.visible) ? false : true;
};

