

// To get the all input fields and its container.

let inputElement = document.querySelectorAll('.e-input-group .e-input,.e-float-input.e-input-group input');

// Add 'e-input-focus' class to the input for achive ripple effect when focus on the input field.

for (let i = 0; i < inputElement.length; i++) {
    inputElement[i].addEventListener("focus", function () {
        let parentElement = this.parentNode;
        if (parentElement.classList.contains('e-input-in-wrap')) {
            parentElement.parentNode.classList.add('e-input-focus');
        } else {
            this.parentNode.classList.add('e-input-focus');
        }
    });
    inputElement[i].addEventListener("blur", function () {
        let parentElement = this.parentNode;
        if (parentElement.classList.contains('e-input-in-wrap')) {
            parentElement.parentNode.classList.remove('e-input-focus');
        } else {
            this.parentNode.classList.remove('e-input-focus');
        }
    });
}


// To Configure RegExp for predicting Numeric values on keyUp event function

function onKeyup(e) {
    let str = e.value.match(/^[0-9]+$/);
    if (!((str && str.length > 0)) && e.value.length) {
       e.parentElement.classList.add('e-error');
    } else {
      e.parentElement.classList.remove('e-error');
    }
}
