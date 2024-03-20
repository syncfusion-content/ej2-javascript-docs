// To get the all input fields and its container.

var inputElement = document.querySelectorAll('.e-input-group .e-input');

// Add 'e-input-focus' class to the textarea on focus.

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
