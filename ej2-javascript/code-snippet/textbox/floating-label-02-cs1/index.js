ej.base.enableRipple(true);

/* To get the Input element */
var inputElement = document.getElementById('inpt1');

/* Update the label position based on Input value */
updateLabelState(inputElement.value, inputElement.parentElement.querySelector('.e-float-text'));

inputElement.addEventListener("focus", function () {
    var label = this.parentElement.querySelector('.e-float-text');
    label.classList.add('e-label-bottom');
    label.classList.remove('e-label-top');
});

inputElement.addEventListener("blur", function () {
    updateLabelState(this.value, this.parentElement.querySelector('.e-float-text'));
});

inputElement.addEventListener("input", function () {
    updateLabelState(this.value, this.parentElement.querySelector('.e-float-text'));
});

/* Update the label position based on Input value */

    /* e-label-top - Floats the label above of the TextBox */
    /* e-label-bottom - Label to be placed as placeholder for the TextBox */

function updateLabelState(value,label) {
    if (value) {
        label.classList.add('e-label-top');
        label.classList.remove('e-label-bottom');
    } else {
        label.classList.add('e-label-bottom');
        label.classList.remove('e-label-top');
    }
}

