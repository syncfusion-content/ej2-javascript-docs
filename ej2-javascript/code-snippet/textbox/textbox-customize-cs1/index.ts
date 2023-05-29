

// To get the all input fields and its container.

let inputElement = document.querySelectorAll('.e-input-group .e-input,.e-float-input.e-input-group input');

// Add 'e-input-focus' class to the input for achive ripple effect when focus on the input field.

for (let i = 0; i < inputElement.length; i++) {
    inputElement[i].addEventListener("focus", function () {
            this.parentNode.classList.add('e-input-focus');
    });
    inputElement[i].addEventListener("blur", function () {
            this.parentNode.classList.remove('e-input-focus');
    });
}
