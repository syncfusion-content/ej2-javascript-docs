// To get the all input fields and its container.
var inputElement = document.querySelectorAll('.e-input-group .e-input,.e-float-input.e-input-group input');

// Add 'e-input-focus' class to the input for achive ripple effect when focus on the input field.
for (var i = 0; i < inputElement.length; i++) {
    inputElement[i].addEventListener("focus", function () {
        var parentElement = this.parentNode;
        if (parentElement.classList.contains('e-input-in-wrap')) {
            parentElement.parentNode.classList.add('e-input-focus');
        }
        else {
            this.parentNode.classList.add('e-input-focus');
        }
    });
    inputElement[i].addEventListener("blur", function () {
        var parentElement = this.parentNode;
        if (parentElement.classList.contains('e-input-in-wrap')) {
            parentElement.parentNode.classList.remove('e-input-focus');
        }
        else {
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
ej.base.enableRipple(true);

// Initialize Dialog component
var dialog = new ej.popups.Dialog({
    // Enables the header
    header: 'Sign in',
    // Dialog content
    content: document.getElementById("dlgContent"),
    // Enables the footer buttons
    buttons: [{
            // Accessing button component properties by buttonModel property
            buttonModel: {
                //Enables the primary button
                isPrimary: true,
                content: 'Log in',
                cssClass: 'e-primary',
            },
            // Click the footer buttons to hide the Dialog
            click: function () {
                this.hide();
            }
        }],
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '300px',
    beforeClose: validation,
    isModal: true,
    beforeOpen: onBeforeopen
});

// Render initialized Dialog
dialog.appendTo('#dialog');

document.getElementById('targetButton').onclick = function () {
    dialog.show();
    document.getElementById("textvalue").value = "";
    document.getElementById("textvalue2").value = "";
};

function validation(args) {
    let text = document.getElementById('textvalue');
    let text1 = document.getElementById('textvalue2');
    if (text.value === "" && text1.value === "") {
        args.cancel= true;
        alert("Enter the username and password")
    } else if (text.value === "") {
        args.cancel= true;
        alert("Enter the username")
    } else if (text1.value === "") {
        args.cancel= true;
        alert("Enter the password")
    } else if (text.value.length < 4) {
        args.cancel= true;
        alert("Username must be minimum 4 characters")
    } else {
        args.cancel= false;
        document.getElementById("textvalue").value = "";
        document.getElementById("textvalue2").value = "";
    }
}

function onBeforeopen() {
    document.getElementById('dlgContent').style.visibility = 'visible';
}

