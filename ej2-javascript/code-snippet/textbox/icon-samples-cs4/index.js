ej.base.enableRipple(true);

// To get the all input fields and its container.

var inputElement = document.querySelectorAll('.e-input-group .e-input,.e-float-input.e-input-group input');

// Add 'e-input-focus' class to the input for achive ripple effect when focus on the input field.

for (var i = 0; i < inputElement.length; i++) {
    inputElement[i].addEventListener("focus", function () {
        var parentElement = this.parentNode;
        if (parentElement.classList.contains('e-input-in-wrap')) {
            parentElement.parentNode.classList.add('e-input-focus');
        } else {
            this.parentNode.classList.add('e-input-focus');
        }
    });
    inputElement[i].addEventListener("blur", function () {
        var parentElement = this.parentNode;
        if (parentElement.classList.contains('e-input-in-wrap')) {
            parentElement.parentNode.classList.remove('e-input-focus');
        } else {
            this.parentNode.classList.remove('e-input-focus');
        }
    });
}

// Add 'e-input-btn-ripple' class to the icon element for achive ripple effect when click on the icon.

var inputIcon = document.querySelectorAll('.e-input-group-icon');
for (var i = 0; i < inputIcon.length; i++) {
    inputIcon[i].addEventListener('mousedown', function () {
        this.classList.add('e-input-btn-ripple');
    });
    inputIcon[i].addEventListener('mouseup', function () {
        var element = this;
        setTimeout(function () {
            element.classList.remove('e-input-btn-ripple');
        }, 500);
    });
}


